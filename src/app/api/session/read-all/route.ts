export const dynamic = 'force-dynamic';
import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";
import searchParams from "../../utils/search-params";

export async function GET(request: any) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);
    const searchKey = searchParams(request, "searchKey") || "";
    let isMuted = searchParams(request, "isMuted");
    if (isMuted === undefined) isMuted = "0"

    // Read all session data of matched key
    let result = await execute(`
            SELECT id, session, usedByUser, isMuted
            FROM session
            WHERE session LIKE ? AND (isMuted=1 OR isMuted=?) AND isDeleted=0
            ORDER BY session DESC
        `, [`%${searchKey}%`, isMuted])

    result = result.map((record: any) => ({
        ...record,
        isMuted: record.isMuted === 1,
        isEdited: false
    }));

    if (result.length === 0) return nextResponseJson({ status: 200, data: [] });
    return nextResponseJson({ status: 200, data: result });
};