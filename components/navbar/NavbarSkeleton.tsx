"use client";
import LineLoader from "@/components/preloader/LineLoader";
import { useEffect } from "react";

export default function NavbarSkeleton({
  children,
  zIndex,
  noBorder,
  className,
  hideLineLoader,
}: {
  children: React.ReactNode;
  zIndex: number;
  noBorder?: boolean;
  className?: string;
  hideLineLoader?: boolean;
}) {
  // When scroll down then shadow will be added into navbar skeleton
  useEffect(() => {
    const handleScroll = () => {
      const scrollYValue = window.scrollY;
      const element = document.getElementById("idOfNavbar");
      if (element) {
        if (scrollYValue > 30) element.classList.add("navbarShadow");
        else element.classList.remove("navbarShadow");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div element-name="Navbar skeleton">
      <div
        id="idOfNavbar"
        className={`w-full h-[64px] px-6 flex justify-between items-center bg-white fixed top-0 left-0 ${
          noBorder !== true && "border-b border-gray-300"
        } ${className && className}`}
        style={{
          zIndex: zIndex,
        }}
      >
        {hideLineLoader !== true && (
          <div className="w-full absolute left-0 -bottom-[1px]">
            <LineLoader />
          </div>
        )}
        {children}
      </div>
      <div className="w-full h-[64px]"></div>
    </div>
  );
}