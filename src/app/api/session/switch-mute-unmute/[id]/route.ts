import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";

export async function GET(request: any, { params }: { params: { id: string } }) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    // Get logged user id
    const { dynamicId, email } = tokenData;
    let result = await execute("SELECT id FROM users WHERE dynamicId=? AND email=?", [dynamicId, email])
    if (result.length === 0) {
        return nextResponseJson(null, 401);
    }
    const loggedUserId = result[0].id;

    const id = parseInt(params.id);

    // Update mute-unmute status
    await execute("UPDATE session SET isMuted=!isMuted, updatedAt=CURRENT_TIMESTAMP, updatedBy=? WHERE id=?", [loggedUserId, id])

    // Add history
    await (async () => {
        const result = await execute("SELECT session, isMuted FROM session WHERE id=?", [id])
        const session = result[0].session;
        const isMuted = result[0].isMuted;
        const text = `${session} session ${isMuted ? "muted" : "unmuted"}`
        await execute("INSERT INTO history(userId, text, action) VALUES (?,?,?)", [loggedUserId, text, "Update"])
    })()

    return nextResponseJson({ status: 200 })
};

