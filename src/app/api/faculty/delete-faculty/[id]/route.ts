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
        JOIN faculty f ON f.id=d.facultyId
        SET p.isDeleted=1, p.updatedAt=CURRENT_TIMESTAMP, p.updatedBy=?
        WHERE f.id=?
        `, [loggedUserId, id])

    // Make all its child department as deleted
    await execute(`
        UPDATE department d
        JOIN faculty f ON f.id=d.facultyId
        SET d.isDeleted=1, d.updatedAt=CURRENT_TIMESTAMP, d.updatedBy=?
        WHERE f.id=?
        `, [loggedUserId, id])

    // Delete faculty
    await execute("UPDATE faculty SET isDeleted=1, updatedAt=CURRENT_TIMESTAMP, updatedBy=? WHERE id=?", [loggedUserId, id])

    // Add history
    await (async () => {
        const result = await execute("SELECT full FROM faculty WHERE id=?", [id])
        const facultyName = result[0].full;
        const text = `${facultyName} faculty and its all department, program is deleted`
        await execute("INSERT INTO history(userId, text, action, undoParams) VALUES (?,?,?,?)", [loggedUserId, text, "Delete", encode({
            database: "accounts",
            case: "delete faculty",
            facultyId: id
        })])
    })()

    return nextResponseJson({ status: 200 });
};