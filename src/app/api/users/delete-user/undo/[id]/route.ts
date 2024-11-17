import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";

export async function DELETE(request: any, { params }: { params: { id: string } }) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    // Get logged user id
    const { dynamicId, email } = tokenData;
    let result = await execute("SELECT id FROM users WHERE dynamicId=? AND email=?", [dynamicId, email])
    if (result.length === 0) return nextResponseJson(null, 401);
    const loggedUserId = result[0].id;
    const id = parseInt(params.id);

    // Unhide the user
    await execute("UPDATE users SET isDeleted=0, updatedAt=CURRENT_TIMESTAMP, updatedBy=? WHERE id=?", [loggedUserId, id])

    // If the user is student then increase session count
    result = await execute("SELECT sessionId FROM users WHERE id=? and role=?", [id, "student"])
    if (result.length > 0) {
        const sessionId = result[0].sessionId;
        await execute("UPDATE session SET usedByUser=usedByUser+1, updatedAt=CURRENT_TIMESTAMP, updatedBy=? WHERE id=?", [loggedUserId, sessionId])
    }

    return nextResponseJson({ status: 200 });
};