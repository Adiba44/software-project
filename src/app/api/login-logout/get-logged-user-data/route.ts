import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "../../../api/utils/request-response";
import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";

export async function GET(request: any) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    const { dynamicId, email } = tokenData;

    // Update last login info
    await execute("UPDATE users SET lastLoginAt=CURRENT_TIMESTAMP WHERE dynamicId=?", [dynamicId])

    // Getting more user information
    let result = await execute("SELECT id, name, email, image, role, lastLoginAt, isMuted FROM users WHERE dynamicId=? AND email=?", [dynamicId, email])

    if (result.length === 0) return nextResponseJson({
        status: 200,
        data: {}
    })
    else return nextResponseJson({
        status: 200,
        data: {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            image: result[0].image,
            role: result[0].role,
            isMuted: result[0].isMuted === 1,
            lastLoginAt: result[0].lastLoginAt,
        }
    })
};