export const dynamic = 'force-dynamic';
import { execute } from "../utils/mysql";
import { nextResponseJson } from "../utils/request-response";

export async function GET() {
    // Read all session data in descending order
    const result = await execute("SELECT id, session FROM session WHERE isMuted=? AND isDeleted=0 ORDER BY session DESC", [0])

    if (result.length === 0) return nextResponseJson({
        status: 200,
        data: []
    })
    else return nextResponseJson({
        status: 200,
        data: result
    })
};
