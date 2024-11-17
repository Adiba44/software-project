export const dynamic = 'force-dynamic';
import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";

export async function GET(request: any) {
    const tokenData = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    const count = {
        teachers: { total: 0, muted: 0 },
        students: { total: 0, muted: 0 },
        others: { total: 0, muted: 0 },
        faculty: 0,
        department: 0,
        program: 0,
        session: { total: 0, muted: 0 },
    }

    // Count total active teacher, student and other users
    let totalTeacher = await execute(`SELECT COUNT(id) as count FROM users WHERE role="teacher" AND isDeleted=0`)
    let totalStudent = await execute(`SELECT COUNT(id) as count FROM users WHERE role="student" AND isDeleted=0`)
    let totalOther = await execute(`SELECT COUNT(id) as count FROM users WHERE role="other" AND isDeleted=0`)

    // Count total muted teacher, student and other users
    let totalMutedTeacher = await execute(`SELECT COUNT(id) as count FROM users WHERE role="teacher" AND isMuted=1 AND isDeleted=0`)
    let totalMutedStudent = await execute(`SELECT COUNT(id) as count FROM users WHERE role="student" AND isMuted=1 AND isDeleted=0`)
    let totalMutedOther = await execute(`SELECT COUNT(id) as count FROM users WHERE role="other" AND isMuted=1 AND isDeleted=0`)

    // Count total faculty, department, program
    let totalFaculty = await execute("SELECT COUNT(id) as count FROM faculty WHERE isDeleted=0")
    let totalDepartment = await execute("SELECT COUNT(id) as count FROM department WHERE isDeleted=0")
    let totalProgram = await execute("SELECT COUNT(id) as count FROM program WHERE isDeleted=0")

    // Count total active and muted session
    let totalSession = await execute("SELECT COUNT(id) as count FROM session WHERE isDeleted=0") // active
    let totalMutedSession = await execute("SELECT COUNT(id) as count FROM session WHERE isMuted=1 AND isDeleted=0") // muted

    count.teachers.total = totalTeacher[0].count;
    count.students.total = totalStudent[0].count;
    count.others.total = totalOther[0].count;
    count.teachers.muted = totalMutedTeacher[0].count;
    count.students.muted = totalMutedStudent[0].count;
    count.others.muted = totalMutedOther[0].count;
    count.faculty = totalFaculty[0].count;
    count.department = totalDepartment[0].count;
    count.program = totalProgram[0].count;
    count.session.total = totalSession[0].count;
    count.session.muted = totalMutedSession[0].count;

    return nextResponseJson({
        status: 200,
        data: count
    });
};