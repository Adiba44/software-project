import { sign } from "jsonwebtoken";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson, requestJson } from "../../../api/utils/request-response";

export async function POST(request: any) {
    const { name, email, image } = await requestJson(request)

    // Is email registered?
    let result = await execute("SELECT id FROM users WHERE email=?", [email])

    // When not registered:
    if (result.length === 0) return nextResponseJson({ status: 403 })

    const loggedUserId = result[0].id;

    // Creating a dynamic ID
    result = await execute("INSERT INTO create_id() VALUES ()")
    const dynamicId = result.insertId

    // Yes still registered:
    // Update google provided user data, last login info
    await execute("UPDATE users SET dynamicId=?, name=?, image=?, lastLoginAt=CURRENT_TIMESTAMP WHERE id=?", [dynamicId, name, image, loggedUserId])

    const tokenData = { dynamicId: dynamicId, email: email };

    // Making return response
    return nextResponseJson({
        status: 200,
        token: sign(tokenData, process.env.JWT_KEY!) // Generate auth-token
    })
};