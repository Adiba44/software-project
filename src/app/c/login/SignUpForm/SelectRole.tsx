"use client";
import { useMemo } from "react";
import { Dispatch, SetStateAction, useState } from "react";
import Console from "@/utils/console";
import { formDataType } from "./SignUpForm";
import { convertFirstLetterInUppercase } from "@/utils/text-formater";

export default function SelectRole({
  formData,
  setFormData,
}: {
  formData: formDataType;
  setFormData: Dispatch<SetStateAction<formDataType>>;
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
  setFormData: Dispatch<SetStateAction<formDataType>>;
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
    setFormData((prev) => ({
      ...prev,
      role: val,
    }));
  }

  return (
    <div className="relative">
      <div className="textField">
        <input
          type="text"
          required
          value={convertFirstLetterInUppercase(role)}
          onChange={() => {}}
          onFocus={doApear}
          onBlur={doDisapear}
        />
        <label>Role</label>
      </div>

      {isApear && (
        <div className="w-full py-2 absolute top-[50px] bg-white dark:bgBlack boxShadowMenu z-1">
          <div
            className="px-4 py-2 cursor-pointer hover:bgLightBlue"
            onClick={() => updateValue("teacher")}
          >
            Teacher
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bgLightBlue"
            onClick={() => updateValue("student")}
          >
            Student
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bgLightBlue"
            onClick={() => updateValue("other")}
          >
            Other
          </div>
        </div>
      )}
    </div>
  );
}
