"use client";
import Link from "next/link";
import CreateBtn from "./CreateBtn/CreateBtn";
import SessionIcon from "./SessionIcon";
import { Dispatch, SetStateAction, useMemo } from "react";
import { ThemeDropdown } from "./ThemeDropdown";
import Console from "@/utils/console";
import { notNull } from "@/utils/more";
import useThemeContext from "../ThemeContextProvider";
import useGlobalContext, {
  navSearchBarType,
  countSummaryType,
  myAccessType,
} from "../GlobalContext";
import GoogleIcons from "@/components/icons/GoogleIcons";
import { showLoader } from "../BlankPageLoader";

export default function TabList() {
  const { myAccess, activeTab, countSummary, navSearchBar, setNavSearchBar } =
    useGlobalContext();
  const { theme, setTheme } = useThemeContext();
  return useMemo(
    () => (
      <_TabList
        myAccess={myAccess}
        activeTab={activeTab}
        countSummary={countSummary}
        navSearchBar={navSearchBar}
        setNavSearchBar={setNavSearchBar}
        theme={theme}
        setTheme={setTheme}
      />
    ),
    [
      myAccess,
      activeTab,
      countSummary,
      navSearchBar,
      setNavSearchBar,
      theme,
      setTheme,
    ]
  );
}

function _TabList({
  myAccess,
  activeTab,
  countSummary,
  navSearchBar,
  setNavSearchBar,
  theme,
  setTheme,
}: {
  myAccess: myAccessType;
  activeTab: string;
  countSummary: countSummaryType;
  navSearchBar: navSearchBarType;
  setNavSearchBar: Dispatch<SetStateAction<navSearchBarType>>;
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}) {
  Console.component("TabList");

  function clickOnLink() {
    showLoader();
    if (notNull(navSearchBar.keyword)) {
      setNavSearchBar((prev) => ({
        ...prev,
        actualKey: "",
        debouncedKey: "",
      }));
    }
  }

  return (
    <div className="w-[300px] h-fit px-4 shrink-0 sticky top-[80px]">
      <div className="pl-4 py-2.5 fontGsm">Users</div>
      {/* - */}
      <Link
        href="/c/teachers"
        onClick={() => activeTab !== "teachers" && clickOnLink()}
      >
        <div
          className={`w-full pl-4 pr-5 py-2.5 rounded-[24px] flex justify-between items-center gap-1 cursor-pointer ${
            activeTab === "teachers" ? "bg-blue-100" : "hover:bg-blue-100"
          }`}
        >
          <div className="flex justify-center items-center gap-2">
            <GoogleIcons.person
              className="fill-gray-500"
              fill={activeTab === "teachers"}
            />
            <div className="fontGsm text-gray-600">Teachers</div>
          </div>
          <div className="fontGsm text-gray-600">
            {countSummary.teachers.total}
          </div>
        </div>
      </Link>
      {/* - */}
      <Link
        href="/c/students"
        onClick={() => activeTab !== "students" && clickOnLink()}
      >
        <div
          className={`w-full pl-4 pr-5 py-2.5 rounded-[24px] flex justify-between items-center gap-1 cursor-pointer ${
            activeTab === "students" ? "bg-blue-100" : "hover:bg-blue-100"
          }`}
        >
          <div className="flex justify-center items-center gap-2">
            <GoogleIcons.graducationCap
              className="fill-gray-500"
              fill={activeTab === "students"}
            />
            <div className="fontGsm text-gray-600">Students</div>
          </div>
          <div className="fontGsm text-gray-600">
            {countSummary.students.total}
          </div>
        </div>
      </Link>
      {/* - */}
      <Link
        href="/c/others"
        onClick={() => activeTab !== "others" && clickOnLink()}
      >
        <div
          className={`w-full pl-4 pr-5 py-2.5 rounded-[24px] flex justify-between items-center gap-1 cursor-pointer ${
            activeTab === "others" ? "bg-blue-100" : "hover:bg-blue-100"
          }`}
        >
          <div className="flex justify-center items-center gap-2">
            <GoogleIcons.person2
              className="fill-gray-500"
              fill={activeTab === "others"}
            />
            <div className="fontGsm text-gray-600">Others</div>
          </div>
          <div className="fontGsm text-gray-600">
            {countSummary.others.total}
          </div>
        </div>
      </Link>
      <br />

      {/* --------- */}

      <div className="fixed bottom-4 left-4 flex gap-4">
        <ThemeDropdown theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}
