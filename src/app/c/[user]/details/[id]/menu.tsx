"use client";
import GoogleIcons from "@/components/icons/GoogleIcons";
import IconSkeleton from "@/components/icons/IconSkeleton";
import { useState } from "react";

export default function Menu({ id }: { id: number }) {
  const [isApear, setIsApear] = useState<boolean>(false);

  function doDelete() {
    console.log("Deleting...");
  }

  return (
    <main className="relative top-0 z-3">
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
        <IconSkeleton title="" isActive={isApear}>
          <GoogleIcons.dotMenu className="fill-gray-500" />
        </IconSkeleton>
      </label>

      {/* Apear-Disapear section */}
      <div
        className={`min-w-[128px] w-max py-2 absolute rounded-md bg-white boxShadowMenu z-1 overflow-hidden ${
          !isApear
            ? "top-[13px] -right-[20px] pointer-events-none opacity-0"
            : "transition-all ease-linear duration-250 top-[33px] right-0 pointer-events-all opacity-1"
        }`}
      >
        <div
          onClick={doDelete}
          className="px-4 py-1.5 flex items-center gap-2 cursor-pointer hover:bgLightBlue"
        >
          <div>Delete</div>
        </div>
      </div>
    </main>
  );
}
