// -----
// Check- Is a variable null or not?
// Number, string, object, array data type can be validate here
// -----
export function isNull(variable: any): boolean {
    if (variable === "" || variable === null || variable === undefined) return true;

    if (typeof variable === "number") {
        if (variable === 0) return true;
        else return false;
    }
    else if (typeof variable === "string") {
        if (variable.trim() === "" || variable.trim() === null || variable.trim() === undefined) return true;
        else return false;
    } if (Array.isArray(variable)) {
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

// -----
// Check- Is a variable null or not?
// Number, string, object, array data type can be validate here
// -----
export function notNull(variable: any): boolean {
    return isNull(variable) === true ? false : true;
}

// -----
// Check- Is a letter or word or digit presented on a text/paragraph?
// -----
export function searchKeywordMatched(text: string, keyword: string) {
    try {
        return text.toLowerCase().search(keyword.toLowerCase()) !== -1;
    } catch (error: any) {
        return text.search(keyword) !== -1;
    }
}

// -----
// It can pause the execution of an async function for defined time.
// -----
export async function sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// -----
// It can generate an unique integer ID
// -----
let previouslyCreatedId = 0;
export function createId(): number {
    const newCreatedId = new Date().getTime() - 1709297743920; // Substracted time is 6:55PM, 1 March 2024
    if (previouslyCreatedId < newCreatedId) {
        previouslyCreatedId = newCreatedId;
        return newCreatedId;
    } else {
        previouslyCreatedId++;
        return previouslyCreatedId;
    }
}

// -----
// It can generate an unique string ID
// -----
export function uniqueStringId(): string {
    const timestamp = createId().toString();
    let id = "";
    for (let i = 0; i < timestamp.length; i++) {
        id += timestamp[i];
        if ((i + 1) % 3 === 0 && i !== timestamp.length - 1) {
            const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 10)); // Random lowercase letter between 'a' and 'f'
            id += randomChar;
        }
    }
    return id;
}

// -----
// Check- Is the device is mobile or not?
// It only runs on client side
// -----
function isMobileDevice(): boolean {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

// -----
// Check- Is the device is mobile or not?
// It only runs on client side
// -----
/*
export function cleanImageResizeOptions(imageElement: string) {
    if (isNull(imageElement)) return imageElement;
    else return imageElement.replaceAll(
        `onmousedown="startImageResize(event)" onmouseout="imageCornerSquareCtrl(false)" onmousemove="setCursorOnImage(event)"`,
        ""
    )
        .replaceAll(`CLOUD_UPLOAD_DIR`, gv.cloudUploadDir)
        .replaceAll(`hover:outline hover:outline-2 HoverOutlineDeep`, "")
        .replaceAll(`nwse-resize`, "default")
        .replaceAll(`nesw-resize`, "default")
        .replaceAll(`EditorImage `, "");
}
*/