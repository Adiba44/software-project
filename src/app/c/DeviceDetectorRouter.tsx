"use client";
import SpinLoader from "@/components/preloader/SpinLoader";
import { isMobileDevice } from "@/utils/more";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DeviceDetectorRouter({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const router = useRouter();

  function compare(pathname: string, pattern: string): boolean {
    const pathnameArray = pathname.split("/");
    const patternArray = pattern.split("/");

    if (pathnameArray.length !== patternArray.length) return false;

    for (const i in pathnameArray) {
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

  useEffect(() => {
    if (isMobileDevice()) {
      const pathname = window.location.pathname;
      if (compare(pathname, "/c/teachers")) router.replace("/m/teachers");
      else router.replace(pathname.replace("/c/", "/m/"));
    } else setIsMobile(false);
  }, []);

  if (isMobile === false) return <>{children}</>;
  else
    return (
      <div className="w-full h-full flex justify-center items-center transform -translate-y-[50px]">
        <SpinLoader />
      </div>
    );
}
