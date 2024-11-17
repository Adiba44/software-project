"use client";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { dateTimeFormatter } from "@/utils/date-time-formatter";
import Console from "@/utils/console";
import useGlobalContext from "@/app/c/GlobalContext";
import { hideLoader, showLoader } from "@/app/c/BlankPageLoader";
import { isNull } from "@/utils/more";
import { decode } from "@/utils/text-encode-decode";
import { useSWR } from "@/utils/api-handler/swr";
import IconSkeleton from "@/components/icons/IconSkeleton";
import GoogleIcons from "@/components/icons/GoogleIcons";
import SvgFish from "@/components/svg-image/Fish";
import $$ from "@/utils/global-variables";
import Menu from "./menu";
import api from "@/app/api/endpoints";

export default function UserDetails({ params }: { params: { id: string } }) {
  const { doRefetch } = useGlobalContext();
  const id = decode(params.id);
  return useMemo(
    () => <_UserDetails id={id} doRefetch={doRefetch} />,
    [params, doRefetch]
  );
}

function _UserDetails({ id, doRefetch }: { id: number; doRefetch: boolean }) {
  Console.component("UserDetails");

  const [data, setData] = useState<
    | {
        id: number;
        name: string;
        email: string;
        image: string;
        gender: string;
        academicId?: number;
        session?: { id: number; value: string };
        program?: { id: number; full: string; short: string };
        department?: { id: number; full: string; short: string };
        faculty?: { id: number; full: string; short: string };
        designation?: string;
        about: string;
        role: string;
        isMuted: boolean;
        mutedAt: string;
        createdAt: string;
        updatedAt: string;
      }
    | undefined
  >(undefined);

  // Get a user info
  const [res, mutate] = useSWR(api.readAUserInfo + id);
  useEffect(() => {
    if (!res) return;
    if (res.status === 200) setData(res.data);
    hideLoader();
  }, [res, setData]);

  // Reload data fetchers
  useEffect(() => {
    if (doRefetch) mutate();
  }, [doRefetch, mutate]);

  if (data === undefined) return null;
  else if (isNull(data))
    return (
      <div className="w-full flex flex-col justify-center items-center pt-16">
        <SvgFish className="w-[170px]" />
        <div className="mt-6 fontGsm text-gray-500">No user data found!</div>
      </div>
    );
  else {
    let userRole: string;
    if (data.role === "teacher") userRole = "Teacher";
    else if (data.role === "student") userRole = "Student";
    else userRole = "Other";

    return (
      <div className="w-full h-full bg-white dark:bgBlack2 rounded-lg">
        <div className="w-full max-w-[1000px] h-full px-8 py-6 rounded-lg">
          {/* navbar */}
          <div className="flex justify-between items-center gap-2">
            <IconSkeleton
              title="Back"
              onClick={() => {
                showLoader();
                history.back();
              }}
            >
              <GoogleIcons.arrow.back className="fill-gray-500" />
            </IconSkeleton>
            {/* <Menu id={id} /> */}
          </div>

          {/* Image section */}
          <div className="mt-8 flex justify-start items-center gap-6">
            <Image
              src={data.image || $$.defaultUserImg}
              className="rounded-full"
              width="162"
              height="162"
              alt="Profile image"
            />
            <div>
              <div className="text-2xl mb-1">{data.name}</div>
              <div className="text-sm">{userRole}</div>
            </div>
          </div>

          {/* 2 column */}
          <div className="w-full mt-8 flex items-center gap-10">
            {/* 1. */}
            {userRole === "Teacher" ? (
              <div className="w-[50%] p-4 flex flex-col gap-2 rounded-lg bg-slate-100 dark:bgBlack">
                <div className="fontGsm text-lg">Contact details</div>
                <div className="flex items-center gap-2">
                  <GoogleIcons.person className="fill-gray-500" />
                  <div>{data.designation}</div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z" />
                  </svg>
                  <div>Department of {data.department?.short}</div>
                </div>
                <div className="flex items-center gap-2">
                  <GoogleIcons.email className="fill-gray-500" />
                  <div>{data.email}</div>
                </div>
              </div>
            ) : // ********************
            userRole === "Student" ? (
              <div className="w-[50%] p-4 flex flex-col gap-2 rounded-lg bg-slate-100 dark:bgBlack">
                <div className="fontGsm text-lg">Contact details</div>
                <div className="flex items-center gap-2">
                  <svg
                    className="fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M360-240v-80h480v80H360Zm0-200v-80h480v80H360ZM120-640v-80h720v80H120Z" />
                  </svg>
                  <div>Academic Id: {data.academicId}</div>
                </div>
                <div className="flex items-center gap-2">
                  <GoogleIcons.clock className="fill-gray-500" />
                  <div>Session: {data.session?.value}</div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M482-80q-57 0-101-36t-55-92q-53 17-107-2t-83-66q-30-48-22-106.5t52-97.5q-42-38-50.5-94T134-678q27-48 81.5-69.5T324-752q11-56 55-92t101-36q57 0 101 36t55 92q56-17 108.5 3t81.5 71q27 50 19.5 104.5T794-480q44 39 52.5 96.5T828-276q-29 51-81.5 68T638-208q-11 56-55 92T482-80Zm0-80q47 0 70.5-40.5T552-280l-28-46q-11 3-21 4.5t-21 1.5q-10 0-20.5-1.5T440-326l-28 46q-24 39-.5 79.5T482-160ZM202-320q24 41 70.5 41t69.5-41l26-46q-8-8-15-17t-12-19q-5-9-9-18.5t-7-19.5h-53q-47 0-70 39.5t0 80.5Zm416 0q23 41 69.5 41t70.5-41q23-41 0-80.5T688-440h-53q-2 10-6.5 19.5T619-402q-5 10-12 19t-15 17l26 46ZM480-480Zm-155-40q3-11 7.5-21.5T342-561q5-9 11.5-17t14.5-16l-26-46q-23-41-69.5-41T202-640q-23 41 0 80.5t70 39.5h53Zm363 0q47 0 70-39.5t0-80.5q-24-41-70.5-41T618-640l-26 46q8 8 14.5 16t11.5 17q5 9 9.5 19.5T635-520h53ZM437-634q11-3 21.5-4.5T480-640q11 0 21.5 1.5T523-634l27-46q23-39 0-79.5T480-800q-47 0-70 40t0 80l27 46Zm0 0q11-3 21.5-4.5T480-640q11 0 21.5 1.5T523-634q-11-3-21.5-4.5T480-640q-11 0-21.5 1.5T437-634Zm-96 232q-5-9-9-18.5t-7-19.5q3 10 7 19.5t9 18.5q5 10 12 19t15 17q-8-8-15-17t-12-19Zm-16-118q3-11 7.5-21.5T342-561q5-9 11.5-17t14.5-16q-8 8-14.5 16T342-561q-5 9-9.5 19.5T325-520Zm157 200q-10 0-20.5-1.5T440-326q11 3 21.5 4.5T482-320q11 0 21-1.5t21-4.5q-11 3-21 4.5t-21 1.5Zm110-46q8-8 15-17t12-19q5-9 9.5-18.5T635-440q-2 10-6.5 19.5T619-402q-5 10-12 19t-15 17Zm43-154q-3-11-7.5-21.5T618-561q-5-9-11.5-17T592-594q8 8 14.5 16t11.5 17q5 9 9.5 19.5T635-520ZM480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Z" />
                  </svg>
                  <div>Program: {data.program?.full}</div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z" />
                  </svg>
                  <div>
                    Department: {data.department?.full} (
                    {data.department?.short})
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M80-120v-600l160-120 120 90 120-90 120 90 120-90 160 120v600H80Zm80-80h160v-480l-80-60-80 60v480Zm240 0h160v-480l-80-60-80 60v480Zm240 0h160v-480l-80-60-80 60v480Z" />
                  </svg>
                  <div>
                    Faculty: {data.faculty?.full} ({data.faculty?.short})
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <GoogleIcons.email className="fill-gray-500" />
                  <div>{data.email}</div>
                </div>
              </div>
            ) : (
              // ********************
              <div className="w-[50%] p-4 flex flex-col gap-2 rounded-lg bg-slate-100 dark:bgBlack">
                <div className="fontGsm text-lg">Contact details</div>
                <div className="flex items-center gap-2">
                  <GoogleIcons.person className="fill-gray-500" />
                  <div>{data.designation}</div>
                </div>
                <div className="flex items-center gap-2">
                  <GoogleIcons.email className="fill-gray-500" />
                  <div>{data.email}</div>
                </div>
              </div>
            )}

            {/* 2. */}
            <div className="w-[50%] flex flex-col gap-2">
              <div className="fontGsm text-lg">History</div>
              {data.updatedAt && (
                <div>
                  Last edited •{" "}
                  {dateTimeFormatter(data.updatedAt, "Jan 1, 2000")}
                </div>
              )}
              <div>
                Added to BDU accounts •{" "}
                {dateTimeFormatter(data.createdAt, "Jan 1, 2000")}
              </div>
              {data.isMuted && (
                <div className="text-red-600 text-sm">
                  Muted • {dateTimeFormatter(data.mutedAt, "Jan 1, 2000")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
