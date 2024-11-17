"use client";
import { useMemo } from "react";
import { Dispatch, SetStateAction, useState } from "react";
import Console from "@/utils/console";
import { formDataType } from "./SignUpForm";

export default function SelectGender({
  formData,
  setFormData,
}: {
  formData: formDataType;
  setFormData: Dispatch<SetStateAction<formDataType>>;
}) {
  return useMemo(
    () => <_SelectGender gender={formData.gender} setFormData={setFormData} />,
    [formData.gender, setFormData]
  );
}

function _SelectGender({
  gender,
  setFormData,
}: {
  gender: string;
  setFormData: Dispatch<SetStateAction<formDataType>>;
}) {
  Console.component("SelectGender");
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
          gender: val,
        }
    );
  }

  return (
    <div className="relative">
      <div className="textField">
        <input
          type="text"
          required
          value={gender}
          onChange={() => {}}
          onFocus={doApear}
          onBlur={doDisapear}
          autoComplete="off"
          spellCheck={false}
        />
        <label>Gender</label>
      </div>

      {isApear && (
        <div className="w-full py-2 absolute top-[50px] bg-white dark:bgBlack boxShadowMenu z-1">
          <div
            className="px-4 py-2 cursor-pointer hover:bgLightBlue"
            onClick={() => updateValue("Male")}
          >
            Male
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bgLightBlue"
            onClick={() => updateValue("Female")}
          >
            Female
          </div>
          <div
            className="px-4 py-2 cursor-pointer hover:bgLightBlue"
            onClick={() => updateValue("Other")}
          >
            Other
          </div>
        </div>
      )}
    </div>
  );
}
