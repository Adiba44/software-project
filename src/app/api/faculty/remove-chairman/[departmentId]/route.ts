import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";
import { encode } from "@/utils/text-encode-decode";

export async function DELETE(request: any, { params }: { params: { departmentId: string } }) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    // Get logged user id
    const { dynamicId, email } = tokenData;
    let result = await execute("SELECT id FROM users WHERE dynamicId=? AND email=?", [dynamicId, email])
    if (result.length === 0) return nextResponseJson(null, 401);
    const loggedUserId = result[0].id;

    const departmentId = parseInt(params.departmentId);

    // Get current chairman id
    result = await execute(`
        SELECT u.name, u.email
        FROM department d
        LEFT JOIN users u ON u.id=d.chairmanId
        WHERE d.id=?
        `, [departmentId])
    const chairmanName = result[0].name
    const chairmanEmail = result[0].email

    // Remove chairman
    await execute("UPDATE department SET chairmanId=NULL, updatedAt=CURRENT_TIMESTAMP, updatedBy=? WHERE id=?", [loggedUserId, departmentId])

    // Add history
    await (async () => {
        const result = await execute("SELECT full FROM department WHERE id=?", [departmentId])
        const departmentName = result[0].full;
        const text = `${chairmanName}(${chairmanEmail}) is removed as chairman from ${departmentName} department`
        await execute("INSERT INTO history(userId, text, action) VALUES (?,?,?)", [loggedUserId, text, "Update"])
    })()

    return nextResponseJson({ status: 200 });
};