"use client";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import Console from "@/utils/console";
import { useDebouncedCallback } from "use-debounce";
import { notNull } from "@/utils/more";
import useGlobalContext, { navSearchBarType } from "./GlobalContext";
import IconSkeleton from "@/components/icons/IconSkeleton";
import GoogleIcons from "@/components/icons/GoogleIcons";
import SpinLoader from "@/components/preloader/SpinLoader";
import NavbarSkeleton from "@/components/navbar/NavbarSkeleton";
import AppIconAndImg from "@/components/navbar/AppIconAndImg";

export default function Navbar() {
  const { doRefetch, setDoRefetch, navSearchBar, setNavSearchBar } =
    useGlobalContext();
  return useMemo(
    () => (
      <_Navbar
        doRefetch={doRefetch}
        setDoRefetch={setDoRefetch}
        navSearchBar={navSearchBar}
        setNavSearchBar={setNavSearchBar}
      />
    ),
    [doRefetch, setDoRefetch, navSearchBar, setNavSearchBar]
  );
}

function _Navbar({
  doRefetch,
  setDoRefetch,
  navSearchBar,
  setNavSearchBar,
}: {
  doRefetch: boolean;
  setDoRefetch: Dispatch<SetStateAction<boolean>>;
  navSearchBar: navSearchBarType;
  setNavSearchBar: Dispatch<SetStateAction<navSearchBarType>>;
}) {
  Console.component("Navbar");

  const [keyword, setKeyword] = useState("");

  const debounced = useDebouncedCallback((value) => {
    setNavSearchBar((prev) => ({
      ...prev,
      keyword: value,
    }));
  }, 1000);

  useEffect(() => {
    if (navSearchBar.keyword)
      setNavSearchBar((prev) => ({
        ...prev,
        isLoading: true,
      }));
  }, [navSearchBar.keyword]);

  // Refresh button clicked activity
  async function doRefresh() {
    setDoRefetch((prev: boolean) => !prev);
  }

  return (
    <NavbarSkeleton
      zIndex={5}
      noBorder
      hideLineLoader
      className="!bgWhite2 dark:!bgBlack"
    >
      {/* Left sided content */}
      <div className="flex items-center gap-4">
        <div className="w-[267px] text-2xl text-gray-600">
          <span className="mr-2 fontGsm">BDU</span>
          <span className="fontGs">Accounts</span>
        </div>

        <div className="px-4 flex items-center bg-white dark:bgBlack2 rounded-md focus-within:boxShadowMenu">
          <GoogleIcons.search className="fill-gray-500" />
          <input
            type="text"
            spellCheck={false}
            placeholder="Search here"
            className="w-[700px] px-2 py-3.5 bg-white dark:bgBlack2"
            value={keyword || ""}
            onChange={(e) => {
              setKeyword(e.target.value);
              debounced(e.target.value);
            }}
          />
          <div className={navSearchBar.isLoading ? "opacity-1" : "opacity-0"}>
            <SpinLoader size={32} />
          </div>
        </div>
      </div>

      {/* Right sided content */}
      <div className="flex gap-4 items-center">
        {/* Refresh icon */}
        <IconSkeleton
          title="Fast reload"
          onClick={doRefresh}
          isActive={doRefetch}
        >
          <GoogleIcons.refresh
            className={`fill-gray-500 ${doRefetch === true && "spinAnimation"}`}
          />
        </IconSkeleton>
        <AppIconAndImg />
      </div>
    </NavbarSkeleton>
  );
}
