export const dynamic = 'force-dynamic';
import { execute } from "../utils/mysql";
import { nextResponseJson } from "../utils/request-response";

export async function GET() {
    // Read all department data in ascending order
    const result = await execute("SELECT id, full, short FROM department WHERE isDeleted=0 ORDER BY lower(full) ASC")

    if (result.length === 0) return nextResponseJson({
        status: 200,
        data: []
    })
    else return nextResponseJson({
        status: 200,
        data: result
    })
};
