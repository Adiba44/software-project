"use client";
import { useEffect, useMemo, useRef } from "react";
import { Dispatch, SetStateAction, useState } from "react";
import Console from "@/utils/console";
import { useSWR } from "@/utils/api-handler/swr";
import GoogleIcons from "@/components/icons/GoogleIcons";
import { searchKeywordMatched } from "@/utils/more";
import { formDataType } from "./CreateUserModal";
import api from "@/app/api/endpoints";

export default function SelectDepartment({
  formData,
  setFormData,
}: {
  formData: formDataType;
  setFormData: Dispatch<SetStateAction<formDataType | undefined>>;
}) {
  return useMemo(
    () => (
      <_SelectDepartment
        department={formData.department}
        setFormData={setFormData}
      />
    ),
    [formData.department, setFormData]
  );
}

function _SelectDepartment({
  department,
  setFormData,
}: {
  department: { id: number; full: string; short: string };
  setFormData: Dispatch<SetStateAction<formDataType | undefined>>;
}) {
  Console.component("SelectDepartment");

  const [data, setData] = useState<
    | undefined
    | {
        id: number;
        department: string;
      }[]
  >(undefined);
  let isSearching = false;
  const [isApear, setIsApear] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState<string>("");
  const inputID = useRef<HTMLInputElement>(null);

  // Get department data
  const [res] = useSWR(api.readAllDepartment);
  useEffect(() => {
    if (!res) return;
    if (res.status === 200) {
      const data = res.data;
      setData(data);
      /*
      // Set the first value
      setFormData((prev) => ({
        ...prev,
        department: { id: data[0].id, full: data[0].full, short: data[0].short },
      }));
      */
    }
  }, [res, setData, setFormData]);

  function doApear() {
    setIsApear(true);
    setTimeout(() => {
      if (isApear === false) setIsApear(true);
    }, 300);
  }
  function doDisapear() {
    setTimeout(() => {
      if (isSearching === false) {
        setIsApear(false);
        setSearchKey("");
      }
    }, 300);
  }

  function updateValue(obj: { id: number; full: string; short: string }) {
    setFormData(
      (prev) =>
        prev && {
          ...prev,
          department: obj,
        }
    );
    setIsApear(false);
  }

  let recordFound: boolean = false;

  return (
    <div className="relative flex-1">
      {/* Click Section */}
      <div className="textField caretNone">
        <input
          type="text"
          required
          ref={inputID}
          value={`${department.full}`}
          onChange={() => {}}
          onFocus={doApear}
          onBlur={doDisapear}
          autoComplete="off"
          spellCheck={false}
        />
        <label>Department</label>
      </div>

      {/* Apear-Disapear section */}
      {isApear && (
        <div
          className="w-full max-h-[250px] py-2 absolute top-[50px] overflow-y-auto bg-white dark:bgBlack boxShadowMenu z-1"
          onMouseLeave={() => {
            inputID.current?.focus();
          }}
        >
          {/* Search bar */}
          <div className="mx-4 mt-2 mb-3 px-2 flex items-center gap-1 border border-gray-300 rounded-lg">
            <GoogleIcons.search className="fill-gray-500" />
            <div className="flex-1">
              <input
                type="text"
                className="w-full px-1 py-2"
                placeholder="Search"
                spellCheck={false}
                onFocus={() => (isSearching = true)}
                onBlur={() => (isSearching = false)}
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
              />
            </div>
          </div>
          {data === undefined ? (
            <div className="px-4 py-3">Loading...</div>
          ) : (
            data.map((record: any, index: number) => {
              if (
                searchKeywordMatched(
                  `${record.full} (${record.short})`,
                  searchKey
                ) === false
              )
                return;
              recordFound = true;
              return (
                <div
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3"
                  onClick={() =>
                    updateValue({
                      id: record.id,
                      full: record.full,
                      short: record.short,
                    })
                  }
                >
                  {`${record.full} (${record.short})`}
                </div>
              );
            })
          )}
          {data && recordFound == false && (
            <div className="px-4 py-3">No record found</div>
          )}
        </div>
      )}
    </div>
  );
}
