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
"[project]/src/app/api/read-my-all-access/route.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GET": ()=>GET,
    "dynamic": ()=>dynamic
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$jwt$2d$token$2d$verify$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/utils/jwt-token-verify.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$mysql$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/utils/mysql.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$request$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/utils/request-response.ts [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
const dynamic = 'force-dynamic';
;
;
;
async function GET(request) {
    const tokenData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$jwt$2d$token$2d$verify$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtTokenVerify"])(request);
    if (tokenData === undefined) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$request$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nextResponseJson"])(null, 401);
    // Get user id
    const dynamicId = tokenData.dynamicId;
    let result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$mysql$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["execute"])("SELECT id FROM users WHERE dynamicId=?", [
        dynamicId
    ]);
    if (result.length === 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$request$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nextResponseJson"])(null, 401);
    const loggedUserId = result[0].id;
    // Get all access data
    result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$mysql$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["execute"])("SELECT * FROM access WHERE userId=?", [
        loggedUserId
    ]);
    if (result.length === 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$request$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nextResponseJson"])({
        status: 200,
        data: {}
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$request$2d$response$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["nextResponseJson"])({
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
            viewOthersHistory: result[0].viewOthersHistory === 1
        }
    });
}

})()),

};

//# sourceMappingURL=src_7ce665._.js.map