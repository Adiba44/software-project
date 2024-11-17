"use client";
import { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import useGlobalContext from "../GlobalContext";
import { convertFirstLetterInUppercase } from "@/utils/text-formater";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { user: string };
}) {
  const { setActiveTab } = useGlobalContext();
  const tabType = params.user;

  return useMemo(
    () => (
      <_Layout
        children={children}
        tabType={tabType}
        setActiveTab={setActiveTab}
      />
    ),
    [tabType, setActiveTab]
  );
}

function _Layout({
  children,
  tabType,
  setActiveTab,
}: {
  children: React.ReactNode;
  tabType: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}) {
  useEffect(() => {
    document.title = convertFirstLetterInUppercase(tabType);
    setActiveTab(tabType);
  }, [setActiveTab]);

  return <>{children}</>;
}
