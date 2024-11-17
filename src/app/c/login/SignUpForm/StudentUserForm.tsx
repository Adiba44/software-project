"use client";
import Console from "@/utils/console";
import { formDataType } from "./SignUpForm";
import { Dispatch, SetStateAction } from "react";
import SelectGender from "./SelectGender";
import SelectSession from "./SelectSession";
import SelectProgram from "./SelectProgram";

export default function StudentUserForm({
  setShowForm,
  formData,
  setFormData,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  formData: formDataType;
  setFormData: Dispatch<SetStateAction<formDataType>>;
}) {
  Console.component("StudentUserForm");

  return (
    <div className="space-y-6">
      <SelectGender formData={formData} setFormData={setFormData} />

      <div className="textField .showPlaceholder">
        <input
          type="number"
          required
          placeholder="e.g. 1901050"
          value={formData.academicId || ""}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              academicId: e.target.value,
            }))
          }
          className="hideNumberInputArrow"
        />
        <label>Academic ID</label>
      </div>

      <SelectSession formData={formData} setFormData={setFormData} />
      <SelectProgram formData={formData} setFormData={setFormData} />
    </div>
  );
}
