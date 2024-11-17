import { jwtTokenVerify } from "@/app/api/utils/jwt-token-verify";
import { execute } from "@/app/api/utils/mysql";
import { nextResponseJson } from "@/app/api/utils/request-response";
import searchParams from "@/app/api/utils/search-params";
import { notNull } from "@/utils/more";

export async function GET(request: any) {
    const tokenData = jwtTokenVerify(request);
    if (tokenData === undefined) return nextResponseJson(null, 401);

    const searchKey = searchParams(request, "searchKey") || "";
    let limit: number | string;
    if (notNull(searchKey)) limit = 50
    else limit = searchParams(request, "limit") || 50;
    const createUser = searchParams(request, "createUser");
    const editUser = searchParams(request, "editUser");
    const deleteUser = searchParams(request, "deleteUser");
    const createFaculty = searchParams(request, "createFaculty");
    const editFaculty = searchParams(request, "editFaculty");
    const deleteFaculty = searchParams(request, "deleteFaculty");
    const createSession = searchParams(request, "createSession");
    const editSession = searchParams(request, "editSession");
    const deleteSession = searchParams(request, "deleteSession");
    const editAccess = searchParams(request, "editAccess");
    const viewOthersHistory = searchParams(request, "viewOthersHistory");

    // Count total record
    let result = await execute(`
        SELECT COUNT(u.id) as count 
        FROM users u
        LEFT JOIN access a ON a.userId=u.id
        WHERE isDeleted=0
        ${createUser === "all" ? "" : createUser === "true" ? "AND createUser=1" : "AND createUser=0"}
        ${editUser === "all" ? "" : editUser === "true" ? "AND editUser=1" : "AND editUser=0"}
        ${deleteUser === "all" ? "" : deleteUser === "true" ? "AND deleteUser=1" : "AND deleteUser=0"}
        ${createFaculty === "all" ? "" : createFaculty === "true" ? "AND createFaculty=1" : "AND createFaculty=0"}
        ${editFaculty === "all" ? "" : editFaculty === "true" ? "AND editFaculty=1" : "AND editFaculty=0"}
        ${deleteFaculty === "all" ? "" : deleteFaculty === "true" ? "AND deleteFaculty=1" : "AND deleteFaculty=0"}
        ${createSession === "all" ? "" : createSession === "true" ? "AND createSession=1" : "AND createSession=0"}
        ${editSession === "all" ? "" : editSession === "true" ? "AND editSession=1" : "AND editSession=0"}
        ${deleteSession === "all" ? "" : deleteSession === "true" ? "AND deleteSession=1" : "AND deleteSession=0"}
        ${editAccess === "all" ? "" : editAccess === "true" ? "AND editAccess=1" : "AND editAccess=0"}
        ${viewOthersHistory === "all" ? "" : viewOthersHistory === "true" ? "AND viewOthersHistory=1" : "AND viewOthersHistory=0"}
        `);
    const totalRecord = result[0].count;

    // Get all users data of matched key
    result = await execute(`
            SELECT
            u.id, email, name, image, createUser, editUser, deleteUser, createFaculty, editFaculty, deleteFaculty, createSession, editSession, deleteSession, editAccess, viewOthersHistory
            FROM users u
            LEFT JOIN access a ON a.userId=u.id
            WHERE (email LIKE ?
            OR name LIKE ?)
            ${createUser === "all" ? "" : createUser === "true" ? "AND createUser=1" : "AND createUser=0"}
            ${editUser === "all" ? "" : editUser === "true" ? "AND editUser=1" : "AND editUser=0"}
            ${deleteUser === "all" ? "" : deleteUser === "true" ? "AND deleteUser=1" : "AND deleteUser=0"}
            ${createFaculty === "all" ? "" : createFaculty === "true" ? "AND createFaculty=1" : "AND createFaculty=0"}
            ${editFaculty === "all" ? "" : editFaculty === "true" ? "AND editFaculty=1" : "AND editFaculty=0"}
            ${deleteFaculty === "all" ? "" : deleteFaculty === "true" ? "AND deleteFaculty=1" : "AND deleteFaculty=0"}
            ${createSession === "all" ? "" : createSession === "true" ? "AND createSession=1" : "AND createSession=0"}
            ${editSession === "all" ? "" : editSession === "true" ? "AND editSession=1" : "AND editSession=0"}
            ${deleteSession === "all" ? "" : deleteSession === "true" ? "AND deleteSession=1" : "AND deleteSession=0"}
            ${editAccess === "all" ? "" : editAccess === "true" ? "AND editAccess=1" : "AND editAccess=0"}
            ${viewOthersHistory === "all" ? "" : viewOthersHistory === "true" ? "AND viewOthersHistory=1" : "AND viewOthersHistory=0"}
            AND isDeleted=0
            ORDER BY lower(name) ASC LIMIT ?
            `, [
        `%${searchKey}%`,
        `%${searchKey}%`,
        limit
    ])

    if (result.length === 0) return nextResponseJson({
        status: 200,
        data: [],
        haveMoreData: false
    });

    const haveMoreData = notNull(searchKey) ? false : (totalRecord > limit ? true : false);

    result = result.map((record: any) => ({
        id: record.id,
        name: record.name,
        email: record.email,
        image: record.image,
        createUser: record.createUser === 1,
        editUser: record.editUser === 1,
        deleteUser: record.deleteUser === 1,
        createFaculty: record.createFaculty === 1,
        editFaculty: record.editFaculty === 1,
        deleteFaculty: record.deleteFaculty === 1,
        createSession: record.createSession === 1,
        editSession: record.editSession === 1,
        deleteSession: record.deleteSession === 1,
        editAccess: record.editAccess === 1,
        viewOthersHistory: record.viewOthersHistory === 1,
    }));

    return nextResponseJson({
        status: 200,
        data: result,
        haveMoreData: haveMoreData,
    });
};