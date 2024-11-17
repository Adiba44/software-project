export const dynamic = 'force-dynamic';
import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";

export async function GET(request: any) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    // Read all program data
    const result = await execute("SELECT id, full, short FROM program WHERE isDeleted=0 ORDER BY lower(full) ASC")

    if (result.length === 0) return nextResponseJson({
        status: 200,
        data: []
    })
    return nextResponseJson({
        status: 200,
        data: result
    })
};