import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";

export async function GET(request: any, { params }: { params: { searchKey: string } }) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    const searchKey = params.searchKey;

    // Search teacher who is not dept-chairman already
    const result = await execute("SELECT id, email, name, image FROM users WHERE role=? AND isDeleted=0 AND (email LIKE ? OR name LIKE ?)", ["teacher", `%${searchKey}%`, `%${searchKey}%`])

    if (result.length === 0) return nextResponseJson({ status: 200, data: [] });
    return nextResponseJson({ status: 200, data: result });
};