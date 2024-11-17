export const dynamic = 'force-dynamic';
import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";

export async function GET(request: any) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    // Get user id
    const dynamicId = tokenData.dynamicId;
    let result = await execute("SELECT id FROM users WHERE dynamicId=?", [dynamicId])
    if (result.length === 0) return nextResponseJson(null, 401);
    const loggedUserId = result[0].id;

    // Get all access data
    result = await execute("SELECT * FROM access WHERE userId=?", [loggedUserId])

    if (result.length === 0) return nextResponseJson({
        status: 200,
        data: {}
    })
    return nextResponseJson({
        status: 200,
        data: {
            createUser: result[0].createUser === 1,
            editUser: result[0].editUser === 1,
            deleteUser: result[0].deleteUser === 1,
            createFaculty: result[0].createFaculty === 1,
            editFaculty: result[0].editFaculty === 1,
            deleteFaculty: result[0].deleteFaculty === 1,
            createSession: result[0].createSession === 1,
            editSession: result[0].editSession === 1,
            deleteSession: result[0].deleteSession === 1,
            editAccess: result[0].editAccess === 1,
            viewOthersHistory: result[0].viewOthersHistory === 1,
        }
    })
};