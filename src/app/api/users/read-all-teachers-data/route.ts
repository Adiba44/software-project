import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";
import searchParams from "@/app/api/utils/search-params";
import { notNull } from "@/utils/more";

export async function GET(request: any) {
    const tokenData = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    const searchKey = searchParams(request, "searchKey") || "";
    let limit: number | string;
    if (notNull(searchKey)) limit = 50
    else limit = searchParams(request, "limit") || 50;
    const isMuted = searchParams(request, "isMuted") || 0;

    // Count total record
    let result = await execute(`SELECT COUNT(id) as count FROM users WHERE role="teacher" AND (isMuted=1 OR isMuted=?) AND isDeleted=0`, [isMuted]);
    const totalRecord = result[0].count;

    // Get all teachers data of matched key
    result = await execute(`
            SELECT
             id, email, name, image,
            designation,
            departmentId, deptFull, deptShort,
            facultyId, facultyFull, facultyShort,
            isMuted
            FROM non_student_user
            WHERE (email LIKE ?
            OR name LIKE ?
            OR designation LIKE ?
            OR deptShort LIKE ?)
            AND role="teacher"
            AND isDeleted=0
            AND (isMuted=1 OR isMuted=?)
            ORDER BY lower(name) ASC LIMIT ?
            `, [
        `%${searchKey}%`,
        `%${searchKey}%`,
        `%${searchKey}%`,
        `%${searchKey}%`,
        isMuted,
        limit
    ])

    if (result.length === 0) return nextResponseJson({
        status: 200,
        data: [],
        haveMoreData: false
    });

    const haveMoreData = notNull(searchKey) ? false : (totalRecord > limit ? true : false);

    result = result.map((record: any) => ({
        id: record.id,
        name: record.name,
        email: record.email,
        image: record.image,
        designation: record.designation,
        department: { id: record.departmentId, full: record.deptFull, short: record.deptShort },
        faculty: { id: record.facultyId, full: record.facultyFull, short: record.facultyShort },
        isMuted: record.isMuted === 1,
    }));

    return nextResponseJson({
        status: 200,
        data: result,
        haveMoreData: haveMoreData,
    });
};