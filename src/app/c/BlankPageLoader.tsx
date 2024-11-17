import LineLoader from "@/components/preloader/LineLoader";

export function showLoader() {
  const el = document.getElementById("blankPageLoaderId");
  if (el) {
    el.style.opacity = "0.7";
    el.style.pointerEvents = "all";
  }
}

export function hideLoader() {
  const el = document.getElementById("blankPageLoaderId");
  if (el) {
    el.style.opacity = "0";
    el.style.pointerEvents = "none";
  }
}

export default function BlankPageLoader() {
  return (
    <div
      id="blankPageLoaderId"
      className="w-full h-full fixed top-0 left-0 z-51 bg-white dark:bgBlack opacity-70 transition-all duration-250 ease-linear"
    >
      <LineLoader />
    </div>
  );
}
