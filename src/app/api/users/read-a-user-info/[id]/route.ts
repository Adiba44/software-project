import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";

export async function GET(request: any, { params }: { params: { id: string } }) {
    const tokenData = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    const id = parseInt(params.id);

    // Define user role
    const result = await execute("SELECT role FROM users WHERE id=?", [id])

    // When result not found
    if (result.length === 0) return nextResponseJson({ status: 200, data: {} })

    if (result[0].role === "teacher") {
        // Get a teacher data
        const result = await execute(`
            SELECT
            id, email, name, image, gender,
            designation,
            departmentId, deptFull, deptShort,
            facultyId, facultyFull, facultyShort,
            about, role,
            isMuted, mutedAt,
            lastLoginAt, isDeleted, createdAt, createdBy, updatedAt, updatedBy
            FROM non_student_user
            WHERE isDeleted=0 AND id=?
            `, [id])

        if (result.length === 0) return nextResponseJson({ status: 200, data: {} });
        else {
            const record = result[0];
            return nextResponseJson({
                status: 200,
                data: {
                    id: record.id,
                    name: record.name,
                    email: record.email,
                    image: record.image,
                    gender: record.gender,
                    designation: record.designation,
                    department: { id: record.departmentId, full: record.deptFull, short: record.deptShort },
                    faculty: { id: record.facultyId, full: record.facultyFull, short: record.facultyShort },
                    about: record.about,
                    role: record.role,
                    isMuted: record.isMuted === 1,
                    mutedAt: record.mutedAt,
                    lastLoginAt: record.lastLoginAt,
                    createdAt: record.createdAt,
                    updatedAt: record.updatedAt,
                }
            });
        }
    }

    // **********

    else if (result[0].role === "student") {
        // Get a student data
        const result = await execute(`
        SELECT
        id, email, name, image, gender, academicId,
        sessionId, session,
        programId, pgFull, pgShort,
        departmentId, deptFull, deptShort,
        facultyId, facultyFull, facultyShort,
        about, role,
        isMuted, mutedAt,
        lastLoginAt, isDeleted, createdAt, createdBy, updatedAt, updatedBy
        FROM student_user
        WHERE isDeleted=0 AND id=?
        `, [id])

        if (result.length === 0) return nextResponseJson({ status: 200, data: {} });
        else {
            const record = result[0];
            return nextResponseJson({
                status: 200,
                data: {
                    id: record.id,
                    name: record.name,
                    email: record.email,
                    image: record.image,
                    gender: record.gender,
                    academicId: record.academicId,
                    session: { id: record.sessionId, value: record.session },
                    program: { id: record.programId, full: record.pgFull, short: record.pgShort },
                    department: { id: record.departmentId, full: record.deptFull, short: record.deptShort },
                    faculty: { id: record.facultyId, full: record.facultyFull, short: record.facultyShort },
                    about: record.about,
                    role: record.role,
                    isMuted: record.isMuted === 1,
                    mutedAt: record.mutedAt,
                    lastLoginAt: record.lastLoginAt,
                    createdAt: record.createdAt,
                    updatedAt: record.updatedAt,
                }
            });
        }
    }

    // **********

    else {
        // Get a other user data
        const result = await execute(`
            SELECT
            id, email, name, image, gender,
            designation, about, role,
            isMuted, mutedAt,
            lastLoginAt, isDeleted, createdAt, createdBy, updatedAt, updatedBy
            FROM non_student_user
            WHERE isDeleted=0 AND id=?
            `, [id])

        if (result.length === 0) return nextResponseJson({ status: 200, data: {} });
        else {
            const record = result[0];
            return nextResponseJson({
                status: 200,
                data: {
                    id: record.id,
                    name: record.name,
                    email: record.email,
                    image: record.image,
                    gender: record.gender,
                    designation: record.designation,
                    about: record.about,
                    role: record.role,
                    isMuted: record.isMuted === 1,
                    mutedAt: record.mutedAt,
                    lastLoginAt: record.lastLoginAt,
                    createdAt: record.createdAt,
                    updatedAt: record.updatedAt,
                }
            });
        }
    }
};