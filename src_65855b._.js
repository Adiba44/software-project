(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_65855b._.js", {

"[project]/src/utils/date-time-formatter.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "currentMiliseconds": ()=>currentMiliseconds,
    "dateTimeFormatter": ()=>dateTimeFormatter,
    "millisecondsToString": ()=>millisecondsToString,
    "stringToMilliseconds": ()=>stringToMilliseconds
});
function currentMiliseconds() {
    return new Date().getTime();
}
function dateTimeFormatter(inputDate, formatNo) {
    if (!inputDate) return "";
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    const currentDate = new Date(inputDate);
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = currentDate.toLocaleString('en-US', {
        month: 'long'
    });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const period = hour >= 12 ? 'PM' : 'AM';
    const Hour = hour === 12 ? 12 : hour === 0 ? 12 : hour % 12;
    if (formatNo === "January 1, 12:00 AM") return `${month} ${day}, ${Hour}:${minute.toString().padStart(2, '0')} ${period}`;
    else if (formatNo === "Jan 1, 2000, 12:00 AM") return `${month.substring(0, 3)} ${day}, ${year}, ${Hour}:${minute.toString().padStart(2, '0')} ${period}`;
    else if (formatNo === "Jan 1, 12:00 AM") return `${month.substring(0, 3)} ${day}, ${Hour}:${minute.toString().padStart(2, '0')} ${period}`;
    else if (formatNo === "January 1") return `${month} ${day}`;
    else if (formatNo === "Jan 1") return `${month.substring(0, 3)} ${day}`;
    else if (formatNo === "Jan 1, 2000") return `${month.substring(0, 3)} ${day}, ${year}`;
    else if (formatNo === "Saturday, Jan 1") return `${dayOfWeek}, ${month.substring(0, 3)} ${day}`;
    else if (formatNo === "Saturday, January 1, 2000, 12:00 AM") return `${dayOfWeek}, ${month} ${day}, ${year}, ${Hour}:${minute.toString().padStart(2, '0')} ${period}`;
    else if (formatNo === "12:00 AM") return `${Hour}:${minute.toString().padStart(2, '0')} ${period}`;
    else return "";
}
function stringToMilliseconds(dateString) {
    const dateObject = new Date(dateString);
    const timestampInMilliseconds = dateObject.getTime();
    return timestampInMilliseconds;
}
function millisecondsToString(milliseconds) {
    const date = new Date(milliseconds);
    // Get the individual components of the date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    // Create the formatted date string
    const dateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return dateString;
}

})()),
"[project]/src/components/svg-image/FlowerPot.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SvgFlowerPot
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function SvgFlowerPot({ className, size }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        width: size || "47",
        height: size || "75",
        viewBox: "0 0 47 75",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#clip0_4063_176488)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21.2363 31.7493C20.1916 30.6991 17.9478 29.7185 16.6086 29.1482C13.0115 27.6181 9.29529 26.248 6.09091 23.8764C2.88652 21.5048 0.285145 17.923 -0.00233788 13.8126C-0.121538 12.0878 0.250076 10.1961 1.47714 9.06944C3.1179 7.56718 5.59305 7.9288 7.68957 8.47128C10.7812 9.18201 13.7459 10.3545 16.4824 11.9487C19.3033 13.6085 21.5427 16.0871 22.8981 19.0497C24.0831 21.8316 24.3005 24.8918 24.4267 27.9172C24.6581 33.6967 24.9316 40.436 24.8684 46.0625C24.5108 46.1529 24.3356 46.2433 23.978 46.3337C23.7536 46.3337 23.8027 39.2188 23.7536 38.5929C23.4801 34.6008 22.9963 33.5089 21.2363 31.7493Z",
                        fill: "#34A853"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg-image/FlowerPot.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M27.7995 32.5842C29.5104 31.2767 31.607 30.6855 33.6474 30.1221L39.6705 28.46C40.5389 28.1088 41.5036 28.0694 42.3981 28.3487C42.8353 28.5876 43.2015 28.9363 43.46 29.3599C43.7184 29.7835 43.86 30.267 43.8706 30.762C43.8905 31.7733 43.5967 32.7662 43.0292 33.6066C41.718 35.693 39.5233 36.8823 37.2725 37.71C35.0217 38.5376 32.7148 39.1009 30.6463 40.2693C29.7667 40.8694 28.8268 41.3775 27.8416 41.7855C27.3511 41.9831 26.8143 42.0389 26.2932 41.9466C25.7721 41.8543 25.2879 41.6176 24.8967 41.2639C23.866 40.165 24.9317 38.4472 25.1 37.2161C25.2194 36.3055 25.5195 35.4274 25.9828 34.6324C26.4461 33.8374 27.0636 33.1413 27.7995 32.5842V32.5842Z",
                        fill: "#A8DAB5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg-image/FlowerPot.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M35.0974 16.852C37.0818 16.1148 39.3045 15.461 41.0995 14.2925C43.736 12.5399 44.6054 8.52003 43.3012 5.50856C42.6433 4.05792 41.6069 2.80772 40.2991 1.88709C38.9913 0.966459 37.4594 0.408754 35.8617 0.271512C31.4022 -0.124917 26.8516 2.77528 25.0846 7.1499C23.8085 10.3074 23.9347 13.8753 24.0819 17.304C24.4395 25.7333 24.6078 34.1627 24.9654 42.592C26.3117 43.0023 24.2151 43.0023 25.5614 42.592C25.5614 37.0281 25.4703 31.5059 25.2319 25.9907C25.0496 21.7204 31.1358 18.3542 35.0974 16.852Z",
                        fill: "#CEEAD6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg-image/FlowerPot.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M46.8755 39.9146L46.7353 42.9191V43.2946L45.7747 64.0828C45.7747 66.7408 44.7102 69.2899 42.8153 71.1694C40.9204 73.0489 38.3504 74.1048 35.6707 74.1048H18.1272C15.4475 74.1048 12.8775 73.0489 10.9826 71.1694C9.08776 69.2899 8.02324 66.7408 8.02324 64.0828L6.25626 43.2946L6.22121 42.9191L5.96875 39.9146H46.8755Z",
                        fill: "#FFE086",
                        stroke: "#FFE086",
                        strokeWidth: "0.44",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg-image/FlowerPot.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M46.7033 42.9258L46.6823 43.3013H6.27334L6.23828 42.9258H46.7033Z",
                        fill: "#FBBC04"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg-image/FlowerPot.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/svg-image/FlowerPot.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                    id: "clip0_4063_176488",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "47",
                        height: "74",
                        fill: "white",
                        transform: "translate(0 0.264648)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/svg-image/FlowerPot.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/svg-image/FlowerPot.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/svg-image/FlowerPot.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/svg-image/FlowerPot.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = SvgFlowerPot;
var _c;
__turbopack_refresh__.register(_c, "SvgFlowerPot");

})()),
"[project]/src/app/c/history/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Page
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/GlobalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$BlankPageLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/BlankPageLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/api-handler/swr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/more.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/preloader/SpinLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/api/endpoints.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/global-variables.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$date$2d$time$2d$formatter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/date-time-formatter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/api-handler/axios.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/text-encode-decode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2d$image$2f$FlowerPot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/svg-image/FlowerPot.tsx [app-client] (ecmascript)");
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
function Page() {
    _s();
    const { myAccess, setActiveTab, doRefetch, navSearchBar, setNavSearchBar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_Page, {
            myAccess: myAccess,
            setActiveTab: setActiveTab,
            doRefetch: doRefetch,
            navSearchBar: navSearchBar,
            setNavSearchBar: setNavSearchBar
        }, void 0, false, {
            fileName: "[project]/src/app/c/history/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this), [
        myAccess,
        setActiveTab,
        doRefetch,
        navSearchBar,
        setNavSearchBar
    ]);
}
_s(Page, "K6YMHSJZdaILjwf8lpakkwAUsR0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Page;
function _Page({ myAccess, setActiveTab, doRefetch, navSearchBar, setNavSearchBar }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("Page");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.title = "History";
        setActiveTab("history");
    }, [
        setActiveTab
    ]);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [haveMoreData, setHaveMoreData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showRefetchLoader, setShowRefetchLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [limit, setLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    /*****
   * Get all users data
   ******/ const [res, mutate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readAllHistory + "?limit=" + limit + "&&searchKey=" + navSearchBar.keyword.trim() + "&&mine=" + (myAccess?.viewOthersHistory ? 0 : 1));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!res) return;
        if (res.status === 200) {
            setData(res.data);
            setHaveMoreData(res.haveMoreData);
            setNavSearchBar((prev)=>({
                    ...prev,
                    isLoading: false
                }));
            setShowRefetchLoader(false);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$BlankPageLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideLoader"])();
    }, [
        res
    ]);
    /*****
   * Reload data fetchers
   ******/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (doRefetch) mutate();
    }, [
        doRefetch,
        mutate
    ]);
    /*****
   * Refetching record on scroll
   ******/ const observerTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            if (entries[0] && entries[0].isIntersecting) {
                if (haveMoreData) {
                    setShowRefetchLoader(true);
                    setLimit((prev)=>prev + 50);
                }
            }
        }, {
            threshold: 0.1
        });
        const el = observerTarget.current;
        if (haveMoreData && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(navSearchBar.keyword) && !showRefetchLoader) {
            if (el) observer.observe(el);
        } else {
            if (el) observer.unobserve(el);
        }
        return ()=>{
            if (el) observer.unobserve(el);
        };
    }, [
        observerTarget,
        data,
        navSearchBar.keyword,
        showRefetchLoader,
        setLimit,
        haveMoreData
    ]);
    // Function: Is undo button shown?
    function remainingUndoTime(timeString) {
        const givenTime = new Date(timeString);
        const currentTime = new Date();
        const diffInMilliseconds = currentTime - givenTime;
        const diffInMinutes = Math.floor(diffInMilliseconds / 1000 / 60);
        const hours = Math.floor(diffInMinutes / 60);
        const minutes = diffInMinutes % 60;
        const h = 24 - hours;
        const m = 60 - minutes;
        if (h <= 0) return undefined;
        else if (m <= 0) return undefined;
        else return `${h}h`;
    }
    // Undo delete related --->
    const [undoingId, setUndoingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    async function undoFunctions(encodedData, historyId) {
        setUndoingId((prev)=>[
                ...prev,
                encodedData
            ]);
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(encodedData);
        if (data.case === "delete user") await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteUser + "undo/" + data.userId);
        else if (data.case === "delete faculty") await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteFaculty + "undo/" + data.facultyId);
        else if (data.case === "delete department") await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteDepartment + "undo/" + data.departmentId);
        else if (data.case === "delete program") await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteProgram + "undo/" + data.programId);
        else if (data.case === "delete session") await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteSession + "undo/" + data.sessionId);
        // Delete history
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].deleteHistory + historyId);
        if (res.status === 200) await mutate();
        setUndoingId((prev)=>prev.filter((id)=>id !== encodedData));
    }
    // <--- Undo delete related
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full px-8 py-6 bg-white dark:bgBlack2 rounded-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-2 text-gray-600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fontGs text-2xl",
                    children: "History"
                }, void 0, false, {
                    fileName: "[project]/src/app/c/history/page.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/c/history/page.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: data !== undefined && (data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: myAccess?.viewOthersHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-fit mx-auto my-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2d$image$2f$FlowerPot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: 130
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/history/page.tsx",
                                lineNumber: 200,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-center fontGsm text-gray-500",
                                children: "No history found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/history/page.tsx",
                                lineNumber: 201,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/history/page.tsx",
                        lineNumber: 199,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-fit mx-auto my-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2d$image$2f$FlowerPot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: 130
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/history/page.tsx",
                                lineNumber: 207,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-center fontGsm text-gray-500",
                                children: "You have no history"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/history/page.tsx",
                                lineNumber: 208,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/history/page.tsx",
                        lineNumber: 206,
                        columnNumber: 17
                    }, this)
                }, void 0, false) : data.map((record, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-0.5 fontGsm",
                                children: record.text
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/history/page.tsx",
                                lineNumber: 218,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        // src={record.user.image || $$.defaultUserImg}
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultUserImg,
                                        className: "rounded-full",
                                        width: "16",
                                        height: "16",
                                        alt: "Profile image"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/history/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500",
                                        children: record.user.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/history/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 h-1 bg-gray-500 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/history/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$date$2d$time$2d$formatter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateTimeFormatter"])(record.createdAt, "Jan 1, 2000")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/history/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 h-1 bg-gray-500 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/history/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500",
                                        children: record.action
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/history/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 21
                                    }, this),
                                    record.undoParams && remainingUndoTime(record.createdAt) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1 h-1 bg-gray-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/history/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 27
                                            }, this),
                                            undoingId.includes(record.undoParams) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                size: 28
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/history/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 29
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-2 text-xs textBlue bgLightBlue dark:bgBlack3 cursor-pointer rounded-full border hover:borderBlue hover:bg-white",
                                                onClick: ()=>undoFunctions(record.undoParams, record.id),
                                                children: "Undo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/history/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500",
                                                children: [
                                                    "within ",
                                                    remainingUndoTime(record.createdAt)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/c/history/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/history/page.tsx",
                                lineNumber: 219,
                                columnNumber: 19
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/c/history/page.tsx",
                        lineNumber: 217,
                        columnNumber: 17
                    }, this);
                }))
            }, void 0, false, {
                fileName: "[project]/src/app/c/history/page.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            showRefetchLoader === true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-center py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preloader$2f$SpinLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/c/history/page.tsx",
                    lineNumber: 267,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/c/history/page.tsx",
                lineNumber: 266,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/history/page.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, this);
}
_s1(_Page, "zdI88kLOCz2jlnK77Ub71xvEzBg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"]
    ];
});
var _c;
__turbopack_refresh__.register(_c, "Page");

})()),
"[project]/src/app/c/history/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_65855b._.js.map