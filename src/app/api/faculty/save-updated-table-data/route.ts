import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson, requestJson } from "@/app/api/utils/request-response";

export async function POST(request: any) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    // Get logged user id
    const { dynamicId, email } = tokenData;
    let result = await execute("SELECT id FROM users WHERE dynamicId=? AND email=?", [dynamicId, email])
    if (result.length === 0) return nextResponseJson(null, 401);
    const loggedUserId = result[0].id;

    const { faculty, department, program } = await requestJson(request);

    // Create, update faculty data
    for (const i in faculty) {
        const record = faculty[i]
        if (record.isNew) {
            await execute("INSERT INTO faculty(full, short, createdBy) VALUES (?,?,?)", [record.full, record.short, loggedUserId])
        } else if (record.isEdited) {
            await execute("UPDATE faculty SET full=?, short=?, updatedAt=CURRENT_TIMESTAMP,updatedBy=? WHERE id=?", [record.full, record.short, loggedUserId, record.id])
        }
    }

    // Create, update department data
    for (const i in department) {
        const record = department[i]
        if (record.isNew) {
            await execute("INSERT INTO department(full, short, facultyId, createdBy) VALUES (?,?,?,?)", [record.full, record.short, record.facultyId, loggedUserId])
        } else if (record.isEdited) {
            await execute("UPDATE department SET full=?, short=?, facultyId=?, updatedAt=CURRENT_TIMESTAMP,updatedBy=? WHERE id=?", [record.full, record.short, record.facultyId, loggedUserId, record.id])
        }
    }

    // Create, update program data
    for (const i in program) {
        const record = program[i]
        if (record.isNew) {
            await execute("INSERT INTO program(full, short, departmentId, createdBy) VALUES (?,?,?,?)", [record.full, record.short, record.departmentId, loggedUserId])
        } else if (record.isEdited) {
            await execute("UPDATE program SET full=?, short=?, departmentId=?, updatedAt=CURRENT_TIMESTAMP,updatedBy=? WHERE id=?", [record.full, record.short, record.departmentId, loggedUserId, record.id])
        }
    }

    // Add history
    await (async () => {
        const text = `Faculty-department-program table data is modified`
        await execute("INSERT INTO history(userId, text, action) VALUES (?,?,?)", [loggedUserId, text, "Modify"])
    })()

    return nextResponseJson({ status: 200 })
};