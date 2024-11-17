"use client";
import { useMemo } from "react";
import { Dispatch, SetStateAction, useState } from "react";
import Console from "@/utils/console";
import { formDataType } from "./CreateUserModal";
import GoogleIcons from "@/components/icons/GoogleIcons";
import { convertFirstLetterInUppercase } from "@/utils/text-formater";

export default function SelectRole({
  formData,
  setFormData,
}: {
  formData: formDataType;
  setFormData: Dispatch<SetStateAction<formDataType | undefined>>;
}) {
  return useMemo(
    () => <_SelectRole role={formData.role} setFormData={setFormData} />,
    [formData.role, setFormData]
  );
}

function _SelectRole({
  role,
  setFormData,
}: {
  role: string;
  setFormData: Dispatch<SetStateAction<formDataType | undefined>>;
}) {
  Console.component("SelectRole");
  const [isApear, setIsApear] = useState<boolean>(false);

  function doApear() {
    setIsApear(true);
    setTimeout(() => {
      if (isApear === false) setIsApear(true);
    }, 300);
  }
  function doDisapear() {
    setTimeout(() => setIsApear(false), 300);
  }

  function updateValue(val: string) {
    setFormData(
      (prev) =>
        prev && {
          ...prev,
          role: val,
        }
    );
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <label>
          <input
            type="text"
            required
            value={role}
            onChange={() => {}}
            onFocus={doApear}
            onBlur={doDisapear}
            className="w-0 h-0 absolute"
          />
          <div className="cursor-pointer hover:underline hover:textBlue">
            {convertFirstLetterInUppercase(role)}
          </div>
        </label>
        <GoogleIcons.arrow.dropdown className="fill-gray-500" />
      </div>

      {isApear && (
        <div className="w-max py-2 absolute top-[20px] bg-white dark:bgBlack boxShadowMenu z-1">
          <div
            className="px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3"
            onClick={() => updateValue("teacher")}
          >
            Teacher
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3"
            onClick={() => updateValue("student")}
          >
            Student
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bgLightBlue dark:hover:bgBlack3"
            onClick={() => updateValue("other")}
          >
            Other
          </div>
        </div>
      )}
    </div>
  );
}
