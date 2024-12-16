module.exports = {

"[project]/src/app/api/utils/jwt-token-verify.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "jwtTokenVerify": ()=>jwtTokenVerify
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const jwtTokenVerify = (request)=>{
    try {
        // if (request.cookies.get(process.env.TOKEN_NAME)) {
        //     const tokenValue = request.cookies.get(process.env.TOKEN_NAME).value;
        // } return undefined;
        const tokenValue = request.headers.get("auth-token");
        let data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verify"])(tokenValue, process.env.JWT_KEY);
        return data;
    } catch (error) {
        return undefined;
    }
};

})()),
"[project]/src/app/api/utils/mysql.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "execute": ()=>execute,
    "pool": ()=>pool
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mysql2$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/mysql2/promise.js [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const pool = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mysql2$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "accounts",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});
async function execute(query, params) {
    let connection;
    try {
        connection = await pool.getConnection();
        let result, tableSchema;
        if (params) [result, tableSchema] = await connection.execute(query, params);
        else [result, tableSchema] = await connection.execute(query);
        return result;
    } catch (error) {
        if (connection) connection.release();
        console.log("Query:", query);
        console.error("Error:", error);
    } finally{
        if (connection) connection.release();
    }
}

})()),
"[project]/src/utils/text-encode-decode.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "decode": ()=>decode,
    "encode": ()=>encode
});
function encode(originalData) {
    const shuffle = {
        "0": "1",
        "1": "3",
        "2": "5",
        "3": "7",
        "4": "9",
        "5": "a",
        "6": "c",
        "7": "f",
        "8": "e",
        "9": "d",
        "a": "b",
        "b": "8",
        "c": "6",
        "d": "4",
        "e": "2",
        "f": "0"
    };
    const packet = JSON.stringify([
        originalData
    ]);
    const encoder = new TextEncoder();
    const byteArray = encoder.encode(packet);
    let hex = Array.from(byteArray).map((byte)=>byte.toString(16).padStart(2, '0')).join('');
    let shuffledHex = "";
    for(let i = 0; i < hex.length; i++){
        shuffledHex += shuffle[hex[i]];
    }
    return shuffledHex;
}
function decode(hexadecimalData) {
    try {
        const shuffle = {
            "1": "0",
            "3": "1",
            "5": "2",
            "7": "3",
            "9": "4",
            "a": "5",
            "c": "6",
            "f": "7",
            "e": "8",
            "d": "9",
            "b": "a",
            "8": "b",
            "6": "c",
            "4": "d",
            "2": "e",
            "0": "f"
        };
        let hex = "";
        for(let i = 0; i < hexadecimalData.length; i++){
            hex += shuffle[hexadecimalData[i]];
        }
        let byteArray = new Uint8Array(hex.match(/.{1,2}/g).map((byte)=>parseInt(byte, 16)));
        const decoder = new TextDecoder();
        const packet = decoder.decode(byteArray);
        const originalData = JSON.parse(packet)[0];
        return originalData;
    } catch (error) {
        console.log("Decode failed", error);
        return null;
    }
}

})()),
"[project]/src/app/api/utils/request-response.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "nextResponseJson": ()=>nextResponseJson,
    "requestJson": ()=>requestJson
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/text-encode-decode.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/server.js [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function requestJson(request) {
    const data = await request.json();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decode"])(data.payload);
}
/*****
 * Modified version of NextResponse.json()
 * Prevent showing actual response on client browser
 * Able to return text, object, array, number, boolean etc. in encoded format
 ******/ const doEncode = true;
function nextResponseJson(data, status) {
    if ("TURBOPACK compile-time truthy", 1) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encode"])(data) : null, {
        status: status ? status : 200
    });
    else {
        "TURBOPACK unreachable";
    }
}

})()),
"[project]/src/app/api/utils/search-params.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>searchParams
});
function searchParams(request, key) {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const searchKey = searchParams.get(key);
    return searchKey || undefined;
}

})()),
"[project]/src/utils/more.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/*****
 * Get URL pathnames in array
 * Example:
    - URL: http://localhost:3000/home, Output: ["home"]
    - URL: http://localhost:3000/home/electronics, Output: ["home", "electronics"]
 ******/ __turbopack_esm__({
    "camelCaseToSentence": ()=>camelCaseToSentence,
    "createId": ()=>createId,
    "getUrlParams": ()=>getUrlParams,
    "isMobileDevice": ()=>isMobileDevice,
    "isNull": ()=>isNull,
    "notNull": ()=>notNull,
    "searchKeywordMatched": ()=>searchKeywordMatched,
    "sleep": ()=>sleep,
    "uniqueStringId": ()=>uniqueStringId
});
function getUrlParams() {
    const pathname = window.location.pathname;
    const arr = pathname.slice(1).split("/");
    return arr;
}
function isNull(variable) {
    if (variable === "" || variable === null || variable === undefined) return true;
    if (typeof variable === "number") {
        if (variable === 0) return true;
        else return false;
    } else if (typeof variable === "string") {
        if (variable.trim() === "" || variable.trim() === null || variable.trim() === undefined) return true;
        else return false;
    }
    if (Array.isArray(variable)) {
        if (variable.length === 0) return true;
        else return false;
    } else if (typeof variable === "object") {
        if (Array.isArray(variable)) {
            if (variable.length === 0) return true;
            else return false;
        } else {
            if (Object.keys(variable).length === 0) return true;
            else return false;
        }
    } else return true;
}
function notNull(variable) {
    return isNull(variable) === true ? false : true;
}
function searchKeywordMatched(text, keyword) {
    try {
        return text.toLowerCase().search(keyword.toLowerCase()) !== -1;
    } catch (error) {
        return text.search(keyword) !== -1;
    }
}
async function sleep(milliseconds) {
    return new Promise((resolve)=>setTimeout(resolve, milliseconds));
}
// -----
// It can generate an unique integer ID
// -----
let previouslyCreatedId = 0;
function createId() {
    const newCreatedId = new Date().getTime() - 1709297743920; // Substracted time is 6:55PM, 1 March 2024
    if (previouslyCreatedId < newCreatedId) {
        previouslyCreatedId = newCreatedId;
        return newCreatedId;
    } else {
        previouslyCreatedId++;
        return previouslyCreatedId;
    }
}
function uniqueStringId() {
    const timestamp = createId().toString();
    let id = "";
    for(let i = 0; i < timestamp.length; i++){
        id += timestamp[i];
        if ((i + 1) % 3 === 0 && i !== timestamp.length - 1) {
            const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 10)); // Random lowercase letter between 'a' and 'f'
            id += randomChar;
        }
    }
    return id;
}
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function camelCaseToSentence(input) {
    // Add a space before each uppercase letter
    let result = input.replace(/([A-Z])/g, ' $1');
    // Capitalize the first character and make the rest lowercase
    return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
}

})()),
"[project]/src/app/api/users/read-all-students-data/route.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$jwt$2d$token$2d$verify$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/utils/jwt-token-verify.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$mysql$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/utils/mysql.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$request$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/utils/request-response.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$search$2d$params$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/utils/search-params.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/more.ts [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
async function GET(request) {
    const tokenData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$jwt$2d$token$2d$verify$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtTokenVerify"])(request);
    if (tokenData === undefined) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$request$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nextResponseJson"])(null, 401);
    const searchKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$search$2d$params$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(request, "searchKey") || "";
    let limit;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notNull"])(searchKey)) limit = 50;
    else limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$search$2d$params$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(request, "limit") || 50;
    const isMuted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$search$2d$params$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(request, "isMuted") || 0;
    // Count total record
    let result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$mysql$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["execute"])(`SELECT COUNT(id) as count FROM users WHERE role="student" AND (isMuted=1 OR isMuted=?) AND isDeleted=0`, [
        isMuted
    ]);
    const totalRecord = result[0].count;
    // Get all students data of matched key
    result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$mysql$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["execute"])(`
        SELECT
        id, email, name, image, academicId,
        sessionId, session,
        programId, pgFull, pgShort,
        departmentId, deptFull, deptShort,
        facultyId, facultyFull, facultyShort,
        isMuted
        FROM student_user
        WHERE (email LIKE ?
        OR name LIKE ?
        OR academicId LIKE ?
        OR session LIKE ?
        OR pgShort LIKE ?)
        AND isDeleted=0 AND (isMuted=1 OR isMuted=?)
        ORDER BY academicId ASC LIMIT ?
        `, [
        `%${searchKey}%`,
        `%${searchKey}%`,
        `%${searchKey}%`,
        `%${searchKey}%`,
        `%${searchKey}%`,
        isMuted,
        limit
    ]);
    if (result.length === 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$request$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nextResponseJson"])({
        status: 200,
        data: [],
        haveMoreData: false
    });
    const haveMoreData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["notNull"])(searchKey) ? false : totalRecord > limit ? true : false;
    result = result.map((record)=>({
            id: record.id,
            name: record.name,
            email: record.email,
            image: record.image,
            academicId: record.academicId,
            session: {
                id: record.sessionId,
                value: record.session
            },
            program: {
                id: record.programId,
                full: record.pgFull,
                short: record.pgShort
            },
            department: {
                id: record.departmentId,
                full: record.deptFull,
                short: record.deptShort
            },
            faculty: {
                id: record.facultyId,
                full: record.facultyFull,
                short: record.facultyShort
            },
            isMuted: record.isMuted === 1
        }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$request$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nextResponseJson"])({
        status: 200,
        data: result,
        haveMoreData: haveMoreData
    });
}

})()),

};

//# sourceMappingURL=src_abdf88._.js.map