(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_7823cd._.js", {

"[project]/src/app/c/GlobalContext.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GlobalContextProvider": ()=>GlobalContextProvider,
    "default": ()=>useGlobalContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
const globalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function GlobalContextProvider({ children }) {
    _s();
    const [loggedUser, setLoggedUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [countSummary, setCountSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        teachers: {
            total: 0,
            muted: 0
        },
        students: {
            total: 0,
            muted: 0
        },
        others: {
            total: 0,
            muted: 0
        },
        faculty: 0,
        department: 0,
        program: 0,
        session: {
            total: 0,
            muted: 0
        }
    });
    const [myAccess, setMyAccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [doRefetch, setDoRefetch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [navSearchBar, setNavSearchBar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        keyword: "",
        isLoading: false
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(globalContext.Provider, {
        value: {
            loggedUser,
            setLoggedUser,
            countSummary,
            setCountSummary,
            myAccess,
            setMyAccess,
            doRefetch,
            setDoRefetch,
            activeTab,
            setActiveTab,
            navSearchBar,
            setNavSearchBar
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/c/GlobalContext.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(GlobalContextProvider, "1Lt0AzhwzeGqovFwI0H/GWktlAE=");
_c = GlobalContextProvider;
function useGlobalContext() {
    _s1();
    const stateVar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(globalContext);
    if (!stateVar) throw new Error("usecontext found null");
    else return stateVar;
}
_s1(useGlobalContext, "68Vix0WN8ebsSQtCkAvn1Y9JXUg=");
var _c;
__turbopack_refresh__.register(_c, "GlobalContextProvider");

})()),
"[project]/src/utils/console.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Console": ()=>Console,
    "default": ()=>__TURBOPACK__default__export__
});
const Console = {
    component: (text)=>{
        console.log("%c" + text, "color: yellow; font-weight: bold;");
    },
    api: {
        success: (text)=>{
            console.log("%c" + text, "background: green; color: white;");
        },
        cache: (text)=>{
            console.log("%c" + text, "background: orange; color: black;");
        },
        error: (text)=>{
            console.log("%c" + text, "background: red; color: white;");
        }
    }
};
const __TURBOPACK__default__export__ = Console;

})()),
"[project]/src/utils/global-variables.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const $$ = {
    domain: "http://localhost:3001",
    loginSiteDomain: "http://localhost:3000",
    totalOnProgressAPI: 0,
    swrCache: [],
    defaultUserImg: "/image/default-user.jpg",
    cloudUploadDir: "http://192.168.13.22/upload-files/"
};
const __TURBOPACK__default__export__ = $$;

})()),
"[project]/src/components/StopRefetchAction.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>StopRefetchAction
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/GlobalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/global-variables.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
let interval;
function StopRefetchAction() {
    _s();
    const { doRefetch, setDoRefetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_StopRefetchAction, {
            doRefetch: doRefetch,
            setDoRefetch: setDoRefetch
        }, void 0, false, {
            fileName: "[project]/src/components/StopRefetchAction.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this), [
        doRefetch,
        setDoRefetch
    ]);
}
_s(StopRefetchAction, "hCddxoS6rP62nx0KjugOKzYMyJc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = StopRefetchAction;
function _StopRefetchAction({ doRefetch, setDoRefetch }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("StopRefetchAction");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (doRefetch) {
            setTimeout(()=>{
                if (interval === undefined) {
                    interval = setInterval(()=>{
                        console.log("totalOnProgressAPI", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI);
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI === 0) {
                            clearInterval(interval);
                            interval = undefined;
                            setDoRefetch(false);
                        }
                    }, 500);
                }
            }, 500);
        }
    }, [
        doRefetch,
        setDoRefetch
    ]);
    return null;
}
_s1(_StopRefetchAction, "OD7bBpZva5O2jO+Puf00hKivP7c=");
var _c;
__turbopack_refresh__.register(_c, "StopRefetchAction");

})()),
"[project]/src/utils/text-encode-decode.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/utils/stroage.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "LocalStorage": ()=>LocalStorage,
    "SessionStorage": ()=>SessionStorage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/text-encode-decode.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const LocalStorage = new Proxy({}, {
    get (target, prop) {
        if (prop === "clear") return ()=>localStorage.clear();
        else if (prop === "removeItem") return (keyName)=>localStorage.removeItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(keyName));
        else {
            // Set new key-value
            prop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(prop);
            const data = localStorage[prop];
            if (!data) return null;
            else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(data);
        }
    },
    set (target, prop, value) {
        prop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(prop);
        value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(value);
        localStorage[prop] = value;
        return true; // indicates success
    }
});
const SessionStorage = new Proxy({}, {
    get (target, prop) {
        if (prop === "clear") return ()=>sessionStorage.clear();
        else if (prop === "removeItem") return (keyName)=>sessionStorage.removeItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(keyName));
        else {
            // Set new key-value
            prop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(prop);
            const data = sessionStorage[prop];
            if (!data) return null;
            else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(data);
        }
    },
    set (target, prop, value) {
        prop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(prop);
        value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(value);
        sessionStorage[prop] = value;
        return true; // indicates success
    }
}); /*
// Usage:
LocalStorage.name = "Bitta"
LocalStorage["name"] = "Bitta";
LocalStorage.name); // output: Bitta
LocalStorage["name"]; // output: Bitta
*/ 

})()),
"[project]/src/app/c/ThemeContextProvider.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ThemeContextProvider": ()=>ThemeContextProvider,
    "default": ()=>useThemeContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stroage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/stroage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
const context = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ThemeContextProvider({ children }) {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stroage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorage"].bduAccountsTheme) setTheme(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stroage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorage"].bduAccountsTheme);
        else {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stroage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorage"].bduAccountsTheme = "light";
            setTheme("light");
        }
    }, [
        setTheme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!theme) return;
        const doCurrent = theme;
        const skipPrev = theme === "light" ? "dark" : "light";
        const el = document.querySelector("html");
        if (el) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stroage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorage"].bduAccountsTheme = doCurrent;
            el.classList.add(doCurrent);
            el.classList.remove(skipPrev);
            el.style.colorScheme = doCurrent;
        }
    }, [
        theme
    ]);
    if (!theme) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
        fileName: "[project]/src/app/c/ThemeContextProvider.tsx",
        lineNumber: 44,
        columnNumber: 22
    }, this);
    else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(context.Provider, {
        value: {
            theme,
            setTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/c/ThemeContextProvider.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, this);
}
_s(ThemeContextProvider, "HOlqxm8EYu0Xj9z8BbQoQWWrxpM=");
_c = ThemeContextProvider;
function useThemeContext() {
    _s1();
    const stateVar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(context);
    if (!stateVar) throw new Error("usecontext found null");
    else return stateVar;
}
_s1(useThemeContext, "68Vix0WN8ebsSQtCkAvn1Y9JXUg=");
var _c;
__turbopack_refresh__.register(_c, "ThemeContextProvider");

})()),
"[project]/src/utils/api-handler/axios.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "processApiResponse": ()=>processApiResponse
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/text-encode-decode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/global-variables.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function processApiResponse(url, res, errorMessage) {
    if (!res) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].api.error(url);
        const result = {
            status: 403,
            message: errorMessage
        };
        console.log(result);
        return result;
    } else if (res.status === 200) {
        const resData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(res.data);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].api.success(url);
        console.log(resData);
        return resData;
    } else {
        if (res.status === 401) {
            alert("Unauthorized access");
            window.location.replace(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loginSiteDomain}/c/logout`);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].api.error(url);
        const result = {
            status: res.status,
            message: errorMessage
        };
        console.log(result);
        return result;
    }
}
/*
-- Eliminate: Because $$.authToken not updated here.
export const axiosHeaders = {
    headers: {
        "auth-token": $$.authToken || ""
    }
}
*/ /*****
 * Modified version of Axios
 * Try-catch block scope is attached
 * Give actual response data by decoding encoded response
 ******/ const axios = {
    get: async (url)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI++;
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(url, {
                headers: {
                    "auth-token": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].authToken || ""
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI--;
            return processApiResponse(url, res);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI--;
            return processApiResponse(url, error.response, error.message);
        }
    },
    post: async (url, inputData)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI++;
        if (!inputData) {
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(url, {
                    headers: {
                        "auth-token": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].authToken || ""
                    }
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI--;
                return processApiResponse(url, res);
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI--;
                return processApiResponse(url, error.response, error.message);
            }
        } else if (inputData) {
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(url, {
                    payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(inputData)
                }, {
                    headers: {
                        "auth-token": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].authToken || ""
                    }
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI--;
                return processApiResponse(url, res);
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI--;
                return processApiResponse(url, error.response, error.message);
            }
        }
    },
    delete: async (url)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI++;
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(url, {
                headers: {
                    "auth-token": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].authToken || ""
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI--;
            return processApiResponse(url, res);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI--;
            return processApiResponse(url, error.response, error.message);
        }
    }
};
const __TURBOPACK__default__export__ = axios;

})()),
"[project]/src/utils/api-handler/swr.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "fetcherSWR": ()=>fetcherSWR,
    "mutate": ()=>mutate,
    "useSWR": ()=>useSWR
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/swr/dist/core/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/dist/_internal/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/api-handler/axios.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/text-encode-decode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/global-variables.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
const cache = {};
function useSWR(url, refreshInterval) {
    _s();
    const { data, error, isLoading, isValidating, mutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(url, fetcherSWR, {
        // revalidateOnMount: true,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: true,
        refreshInterval: refreshInterval || 0
    });
    //  Global registry for hooks
    //  When cacheKey's value is true, thats means the hook is on mount component
    //  When cacheKey's value is undefined, thats means the hook is not on mount component
    //  When cacheKey's value is defined but not true, thats means the hook is not on mount component and there have cache value for the hook
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!url) return;
        const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(url);
        (async ()=>{
            // When first time mount
            if (cache[cacheKey] === undefined) cache[cacheKey] = true;
            else {
                if (cache[cacheKey] !== true && cache[cacheKey]) {
                    const data = cache[cacheKey];
                    cache[cacheKey] = true;
                    await mutate(data);
                }
            }
        })();
        return ()=>{
            cache[cacheKey] = undefined;
        };
    }, [
        url,
        mutate
    ]);
    return [
        data,
        mutate
    ];
}
_s(useSWR, "ZcAzFvwQvEztAynY+Qhx3VA4rvw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
async function mutate(url) {
    if (!url) return;
    const cacheKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(url);
    if (cache[cacheKey] === true) {
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$_internal$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mutate"])(url);
        return res;
    } else {
        const urlKey = typeof url === "string" ? url : url[0];
        const inputData = typeof url === "string" ? null : url[1];
        if (inputData) {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(urlKey, inputData);
            cache[cacheKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(res);
        } else {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(urlKey);
            cache[cacheKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(res);
        }
        const text = typeof url === "string" ? url : url[0];
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].api.cache(text);
        return cache[cacheKey];
    }
}
async function fetcherSWR(input) {
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI++;
    if (typeof input === "string") {
        const url = input;
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(url, {
                headers: {
                    "auth-token": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].authToken || ""
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI--;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processApiResponse"])(url, res);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI--;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processApiResponse"])(url, error.response, error.message);
        }
    } else {
        const [url, obj] = input;
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(url, {
                payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(obj)
            }, {
                headers: {
                    "auth-token": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].authToken || ""
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI--;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processApiResponse"])(url, res);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].totalOnProgressAPI--;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processApiResponse"])(url, error.response, error.message);
        }
    }
}

})()),
"[project]/src/app/api/endpoints.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const api = {
    getLoggedUserData: "/api/login-logout/get-logged-user-data",
    readCountSummary: "/api/read-count-summary",
    readMyAllAccess: "/api/read-my-all-access",
    readAllDepartment: "/api/read-all-department",
    readAllProgram: "/api/read-all-program",
    createUser: "/api/users/create-user",
    updateUser: "/api/users/update-user",
    deleteUser: "/api/users/delete-user/",
    readAUserInfo: "/api/users/read-a-user-info/",
    readAllTeachersData: "/api/users/read-all-teachers-data",
    readAllStudentsData: "/api/users/read-all-students-data",
    readAllOtherUsersData: "/api/users/read-all-other-users-data",
    readFacultyDeptProgramData: "/api/faculty/read-faculty-dept-program-data",
    addChairman: "/api/faculty/add-chairman",
    removeChairman: "/api/faculty/remove-chairman/",
    searchChairman: "/api/faculty/search-chairman/",
    deleteFaculty: "/api/faculty/delete-faculty/",
    deleteDepartment: "/api/faculty/delete-department/",
    deleteProgram: "/api/faculty/delete-program/",
    saveUpdatedFacultyTableData: "/api/faculty/save-updated-table-data",
    saveUpdatedSessionTableData: "/api/session/save-updated-table-data",
    readAllSession: "/api/session/read-all",
    readASession: "/api/session/read-one/",
    deleteSession: "/api/session/delete/",
    switchMuteUnmute: "/api/session/switch-mute-unmute/",
    readAllUsersAccess: "/api/access/read-all-user-access",
    updateAccess: "/api/access/update-access",
    readAllHistory: "/api/history/read-all-history",
    deleteHistory: "/api/history/delete/"
};
const __TURBOPACK__default__export__ = api;

})()),
"[project]/src/components/preloader/SpinLoader.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*****
 * Spin preloader type 1
 * Google's used blue spin preloader design
 ******/ __turbopack_esm__({
    "SpinLoader2": ()=>SpinLoader2,
    "default": ()=>SpinLoader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function SpinLoader({ size }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-fit spinLoader",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loader",
            style: {
                width: size ? size + "px" : "34px",
                height: size ? size + "px" : "34px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "circularLoader",
                viewBox: "25 25 50 50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    className: "loaderPath",
                    cx: "50",
                    cy: "50",
                    r: "20"
                }, void 0, false, {
                    fileName: "[project]/src/components/preloader/SpinLoader.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/preloader/SpinLoader.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/preloader/SpinLoader.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/preloader/SpinLoader.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = SpinLoader;
function SpinLoader2() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "spinLoader2"
    }, void 0, false, {
        fileName: "[project]/src/components/preloader/SpinLoader.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_c1 = SpinLoader2;
var _c, _c1;
__turbopack_refresh__.register(_c, "SpinLoader");
__turbopack_refresh__.register(_c1, "SpinLoader2");

})()),
"[project]/src/app/c/Fetcher.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Fetcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/GlobalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/api-handler/swr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/endpoints.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/preloader/SpinLoader.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function Fetcher({ children }) {
    _s();
    const { doRefetch, setCountSummary, myAccess, setMyAccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_Fetcher, {
            children: children,
            doRefetch: doRefetch,
            setCountSummary: setCountSummary,
            myAccess: myAccess,
            setMyAccess: setMyAccess
        }, void 0, false, {
            fileName: "[project]/src/app/c/Fetcher.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this), [
        doRefetch,
        setCountSummary,
        myAccess,
        setMyAccess
    ]);
}
_s(Fetcher, "fkYHwCmde+hEzt/gLJAVsoezZmE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Fetcher;
function _Fetcher({ children, doRefetch, setCountSummary, myAccess, setMyAccess }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("Fetcher");
    // Fetch count summary
    const [res, mutate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readCountSummary);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!res) return;
        if (res.status === 200) setCountSummary(res.data);
    }, [
        res,
        setCountSummary
    ]);
    // Fetch all access data
    const [res2, mutate2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readMyAllAccess);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const res = res2;
        if (!res) return;
        if (res.status === 200) setMyAccess(res.data);
    }, [
        res2,
        setMyAccess
    ]);
    // Reload data fetchers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (doRefetch) {
            mutate();
            mutate2();
        }
    }, [
        doRefetch,
        mutate,
        mutate2
    ]);
    if (!myAccess) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex justify-center items-center transform -translate-y-[50px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/c/Fetcher.tsx",
            lineNumber: 71,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/c/Fetcher.tsx",
        lineNumber: 70,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s1(_Fetcher, "FopmX+qBAJUSPbgRokZNQdSF6sM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"]
    ];
});
var _c;
__turbopack_refresh__.register(_c, "Fetcher");

})()),
"[project]/src/components/icons/IconSkeleton.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>IconSkeleton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function IconSkeleton({ children, title, onClick, className, isActive, isIconActive }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `hoverIconSkeleton relative group/svgIconTitle z-1 InnerChieldNonClickable ${className}
        ${isActive ? "active" : ""}
        ${isIconActive ? "activeIconOnly" : ""}
        `,
        onClick: ()=>{
            if (onClick) onClick();
        },
        children: [
            children,
            isActive !== true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-max py-1 px-2 rounded-md absolute top-[38px] left-[50%] -translate-x-[50%] bg-gray-700 opacity-0 pointer-events-none ${title !== "" && "group-hover/svgIconTitle:opacity-100"} transition-opacity delay-150`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-max text-center text-white text-xs",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/IconSkeleton.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/IconSkeleton.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/IconSkeleton.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = IconSkeleton;
var _c;
__turbopack_refresh__.register(_c, "IconSkeleton");

})()),
"[project]/src/components/icons/GoogleIcons.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Format
 doc: ({ className, style, fill }: { className?: string; style?: {}, fill?:boolean }) => {
  if(fill!==true) return <svg
      className={className}
      style={style}
      
  },
*/ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const GoogleIcons = {
    access: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24px",
            viewBox: "0 -960 960 960",
            width: "24px",
            fill: "#5f6368",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 32,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 23,
            columnNumber: 9
        }, this);
        else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24px",
            viewBox: "0 -960 960 960",
            width: "24px",
            fill: "#5f6368",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M280-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 120q-100 0-170-70T40-480q0-100 70-170t170-70q81 0 141.5 46T506-560h335l79 79-140 160-100-79-80 80-80-80h-14q-25 72-87 116t-139 44Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 46,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 37,
            columnNumber: 9
        }, this);
    },
    arrow: {
        back: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 70,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 62,
                columnNumber: 11
            }, this);
        },
        dropdown: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M480-360 280-560h400L480-360Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 93,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 85,
                columnNumber: 11
            }, this);
        },
        forward: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 116,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 108,
                columnNumber: 11
            }, this);
        }
    },
    addPerson: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 140,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 132,
            columnNumber: 9
        }, this);
    },
    // Google classroom
    apps: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            focusable: "false",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 162,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 156,
            columnNumber: 9
        }, this);
    },
    // Google classroom
    archive: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            focusable: "false",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 186,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 178,
            columnNumber: 9
        }, this);
    },
    assignment: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 209,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 201,
            columnNumber: 9
        }, this);
    },
    assignment2: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q14-36 44-58t68-22q38 0 68 22t44 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-670q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-246q54-53 125.5-83.5T480-360q83 0 154.5 30.5T760-246v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM280-200h400v-10q-42-35-93-52.5T480-280q-56 0-107 17.5T280-210v10Zm200-320q-25 0-42.5-17.5T420-580q0-25 17.5-42.5T480-640q25 0 42.5 17.5T540-580q0 25-17.5 42.5T480-520Zm0 17Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 232,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 224,
            columnNumber: 9
        }, this);
    },
    attachment: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M330-240q-104 0-177-73T80-490q0-104 73-177t177-73h370q75 0 127.5 52.5T880-560q0 75-52.5 127.5T700-380H350q-46 0-78-32t-32-78q0-46 32-78t78-32h370v80H350q-13 0-21.5 8.5T320-490q0 13 8.5 21.5T350-460h350q42-1 71-29.5t29-70.5q0-42-29-71t-71-29H330q-71-1-120.5 49T160-490q0 70 49.5 119T330-320h390v80H330Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 255,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 247,
            columnNumber: 9
        }, this);
    },
    block: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q54 0 104-17.5t92-50.5L228-676q-33 42-50.5 92T160-480q0 134 93 227t227 93Zm252-124q33-42 50.5-92T800-480q0-134-93-227t-227-93q-54 0-104 17.5T284-732l448 448Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 278,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 270,
            columnNumber: 9
        }, this);
    },
    book: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 301,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 293,
            columnNumber: 9
        }, this);
    },
    // Google classroom
    calender: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            focusable: "false",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 325,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 317,
            columnNumber: 9
        }, this);
    },
    circleAdd: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 348,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 340,
            columnNumber: 9
        }, this);
    },
    chat: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 371,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 363,
            columnNumber: 9
        }, this);
    },
    clock: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 394,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 386,
            columnNumber: 9
        }, this);
    },
    close: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 417,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 409,
            columnNumber: 9
        }, this);
    },
    cursor: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m320-410 79-110h170L320-716v306ZM551-80 406-392 240-160v-720l560 440H516l144 309-109 51ZM399-520Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 440,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 432,
            columnNumber: 9
        }, this);
    },
    doc: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 463,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 455,
            columnNumber: 9
        }, this);
    },
    delete: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 486,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 478,
            columnNumber: 9
        }, this);
    },
    dotMenu: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 509,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 501,
            columnNumber: 9
        }, this);
    },
    download: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Zm0-130 116-150h-76v-280h-80v280h-76l116 150Zm0-150Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 532,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 524,
            columnNumber: 9
        }, this);
    },
    downloadFile: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m720-120 160-160-56-56-64 64v-167h-80v167l-64-64-56 56 160 160ZM560 0v-80h320V0H560ZM240-160q-33 0-56.5-23.5T160-240v-560q0-33 23.5-56.5T240-880h280l240 240v121h-80v-81H480v-200H240v560h240v80H240Zm0-80v-560 560Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 555,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 547,
            columnNumber: 9
        }, this);
    },
    drawerMenu: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            focusable: "false",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 578,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 570,
            columnNumber: 9
        }, this);
    },
    edit: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 601,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 593,
            columnNumber: 9
        }, this);
    },
    editor: {
        bold: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M272-200v-560h221q65 0 120 40t55 111q0 51-23 78.5T602-491q25 11 55.5 41t30.5 90q0 89-65 124.5T501-200H272Zm121-112h104q48 0 58.5-24.5T566-372q0-11-10.5-35.5T494-432H393v120Zm0-228h93q33 0 48-17t15-38q0-24-17-39t-44-15h-95v109Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 625,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 617,
                columnNumber: 11
            }, this);
        },
        bulletPoint: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 648,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 640,
                columnNumber: 11
            }, this);
        },
        italic: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M200-200v-100h160l120-360H320v-100h400v100H580L460-300h140v100H200Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 671,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 663,
                columnNumber: 11
            }, this);
        },
        image: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 694,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 686,
                columnNumber: 11
            }, this);
        },
        link: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M680-160v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm560-40h-80q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 717,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 709,
                columnNumber: 11
            }, this);
        },
        numericPoint: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M120-80v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280-280v40q0 17-11.5 28.5T240-200q17 0 28.5 11.5T280-160v40q0 17-11.5 28.5T240-80H120Zm0-280v-110q0-17 11.5-28.5T160-510h60v-30H120v-60h120q17 0 28.5 11.5T280-560v70q0 17-11.5 28.5T240-450h-60v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 740,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 732,
                columnNumber: 11
            }, this);
        },
        underline: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M200-120v-80h560v80H200Zm280-160q-101 0-157-63t-56-167v-330h103v336q0 56 28 91t82 35q54 0 82-35t28-91v-336h103v330q0 104-56 167t-157 63Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 763,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 755,
                columnNumber: 11
            }, this);
        },
        undo: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 786,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 778,
                columnNumber: 11
            }, this);
        },
        redo: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 809,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 801,
                columnNumber: 11
            }, this);
        }
    },
    email: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 833,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 825,
            columnNumber: 9
        }, this);
    },
    // Google classroom
    graducationCap: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            focusable: "false",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 857,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 849,
            columnNumber: 9
        }, this);
        else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M840-280v-276L480-360 40-600l440-240 440 240v320h-80ZM480-120 200-272v-200l280 152 280-152v200L480-120Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 870,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 862,
            columnNumber: 9
        }, this);
    },
    // Google classroom
    home: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            focusable: "false",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3L4 9v12h16V9l-8-6zm6 16h-3v-6H9v6H6v-9l6-4.5 6 4.5v9z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 894,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 886,
            columnNumber: 9
        }, this);
    },
    history: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 917,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 909,
            columnNumber: 9
        }, this);
    },
    info: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 940,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 932,
            columnNumber: 9
        }, this);
    },
    line: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M160-200v-80h400v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 963,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 955,
            columnNumber: 9
        }, this);
    },
    logout: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 986,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 978,
            columnNumber: 9
        }, this);
    },
    person: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1009,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1001,
            columnNumber: 9
        }, this);
        else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1022,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1014,
            columnNumber: 9
        }, this);
    },
    person2: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1045,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1037,
            columnNumber: 9
        }, this);
        else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1058,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1050,
            columnNumber: 9
        }, this);
    },
    person2v2: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            focusable: "false",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "17",
                    cy: "12.5",
                    r: "2.5"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 1081,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 15.62c-1.67 0-5 .84-5 2.5V20h10v-1.88c0-1.66-3.33-2.5-5-2.5zM10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm1.82 9.17c.01 0 0 0 0 0zM10 13c-2.67 0-8 1.34-8 4v3h8v-2H4v-.99c.2-.72 3.3-2.01 6-2.01.6 0 1.22.07 1.82.17h.01l2.07-1.55c-1.39-.41-2.85-.62-3.9-.62z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 1082,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1073,
            columnNumber: 9
        }, this);
    },
    person2v3: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M480-600 340-740l140-140 140 140-140 140ZM40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm120-280q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1105,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1097,
            columnNumber: 9
        }, this);
    },
    person3: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1128,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1120,
            columnNumber: 9
        }, this);
        else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1141,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1133,
            columnNumber: 9
        }, this);
    },
    person3v2: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1164,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1156,
            columnNumber: 9
        }, this);
    },
    person3v3: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m160-419 101-101-101-101L59-520l101 101Zm540-21 100-160 100 160H700Zm-220-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-160q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640Zm0 40ZM0-240v-63q0-44 44.5-70.5T160-400q13 0 25 .5t23 2.5q-14 20-21 43t-7 49v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm560-160q72 0 116 26.5t44 70.5v63H780v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5Zm-320 30q-57 0-102 15t-53 35h311q-9-20-53.5-35T480-370Zm0 50Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1187,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1179,
            columnNumber: 9
        }, this);
    },
    personOff: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M791-55 686-160H160v-112q0-34 17.5-62.5T224-378q45-23 91.5-37t94.5-21L55-791l57-57 736 736-57 57ZM240-240h366L486-360h-6q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm496-138q29 14 46 42.5t18 61.5L666-408q18 7 35.5 14t34.5 16ZM568-506l-59-59q23-9 37-29.5t14-45.5q0-33-23.5-56.5T480-720q-25 0-45.5 14T405-669l-59-59q23-34 58-53t76-19q66 0 113 47t47 113q0 41-19 76t-53 58Zm38 266H240h366ZM457-617Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1210,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1202,
            columnNumber: 9
        }, this);
    },
    plus: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1233,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1225,
            columnNumber: 9
        }, this);
    },
    print: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1256,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1248,
            columnNumber: 9
        }, this);
    },
    quesCircle: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1279,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1271,
            columnNumber: 9
        }, this);
    },
    refresh: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1302,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1294,
            columnNumber: 9
        }, this);
    },
    search: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1325,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1317,
            columnNumber: 9
        }, this);
    },
    send: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1348,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1340,
            columnNumber: 9
        }, this);
    },
    settings: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1371,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1363,
            columnNumber: 9
        }, this);
    },
    star: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1394,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1386,
            columnNumber: 9
        }, this);
    },
    swap: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M280-160 80-360l200-200 56 57-103 103h287v80H233l103 103-56 57Zm400-240-56-57 103-103H440v-80h287L624-743l56-57 200 200-200 200Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1417,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1409,
            columnNumber: 9
        }, this);
    },
    squareBox: {
        one: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M240-280h240v-80H240v80Zm120-160h240v-80H360v80Zm120-160h240v-80H480v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 1441,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1433,
                columnNumber: 11
            }, this);
        },
        two: ({ className, style, fill })=>{
            if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: className,
                style: style,
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 -960 960 960",
                width: "24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm80-280v-80h400v80H280Zm0 160v-80h240v80H280Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 1464,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1456,
                columnNumber: 11
            }, this);
        }
    },
    select: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1488,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1480,
            columnNumber: 9
        }, this);
    },
    selectCircle: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24px",
            viewBox: "0 -960 960 960",
            width: "24px",
            fill: "#5f6368",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1512,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1503,
            columnNumber: 9
        }, this);
        else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24px",
            viewBox: "0 -960 960 960",
            width: "24px",
            fill: "#5f6368",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1526,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1517,
            columnNumber: 9
        }, this);
    },
    // Google classroom
    todo: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            enableBackground: "new 0 0 24 24",
            focusable: "false",
            height: "24",
            viewBox: "0 0 24 24",
            width: "24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        fill: "none",
                        height: "24",
                        width: "24"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                        lineNumber: 1552,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 1551,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M20,3H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V5 C22,3.9,21.1,3,20,3z M20,19H4V5h16V19z",
                                fillRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                                lineNumber: 1556,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                fillRule: "evenodd",
                                points: "19.41,10.42 17.99,9 14.82,12.17 13.41,10.75 12,12.16 14.82,15"
                            }, void 0, false, {
                                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                                lineNumber: 1560,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                fillRule: "evenodd",
                                height: "2",
                                width: "5",
                                x: "5",
                                y: "7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                                lineNumber: 1564,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                fillRule: "evenodd",
                                height: "2",
                                width: "5",
                                x: "5",
                                y: "11"
                            }, void 0, false, {
                                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                                lineNumber: 1565,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                fillRule: "evenodd",
                                height: "2",
                                width: "5",
                                x: "5",
                                y: "15"
                            }, void 0, false, {
                                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                                lineNumber: 1566,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                        lineNumber: 1555,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                    lineNumber: 1554,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1542,
            columnNumber: 9
        }, this);
    },
    unarchive: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M480-560 320-400l56 56 64-64v168h80v-168l64 64 56-56-160-160Zm-280-80v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1591,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1583,
            columnNumber: 9
        }, this);
    },
    upload: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M160-80v-80h640v80H160Zm200-160v-280H200l280-360 280 360H600v280H360Zm80-80h80v-280h76L480-750 364-600h76v280Zm40-280Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1614,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1606,
            columnNumber: 9
        }, this);
    },
    uploadFile: ({ className, style, fill })=>{
        if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            viewBox: "0 -960 960 960",
            width: "24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GoogleIcons.tsx",
                lineNumber: 1637,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GoogleIcons.tsx",
            lineNumber: 1629,
            columnNumber: 9
        }, this);
    }
};
const __TURBOPACK__default__export__ = GoogleIcons;

})()),
"[project]/src/components/preloader/LineLoader.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>LineLoader,
    "hideLoader": ()=>hideLoader,
    "showLoader": ()=>showLoader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function LineLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lineLoaderId lineLoader",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "b",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "b1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/preloader/LineLoader.tsx",
                        lineNumber: 6,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/preloader/LineLoader.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "c",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "c1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/preloader/LineLoader.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/preloader/LineLoader.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/preloader/LineLoader.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/preloader/LineLoader.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = LineLoader;
function showLoader() {
    const elements = document.querySelectorAll(".lineLoaderId");
    elements.forEach((el)=>{
        if (el) el.style.display = "block";
    });
}
async function hideLoader() {
    const elements = document.querySelectorAll(".lineLoaderId");
    elements.forEach((el)=>{
        if (el) el.style.display = "none";
    });
}
var _c;
__turbopack_refresh__.register(_c, "LineLoader");

})()),
"[project]/src/components/navbar/NavbarSkeleton.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>NavbarSkeleton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$LineLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/preloader/LineLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function NavbarSkeleton({ children, zIndex, noBorder, className, hideLineLoader }) {
    _s();
    // When scroll down then shadow will be added into navbar skeleton
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const scrollYValue = window.scrollY;
            const element = document.getElementById("idOfNavbar");
            if (element) {
                if (scrollYValue > 30) element.classList.add("navbarShadow");
                else element.classList.remove("navbarShadow");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "element-name": "Navbar skeleton",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "idOfNavbar",
                className: `w-full h-[64px] px-6 flex justify-between items-center bg-white fixed top-0 left-0 ${noBorder !== true && "border-b border-gray-300"} ${className && className}`,
                style: {
                    zIndex: zIndex
                },
                children: [
                    hideLineLoader !== true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full absolute left-0 -bottom-[1px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$LineLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/navbar/NavbarSkeleton.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/NavbarSkeleton.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar/NavbarSkeleton.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[64px]"
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/NavbarSkeleton.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navbar/NavbarSkeleton.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(NavbarSkeleton, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = NavbarSkeleton;
var _c;
__turbopack_refresh__.register(_c, "NavbarSkeleton");

})()),
"[project]/src/components/navbar/AppIconAndImg.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>AppIconAndImg
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/GlobalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/GoogleIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/global-variables.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stroage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/stroage.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function AppIconAndImg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-4 items-center z-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppIcon, {}, void 0, false, {
                fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircleImg, {}, void 0, false, {
                fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = AppIconAndImg;
/*****
 * L2 SUB COMPONENT
 *****/ const AppIcon = ()=>{
    return(// <Link href="/c/bdu-apps">
    //   <IconSkeleton title="BDU websites">
    //     <GoogleIcons.apps className="p-1 w-8 h-8 fill-gray-500" />
    //   </IconSkeleton>
    // </Link>
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false));
};
_c1 = AppIcon;
/*****
 * L2 SUB COMPONENT
 *****/ function CircleImg() {
    _s();
    const { loggedUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_CircleImg, {
            loggedUser: loggedUser
        }, void 0, false, {
            fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
            lineNumber: 46,
            columnNumber: 24
        }, this), [
        loggedUser
    ]);
}
_s(CircleImg, "2TiPvGnlgHKvy90ME3Hy0GvaFG4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c2 = CircleImg;
function _CircleImg({ loggedUser }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("CircleImg");
    const [isApear, setIsApear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let isHovered = false;
    if (loggedUser) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "p-2 flex gap-3 items-center bg-white dark:bgBlack2 border border-gray-300 rounded-lg cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "w-0 h-0 absolute",
                        onClick: ()=>setIsApear(true),
                        onBlur: ()=>{
                            !isHovered && setIsApear(false);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/image/bdu-logo.png",
                        width: 70,
                        height: 36,
                        alt: "BDU logo",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: loggedUser.image || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultUserImg,
                        width: 36,
                        height: 36,
                        alt: "Profile image",
                        className: "rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            isApear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseEnter: ()=>isHovered = true,
                onMouseLeave: ()=>isHovered = false,
                className: "w-[350px] px-4 py-6 absolute top-[57px] right-0 flex flex-col gap-4 !items-center rounded-xl bg-gray-100 dark:bgBlack boxShadow overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full text-center truncate",
                        children: loggedUser.email
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: loggedUser.image || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultUserImg,
                        className: "rounded-full",
                        width: 75,
                        height: 75,
                        alt: "Profile image"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full text-center truncate text-2xl fontGs",
                        children: [
                            "Hi, ",
                            loggedUser.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://myaccount.google.com/",
                        target: "_blank",
                        className: "w-fit px-3 py-2 rounded-[20px] border border-gray-300 hover:bg-white dark:hover:bgBlack2 hover:cursor-pointer",
                        children: "Manage google account"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("google"),
                                className: "w-[162px] p-3 flex gap-2 rounded-tl-3xl rounded-bl-3xl cursor-pointer bg-white dark:bgBlack2 hover:bg-gray-200 border-r border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].swap, {
                                        className: "w-5 h-5 fill-black"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "Change account"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loginSiteDomain}/c/logout`,
                                onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stroage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorage"].clear(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[158px] p-3 flex gap-2 rounded-tr-3xl rounded-br-3xl cursor-pointer bg-white dark:bgBlack2 hover:bg-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].logout, {
                                            className: "w-5 h-5 fill-black"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                        "Logout"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
                lineNumber: 85,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navbar/AppIconAndImg.tsx",
        lineNumber: 56,
        columnNumber: 7
    }, this);
}
_s1(_CircleImg, "kWukg906lsbjqAwOhCa0mXhwbh8=");
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "AppIconAndImg");
__turbopack_refresh__.register(_c1, "AppIcon");
__turbopack_refresh__.register(_c2, "CircleImg");

})()),
"[project]/src/app/c/Navbar.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Navbar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/use-debounce/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/GlobalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$IconSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/IconSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/GoogleIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/preloader/SpinLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavbarSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/navbar/NavbarSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$AppIconAndImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/navbar/AppIconAndImg.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const { doRefetch, setDoRefetch, navSearchBar, setNavSearchBar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_Navbar, {
            doRefetch: doRefetch,
            setDoRefetch: setDoRefetch,
            navSearchBar: navSearchBar,
            setNavSearchBar: setNavSearchBar
        }, void 0, false, {
            fileName: "[project]/src/app/c/Navbar.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this), [
        doRefetch,
        setDoRefetch,
        navSearchBar,
        setNavSearchBar
    ]);
}
_s(Navbar, "LPsJKf3wSQduU0ThElrozJoKgXo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Navbar;
function _Navbar({ doRefetch, setDoRefetch, navSearchBar, setNavSearchBar }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("Navbar");
    const [keyword, setKeyword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const debounced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"])((value)=>{
        setNavSearchBar((prev)=>({
                ...prev,
                keyword: value
            }));
    }, 1000);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (navSearchBar.keyword) setNavSearchBar((prev)=>({
                ...prev,
                isLoading: true
            }));
    }, [
        navSearchBar.keyword
    ]);
    // Refresh button clicked activity
    async function doRefresh() {
        setDoRefetch((prev)=>!prev);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$NavbarSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        zIndex: 5,
        noBorder: true,
        hideLineLoader: true,
        className: "!bgWhite2 dark:!bgBlack",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[267px] text-2xl text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2 fontGsm",
                                children: "BDU"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/Navbar.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "fontGs",
                                children: "UMS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/Navbar.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/Navbar.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 flex items-center bg-white dark:bgBlack2 rounded-md focus-within:boxShadowMenu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].search, {
                                className: "fill-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/Navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                spellCheck: false,
                                placeholder: "Search here",
                                className: "w-[700px] px-2 py-3.5 bg-white dark:bgBlack2",
                                value: keyword || "",
                                onChange: (e)=>{
                                    setKeyword(e.target.value);
                                    debounced(e.target.value);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/Navbar.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: navSearchBar.isLoading ? "opacity-1" : "opacity-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/Navbar.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/Navbar.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/Navbar.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/Navbar.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$IconSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Fast reload",
                        onClick: doRefresh,
                        isActive: doRefetch,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].refresh, {
                            className: `fill-gray-500 ${doRefetch === true && "spinAnimation"}`
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/Navbar.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/Navbar.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$AppIconAndImg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/c/Navbar.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/Navbar.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/Navbar.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s1(_Navbar, "ZGJRNCEWqbqZpi9/5R/Gf0Hk6lA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"]
    ];
});
var _c;
__turbopack_refresh__.register(_c, "Navbar");

})()),
"[project]/src/components/ModalContainer.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "closingTransition": ()=>closingTransition,
    "default": ()=>ModalContainer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function ModalContainer({ children }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTimeout(()=>{
            const el = document.getElementById("idModalContainer");
            if (el) el.style.opacity = "1";
        }, 0);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "idModalContainer",
        className: "w-full h-full fixed top-0 left-0 flex justify-center items-center",
        style: {
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 50,
            opacity: 0,
            transition: "opacity 0.3s ease"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bgBlack boxShadow rounded-md transform -translate-y-[50px]",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ModalContainer.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ModalContainer.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this), document.body);
}
_s(ModalContainer, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ModalContainer;
function closingTransition(func) {
    const el = document.getElementById("idModalContainer");
    if (el) el.style.opacity = "0";
    setTimeout(()=>{
        func();
    }, 300);
}
var _c;
__turbopack_refresh__.register(_c, "ModalContainer");

})()),
"[project]/src/components/svg-image/Fish.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Green: #1E8E3E --> Blue: #007bff
// LightGreen: #CEEAD6 --> LightBlue: #DBEAFE
__turbopack_esm__({
    "SvgFishColor": ()=>SvgFishColor,
    "default": ()=>SvgFish
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function SvgFish({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 181 143",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M160.156 107.599C161.764 100.018 166.818 93.3552 172.944 90.7515C173.94 90.3686 175.165 90.1388 175.701 91.0578C176.084 91.747 175.931 92.7426 175.625 93.6615C173.251 101.549 166.282 107.369 159.543 107.063",
                fill: "#DBEAFE"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M160.615 108.441C160.768 100.707 157.322 92.9724 151.884 88.9902C151.042 88.3776 149.893 87.8415 149.128 88.6839C148.592 89.2965 148.515 90.2921 148.592 91.211C149.128 99.4051 154.641 106.757 161.227 108.059",
                fill: "#DBEAFE"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M160.156 123.298C161.764 115.717 166.818 109.054 172.944 106.451C173.94 106.068 175.165 105.838 175.701 106.757C176.084 107.446 175.931 108.442 175.625 109.361C173.251 117.248 166.282 123.069 159.543 122.762",
                fill: "#DBEAFE"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M159.083 124.906C159.236 117.172 155.79 109.437 150.353 105.455C149.511 104.842 148.362 104.306 147.596 105.149C147.06 105.761 146.984 106.757 147.06 107.676C147.596 115.87 153.11 123.222 159.696 124.523",
                fill: "#DBEAFE"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M73.3906 120.848H99.4278",
                stroke: "#5F6368",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M164.521 82.5576C163.244 87.4077 161.034 98.8999 160.309 105.914C159.16 117.019 159.415 124.166 159.16 128.888",
                stroke: "#5F6368",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M164.291 89.1436C168.52 89.1436 171.949 85.6122 171.949 81.2559C171.949 76.8996 168.52 73.3682 164.291 73.3682C160.061 73.3682 156.633 76.8996 156.633 81.2559C156.633 85.6122 160.061 89.1436 164.291 89.1436Z",
                fill: "#DADCE0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M84.1885 139.227C112.829 139.074 168.12 137.159 171.872 136.93C177.846 136.623 182.67 133.254 180.449 129.808C178.228 126.362 132.281 127.357 117.041 128.889C118.573 129.425 84.1885 139.227 84.1885 139.227Z",
                fill: "#DADCE0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.07715 109.207C9.6764 117.171 15.1136 124.217 22.1589 129.73C25.5284 132.411 31.5782 134.632 38.3172 136.546C60.4488 142.749 83.8056 142.749 105.937 136.469C112.6 134.632 118.496 132.334 121.866 129.73C128.911 124.217 134.348 117.095 137.948 109.207H79.5172L78.0622 121H30.5827L30.3529 109.207H6.07715Z",
                fill: "#DADCE0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M71.6296 30.8661C102.081 30.8661 126.767 24.1804 126.767 15.9331C126.767 7.68576 102.081 1 71.6296 1C41.1781 1 16.4922 7.68576 16.4922 15.9331C16.4922 24.1804 41.1781 30.8661 71.6296 30.8661Z",
                stroke: "#5F6368",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M126.767 15.9326L140.934 72.6782C146.295 94.1206 138.637 116.712 121.483 130.19C118.113 132.793 112.14 135.091 105.554 136.929C83.4226 143.132 60.3721 141.83 37.9342 137.005C7.68519 130.496 -3.03598 94.1206 2.32461 72.6782L16.4919 15.9326",
                stroke: "#5F6368",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M74.5393 120.924H30.1996L27.213 49.5515C27.1364 46.8712 29.2041 44.6504 31.8078 44.6504H71.7824C74.233 44.6504 76.3007 46.6415 76.3772 49.1686L79.2107 116.023C79.2873 118.703 77.143 120.924 74.5393 120.924Z",
                stroke: "#5F6368",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M26.8303 46.6416L21.4697 121.843H29.5106L26.8303 46.6416Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M45.2094 91.8999C48.5929 91.8999 51.3358 89.0885 51.3358 85.6204C51.3358 82.1523 48.5929 79.3408 45.2094 79.3408C41.8259 79.3408 39.083 82.1523 39.083 85.6204C39.083 89.0885 41.8259 91.8999 45.2094 91.8999Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M45.2094 112.347C48.5929 112.347 51.3358 109.536 51.3358 106.068C51.3358 102.6 48.5929 99.7881 45.2094 99.7881C41.8259 99.7881 39.083 102.6 39.083 106.068C39.083 109.536 41.8259 112.347 45.2094 112.347Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64.3539 91.8999C67.7374 91.8999 70.4803 89.0885 70.4803 85.6204C70.4803 82.1523 67.7374 79.3408 64.3539 79.3408C60.9704 79.3408 58.2275 82.1523 58.2275 85.6204C58.2275 89.0885 60.9704 91.8999 64.3539 91.8999Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64.3539 112.347C67.7374 112.347 70.4803 109.536 70.4803 106.068C70.4803 102.6 67.7374 99.7881 64.3539 99.7881C60.9704 99.7881 58.2275 102.6 58.2275 106.068C58.2275 109.536 60.9704 112.347 64.3539 112.347Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M67.7241 72.2193H38.6237C36.939 72.2193 35.5605 70.8408 35.5605 69.1561V54.8357C35.5605 53.1509 36.939 51.7725 38.6237 51.7725H67.7241C69.4088 51.7725 70.7873 53.1509 70.7873 54.8357V69.1561C70.7873 70.8408 69.4088 72.2193 67.7241 72.2193Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M92.6885 52.4619C95.2262 52.4619 97.2833 50.3704 97.2833 47.7905C97.2833 45.2106 95.2262 43.1191 92.6885 43.1191C90.1509 43.1191 88.0938 45.2106 88.0938 47.7905C88.0938 50.3704 90.1509 52.4619 92.6885 52.4619Z",
                fill: "#DADCE0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M122.555 57.2099C125.092 57.2099 127.15 55.1185 127.15 52.5386C127.15 49.9586 125.092 47.8672 122.555 47.8672C120.017 47.8672 117.96 49.9586 117.96 52.5386C117.96 55.1185 120.017 57.2099 122.555 57.2099Z",
                fill: "#DADCE0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M114.131 43.042C116.669 43.042 118.726 40.9505 118.726 38.3706C118.726 35.7907 116.669 33.6992 114.131 33.6992C111.593 33.6992 109.536 35.7907 109.536 38.3706C109.536 40.9505 111.593 43.042 114.131 43.042Z",
                fill: "#DADCE0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M124.24 76.5078C124.24 90.9814 112.447 102.775 97.9733 102.775C85.1079 102.775 74.3867 93.5085 72.1659 81.3323C71.7064 78.8052 73.6975 76.5078 76.2246 76.5078H124.24Z",
                fill: "#007bff"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M135.574 79.3413C135.574 80.8729 132.434 82.1747 129.907 82.1747C127.38 82.1747 121.177 80.8729 121.177 79.3413C121.177 77.8097 127.38 76.5078 129.907 76.5078C132.511 76.5078 135.574 77.8097 135.574 79.3413Z",
                fill: "#007bff"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M131.438 69.0793C132.511 70.1514 131.209 73.2912 129.447 75.0525C127.609 76.8905 122.325 80.3365 121.253 79.2644C120.181 78.1923 123.627 72.9083 125.465 71.0704C127.227 69.3091 130.29 68.0072 131.438 69.0793Z",
                fill: "#007bff"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M84.0353 88.2249C86.2769 88.2249 88.094 86.4077 88.094 84.1661C88.094 81.9246 86.2769 80.1074 84.0353 80.1074C81.7937 80.1074 79.9766 81.9246 79.9766 84.1661C79.9766 86.4077 81.7937 88.2249 84.0353 88.2249Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M92.076 79.265C94.2202 85.6977 93.8373 92.6665 90.7741 98.7163C90.3147 99.7118 91.7697 100.554 92.2291 99.5586C95.4455 93.1259 95.9816 85.6211 93.6842 78.8055C93.3778 77.7334 91.6931 78.1929 92.076 79.265Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M94.9863 85.2374C95.0629 85.1608 95.216 85.1608 95.2926 85.0842C95.4458 85.0076 95.1394 85.1608 95.2926 85.0842C95.3692 85.0842 95.4458 85.0076 95.5223 85.0076C95.8287 84.931 96.135 84.7779 96.4413 84.7013C97.2837 84.4716 97.6666 84.4716 98.509 84.395C98.8919 84.395 99.2748 84.395 99.6577 84.4716C99.8108 84.4716 99.5811 84.4716 99.8108 84.4716C99.8874 84.4716 99.964 84.4716 100.117 84.5481C100.27 84.6247 100.5 84.6247 100.653 84.7013C101.266 84.8545 101.802 85.2374 102.185 85.6968C102.338 85.9266 102.568 86.3095 102.644 86.5392C102.797 86.9987 102.797 87.305 102.797 87.7645C102.797 88.6069 102.644 89.2961 102.185 89.9853C102.108 90.1385 102.185 89.9853 102.108 90.1385C102.032 90.215 102.032 90.2916 101.955 90.2916C101.878 90.3682 101.572 90.5979 101.572 90.6745C101.419 90.8277 100.96 91.0574 100.653 91.2106C100.577 91.2872 100.653 91.2106 100.653 91.2106C100.577 91.2106 100.577 91.2872 100.5 91.2872C100.423 91.2872 100.347 91.3637 100.194 91.3637C100.041 91.4403 99.8108 91.4403 99.6577 91.5169C99.5045 91.5935 99.2748 91.5935 99.1216 91.5935C99.045 91.5935 99.1216 91.5935 99.1216 91.5935C99.045 91.5935 99.045 91.5935 98.9684 91.5935C98.8919 91.5935 98.7387 91.5935 98.6621 91.5935C98.2026 91.5935 97.8197 91.5935 97.3603 91.5935C97.2837 91.5935 97.2071 91.5935 97.0539 91.5935C96.9008 91.5935 97.0539 91.5935 97.0539 91.5935C96.9774 91.5935 96.9774 91.5935 96.9008 91.5935C96.7476 91.5935 96.5179 91.5169 96.3647 91.4403C96.2116 91.3637 95.9818 91.3637 95.8287 91.2872C95.7521 91.2872 95.6755 91.2106 95.5989 91.2106C95.7521 91.2872 95.5989 91.2106 95.5223 91.2106C95.3692 91.134 95.2926 91.0574 95.1394 90.9808C94.9863 90.9043 95.216 91.0574 95.1394 90.9808C95.0629 90.9043 95.0629 90.9043 94.9863 90.8277C94.2205 89.9853 92.9952 91.2106 93.761 92.053C94.7565 93.1251 96.671 93.4314 98.0495 93.3548C99.8874 93.3548 101.802 92.8188 103.104 91.4403C104.559 89.8321 104.865 87.305 103.946 85.3139C103.104 83.5526 101.189 82.7868 99.3513 82.6336C97.59 82.4805 95.5989 82.7868 94.0673 83.6292C93.1484 84.2418 94.0673 85.7734 94.9863 85.2374Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M84.0356 86.08C85.0929 86.08 85.9501 85.2228 85.9501 84.1655C85.9501 83.1081 85.0929 82.251 84.0356 82.251C82.9782 82.251 82.1211 83.1081 82.1211 84.1655C82.1211 85.2228 82.9782 86.08 84.0356 86.08Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg-image/Fish.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SvgFish;
function SvgFishColor({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 181 143",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M160.156 107.599C161.764 100.018 166.818 93.3552 172.944 90.7515C173.94 90.3686 175.165 90.1388 175.701 91.0578C176.084 91.747 175.931 92.7426 175.625 93.6615C173.251 101.549 166.282 107.369 159.543 107.063",
                fill: "#DBEAFE",
                className: "FillLight"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M160.615 108.441C160.768 100.707 157.322 92.9724 151.884 88.9902C151.042 88.3776 149.893 87.8415 149.128 88.6839C148.592 89.2965 148.515 90.2921 148.592 91.211C149.128 99.4051 154.641 106.757 161.227 108.059",
                fill: "#DBEAFE",
                className: "FillLight"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M160.156 123.298C161.764 115.717 166.818 109.054 172.944 106.451C173.94 106.068 175.165 105.838 175.701 106.757C176.084 107.446 175.931 108.442 175.625 109.361C173.251 117.248 166.282 123.069 159.543 122.762",
                fill: "#DBEAFE",
                className: "FillLight"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M159.083 124.906C159.236 117.172 155.79 109.437 150.353 105.455C149.511 104.842 148.362 104.306 147.596 105.149C147.06 105.761 146.984 106.757 147.06 107.676C147.596 115.87 153.11 123.222 159.696 124.523",
                fill: "#DBEAFE",
                className: "FillLight"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M73.3906 120.848H99.4278",
                stroke: "#5F6368",
                strokeWidth: "2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M164.521 82.5576C163.244 87.4077 161.034 98.8999 160.309 105.914C159.16 117.019 159.415 124.166 159.16 128.888",
                stroke: "#5F6368",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M164.291 89.1436C168.52 89.1436 171.949 85.6122 171.949 81.2559C171.949 76.8996 168.52 73.3682 164.291 73.3682C160.061 73.3682 156.633 76.8996 156.633 81.2559C156.633 85.6122 160.061 89.1436 164.291 89.1436Z",
                fill: "#DADCE0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M84.1885 139.227C112.829 139.074 168.12 137.159 171.872 136.93C177.846 136.623 182.67 133.254 180.449 129.808C178.228 126.362 132.281 127.357 117.041 128.889C118.573 129.425 84.1885 139.227 84.1885 139.227Z",
                fill: "#DADCE0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.07715 109.207C9.6764 117.171 15.1136 124.217 22.1589 129.73C25.5284 132.411 31.5782 134.632 38.3172 136.546C60.4488 142.749 83.8056 142.749 105.937 136.469C112.6 134.632 118.496 132.334 121.866 129.73C128.911 124.217 134.348 117.095 137.948 109.207H79.5172L78.0622 121H30.5827L30.3529 109.207H6.07715Z",
                fill: "#DADCE0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M71.6296 30.8661C102.081 30.8661 126.767 24.1804 126.767 15.9331C126.767 7.68576 102.081 1 71.6296 1C41.1781 1 16.4922 7.68576 16.4922 15.9331C16.4922 24.1804 41.1781 30.8661 71.6296 30.8661Z",
                stroke: "#5F6368",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M126.767 15.9326L140.934 72.6782C146.295 94.1206 138.637 116.712 121.483 130.19C118.113 132.793 112.14 135.091 105.554 136.929C83.4226 143.132 60.3721 141.83 37.9342 137.005C7.68519 130.496 -3.03598 94.1206 2.32461 72.6782L16.4919 15.9326",
                stroke: "#5F6368",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M74.5393 120.924H30.1996L27.213 49.5515C27.1364 46.8712 29.2041 44.6504 31.8078 44.6504H71.7824C74.233 44.6504 76.3007 46.6415 76.3772 49.1686L79.2107 116.023C79.2873 118.703 77.143 120.924 74.5393 120.924Z",
                stroke: "#5F6368",
                strokeWidth: "2",
                strokeMiterlimit: "10"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M26.8303 46.6416L21.4697 121.843H29.5106L26.8303 46.6416Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M45.2094 91.8999C48.5929 91.8999 51.3358 89.0885 51.3358 85.6204C51.3358 82.1523 48.5929 79.3408 45.2094 79.3408C41.8259 79.3408 39.083 82.1523 39.083 85.6204C39.083 89.0885 41.8259 91.8999 45.2094 91.8999Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M45.2094 112.347C48.5929 112.347 51.3358 109.536 51.3358 106.068C51.3358 102.6 48.5929 99.7881 45.2094 99.7881C41.8259 99.7881 39.083 102.6 39.083 106.068C39.083 109.536 41.8259 112.347 45.2094 112.347Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64.3539 91.8999C67.7374 91.8999 70.4803 89.0885 70.4803 85.6204C70.4803 82.1523 67.7374 79.3408 64.3539 79.3408C60.9704 79.3408 58.2275 82.1523 58.2275 85.6204C58.2275 89.0885 60.9704 91.8999 64.3539 91.8999Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M64.3539 112.347C67.7374 112.347 70.4803 109.536 70.4803 106.068C70.4803 102.6 67.7374 99.7881 64.3539 99.7881C60.9704 99.7881 58.2275 102.6 58.2275 106.068C58.2275 109.536 60.9704 112.347 64.3539 112.347Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M67.7241 72.2193H38.6237C36.939 72.2193 35.5605 70.8408 35.5605 69.1561V54.8357C35.5605 53.1509 36.939 51.7725 38.6237 51.7725H67.7241C69.4088 51.7725 70.7873 53.1509 70.7873 54.8357V69.1561C70.7873 70.8408 69.4088 72.2193 67.7241 72.2193Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M92.6885 52.4619C95.2262 52.4619 97.2833 50.3704 97.2833 47.7905C97.2833 45.2106 95.2262 43.1191 92.6885 43.1191C90.1509 43.1191 88.0938 45.2106 88.0938 47.7905C88.0938 50.3704 90.1509 52.4619 92.6885 52.4619Z",
                fill: "#DADCE0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M122.555 57.2099C125.092 57.2099 127.15 55.1185 127.15 52.5386C127.15 49.9586 125.092 47.8672 122.555 47.8672C120.017 47.8672 117.96 49.9586 117.96 52.5386C117.96 55.1185 120.017 57.2099 122.555 57.2099Z",
                fill: "#DADCE0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M114.131 43.042C116.669 43.042 118.726 40.9505 118.726 38.3706C118.726 35.7907 116.669 33.6992 114.131 33.6992C111.593 33.6992 109.536 35.7907 109.536 38.3706C109.536 40.9505 111.593 43.042 114.131 43.042Z",
                fill: "#DADCE0"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M124.24 76.5078C124.24 90.9814 112.447 102.775 97.9733 102.775C85.1079 102.775 74.3867 93.5085 72.1659 81.3323C71.7064 78.8052 73.6975 76.5078 76.2246 76.5078H124.24Z",
                fill: "#007bff",
                className: "FillDeep"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M135.574 79.3413C135.574 80.8729 132.434 82.1747 129.907 82.1747C127.38 82.1747 121.177 80.8729 121.177 79.3413C121.177 77.8097 127.38 76.5078 129.907 76.5078C132.511 76.5078 135.574 77.8097 135.574 79.3413Z",
                fill: "#007bff",
                className: "FillDeep"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M131.438 69.0793C132.511 70.1514 131.209 73.2912 129.447 75.0525C127.609 76.8905 122.325 80.3365 121.253 79.2644C120.181 78.1923 123.627 72.9083 125.465 71.0704C127.227 69.3091 130.29 68.0072 131.438 69.0793Z",
                fill: "#007bff",
                className: "FillDeep"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M84.0353 88.2249C86.2769 88.2249 88.094 86.4077 88.094 84.1661C88.094 81.9246 86.2769 80.1074 84.0353 80.1074C81.7937 80.1074 79.9766 81.9246 79.9766 84.1661C79.9766 86.4077 81.7937 88.2249 84.0353 88.2249Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M92.076 79.265C94.2202 85.6977 93.8373 92.6665 90.7741 98.7163C90.3147 99.7118 91.7697 100.554 92.2291 99.5586C95.4455 93.1259 95.9816 85.6211 93.6842 78.8055C93.3778 77.7334 91.6931 78.1929 92.076 79.265Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M94.9863 85.2374C95.0629 85.1608 95.216 85.1608 95.2926 85.0842C95.4458 85.0076 95.1394 85.1608 95.2926 85.0842C95.3692 85.0842 95.4458 85.0076 95.5223 85.0076C95.8287 84.931 96.135 84.7779 96.4413 84.7013C97.2837 84.4716 97.6666 84.4716 98.509 84.395C98.8919 84.395 99.2748 84.395 99.6577 84.4716C99.8108 84.4716 99.5811 84.4716 99.8108 84.4716C99.8874 84.4716 99.964 84.4716 100.117 84.5481C100.27 84.6247 100.5 84.6247 100.653 84.7013C101.266 84.8545 101.802 85.2374 102.185 85.6968C102.338 85.9266 102.568 86.3095 102.644 86.5392C102.797 86.9987 102.797 87.305 102.797 87.7645C102.797 88.6069 102.644 89.2961 102.185 89.9853C102.108 90.1385 102.185 89.9853 102.108 90.1385C102.032 90.215 102.032 90.2916 101.955 90.2916C101.878 90.3682 101.572 90.5979 101.572 90.6745C101.419 90.8277 100.96 91.0574 100.653 91.2106C100.577 91.2872 100.653 91.2106 100.653 91.2106C100.577 91.2106 100.577 91.2872 100.5 91.2872C100.423 91.2872 100.347 91.3637 100.194 91.3637C100.041 91.4403 99.8108 91.4403 99.6577 91.5169C99.5045 91.5935 99.2748 91.5935 99.1216 91.5935C99.045 91.5935 99.1216 91.5935 99.1216 91.5935C99.045 91.5935 99.045 91.5935 98.9684 91.5935C98.8919 91.5935 98.7387 91.5935 98.6621 91.5935C98.2026 91.5935 97.8197 91.5935 97.3603 91.5935C97.2837 91.5935 97.2071 91.5935 97.0539 91.5935C96.9008 91.5935 97.0539 91.5935 97.0539 91.5935C96.9774 91.5935 96.9774 91.5935 96.9008 91.5935C96.7476 91.5935 96.5179 91.5169 96.3647 91.4403C96.2116 91.3637 95.9818 91.3637 95.8287 91.2872C95.7521 91.2872 95.6755 91.2106 95.5989 91.2106C95.7521 91.2872 95.5989 91.2106 95.5223 91.2106C95.3692 91.134 95.2926 91.0574 95.1394 90.9808C94.9863 90.9043 95.216 91.0574 95.1394 90.9808C95.0629 90.9043 95.0629 90.9043 94.9863 90.8277C94.2205 89.9853 92.9952 91.2106 93.761 92.053C94.7565 93.1251 96.671 93.4314 98.0495 93.3548C99.8874 93.3548 101.802 92.8188 103.104 91.4403C104.559 89.8321 104.865 87.305 103.946 85.3139C103.104 83.5526 101.189 82.7868 99.3513 82.6336C97.59 82.4805 95.5989 82.7868 94.0673 83.6292C93.1484 84.2418 94.0673 85.7734 94.9863 85.2374Z",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M84.0356 86.08C85.0929 86.08 85.9501 85.2228 85.9501 84.1655C85.9501 83.1081 85.0929 82.251 84.0356 82.251C82.9782 82.251 82.1211 83.1081 82.1211 84.1655C82.1211 85.2228 82.9782 86.08 84.0356 86.08Z",
                fill: "#5F6368"
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/Fish.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg-image/Fish.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_c1 = SvgFishColor;
var _c, _c1;
__turbopack_refresh__.register(_c, "SvgFish");
__turbopack_refresh__.register(_c1, "SvgFishColor");

})()),
"[project]/src/utils/more.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/src/app/c/TabList/CreateBtn/SelectGender.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SelectGender
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
function SelectGender({ formData, setFormData }) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_SelectGender, {
            gender: formData.gender,
            setFormData: setFormData
        }, void 0, false, {
            fileName: "[project]/src/app/c/TabList/CreateBtn/SelectGender.tsx",
            lineNumber: 15,
            columnNumber: 11
        }, this), [
        formData.gender,
        setFormData
    ]);
}
_s(SelectGender, "nwk+m61qLgjDVUp4IGV/072DDN4=");
_c = SelectGender;
function _SelectGender({ gender, setFormData }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("SelectGender");
    const [isApear, setIsApear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function doApear() {
        setIsApear(true);
        setTimeout(()=>{
            if (isApear === false) setIsApear(true);
        }, 300);
    }
    function doDisapear() {
        setTimeout(()=>setIsApear(false), 300);
    }
    function updateValue(val) {
        setFormData((prev)=>prev && {
                ...prev,
                gender: val
            });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "textField caretNone",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        required: true,
                        value: gender,
                        onChange: ()=>{},
                        onFocus: doApear,
                        onBlur: doDisapear,
                        autoComplete: "off",
                        spellCheck: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectGender.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Gender"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectGender.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectGender.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            isApear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full py-2 absolute top-[50px] bg-white dark:bgBlack boxShadowMenu z-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3",
                        onClick: ()=>updateValue("Male"),
                        children: "Male"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectGender.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3",
                        onClick: ()=>updateValue("Female"),
                        children: "Female"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectGender.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3",
                        onClick: ()=>updateValue("Other"),
                        children: "Other"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectGender.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectGender.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectGender.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s1(_SelectGender, "kWukg906lsbjqAwOhCa0mXhwbh8=");
var _c;
__turbopack_refresh__.register(_c, "SelectGender");

})()),
"[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SelectSession
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/api-handler/swr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/GoogleIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/more.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/endpoints.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function SelectSession({ formData, setFormData }) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_SelectSession, {
            session: formData.session,
            setFormData: setFormData
        }, void 0, false, {
            fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this), [
        formData.session,
        setFormData
    ]);
}
_s(SelectSession, "nwk+m61qLgjDVUp4IGV/072DDN4=");
_c = SelectSession;
function _SelectSession({ session, setFormData }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("SelectSession");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    let isSearching = false;
    const [isApear, setIsApear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchKey, setSearchKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const inputID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get session data
    const [res] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readAllSession);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!res) return;
        if (res.status === 200) {
            const data = res.data;
            setData(data);
        /*
      // Set the first value
      setFormData((prev) => ({
        ...prev,
        session: { id: data[0].id, value: data[0].session },
      }));
      */ }
    }, [
        res,
        setData,
        setFormData
    ]);
    function doApear() {
        setIsApear(true);
        setTimeout(()=>{
            if (isApear === false) setIsApear(true);
        }, 300);
    }
    function doDisapear() {
        setTimeout(()=>{
            if (isSearching === false) {
                setIsApear(false);
                setSearchKey("");
            }
        }, 300);
    }
    function updateValue(obj) {
        setFormData((prev)=>prev && {
                ...prev,
                session: obj
            });
        setIsApear(false);
    }
    let recordFound = false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "textField caretNone",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        required: true,
                        ref: inputID,
                        value: session.value,
                        onChange: ()=>{},
                        onFocus: doApear,
                        onBlur: doDisapear,
                        autoComplete: "off",
                        spellCheck: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Session"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            isApear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-h-[250px] py-2 absolute top-[50px] overflow-y-auto bg-white dark:bgBlack boxShadowMenu z-1",
                onMouseLeave: ()=>{
                    inputID.current?.focus();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-4 mt-2 mb-3 px-2 flex items-center gap-1 border border-gray-300 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].search, {
                                className: "fill-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "w-full px-1 py-2",
                                    placeholder: "Search",
                                    spellCheck: false,
                                    onFocus: ()=>isSearching = true,
                                    onBlur: ()=>isSearching = false,
                                    value: searchKey,
                                    onChange: (e)=>setSearchKey(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    data === undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this) : data.map((record, index)=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchKeywordMatched"])(record.session, searchKey) === false) return;
                        recordFound = true;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3",
                            onClick: ()=>updateValue({
                                    id: record.id,
                                    value: record.session
                                }),
                            children: record.session
                        }, index, false, {
                            fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
                            lineNumber: 142,
                            columnNumber: 17
                        }, this);
                    }),
                    data && recordFound == false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        children: "No record found"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
                        lineNumber: 155,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s1(_SelectSession, "gpJO05DZahEOVac3MvTyEt7AHFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"]
    ];
});
var _c;
__turbopack_refresh__.register(_c, "SelectSession");

})()),
"[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SelectDepartment
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/api-handler/swr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/GoogleIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/more.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/endpoints.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function SelectDepartment({ formData, setFormData }) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_SelectDepartment, {
            department: formData.department,
            setFormData: setFormData
        }, void 0, false, {
            fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this), [
        formData.department,
        setFormData
    ]);
}
_s(SelectDepartment, "nwk+m61qLgjDVUp4IGV/072DDN4=");
_c = SelectDepartment;
function _SelectDepartment({ department, setFormData }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("SelectDepartment");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    let isSearching = false;
    const [isApear, setIsApear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchKey, setSearchKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const inputID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get department data
    const [res] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readAllDepartment);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!res) return;
        if (res.status === 200) {
            const data = res.data;
            setData(data);
        /*
      // Set the first value
      setFormData((prev) => ({
        ...prev,
        department: { id: data[0].id, full: data[0].full, short: data[0].short },
      }));
      */ }
    }, [
        res,
        setData,
        setFormData
    ]);
    function doApear() {
        setIsApear(true);
        setTimeout(()=>{
            if (isApear === false) setIsApear(true);
        }, 300);
    }
    function doDisapear() {
        setTimeout(()=>{
            if (isSearching === false) {
                setIsApear(false);
                setSearchKey("");
            }
        }, 300);
    }
    function updateValue(obj) {
        setFormData((prev)=>prev && {
                ...prev,
                department: obj
            });
        setIsApear(false);
    }
    let recordFound = false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "textField caretNone",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        required: true,
                        ref: inputID,
                        value: `${department.full}`,
                        onChange: ()=>{},
                        onFocus: doApear,
                        onBlur: doDisapear,
                        autoComplete: "off",
                        spellCheck: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Department"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            isApear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-h-[250px] py-2 absolute top-[50px] overflow-y-auto bg-white dark:bgBlack boxShadowMenu z-1",
                onMouseLeave: ()=>{
                    inputID.current?.focus();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-4 mt-2 mb-3 px-2 flex items-center gap-1 border border-gray-300 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].search, {
                                className: "fill-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "w-full px-1 py-2",
                                    placeholder: "Search",
                                    spellCheck: false,
                                    onFocus: ()=>isSearching = true,
                                    onBlur: ()=>isSearching = false,
                                    value: searchKey,
                                    onChange: (e)=>setSearchKey(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    data === undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
                        lineNumber: 138,
                        columnNumber: 13
                    }, this) : data.map((record, index)=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchKeywordMatched"])(`${record.full} (${record.short})`, searchKey) === false) return;
                        recordFound = true;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3",
                            onClick: ()=>updateValue({
                                    id: record.id,
                                    full: record.full,
                                    short: record.short
                                }),
                            children: `${record.full} (${record.short})`
                        }, index, false, {
                            fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
                            lineNumber: 150,
                            columnNumber: 17
                        }, this);
                    }),
                    data && recordFound == false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        children: "No record found"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
                        lineNumber: 167,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s1(_SelectDepartment, "gpJO05DZahEOVac3MvTyEt7AHFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"]
    ];
});
var _c;
__turbopack_refresh__.register(_c, "SelectDepartment");

})()),
"[project]/src/utils/text-formater.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "convertFirstLetterInUppercase": ()=>convertFirstLetterInUppercase,
    "getFirstLetterOnlyInUppercase": ()=>getFirstLetterOnlyInUppercase,
    "intFloatConversion": ()=>intFloatConversion,
    "isDigit": ()=>isDigit,
    "removeDuplicateWords": ()=>removeDuplicateWords,
    "shuffleString": ()=>shuffleString,
    "textTruncate": ()=>textTruncate
});
function shuffleString(str) {
    let arr = str.split('');
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [
            arr[j],
            arr[i]
        ];
    }
    return arr.join('');
}
function convertFirstLetterInUppercase(value) {
    let result = value.charAt(0).toUpperCase() + value.slice(1);
    return result;
}
function getFirstLetterOnlyInUppercase(str) {
    // Check if the input string is not empty
    if (str && str.trim().length > 0) {
        // Get the first character of the string and convert it to uppercase
        return str.trim().charAt(0).toUpperCase();
    } else {
        // Return an empty string if the input is empty
        return "";
    }
}
function intFloatConversion(input) {
    const number = parseFloat(input.toFixed(2).toString());
    if (Number.isInteger(number)) {
        return number;
    } else {
        return number.toFixed(2);
    }
}
function isDigit(num) {
    return /^\d+$/.test(num);
}
function removeDuplicateWords(input) {
    // Split the input string into an array of words
    const words = input.split(" ");
    // Create a Set to store unique words
    const uniqueWords = new Set(words);
    // Convert the Set back into an array and join the words into a string
    const output = [
        ...uniqueWords
    ].join(" ");
    return output;
}
function textTruncate(text, length) {
    if (text.length <= length) return text;
    else return `${text.substring(0, length - 3)}...`;
}

})()),
"[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SelectRole
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/GoogleIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$formater$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/text-formater.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function SelectRole({ formData, setFormData }) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_SelectRole, {
            role: formData.role,
            setFormData: setFormData
        }, void 0, false, {
            fileName: "[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx",
            lineNumber: 17,
            columnNumber: 11
        }, this), [
        formData.role,
        setFormData
    ]);
}
_s(SelectRole, "nwk+m61qLgjDVUp4IGV/072DDN4=");
_c = SelectRole;
function _SelectRole({ role, setFormData }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("SelectRole");
    const [isApear, setIsApear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function doApear() {
        setIsApear(true);
        setTimeout(()=>{
            if (isApear === false) setIsApear(true);
        }, 300);
    }
    function doDisapear() {
        setTimeout(()=>setIsApear(false), 300);
    }
    function updateValue(val) {
        setFormData((prev)=>prev && {
                ...prev,
                role: val
            });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                required: true,
                                value: role,
                                onChange: ()=>{},
                                onFocus: doApear,
                                onBlur: doDisapear,
                                className: "w-0 h-0 absolute"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cursor-pointer hover:underline hover:textBlue",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$formater$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertFirstLetterInUppercase"])(role)
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrow.dropdown, {
                        className: "fill-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            isApear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-max py-2 absolute top-[20px] bg-white dark:bgBlack boxShadowMenu z-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3",
                        onClick: ()=>updateValue("teacher"),
                        children: "Teacher"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3",
                        onClick: ()=>updateValue("student"),
                        children: "Student"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3",
                        onClick: ()=>updateValue("other"),
                        children: "Other"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s1(_SelectRole, "kWukg906lsbjqAwOhCa0mXhwbh8=");
var _c;
__turbopack_refresh__.register(_c, "SelectRole");

})()),
"[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SelectProgram
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/api-handler/swr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/GoogleIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/more.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/endpoints.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function SelectProgram({ formData, setFormData }) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_SelectProgram, {
            program: formData.program,
            setFormData: setFormData
        }, void 0, false, {
            fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this), [
        formData.program,
        setFormData
    ]);
}
_s(SelectProgram, "nwk+m61qLgjDVUp4IGV/072DDN4=");
_c = SelectProgram;
function _SelectProgram({ program, setFormData }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("SelectProgram");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    let isSearching = false;
    const [isApear, setIsApear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchKey, setSearchKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const inputID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get program data
    const [res] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readAllProgram);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!res) return;
        if (res.status === 200) {
            const data = res.data;
            setData(data);
        /*
      // Set the first value
      setFormData((prev) => ({
        ...prev,
        program: { id: data[0].id, full: data[0].full, short: data[0].short },
      }));
      */ }
    }, [
        res,
        setData,
        setFormData
    ]);
    function doApear() {
        setIsApear(true);
        setTimeout(()=>{
            if (isApear === false) setIsApear(true);
        }, 300);
    }
    function doDisapear() {
        setTimeout(()=>{
            if (isSearching === false) {
                setIsApear(false);
                setSearchKey("");
            }
        }, 300);
    }
    function updateValue(obj) {
        setFormData((prev)=>prev && {
                ...prev,
                program: obj
            });
        setIsApear(false);
    }
    let recordFound = false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "textField caretNone",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        required: true,
                        ref: inputID,
                        value: `${program.full}`,
                        onChange: ()=>{},
                        onFocus: doApear,
                        onBlur: doDisapear,
                        autoComplete: "off",
                        spellCheck: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Program"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            isApear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-h-[250px] py-2 absolute top-[50px] overflow-y-auto bg-white dark:bgBlack boxShadowMenu z-1",
                onMouseLeave: ()=>{
                    inputID.current?.focus();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-4 mt-2 mb-3 px-2 flex items-center gap-1 border border-gray-300 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].search, {
                                className: "fill-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "w-full px-1 py-2",
                                    placeholder: "Search",
                                    spellCheck: false,
                                    onFocus: ()=>isSearching = true,
                                    onBlur: ()=>isSearching = false,
                                    value: searchKey,
                                    onChange: (e)=>setSearchKey(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    data === undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this) : data.map((record, index)=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchKeywordMatched"])(`${record.full} (${record.short})`, searchKey) === false) return;
                        recordFound = true;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3",
                            onClick: ()=>updateValue({
                                    id: record.id,
                                    full: record.full,
                                    short: record.short
                                }),
                            children: record.full
                        }, index, false, {
                            fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
                            lineNumber: 147,
                            columnNumber: 17
                        }, this);
                    }),
                    data && recordFound == false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3",
                        children: "No record found"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s1(_SelectProgram, "gpJO05DZahEOVac3MvTyEt7AHFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"]
    ];
});
var _c;
__turbopack_refresh__.register(_c, "SelectProgram");

})()),
"[project]/src/app/c/variables.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const $ = {
    userTableMutate: async ()=>{}
};
const __TURBOPACK__default__export__ = $;

})()),
"[project]/src/app/c/BlankPageLoader.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>BlankPageLoader,
    "hideLoader": ()=>hideLoader,
    "showLoader": ()=>showLoader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$LineLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/preloader/LineLoader.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function showLoader() {
    const el = document.getElementById("blankPageLoaderId");
    if (el) {
        el.style.opacity = "0.7";
        el.style.pointerEvents = "all";
    }
}
function hideLoader() {
    const el = document.getElementById("blankPageLoaderId");
    if (el) {
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
    }
}
function BlankPageLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "blankPageLoaderId",
        className: "w-full h-full fixed top-0 left-0 z-51 bg-white dark:bgBlack opacity-70 transition-all duration-250 ease-linear",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$LineLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/c/BlankPageLoader.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/c/BlankPageLoader.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = BlankPageLoader;
var _c;
__turbopack_refresh__.register(_c, "BlankPageLoader");

})()),
"[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>CreateUserModal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModalContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ModalContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/GlobalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/api-handler/axios.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$IconSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/IconSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/GoogleIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/preloader/SpinLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2d$image$2f$Fish$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/svg-image/Fish.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/more.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/global-variables.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$SelectGender$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/TabList/CreateBtn/SelectGender.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$SelectSession$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/TabList/CreateBtn/SelectSession.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$SelectDepartment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/TabList/CreateBtn/SelectDepartment.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$SelectRole$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/TabList/CreateBtn/SelectRole.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$SelectProgram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/TabList/CreateBtn/SelectProgram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/variables.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$BlankPageLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/BlankPageLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/endpoints.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/api-handler/swr.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function CreateUserModal({ type, editId, setOpenModal }) {
    _s();
    const { activeTab } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_CreateUserModal, {
            type: type,
            editId: editId,
            setOpenModal: setOpenModal,
            activeTab: activeTab
        }, void 0, false, {
            fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this), [
        activeTab
    ]);
}
_s(CreateUserModal, "wEw2fcEI+K7Yqq73t34wX9C+2fU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = CreateUserModal;
function _CreateUserModal({ type, editId, setOpenModal, activeTab }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("CreateUserModal");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const closeModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModalContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closingTransition"])(()=>{
            setOpenModal((prev)=>!prev);
        });
    }, [
        setOpenModal
    ]);
    const initialData = {
        id: 0,
        name: "",
        email: "",
        image: "",
        gender: "",
        academicId: 0,
        session: {
            id: 0,
            value: ""
        },
        program: {
            id: 0,
            full: "",
            short: ""
        },
        department: {
            id: 0,
            full: "",
            short: ""
        },
        faculty: {
            id: 0,
            full: "",
            short: ""
        },
        designation: "",
        about: "",
        role: "teacher",
        isMuted: false,
        mutedAt: "",
        createdAt: "",
        updatedAt: ""
    };
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [resetData, setResetData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [btnState, setBtnState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("disable");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            if (type === "create") {
                setFormData(initialData);
                setResetData(initialData);
            } else {
                // Read a user data
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readAUserInfo + editId);
                if (res.status === 200) {
                    // Here initialData is a template that contains all keys, whereas res.data contains required keys
                    setFormData({
                        ...initialData,
                        ...res.data
                    });
                    setResetData({
                        ...initialData,
                        ...res.data
                    });
                }
            }
        })();
    }, []);
    // when writing on input field
    function writingOnInputField(e) {
        setFormData((prev)=>prev && {
                ...prev,
                [e.target.name]: e.target.value
            });
    }
    // Update save/update button state
    // Determine when save/update button is active/disabled
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!formData) return;
        if (formData.name === "" || formData.email === "" || formData.gender === "") setBtnState("disable");
        else if (formData.role === "teacher") {
            if (formData.designation === "" || formData.department.full === "") setBtnState("disable");
            else setBtnState("active");
        } else if (formData.role === "student") {
            if (formData.academicId === 0 || formData.session.value === "" || formData.program.full === "") setBtnState("disable");
            else setBtnState("active");
        } else if (formData.role === "other") {
            if (formData.designation === "") setBtnState("disable");
            else setBtnState("active");
        }
    }, [
        formData
    ]);
    async function doSubmit() {
        setBtnState("loading");
        let res;
        if (type === "create") res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createUser, formData);
        else res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].updateUser, {
            ...formData,
            id: editId
        });
        if (res.status !== 200) {
            setBtnState("active");
            alert(res.message);
            return;
        }
        const targetTab = `${formData?.role}s`;
        if (activeTab === targetTab) await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].userTableMutate();
        else {
            if (targetTab === "teachers") await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mutate"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readAllTeachersData + "?limit=50&&isMuted=0");
            else if (targetTab === "students") await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mutate"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readAllStudentsData + "?limit=50&&isMuted=0");
            if (targetTab === "others") await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mutate"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readAllOtherUsersData + "?limit=50&&isMuted=0");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$BlankPageLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showLoader"])();
            router.replace(`/c/${targetTab}`);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mutate"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readCountSummary);
        closeModal();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ModalContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[600px] max-h-[757px] overflow-y-auto px-8 py-12 bg-white dark:bgBlack2 rounded-lg",
            children: formData === undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$IconSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Back",
                            onClick: closeModal,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrow.back, {
                                className: "fill-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 216,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                            lineNumber: 215,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                        lineNumber: 214,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex justify-center pt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                            lineNumber: 221,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                        lineNumber: 220,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(formData) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$IconSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Back",
                            onClick: closeModal,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrow.back, {
                                className: "fill-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 229,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                            lineNumber: 228,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                        lineNumber: 227,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col justify-center items-center pt-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2d$image$2f$Fish$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "w-[170px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 234,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 fontGsm text-gray-500",
                                children: "No user data found!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                        lineNumber: 233,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$IconSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "Back",
                                onClick: closeModal,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrow.back, {
                                    className: "fill-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 244,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `btn2 !rounded-[20px]  ${btnState === "loading" && "opacity-50 pointer-events-none"}`,
                                        onClick: ()=>setFormData((prev)=>prev && {
                                                    ...prev,
                                                    ...resetData
                                                }),
                                        children: "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this),
                                    btnState === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btnDisable !rounded-[20px]",
                                        children: type === "create" ? "Creating..." : "Updating..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 265,
                                        columnNumber: 19
                                    }, this) : btnState === "disable" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btnDisable !rounded-[20px]",
                                        children: type === "create" ? "Create" : "Update"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 269,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn !rounded-[20px]",
                                        onClick: doSubmit,
                                        children: type === "create" ? "Create" : "Update"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 273,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 247,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                        lineNumber: 243,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex justify-start items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: formData.image || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultUserImg,
                                className: "rounded-full",
                                width: "162",
                                height: "162",
                                alt: "Profile image"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 282,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$SelectRole$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                formData: formData,
                                setFormData: setFormData
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                        lineNumber: 281,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].person, {
                                        className: "fill-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 296,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "textField",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                name: "name",
                                                value: formData.name,
                                                onChange: writingOnInputField,
                                                autoComplete: "off",
                                                spellCheck: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                                lineNumber: 298,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 297,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].email, {
                                        className: "fill-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 312,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "textField",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                name: "email",
                                                value: formData.email,
                                                onChange: writingOnInputField,
                                                autoComplete: "off",
                                                spellCheck: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                                lineNumber: 314,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                                lineNumber: 323,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 313,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 311,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "fill-gray-500",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        height: "24px",
                                        viewBox: "0 -960 960 960",
                                        width: "24px",
                                        fill: "#5f6368",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M220-80v-300h-60v-220q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v220h-60v300H220Zm80-640q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720ZM600-80v-240H480l102-306q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l102 306H720v240H600Zm60-640q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                            lineNumber: 336,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 328,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$SelectGender$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        formData: formData,
                                        setFormData: setFormData
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 338,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 327,
                                columnNumber: 15
                            }, this),
                            formData.role !== "student" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clock, {
                                        className: "fill-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 343,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "textField",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                name: "designation",
                                                value: formData.designation,
                                                onChange: writingOnInputField,
                                                autoComplete: "off",
                                                spellCheck: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                                lineNumber: 345,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Designation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                                lineNumber: 354,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 344,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 342,
                                columnNumber: 17
                            }, this),
                            formData.role === "student" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "fill-gray-500",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        height: "24px",
                                        viewBox: "0 -960 960 960",
                                        width: "24px",
                                        fill: "#5f6368",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M160-80q-33 0-56.5-23.5T80-160v-440q0-33 23.5-56.5T160-680h200v-120q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v120h200q33 0 56.5 23.5T880-600v440q0 33-23.5 56.5T800-80H160Zm0-80h640v-440H600q0 33-23.5 56.5T520-520h-80q-33 0-56.5-23.5T360-600H160v440Zm80-80h240v-18q0-17-9.5-31.5T444-312q-20-9-40.5-13.5T360-330q-23 0-43.5 4.5T276-312q-17 8-26.5 22.5T240-258v18Zm320-60h160v-60H560v60Zm-200-60q25 0 42.5-17.5T420-420q0-25-17.5-42.5T360-480q-25 0-42.5 17.5T300-420q0 25 17.5 42.5T360-360Zm200-60h160v-60H560v60ZM440-600h80v-200h-80v200Zm40 220Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                            lineNumber: 369,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 361,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "textField",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                required: true,
                                                name: "academicId",
                                                value: formData.academicId || "",
                                                onChange: writingOnInputField,
                                                autoComplete: "off",
                                                spellCheck: false
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                                lineNumber: 372,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Academic ID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                                lineNumber: 381,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 371,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 360,
                                columnNumber: 17
                            }, this),
                            formData.role === "student" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clock, {
                                        className: "fill-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 388,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$SelectSession$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        formData: formData,
                                        setFormData: setFormData
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 389,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 387,
                                columnNumber: 17
                            }, this),
                            formData.role === "student" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "fill-gray-500",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        height: "24px",
                                        viewBox: "0 -960 960 960",
                                        width: "24px",
                                        fill: "#5f6368",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M640-120q-33 0-56.5-23.5T560-200v-160q0-33 23.5-56.5T640-440h160q33 0 56.5 23.5T880-360v160q0 33-23.5 56.5T800-120H640Zm0-80h160v-160H640v160ZM80-240v-80h360v80H80Zm560-280q-33 0-56.5-23.5T560-600v-160q0-33 23.5-56.5T640-840h160q33 0 56.5 23.5T880-760v160q0 33-23.5 56.5T800-520H640Zm0-80h160v-160H640v160ZM80-640v-80h360v80H80Zm640 360Zm0-400Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                            lineNumber: 406,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 398,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$SelectProgram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        formData: formData,
                                        setFormData: setFormData
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 408,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 397,
                                columnNumber: 17
                            }, this),
                            formData.role === "teacher" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "fill-gray-500",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        height: "24px",
                                        viewBox: "0 -960 960 960",
                                        width: "24px",
                                        fill: "#5f6368",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                            lineNumber: 425,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 417,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$SelectDepartment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        formData: formData,
                                        setFormData: setFormData
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                        lineNumber: 427,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                lineNumber: 416,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                        lineNumber: 293,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 pt-5 flex justify-start items-center gap-3 border-t border-gray-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cursor-pointer hover:underline flex items-center gap-1",
                            onClick: ()=>setFormData((prev)=>prev && {
                                        ...prev,
                                        isMuted: !prev.isMuted
                                    }),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `fontGsm ${formData.isMuted ? "textBlue" : "text-gray-500"}`,
                                    children: "Muted"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                    lineNumber: 448,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].selectCircle, {
                                    fill: formData.isMuted,
                                    className: formData.isMuted ? "fillBlue" : "fill-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                                    lineNumber: 455,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                            lineNumber: 436,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
                        lineNumber: 435,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
            lineNumber: 210,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_s1(_CreateUserModal, "liquAufm6zEZZKuE8dpT/KhHaA0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
var _c;
__turbopack_refresh__.register(_c, "CreateUserModal");

})()),
"[project]/src/app/c/TabList/CreateBtn/CreateBtn.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>CreateBtn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/GoogleIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$CreateUserModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/TabList/CreateBtn/CreateUserModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function CreateBtn() {
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("CreateBtn");
    const [openModal, setOpenModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setOpenModal((prev)=>!prev),
                className: "w-fit mb-4 py-2 pl-3 pr-4 flex justify-between items-center gap-1 btn !rounded-[20px] bgBlue hover:bgBlue2 cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].plus, {
                        className: "fill-white"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateBtn.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fontGsm text-white",
                        children: "Create User"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/CreateBtn/CreateBtn.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateBtn.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            openModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$CreateUserModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: "create",
                setOpenModal: setOpenModal
            }, void 0, false, {
                fileName: "[project]/src/app/c/TabList/CreateBtn/CreateBtn.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(CreateBtn, "uYk1wngonhmNAAo8U/frFfYvuzQ=");
_c = CreateBtn;
var _c;
__turbopack_refresh__.register(_c, "CreateBtn");

})()),
"[project]/src/app/c/TabList/SessionIcon.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SessionIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function SessionIcon({ fill }) {
    if (fill !== true) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "fill-gray-500",
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 -960 960 960",
        width: "24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M360-240h440v-107H360v107ZM160-613h120v-107H160v107Zm0 187h120v-107H160v107Zm0 186h120v-107H160v107Zm200-186h440v-107H360v107Zm0-187h440v-107H360v107ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"
        }, void 0, false, {
            fileName: "[project]/src/app/c/TabList/SessionIcon.tsx",
            lineNumber: 11,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/c/TabList/SessionIcon.tsx",
        lineNumber: 4,
        columnNumber: 7
    }, this);
    else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "fill-gray-500",
        xmlns: "http://www.w3.org/2000/svg",
        height: "24px",
        viewBox: "0 -960 960 960",
        width: "24px",
        fill: "#5f6368",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M360-160h440q33 0 56.5-23.5T880-240v-80H360v160ZM80-640h200v-160H160q-33 0-56.5 23.5T80-720v80Zm0 240h200v-160H80v160Zm80 240h120v-160H80v80q0 33 23.5 56.5T160-160Zm200-240h520v-160H360v160Zm0-240h520v-80q0-33-23.5-56.5T800-800H360v160Z"
        }, void 0, false, {
            fileName: "[project]/src/app/c/TabList/SessionIcon.tsx",
            lineNumber: 24,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/c/TabList/SessionIcon.tsx",
        lineNumber: 16,
        columnNumber: 7
    }, this);
}
_c = SessionIcon;
var _c;
__turbopack_refresh__.register(_c, "SessionIcon");

})()),
"[project]/src/components/icons/GithubIcons.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const GithubIcons = {
    close: ({ className, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            "aria-hidden": "true",
            focusable: "false",
            role: "img",
            viewBox: "0 0 16 16",
            width: "16",
            height: "16",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GithubIcons.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GithubIcons.tsx",
            lineNumber: 3,
            columnNumber: 5
        }, this),
    //   *****
    comment: ({ className, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            "aria-hidden": "true",
            height: "16",
            viewBox: "0 0 16 16",
            version: "1.1",
            width: "16",
            "data-view-component": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GithubIcons.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GithubIcons.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, this),
    //   *****
    dropdown: ({ className, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            "aria-hidden": "true",
            height: "16",
            viewBox: "0 0 16 16",
            version: "1.1",
            width: "16",
            "data-view-component": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GithubIcons.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GithubIcons.tsx",
            lineNumber: 34,
            columnNumber: 5
        }, this),
    //   *****
    arrowDown: ({ className, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            "aria-hidden": "true",
            focusable: "false",
            role: "img",
            viewBox: "0 0 16 16",
            width: "16",
            height: "16",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GithubIcons.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GithubIcons.tsx",
            lineNumber: 49,
            columnNumber: 5
        }, this),
    //   *****
    edit: ({ className, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            "aria-hidden": "true",
            focusable: "false",
            role: "img",
            viewBox: "0 0 16 16",
            width: "16",
            height: "16",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GithubIcons.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GithubIcons.tsx",
            lineNumber: 65,
            columnNumber: 5
        }, this),
    //   *****
    listMenu: ({ className, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            "aria-hidden": "true",
            focusable: "false",
            role: "img",
            viewBox: "0 0 16 16",
            width: "16",
            height: "16",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GithubIcons.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GithubIcons.tsx",
            lineNumber: 81,
            columnNumber: 5
        }, this),
    //   *****
    search: ({ className, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            "aria-hidden": "true",
            focusable: "false",
            role: "img",
            viewBox: "0 0 16 16",
            width: "16",
            height: "16",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GithubIcons.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GithubIcons.tsx",
            lineNumber: 97,
            columnNumber: 5
        }, this),
    //   *****
    tik: ({ className, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            "aria-hidden": "true",
            focusable: "false",
            role: "img",
            viewBox: "0 0 16 16",
            width: "16",
            height: "16",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GithubIcons.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GithubIcons.tsx",
            lineNumber: 113,
            columnNumber: 5
        }, this),
    //   *****
    plus: ({ className, style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: className,
            style: style,
            "aria-hidden": "true",
            height: "16",
            viewBox: "0 0 16 16",
            version: "1.1",
            width: "16",
            "data-view-component": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/GithubIcons.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/GithubIcons.tsx",
            lineNumber: 130,
            columnNumber: 5
        }, this)
};
const __TURBOPACK__default__export__ = GithubIcons;

})()),
"[project]/src/app/c/TabList/ThemeDropdown.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ThemeDropdown": ()=>ThemeDropdown
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GithubIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/GithubIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function ThemeDropdown({ theme, setTheme }) {
    _s();
    const [isApear, setIsApear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "w-0 h-0 absolute",
                        onClick: ()=>{
                            setIsApear(true);
                            setTimeout(()=>setIsApear(true), 260);
                        },
                        onBlur: ()=>{
                            setTimeout(()=>setIsApear(false), 250);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/ThemeDropdown.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cursor-pointer hover:underline text-xs text-gray-500",
                        children: "Theme"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/ThemeDropdown.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/ThemeDropdown.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `min-w-[128px] w-max py-2 absolute rounded-md bg-white dark:bgBlack2 boxShadowMenu z-1 overflow-hidden ${!isApear ? "bottom-[0px] -left-[20px] pointer-events-none opacity-0" : "transition-all ease-linear duration-250 bottom-[28px] left-0 pointer-events-all opacity-1"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dotMenusLiHover px-4 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-blue-50",
                        onClick: ()=>setTheme("light"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Light Mode"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/ThemeDropdown.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            theme === "light" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GithubIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tik, {
                                className: "fill-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/ThemeDropdown.tsx",
                                lineNumber: 47,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/TabList/ThemeDropdown.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dotMenusLiHover px-4 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-blue-50",
                        onClick: ()=>setTheme("dark"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Dark Mode"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/ThemeDropdown.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            theme === "dark" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GithubIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tik, {
                                className: "fill-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/ThemeDropdown.tsx",
                                lineNumber: 54,
                                columnNumber: 32
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/TabList/ThemeDropdown.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/ThemeDropdown.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/TabList/ThemeDropdown.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(ThemeDropdown, "kWukg906lsbjqAwOhCa0mXhwbh8=");
_c = ThemeDropdown;
var _c;
__turbopack_refresh__.register(_c, "ThemeDropdown");

})()),
"[project]/src/app/c/TabList/TabList.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>TabList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$CreateBtn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/TabList/CreateBtn/CreateBtn.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$SessionIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/TabList/SessionIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$ThemeDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/TabList/ThemeDropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/more.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$ThemeContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/ThemeContextProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/GlobalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/GoogleIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$BlankPageLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/BlankPageLoader.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function TabList() {
    _s();
    const { myAccess, activeTab, countSummary, navSearchBar, setNavSearchBar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$ThemeContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_TabList, {
            myAccess: myAccess,
            activeTab: activeTab,
            countSummary: countSummary,
            navSearchBar: navSearchBar,
            setNavSearchBar: setNavSearchBar,
            theme: theme,
            setTheme: setTheme
        }, void 0, false, {
            fileName: "[project]/src/app/c/TabList/TabList.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this), [
        myAccess,
        activeTab,
        countSummary,
        navSearchBar,
        setNavSearchBar,
        theme,
        setTheme
    ]);
}
_s(TabList, "FltiOFLAEatAa/+HhVb2TM++deM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$ThemeContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = TabList;
function _TabList({ myAccess, activeTab, countSummary, navSearchBar, setNavSearchBar, theme, setTheme }) {
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("TabList");
    function clickOnLink() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$BlankPageLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showLoader"])();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notNull"])(navSearchBar.keyword)) {
            setNavSearchBar((prev)=>({
                    ...prev,
                    actualKey: "",
                    debouncedKey: ""
                }));
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[300px] h-fit px-4 shrink-0 sticky top-[80px]",
        children: [
            myAccess?.createUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$CreateBtn$2f$CreateBtn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                lineNumber: 79,
                columnNumber: 32
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-4 py-2.5 fontGsm",
                children: "Users"
            }, void 0, false, {
                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/c/teachers",
                onClick: ()=>activeTab !== "teachers" && clickOnLink(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full pl-4 pr-5 py-2.5 rounded-[24px] flex justify-between items-center gap-1 cursor-pointer ${activeTab === "teachers" ? "bg-blue-100" : "hover:bg-blue-100"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].person, {
                                    className: "fill-gray-500",
                                    fill: activeTab === "teachers"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fontGsm text-gray-600",
                                    children: "Teachers"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/c/TabList/TabList.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fontGsm text-gray-600",
                            children: countSummary.teachers.total
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/TabList/TabList.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/c/students",
                onClick: ()=>activeTab !== "students" && clickOnLink(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full pl-4 pr-5 py-2.5 rounded-[24px] flex justify-between items-center gap-1 cursor-pointer ${activeTab === "students" ? "bg-blue-100" : "hover:bg-blue-100"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graducationCap, {
                                    className: "fill-gray-500",
                                    fill: activeTab === "students"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fontGsm text-gray-600",
                                    children: "Students"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/c/TabList/TabList.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fontGsm text-gray-600",
                            children: countSummary.students.total
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/TabList/TabList.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/c/others",
                onClick: ()=>activeTab !== "others" && clickOnLink(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full pl-4 pr-5 py-2.5 rounded-[24px] flex justify-between items-center gap-1 cursor-pointer ${activeTab === "others" ? "bg-blue-100" : "hover:bg-blue-100"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].person2, {
                                    className: "fill-gray-500",
                                    fill: activeTab === "others"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fontGsm text-gray-600",
                                    children: "Others"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/c/TabList/TabList.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fontGsm text-gray-600",
                            children: countSummary.others.total
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/TabList/TabList.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pl-4 py-2.5 fontGsm",
                children: "More"
            }, void 0, false, {
                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/c/faculty",
                onClick: ()=>activeTab !== "faculty" && clickOnLink(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full pl-4 pr-5 py-2.5 rounded-[24px] flex justify-between items-center gap-1 cursor-pointer ${activeTab === "faculty" ? "bg-blue-100" : "hover:bg-blue-100"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "fill-gray-500",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    height: "24",
                                    viewBox: "0 -960 960 960",
                                    width: "24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M80-160v-80h800v80H80Zm80-160v-320h80v320h-80Zm160 0v-480h80v480h-80Zm160 0v-480h80v480h-80Zm280 0L600-600l70-40 160 280-70 40Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fontGsm text-gray-600",
                                    children: "Faculty"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/c/TabList/TabList.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fontGsm text-gray-600",
                            children: countSummary.faculty
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/TabList/TabList.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/c/session",
                onClick: ()=>activeTab !== "session" && clickOnLink(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full pl-4 pr-5 py-2.5 rounded-[24px] flex justify-between items-center gap-1 cursor-pointer ${activeTab === "session" ? "bg-blue-100" : "hover:bg-blue-100"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$SessionIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    fill: activeTab === "session"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fontGsm text-gray-600",
                                    children: "Session"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/c/TabList/TabList.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fontGsm text-gray-600",
                            children: countSummary.session.total
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/TabList/TabList.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/c/access",
                onClick: ()=>activeTab !== "access" && clickOnLink(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full pl-4 pr-5 py-2.5 rounded-[24px] flex justify-between items-center gap-1 cursor-pointer ${activeTab === "access" ? "bg-blue-100" : "hover:bg-blue-100"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].access, {
                                fill: activeTab === "access",
                                className: "fill-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fontGsm text-gray-600",
                                children: "Access"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/TabList/TabList.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/c/history",
                onClick: ()=>activeTab !== "history" && clickOnLink(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full pl-4 pr-5 py-2.5 rounded-[24px] flex justify-between items-center gap-1 cursor-pointer ${activeTab === "history" ? "bg-blue-100" : "hover:bg-blue-100"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].history, {
                                className: "fill-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fontGsm text-gray-600",
                                children: "History"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/TabList/TabList.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/c/TabList/TabList.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 left-4 flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$TabList$2f$ThemeDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeDropdown"], {
                        theme: theme,
                        setTheme: setTheme
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/TabList.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cursor-pointer hover:underline text-xs text-gray-500",
                        onClick: ()=>alert("Added soon!"),
                        children: "Documentation"
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/TabList/TabList.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/TabList/TabList.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/TabList/TabList.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
var _c;
__turbopack_refresh__.register(_c, "TabList");

})()),
"[project]/src/app/c/DeviceDetectorRouter.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>DeviceDetectorRouter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/preloader/SpinLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/more.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function DeviceDetectorRouter({ children }) {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    function compare(pathname, pattern) {
        const pathnameArray = pathname.split("/");
        const patternArray = pattern.split("/");
        if (pathnameArray.length !== patternArray.length) return false;
        for(const i in pathnameArray){
            const path = pathnameArray[i];
            const pattern = patternArray[i];
            if (path !== pattern) {
                if (pattern === ":id") {
                    if (path === undefined || path === "") return false;
                } else return false;
            }
        }
        return true;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobileDevice"])()) {
            const pathname = window.location.pathname;
            if (compare(pathname, "/c/teachers")) router.replace("/m/teachers");
            else router.replace(pathname.replace("/c/", "/m/"));
        } else setIsMobile(false);
    }, []);
    if (isMobile === false) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
    else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex justify-center items-center transform -translate-y-[50px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/c/DeviceDetectorRouter.tsx",
            lineNumber: 47,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/c/DeviceDetectorRouter.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
}
_s(DeviceDetectorRouter, "IbXzAFEtgKkg9ySXy8hQJY9ZpQI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DeviceDetectorRouter;
var _c;
__turbopack_refresh__.register(_c, "DeviceDetectorRouter");

})()),
"[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>AccountMuted
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/global-variables.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/GlobalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stroage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/stroage.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function AccountMuted() {
    _s();
    const { loggedUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_AccountMuted, {
            loggedUser: loggedUser
        }, void 0, false, {
            fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
            lineNumber: 13,
            columnNumber: 24
        }, this), [
        loggedUser
    ]);
}
_s(AccountMuted, "2TiPvGnlgHKvy90ME3Hy0GvaFG4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = AccountMuted;
function _AccountMuted({ loggedUser }) {
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("AccountMuted");
    if (!loggedUser) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex justify-center items-center bg-white dark:bgBlack",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[480px] px-11 py-16 dark:bgBlack2 border border-gray-300 rounded-md flex flex-col justify-center items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/image/bdu-logo.png",
                    className: "mb-4",
                    width: "100",
                    height: "0",
                    alt: "BDU Logo"
                }, void 0, false, {
                    fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 fontGs text-xl",
                    children: "BDU UMS"
                }, void 0, false, {
                    fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2 fontGs text-xl",
                    children: [
                        "Hi, ",
                        loggedUser.name
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "It seems that your account has not yet been disabled."
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Kindly contact your advisor."
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mb-2",
                    children: "Current account:"
                }, void 0, false, {
                    fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mb-8 flex justify-between items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: loggedUser.image || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultUserImg,
                                    className: "max-w-[40px] max-h-[40px] rounded-full",
                                    width: "40",
                                    height: "40",
                                    alt: "Profile image"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fontGsm",
                                            children: loggedUser.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-500",
                                            children: loggedUser.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-1 bg-gray-200 dark:bgBlack4 text-gray-600 text-13",
                            children: "Muted"
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mb-6 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Try with another account:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loginSiteDomain}/c/logout`,
                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stroage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalStorage"].clear(),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                children: "Logout"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: [
                        "Having trouble to switch account? See the",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-600 hover:underline cursor-pointer",
                            onClick: ()=>alert("Added soon!"),
                            children: "documentation"
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
var _c;
__turbopack_refresh__.register(_c, "AccountMuted");

})()),
"[project]/src/app/c/AuthTokenReceiver/AuthTokenReceiver.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>AuthTokenReceiver
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/GlobalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/preloader/SpinLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/api-handler/axios.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/endpoints.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$AuthTokenReceiver$2f$AccountMuted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/AuthTokenReceiver/AccountMuted.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/global-variables.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
function AuthTokenReceiver({ children }) {
    _s();
    const { loggedUser, setLoggedUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_AuthTokenReceiver, {
            children: children,
            loggedUser: loggedUser,
            setLoggedUser: setLoggedUser
        }, void 0, false, {
            fileName: "[project]/src/app/c/AuthTokenReceiver/AuthTokenReceiver.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this), [
        loggedUser,
        setLoggedUser
    ]);
}
_s(AuthTokenReceiver, "5E4XpX1xQdaS93gvbutBt0DN55I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = AuthTokenReceiver;
function _AuthTokenReceiver({ children, loggedUser, setLoggedUser }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("AuthTokenReceiver");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const getLoggedUserData = async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getLoggedUserData);
        if (res.status === 200) {
            if (res.data.isMuted) setPage("accountMuted");
            setLoggedUser(res.data);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Listen for the message event to receive authToken
        const handleAuthToken = (event)=>{
            if (event.origin === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loginSiteDomain) {
                const authToken = event.data;
                if (authToken === "unauthenticated") window.location.replace(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loginSiteDomain}/c/login?next=${window.location.href}`);
                else if (authToken) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].authToken = authToken;
                    getLoggedUserData();
                    setTimeout(()=>{
                        const el = document.getElementById("tokenReceiverIframe");
                        if (el) el.remove();
                    }, 1000);
                }
            }
        };
        window.addEventListener("message", handleAuthToken);
        // Clean up the event listener
        return ()=>{
            window.removeEventListener("message", handleAuthToken);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            page === "accountMuted" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$AuthTokenReceiver$2f$AccountMuted$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/c/AuthTokenReceiver/AuthTokenReceiver.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this) : loggedUser === undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex justify-center items-center transform -translate-y-[50px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/c/AuthTokenReceiver/AuthTokenReceiver.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/c/AuthTokenReceiver/AuthTokenReceiver.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                id: "tokenReceiverIframe",
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].loginSiteDomain + "/c/auth-token-provider",
                style: {
                    display: "none"
                },
                title: "Token Receiver"
            }, void 0, false, {
                fileName: "[project]/src/app/c/AuthTokenReceiver/AuthTokenReceiver.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(_AuthTokenReceiver, "igAukyVHVCue0WWnk2gRWgzoczI=");
var _c;
__turbopack_refresh__.register(_c, "AuthTokenReceiver");

})()),
"[project]/src/app/c/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_7823cd._.js.map