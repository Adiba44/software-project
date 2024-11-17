import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";
import { encode } from "@/utils/text-encode-decode";

export async function DELETE(request: any, { params }: { params: { id: string } }) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    // Get logged user id
    const { dynamicId, email } = tokenData;
    let result = await execute("SELECT id FROM users WHERE dynamicId=? AND email=?", [dynamicId, email])
    if (result.length === 0) return nextResponseJson(null, 401);
    const loggedUserId = result[0].id;
    const id = parseInt(params.id);

    // Make all its child program as deleted
    await execute(`
        UPDATE program p
        JOIN department d ON d.id=p.departmentId
        SET p.isDeleted=1, p.updatedAt=CURRENT_TIMESTAMP, p.updatedBy=?
        WHERE d.id=?
        `, [loggedUserId, id])

    // Delete department
    await execute("UPDATE department SET isDeleted=1, updatedAt=CURRENT_TIMESTAMP, updatedBy=? WHERE id=?", [loggedUserId, id])

    // Add history
    await (async () => {
        const result = await execute("SELECT full FROM department WHERE id=?", [id])
        const departmentName = result[0].full;
        const text = `${departmentName} department and its all program is deleted`
        await execute("INSERT INTO history(userId, text, action, undoParams) VALUES (?,?,?,?)", [loggedUserId, text, "Delete", encode({
            database: "accounts",
            case: "delete department",
            departmentId: id
        })])
    })()

    return nextResponseJson({ status: 200 });
};