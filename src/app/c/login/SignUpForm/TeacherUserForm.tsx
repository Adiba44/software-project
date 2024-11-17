"use client";
import Console from "@/utils/console";
import { formDataType } from "./SignUpForm";
import { Dispatch, SetStateAction } from "react";
import SelectGender from "./SelectGender";
import SelectDepartment from "./SelectDepartment";

export default function TeacherUserForm({
  setShowForm,
  formData,
  setFormData,
}: {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  formData: formDataType;
  setFormData: Dispatch<SetStateAction<formDataType>>;
}) {
  Console.component("TeacherUserForm");

  return (
    <div className="space-y-6">
      <SelectGender formData={formData} setFormData={setFormData} />

      <div className="textField .showPlaceholder">
        <input
          type="text"
          required
          placeholder="e.g. Lecturer"
          value={formData.designation}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              designation: e.target.value,
            }))
          }
        />
        <label>Designation</label>
      </div>

      <SelectDepartment formData={formData} setFormData={setFormData} />
    </div>
  );
}
