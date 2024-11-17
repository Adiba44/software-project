"use client";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Console from "@/utils/console";
import useGlobalContext, {
  countSummaryType,
  myAccessType,
  navSearchBarType,
} from "../GlobalContext";
import { hideLoader, showLoader } from "../BlankPageLoader";
import { mutate, useSWR } from "@/utils/api-handler/swr";
import { isNull } from "@/utils/more";
import axios from "@/utils/api-handler/axios";
import { CSVLink } from "react-csv";
import IconSkeleton from "@/components/icons/IconSkeleton";
import GoogleIcons from "@/components/icons/GoogleIcons";
import GithubIcons from "@/components/icons/GithubIcons";
import SpinLoader from "@/components/preloader/SpinLoader";
import Link from "next/link";
import { encode } from "@/utils/text-encode-decode";
import Image from "next/image";
import $$ from "@/utils/global-variables";
import SvgCat from "@/components/svg-image/Cat";
import $ from "../variables";
import api from "@/app/api/endpoints";
import CreateUserModal from "../TabList/CreateBtn/CreateUserModal";

export default function StudentUserTable() {
  const { myAccess, countSummary, doRefetch, navSearchBar, setNavSearchBar } =
    useGlobalContext();
  return useMemo(
    () => (
      <_StudentUserTable
        myAccess={myAccess}
        countSummary={countSummary}
        doRefetch={doRefetch}
        navSearchBar={navSearchBar}
        setNavSearchBar={setNavSearchBar}
      />
    ),
    [countSummary, doRefetch, navSearchBar, setNavSearchBar]
  );
}

function _StudentUserTable({
  myAccess,
  countSummary,
  doRefetch,
  navSearchBar,
  setNavSearchBar,
}: {
  myAccess: myAccessType;
  countSummary: countSummaryType;
  doRefetch: boolean;
  navSearchBar: navSearchBarType;
  setNavSearchBar: Dispatch<SetStateAction<navSearchBarType>>;
}) {
  Console.component("StudentUserTable");

  const [data, setData] = useState<
    | {
        id: number;
        name: string;
        email: string;
        image: string | null;
        academicId: number | null;
        session: {
          id: number | null;
          value: string | null;
        };
        program: {
          id: number | null;
          full: string | null;
          short: string | null;
        };
        department: {
          id: number | null;
          full: string | null;
          short: string | null;
        };
        faculty: {
          id: number | null;
          full: string | null;
          short: string | null;
        };
        isMuted: boolean;
      }[]
    | undefined
  >(undefined);
  const [haveMoreData, setHaveMoreData] = useState<boolean>(false);
  const [showRefetchLoader, setShowRefetchLoader] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(50);
  const [filter, setFilter] = useState({
    all: true,
    mutedOnly: false,
    isLoading: false,
  });

  // Get all students data
  const [res, mutateAllUser] = useSWR(
    api.readAllStudentsData +
      "?limit=" +
      limit +
      "&&searchKey=" +
      navSearchBar.keyword.trim() +
      "&&isMuted=" +
      (filter.mutedOnly ? 1 : 0)
  );
  useEffect(() => {
    if (!res) return;
    if (res.status === 200) {
      setData(res.data);
      setHaveMoreData(res.haveMoreData);
      setNavSearchBar((prev) => ({ ...prev, isLoading: false }));
      setFilter((prev) => ({ ...prev, isLoading: false }));
      setShowRefetchLoader(false);
    }
    hideLoader();
    $.userTableMutate = async () => await mutateAllUser();
  }, [res, setData]);

  // Reload data fetchers
  useEffect(() => {
    if (doRefetch) mutateAllUser();
  }, [doRefetch, mutateAllUser]);

  // Refetching record on scroll
  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting) {
          if (haveMoreData) {
            setShowRefetchLoader(true);
            setLimit((prev) => prev + 50);
          }
        }
      },
      { threshold: 0.1 }
    );

    const el = observerTarget.current;

    if (haveMoreData && isNull(navSearchBar.keyword) && !showRefetchLoader) {
      if (el) observer.observe(el);
    } else {
      if (el) observer.unobserve(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [
    observerTarget,
    data,
    haveMoreData,
    navSearchBar.keyword,
    showRefetchLoader,
    countSummary.students.total,
    setLimit,
  ]);

  // Storing data for CSV file content --->
  const csvFilesData: any[] = [];
  if (data && data.length) {
    data.forEach((record) => {
      csvFilesData.push({
        "Academic ID": record.academicId,
        Name: record.name,
        Email: record.email,
        Session: record.session.value,
        "Program (full)": record.program.full,
        "Program (short)": record.program.short,
        "Department (full)": record.department.full,
        "Department (short)": record.department.short,
        "Faculty (full)": record.faculty.full,
        "Faculty (short)": record.faculty.short,
      });
    });
  }
  // <--- Storing data for CSV file content

  // Switch filter option
  function switchFilterOpt(keyName: "all" | "mutedOnly") {
    if (!filter[keyName]) {
      setLimit(50);
      setFilter((prev) => {
        const o: any = { ...prev };
        for (const k in o) {
          o[k] = false;
        }
        o[keyName] = true;
        o.isLoading = true;
        return o;
      });
    }
  }

  /*****
   * Deleting a user
   ******/
  const [deletingId, setDeletingId] = useState<number[]>([]);
  async function doDelete(id: number) {
    setDeletingId((prev) => [...prev, id]);
    await axios.delete(api.deleteUser + id);
    await Promise.all([mutateAllUser(), mutate(api.readCountSummary)]);
    setDeletingId((prev) => prev.filter((id) => id != id));
  }

  /*****
   * Edit a user related
   ******/
  const [openModal, setOpenModal] = useState(false);
  const [editId, setEditId] = useState(0);

  return (
    <div className="w-full h-full px-8 py-6 bg-white dark:bgBlack2 rounded-lg">
      {/* Title */}
      <div className="flex items-center gap-2 mb-2 text-gray-600">
        <div className="fontGs text-2xl">Students</div>
        <div className="text-lg">({countSummary.students.total})</div>
      </div>

      {/* Table header */}
      <div className="px-2 py-2.5 pr-6 flex items-center gap-2 border-b border-gray-300 sticky top-[64px] bg-white dark:bgBlack2">
        <div className="w-[25%] pl-4 fontGsm">Name</div>
        <div className="w-[15%] fontGsm">Academic ID</div>
        <div className="w-[20%] fontGsm">Email</div>
        <div className="w-[15%] fontGsm">Session</div>
        <div className="w-[15%] fontGsm">Program</div>
        <div className="w-[10%]">
          <div className="flex justify-end items-center gap-4">
            <CSVLink data={csvFilesData} filename="all-students-data">
              <IconSkeleton title="Download CSV">
                <GoogleIcons.downloadFile className="fill-gray-500" />
              </IconSkeleton>
            </CSVLink>
          </div>
        </div>
      </div>

      {data !== undefined && (
        <div>
          <div className="pl-6 p-4 pb-3 flex justify-between items-center">
            {/* Summary */}
            <div className="flex items-center gap-5">
              <div className="fontGsm text-gray-500">
                Total {data.length}/{countSummary.students.total}
              </div>
              <div className="fontGsm text-gray-500">
                Muted {countSummary.students.muted}
              </div>
            </div>

            {/* Search keys */}
            <div className="flex justify-center items-center gap-4">
              <div
                className="cursor-pointer hover:underline flex items-center gap-1"
                onClick={() => switchFilterOpt("all")}
              >
                <div
                  className={`fontGsm ${
                    filter.all ? "textBlue" : "text-gray-500"
                  }`}
                >
                  All users
                </div>
                {filter.all &&
                  (filter.isLoading ? (
                    <SpinLoader size={24} />
                  ) : (
                    <GithubIcons.tik className="fillBlue" />
                  ))}
              </div>
              {/*  */}
              <div
                className="cursor-pointer hover:underline flex items-center gap-1"
                onClick={() => switchFilterOpt("mutedOnly")}
              >
                <div
                  className={`fontGsm ${
                    filter.mutedOnly ? "textBlue" : "text-gray-500"
                  }`}
                >
                  Muted only
                </div>
                {filter.mutedOnly &&
                  (filter.isLoading ? (
                    <SpinLoader size={24} />
                  ) : (
                    <GithubIcons.tik className="fillBlue" />
                  ))}
              </div>
              {/*  */}
            </div>
          </div>

          {isNull(data) ? (
            <div className="w-full flex justify-center items-center py-16">
              <div className="w-fit h-fit flex flex-col justify-center items-center gap-6">
                <SvgCat className="w-[170px]" />
                <div className="fontGsm text-gray-500">No record found</div>
              </div>
            </div>
          ) : (
            <div className="h-fit">
              {data.map((record, index) => {
                return (
                  <div
                    key={index}
                    className="group/menu px-2 flex items-center gap-2 hover:bgLightBlue dark:hover:bgBlack3 cursor-pointer rounded-md"
                  >
                    <Link href={"#"} className="w-[25%] pl-4 py-2.5">
                      <div className="flex items-center gap-4">
                        <Image
                          src={record.image || $$.defaultUserImg}
                          className="rounded-full"
                          width="32"
                          height="32"
                          alt="Profile image"
                        />
                        <div className="break-all cursor-pointer">
                          {record.name}
                        </div>
                      </div>
                    </Link>
                    <Link href={"#"} className="w-[15%] py-2.5">
                      {record.academicId}
                    </Link>
                    <Link href={"#"} className="w-[20%] break-all py-2.5">
                      {record.email}
                    </Link>
                    <Link href={"#"} className="w-[15%] py-2.5">
                      {record.session.value}
                    </Link>
                    <Link href={"#"} className="w-[15%] py-2.5">
                      {record.program.short}
                    </Link>
                    <div className="w-[10%] py-2.5 pr-4 flex justify-end items-center gap-4"></div>
                  </div>
                );
              })}
              <div ref={observerTarget}></div> {/* When data found */}
            </div>
          )}
        </div>
      )}
      {showRefetchLoader === true && (
        <div className="w-full flex justify-center py-4">
          <SpinLoader />
        </div>
      )}

      {openModal && (
        <CreateUserModal
          type="edit"
          editId={editId}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
}
