"use client";
import GithubIcons from "@/components/icons/GithubIcons";
import { useState } from "react";

export function ThemeDropdown({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: any;
}) {
  const [isApear, setIsApear] = useState<boolean>(false);

  return (
    <div className="relative">
      {/* Click section */}
      <label>
        <input
          type="text"
          className="w-0 h-0 absolute"
          onClick={() => {
            setIsApear(true);
            setTimeout(() => setIsApear(true), 260);
          }}
          onBlur={() => {
            setTimeout(() => setIsApear(false), 250);
          }}
        />
        <div className="cursor-pointer hover:underline text-xs text-gray-500">
          Theme
        </div>
      </label>

      {/* Apear-Disapear section */}
      <div
        className={`min-w-[128px] w-max py-2 absolute rounded-md bg-white dark:bgBlack2 boxShadowMenu z-1 overflow-hidden ${
          !isApear
            ? "bottom-[0px] -left-[20px] pointer-events-none opacity-0"
            : "transition-all ease-linear duration-250 bottom-[28px] left-0 pointer-events-all opacity-1"
        }`}
      >
        <div
          className="dotMenusLiHover px-4 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-blue-50"
          onClick={() => setTheme("light")}
        >
          <div>Light Mode</div>
          {theme === "light" && <GithubIcons.tik className="fill-blue-600" />}
        </div>
        <div
          className="dotMenusLiHover px-4 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-blue-50"
          onClick={() => setTheme("dark")}
        >
          <div>Dark Mode</div>
          {theme === "dark" && <GithubIcons.tik className="fill-blue-600" />}
        </div>
      </div>
    </div>
  );
}
