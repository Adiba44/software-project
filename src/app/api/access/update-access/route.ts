import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson, requestJson } from "@/app/api/utils/request-response";
import { camelCaseToSentence } from "@/utils/more";

export async function POST(request: any) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    // Get logged user id
    const { dynamicId, email } = tokenData;
    let result = await execute("SELECT id FROM users WHERE dynamicId=? AND email=?", [dynamicId, email])
    if (result.length === 0) return nextResponseJson(null, 401);
    const loggedUserId = result[0].id;

    const { id, keyName, value } = await requestJson(request);
    const newValue = value ? 0 : 1

    // Update access data
    result = await execute(`UPDATE access SET \`${keyName}\`=?, updatedAt=CURRENT_TIMESTAMP, updatedBy=? WHERE userId=?`, [newValue, loggedUserId, id])

    // Add history
    await (async () => {
        let result = await execute("SELECT name, email FROM users WHERE id=?", [id])
        const name = result[0].name;
        const email = result[0].email;
        result = await execute(`SELECT \`${keyName}\` FROM access WHERE userId=?`, [id])
        const currentAccess = result[0][keyName] === 1
        let text = "";
        if (currentAccess) text = `${camelCaseToSentence(keyName)} access is given to ${name}(${email})`
        else text = `${camelCaseToSentence(keyName)} access is removed from ${name}(${email})`
        await execute("INSERT INTO history(userId, text, action) VALUES (?,?,?)", [loggedUserId, text, "Update"])
    })()

    return nextResponseJson({ status: 200 })
};