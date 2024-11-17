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

    // Add chairman into department
    await execute("UPDATE department SET chairmanId=?, updatedAt=CURRENT_TIMESTAMP, updatedBy=? WHERE id=?", [data.chairmanId, loggedUserId, data.departmentId])

    // Add history
    await (async () => {
        let result = await execute("SELECT name, email FROM users WHERE id=?", [data.chairmanId])
        const name = result[0].name;
        const email = result[0].email;
        result = await execute("SELECT full FROM department WHERE id=?", [data.departmentId])
        const departmentName = result[0].full;
        const text = `${name}(${email}) is assigned as chairman of ${departmentName} department`
        await execute("INSERT INTO history(userId, text, action) VALUES (?,?,?)", [loggedUserId, text, "Update"])
    })()

    return nextResponseJson({ status: 200 });
};