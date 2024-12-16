export function showLoader() {
    const element = document.getElementById("lineLoaderID");
    if (element) element.style.display = "block";
}

export function hideLoader() {
    const element = document.getElementById("lineLoaderID");
    if (element) element.style.display = "none";
}