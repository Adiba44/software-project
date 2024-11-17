import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";

export async function GET(request: any, { params }: { params: { id: string } }) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    const id = parseInt(params.id);

    // Read a session data
    const result = await execute("SELECT id, session, isMuted FROM session WHERE id=? AND isDeleted=0", [id])

    if (result.length === 0) return nextResponseJson({ status: 200, data: {} });
    return nextResponseJson({ status: 200, data: result[0] });
};