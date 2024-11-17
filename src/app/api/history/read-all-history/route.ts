export const dynamic = 'force-dynamic';
import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";
import searchParams from "../../utils/search-params";
import { notNull } from "@/utils/more";

export async function GET(request: any) {
    const tokenData: any = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    // Get logged user id
    const { dynamicId, email } = tokenData;
    let result = await execute("SELECT id FROM users WHERE dynamicId=? AND email=?", [dynamicId, email])
    if (result.length === 0) return nextResponseJson(null, 401);
    const loggedUserId = result[0].id;

    const searchKey = searchParams(request, "searchKey") || "";
    let limit: number | string;
    if (notNull(searchKey)) limit = 50
    else limit = searchParams(request, "limit") || 50;
    let mine: string | number | undefined = searchParams(request, "mine");
    mine = mine ? parseInt(mine) : 0;

    // Count total record
    if (mine) result = await execute(`SELECT COUNT(id) as count FROM history WHERE userId=?`, [loggedUserId]);
    else result = await execute(`SELECT COUNT(id) as count FROM history`);
    const totalRecord = result[0].count;

    if (mine) result = await execute(`
        SELECT * FROM history_view
        WHERE (name LIKE ?
        OR text LIKE ?)
        AND userId=?
        AND isDeleted=0
        ORDER BY id DESC LIMIT ?
        `, [
        `%${searchKey}%`,
        `%${searchKey}%`,
        loggedUserId,
        limit
    ])
    else result = await execute(`
        SELECT * FROM history_view
        WHERE (name LIKE ?
        OR text LIKE ?)
        AND isDeleted=0
        ORDER BY id DESC LIMIT ?
        `, [
        `%${searchKey}%`,
        `%${searchKey}%`,
        limit
    ])

    if (result.length === 0) return nextResponseJson({
        status: 200,
        data: [],
        haveMoreData: false
    })

    const haveMoreData = notNull(searchKey) ? false : (totalRecord > limit ? true : false);
    result = result.map((record: any) => ({
        id: record.id,
        user: { id: record.userId, name: record.name, image: record.image },
        text: record.text,
        undoParams: record.undoParams,
        action: record.action,
        createdAt: record.createdAt,
    }))

    return nextResponseJson({
        status: 200,
        data: result,
        haveMoreData: haveMoreData
    })
};