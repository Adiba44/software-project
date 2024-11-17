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
    const id = formData.id;

    // Check email duplicacy
    result = await execute("SELECT id FROM users WHERE email=? AND id!=?", [formData.email, id])

    if (result.length > 0) return nextResponseJson({
        status: 403,
        message: "Email is duplicated.",
    });

    // Teacher user data
    if (formData.role === "teacher") {
        await execute(`
            UPDATE users SET name=?, email=?, gender=?, departmentId=?, designation=?, role=?, isMuted=?, mutedBy=?, mutedAt=${formData.isMuted ? "CURRENT_TIMESTAMP" : null}, updatedBy=?, updatedAt=CURRENT_TIMESTAMP WHERE id=?
            `, [formData.name, formData.email, formData.gender, formData.department.id, formData.designation, formData.role, formData.isMuted ? 1 : 0, formData.isMuted ? loggedUserId : null, loggedUserId, id])
    }

    // Student user data
    else if (formData.role === "student") {
        await execute(`
            UPDATE users SET name=?, email=?, gender=?, academicId=?, sessionId=?, programId=?, role=?, isMuted=?, mutedBy=?, mutedAt=${formData.isMuted ? "CURRENT_TIMESTAMP" : null}, updatedBy=?, updatedAt=CURRENT_TIMESTAMP WHERE id=?
            `, [formData.name, formData.email, formData.gender, formData.academicId, formData.session.id, formData.program.id, formData.role, formData.isMuted ? 1 : 0, formData.isMuted ? loggedUserId : null, loggedUserId, id])
    }

    // Other user data
    else if (formData.role === "other") {
        await execute(`
            UPDATE users SET name=?, email=?, gender=?, designation=?, role=?, isMuted=?, mutedBy=?, mutedAt=${formData.isMuted ? "CURRENT_TIMESTAMP" : null}, updatedBy=?, updatedAt=CURRENT_TIMESTAMP WHERE id=?
            `, [formData.name, formData.email, formData.gender, formData.designation, formData.role, formData.isMuted ? 1 : 0, formData.isMuted ? loggedUserId : null, loggedUserId, id])
    }

    // Add history
    await (async () => {
        const text = `${formData.name}(${formData.email}) user's data is updated`
        await execute("INSERT INTO history(userId, text, action) VALUES (?,?,?)", [loggedUserId, text, "Update"])
    })()

    return nextResponseJson({ status: 200 });
};