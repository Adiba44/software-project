(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_f543cf._.js", {

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
"[project]/src/app/c/[user]/details/[id]/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>UserDetails
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$date$2d$time$2d$formatter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/date-time-formatter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/console.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/GlobalContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$BlankPageLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/c/BlankPageLoader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/more.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/text-encode-decode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/api-handler/swr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$IconSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/IconSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/icons/GoogleIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2d$image$2f$Fish$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/svg-image/Fish.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/global-variables.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
function UserDetails({ params }) {
    _s();
    const { doRefetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$text$2d$encode$2d$decode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(params.id);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(_UserDetails, {
            id: id,
            doRefetch: doRefetch
        }, void 0, false, {
            fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
            lineNumber: 22,
            columnNumber: 11
        }, this), [
        params,
        doRefetch
    ]);
}
_s(UserDetails, "zcULItzjc7wkdmJOA/aVoyl3rxc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$GlobalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = UserDetails;
function _UserDetails({ id, doRefetch }) {
    _s1();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$console$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].component("UserDetails");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    // Get a user info
    const [res, mutate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$endpoints$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readAUserInfo + id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!res) return;
        if (res.status === 200) setData(res.data);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$BlankPageLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideLoader"])();
    }, [
        res,
        setData
    ]);
    // Reload data fetchers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (doRefetch) mutate();
    }, [
        doRefetch,
        mutate
    ]);
    if (data === undefined) return null;
    else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$more$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNull"])(data)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col justify-center items-center pt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$svg$2d$image$2f$Fish$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "w-[170px]"
            }, void 0, false, {
                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 fontGsm text-gray-500",
                children: "No user data found!"
            }, void 0, false, {
                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
        lineNumber: 69,
        columnNumber: 7
    }, this);
    else {
        let userRole;
        if (data.role === "teacher") userRole = "Teacher";
        else if (data.role === "student") userRole = "Student";
        else userRole = "Other";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-white dark:bgBlack2 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[1000px] h-full px-8 py-6 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$IconSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Back",
                            onClick: ()=>{
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$c$2f$BlankPageLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showLoader"])();
                                history.back();
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].arrow.back, {
                                className: "fill-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex justify-start items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: data.image || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$global$2d$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultUserImg,
                                className: "rounded-full",
                                width: "162",
                                height: "162",
                                alt: "Profile image"
                            }, void 0, false, {
                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl mb-1",
                                        children: data.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm",
                                        children: userRole
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full mt-8 flex items-center gap-10",
                        children: [
                            userRole === "Teacher" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[50%] p-4 flex flex-col gap-2 rounded-lg bg-slate-100 dark:bgBlack",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fontGsm text-lg",
                                        children: "Contact details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].person, {
                                                className: "fill-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: data.designation
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
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
                                                    fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Department of ",
                                                    data.department?.short
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].email, {
                                                className: "fill-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: data.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this) : userRole === "Student" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[50%] p-4 flex flex-col gap-2 rounded-lg bg-slate-100 dark:bgBlack",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fontGsm text-lg",
                                        children: "Contact details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "fill-gray-500",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                height: "24px",
                                                viewBox: "0 -960 960 960",
                                                width: "24px",
                                                fill: "#5f6368",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Academic Id: ",
                                                    data.academicId
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clock, {
                                                className: "fill-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Session: ",
                                                    data.session?.value
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "fill-gray-500",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                height: "24px",
                                                viewBox: "0 -960 960 960",
                                                width: "24px",
                                                fill: "#5f6368",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M482-80q-57 0-101-36t-55-92q-53 17-107-2t-83-66q-30-48-22-106.5t52-97.5q-42-38-50.5-94T134-678q27-48 81.5-69.5T324-752q11-56 55-92t101-36q57 0 101 36t55 92q56-17 108.5 3t81.5 71q27 50 19.5 104.5T794-480q44 39 52.5 96.5T828-276q-29 51-81.5 68T638-208q-11 56-55 92T482-80Zm0-80q47 0 70.5-40.5T552-280l-28-46q-11 3-21 4.5t-21 1.5q-10 0-20.5-1.5T440-326l-28 46q-24 39-.5 79.5T482-160ZM202-320q24 41 70.5 41t69.5-41l26-46q-8-8-15-17t-12-19q-5-9-9-18.5t-7-19.5h-53q-47 0-70 39.5t0 80.5Zm416 0q23 41 69.5 41t70.5-41q23-41 0-80.5T688-440h-53q-2 10-6.5 19.5T619-402q-5 10-12 19t-15 17l26 46ZM480-480Zm-155-40q3-11 7.5-21.5T342-561q5-9 11.5-17t14.5-16l-26-46q-23-41-69.5-41T202-640q-23 41 0 80.5t70 39.5h53Zm363 0q47 0 70-39.5t0-80.5q-24-41-70.5-41T618-640l-26 46q8 8 14.5 16t11.5 17q5 9 9.5 19.5T635-520h53ZM437-634q11-3 21.5-4.5T480-640q11 0 21.5 1.5T523-634l27-46q23-39 0-79.5T480-800q-47 0-70 40t0 80l27 46Zm0 0q11-3 21.5-4.5T480-640q11 0 21.5 1.5T523-634q-11-3-21.5-4.5T480-640q-11 0-21.5 1.5T437-634Zm-96 232q-5-9-9-18.5t-7-19.5q3 10 7 19.5t9 18.5q5 10 12 19t15 17q-8-8-15-17t-12-19Zm-16-118q3-11 7.5-21.5T342-561q5-9 11.5-17t14.5-16q-8 8-14.5 16T342-561q-5 9-9.5 19.5T325-520Zm157 200q-10 0-20.5-1.5T440-326q11 3 21.5 4.5T482-320q11 0 21-1.5t21-4.5q-11 3-21 4.5t-21 1.5Zm110-46q8-8 15-17t12-19q5-9 9.5-18.5T635-440q-2 10-6.5 19.5T619-402q-5 10-12 19t-15 17Zm43-154q-3-11-7.5-21.5T618-561q-5-9-11.5-17T592-594q8 8 14.5 16t11.5 17q5 9 9.5 19.5T635-520ZM480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Program: ",
                                                    data.program?.full
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
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
                                                    fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Department: ",
                                                    data.department?.full,
                                                    " (",
                                                    data.department?.short,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "fill-gray-500",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                height: "24px",
                                                viewBox: "0 -960 960 960",
                                                width: "24px",
                                                fill: "#5f6368",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M80-120v-600l160-120 120 90 120-90 120 90 120-90 160 120v600H80Zm80-80h160v-480l-80-60-80 60v480Zm240 0h160v-480l-80-60-80 60v480Zm240 0h160v-480l-80-60-80 60v480Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    "Faculty: ",
                                                    data.faculty?.full,
                                                    " (",
                                                    data.faculty?.short,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].email, {
                                                className: "fill-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 206,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: data.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this) : // ********************
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[50%] p-4 flex flex-col gap-2 rounded-lg bg-slate-100 dark:bgBlack",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fontGsm text-lg",
                                        children: "Contact details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].person, {
                                                className: "fill-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: data.designation
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$GoogleIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].email, {
                                                className: "fill-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: data.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[50%] flex flex-col gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "fontGsm text-lg",
                                        children: "History"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    data.updatedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Last edited •",
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$date$2d$time$2d$formatter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateTimeFormatter"])(data.updatedAt, "Jan 1, 2000")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Added to BDU UMS •",
                                            " ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$date$2d$time$2d$formatter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateTimeFormatter"])(data.createdAt, "Jan 1, 2000")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    data.isMuted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-red-600 text-sm",
                                        children: [
                                            "Muted • ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$date$2d$time$2d$formatter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateTimeFormatter"])(data.mutedAt, "Jan 1, 2000")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/c/[user]/details/[id]/page.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this);
    }
}
_s1(_UserDetails, "xzu5jv6BlSn2a5rvjBG1aq4UfX8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$api$2d$handler$2f$swr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSWR"]
    ];
});
var _c;
__turbopack_refresh__.register(_c, "UserDetails");

})()),
"[project]/src/app/c/[user]/details/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_f543cf._.js.map