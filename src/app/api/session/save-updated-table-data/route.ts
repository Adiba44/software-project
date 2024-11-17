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

    const data = await requestJson(request);

    for (const i in data) {
        const record = data[i];
        if (record.isNew) {
            await execute("INSERT INTO session(session, createdBy) VALUES (?,?)", [record.session, loggedUserId])
        } else if (record.isEdited) {
            await execute("UPDATE session SET session=?, updatedAt=CURRENT_TIMESTAMP, updatedBy=?  WHERE id=?", [record.session, loggedUserId, record.id])
        }
    }

    // Add history
    await (async () => {
        const text = `Session table data is modified`
        await execute("INSERT INTO history(userId, text, action) VALUES (?,?,?)", [loggedUserId, text, "Modify"])
    })()

    return nextResponseJson({ status: 200 });
};