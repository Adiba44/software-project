export const dynamic = 'force-dynamic';
import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";

export async function GET(request: any) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    const finalResult = {
        faculty: [],
        department: [],
        program: [],
    }

    // Read all faculty data
    let result = await execute("SELECT id, full, short FROM faculty WHERE isDeleted=0 ORDER BY lower(full) ASC")

    if (result.length > 0) {
        finalResult.faculty = result.map((record: any) => ({ ...record, isEdited: false }));

        // Read all department data
        result = await execute(`
            SELECT
            d.id, full, short, facultyId,
            chairmanId, u.name, u.designation
            FROM department d
            LEFT JOIN users u ON u.id=d.chairmanId
            WHERE d.isDeleted=0 ORDER BY lower(full) ASC
        `)
        if (result.length > 0) {
            finalResult.department = result.map((record: any) => ({ ...record, isEdited: false }));

            // Read all program data
            result = await execute("SELECT id, full, short, departmentId FROM program WHERE isDeleted=0 ORDER BY lower(full) ASC")
            if (result.length > 0) finalResult.program = result.map((record: any) => ({ ...record, isEdited: false }));
        }
    }

    return nextResponseJson({
        status: 200,
        data: finalResult,
    });
};