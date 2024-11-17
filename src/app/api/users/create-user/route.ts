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

    const formData = await requestJson(request);

    // Check email duplicacy
    result = await execute("SELECT id FROM users WHERE email=? AND isDeleted=0", [formData.email])

    if (result.length > 0) return nextResponseJson({
        status: 403,
        message: "Email is duplicated.",
    });

    // Teacher user data
    if (formData.role === "teacher") {
        const result = await execute(`
            INSERT INTO users(name, email, gender, departmentId, designation, role, isMuted, mutedBy, mutedAt, createdBy)
            VALUES (?,?,?,?,?,?,?,?,${formData.isMuted ? "CURRENT_TIMESTAMP" : null},?)
            `, [formData.name, formData.email, formData.gender, formData.department.id, formData.designation, formData.role, formData.isMuted ? 1 : 0, formData.isMuted ? loggedUserId : null, loggedUserId])

        const newId = result.insertId;
        await execute(" INSERT INTO access(userId, createdBy) VALUES (?,?)", [newId, loggedUserId])
        await execute(" INSERT INTO classroom.access(userId, acquireClass, createdBy) VALUES (?,?,?)", [newId, 1, loggedUserId])
    }

    // Student user data
    else if (formData.role === "student") {
        const result = await execute(`
            INSERT INTO users(name, email, gender, academicId, sessionId, programId, role, isMuted, mutedBy, mutedAt, createdBy)
            VALUES (?,?,?,?,?,?,?,?,?,${formData.isMuted ? "CURRENT_TIMESTAMP" : null},?)
            `, [formData.name, formData.email, formData.gender, formData.academicId, formData.session.id, formData.program.id, formData.role, formData.isMuted ? 1 : 0, formData.isMuted ? loggedUserId : null, loggedUserId])

        // Update session related info
        await execute("UPDATE session SET usedByUser=usedByUser+1, updatedAt=CURRENT_TIMESTAMP, updatedBy=? WHERE id=?", [loggedUserId, formData.session.id])

        const newId = result.insertId;
        await execute(" INSERT INTO access(userId, createdBy) VALUES (?,?)", [newId, loggedUserId])
        await execute(" INSERT INTO classroom.access(userId, joinClass, createdBy) VALUES (?,?,?)", [newId, 1, loggedUserId])
    }

    // Other user data
    else if (formData.role === "other") {
        const result = await execute(`
            INSERT INTO users(name, email, gender, designation, role, isMuted, mutedBy, mutedAt, createdBy)
            VALUES (?,?,?,?,?,?,?,${formData.isMuted ? "CURRENT_TIMESTAMP" : null},?)
            `, [formData.name, formData.email, formData.gender, formData.designation, formData.role, formData.isMuted ? 1 : 0, formData.isMuted ? loggedUserId : null, loggedUserId])

        const newId = result.insertId;
        await execute(" INSERT INTO access(userId, createdBy) VALUES (?,?)", [newId, loggedUserId])
        await execute(" INSERT INTO classroom.access(userId, createdBy) VALUES (?,?)", [newId, loggedUserId])
    }

    // Add history
    await (async () => {
        const text = `New user ${formData.name}(${formData.email}) created as ${formData.role}`
        await execute("INSERT INTO history(userId, text, action) VALUES (?,?,?)", [loggedUserId, text, "Create"])
    })()

    return nextResponseJson({ status: 200 });
};