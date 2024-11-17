"use client";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useMemo } from "react";
import Console from "@/utils/console";
import useGlobalContext, {
  countSummaryType,
  myAccessType,
} from "./GlobalContext";
import { useSWR } from "@/utils/api-handler/swr";
import api from "../api/endpoints";
import SpinLoader from "@/components/preloader/SpinLoader";

export default function Fetcher({ children }: { children: React.ReactNode }) {
  const { doRefetch, setCountSummary, myAccess, setMyAccess } =
    useGlobalContext();
  return useMemo(
    () => (
      <_Fetcher
        children={children}
        doRefetch={doRefetch}
        setCountSummary={setCountSummary}
        myAccess={myAccess}
        setMyAccess={setMyAccess}
      />
    ),
    [doRefetch, setCountSummary, myAccess, setMyAccess]
  );
}

function _Fetcher({
  children,
  doRefetch,
  setCountSummary,
  myAccess,
  setMyAccess,
}: {
  children: React.ReactNode;
  doRefetch: boolean;
  setCountSummary: Dispatch<SetStateAction<countSummaryType>>;
  myAccess: myAccessType;
  setMyAccess: Dispatch<SetStateAction<myAccessType>>;
}) {
  Console.component("Fetcher");

  // Fetch count summary
  const [res, mutate] = useSWR(api.readCountSummary);
  useEffect(() => {
    if (!res) return;
    if (res.status === 200) setCountSummary(res.data);
  }, [res, setCountSummary]);

  // Fetch all access data
  const [res2, mutate2] = useSWR(api.readMyAllAccess);
  useEffect(() => {
    const res = res2;
    if (!res) return;
    if (res.status === 200) setMyAccess(res.data);
  }, [res2, setMyAccess]);

  // Reload data fetchers
  useEffect(() => {
    if (doRefetch) {
      mutate();
      mutate2();
    }
  }, [doRefetch, mutate, mutate2]);

  if (!myAccess)
    return (
      <div className="w-full h-full flex justify-center items-center transform -translate-y-[50px]">
        <SpinLoader />
      </div>
    );
  return <>{children}</>;
}
