"use client";
import ModalContainer, { closingTransition } from "@/components/ModalContainer";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useMemo } from "react";
import Console from "@/utils/console";
import useGlobalContext from "../../GlobalContext";
import axios from "@/utils/api-handler/axios";
import IconSkeleton from "@/components/icons/IconSkeleton";
import GoogleIcons from "@/components/icons/GoogleIcons";
import SpinLoader from "@/components/preloader/SpinLoader";
import SvgFish from "@/components/svg-image/Fish";
import { isNull } from "@/utils/more";
import Image from "next/image";
import $$ from "@/utils/global-variables";
import SelectGender from "./SelectGender";
import SelectSession from "./SelectSession";
import SelectDepartment from "./SelectDepartment";
import SelectRole from "./SelectRole";
import SelectProgram from "./SelectProgram";
import $ from "../../variables";
import { useRouter } from "next/navigation";
import { showLoader } from "../../BlankPageLoader";
import api from "@/app/api/endpoints";
import { mutate } from "@/utils/api-handler/swr";

export type formDataType = {
  id: number;
  name: string;
  email: string;
  image: string;
  gender: string;
  academicId: number;
  session: { id: number; value: string };
  program: { id: number; full: string; short: string };
  department: { id: number; full: string; short: string };
  faculty: { id: number; full: string; short: string };
  designation: string;
  about: string;
  role: string;
  isMuted: boolean;
  mutedAt: string;
  createdAt: string;
  updatedAt: string;
};

export default function CreateUserModal({
  type,
  editId,
  setOpenModal,
}: {
  type: "create" | "edit";
  editId?: number;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { activeTab } = useGlobalContext();
  return useMemo(
    () => (
      <_CreateUserModal
        type={type}
        editId={editId}
        setOpenModal={setOpenModal}
        activeTab={activeTab}
      />
    ),
    [activeTab]
  );
}

function _CreateUserModal({
  type,
  editId,
  setOpenModal,
  activeTab,
}: {
  type: "create" | "edit";
  editId?: number;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  activeTab: string;
}) {
  Console.component("CreateUserModal");
  const router = useRouter();

  const closeModal = useCallback(() => {
    closingTransition(() => {
      setOpenModal((prev) => !prev);
    });
  }, [setOpenModal]);

  const initialData: formDataType = {
    id: 0,
    name: "",
    email: "",
    image: "",
    gender: "",
    academicId: 0,
    session: { id: 0, value: "" },
    program: { id: 0, full: "", short: "" },
    department: { id: 0, full: "", short: "" },
    faculty: { id: 0, full: "", short: "" },
    designation: "",
    about: "",
    role: "teacher",
    isMuted: false,
    mutedAt: "",
    createdAt: "",
    updatedAt: "",
  };
  const [formData, setFormData] = useState<formDataType | undefined>(undefined);
  const [resetData, setResetData] = useState<formDataType | undefined>(
    undefined
  );
  const [btnState, setBtnState] = useState<"active" | "disable" | "loading">(
    "disable"
  );

  useEffect(() => {
    (async () => {
      if (type === "create") {
        setFormData(initialData);
        setResetData(initialData);
      } else {
        // Read a user data
        const res = await axios.get(api.readAUserInfo + editId);
        if (res.status === 200) {
          // Here initialData is a template that contains all keys, whereas res.data contains required keys
          setFormData({ ...initialData, ...res.data });
          setResetData({ ...initialData, ...res.data });
        }
      }
    })();
  }, []);

  // when writing on input field
  function writingOnInputField(e: ChangeEvent<HTMLInputElement>) {
    setFormData(
      (prev) =>
        prev && {
          ...prev,
          [e.target.name]: e.target.value,
        }
    );
  }

  // Update save/update button state
  // Determine when save/update button is active/disabled
  useEffect(() => {
    if (!formData) return;
    if (formData.name === "" || formData.email === "" || formData.gender === "")
      setBtnState("disable");
    else if (formData.role === "teacher") {
      if (formData.designation === "" || formData.department.full === "")
        setBtnState("disable");
      else setBtnState("active");
    } else if (formData.role === "student") {
      if (
        formData.academicId === 0 ||
        formData.session.value === "" ||
        formData.program.full === ""
      )
        setBtnState("disable");
      else setBtnState("active");
    } else if (formData.role === "other") {
      if (formData.designation === "") setBtnState("disable");
      else setBtnState("active");
    }
  }, [formData]);

  async function doSubmit() {
    setBtnState("loading");

    let res;
    if (type === "create") res = await axios.post(api.createUser, formData);
    else
      res = await axios.post(api.updateUser, {
        ...formData,
        id: editId,
      });

    if (res.status !== 200) {
      setBtnState("active");
      alert(res.message);
      return;
    }

    const targetTab = `${formData?.role}s`;
    if (activeTab === targetTab) await $.userTableMutate();
    else {
      if (targetTab === "teachers")
        await mutate(api.readAllTeachersData + "?limit=50&&isMuted=0");
      else if (targetTab === "students")
        await mutate(api.readAllStudentsData + "?limit=50&&isMuted=0");
      if (targetTab === "others")
        await mutate(api.readAllOtherUsersData + "?limit=50&&isMuted=0");
      showLoader();
      router.replace(`/c/${targetTab}`);
    }
    mutate(api.readCountSummary);
    closeModal();
  }

  return (
    <ModalContainer>
      <div className="w-[600px] max-h-[757px] overflow-y-auto px-8 py-12 bg-white dark:bgBlack2 rounded-lg">
        {formData === undefined ? (
          <>
            {/* navbar */}
            <div className="flex justify-between items-center gap-2">
              <IconSkeleton title="Back" onClick={closeModal}>
                <GoogleIcons.arrow.back className="fill-gray-500" />
              </IconSkeleton>
            </div>

            <div className="w-full flex justify-center pt-16">
              <SpinLoader />
            </div>
          </>
        ) : isNull(formData) ? (
          <>
            {/* navbar */}
            <div className="flex justify-between items-center gap-2">
              <IconSkeleton title="Back" onClick={closeModal}>
                <GoogleIcons.arrow.back className="fill-gray-500" />
              </IconSkeleton>
            </div>

            <div className="w-full flex flex-col justify-center items-center pt-16">
              <SvgFish className="w-[170px]" />
              <div className="mt-6 fontGsm text-gray-500">
                No user data found!
              </div>
            </div>
          </>
        ) : (
          <>
            {/* navbar */}
            <div className="flex justify-between items-center gap-2">
              <IconSkeleton title="Back" onClick={closeModal}>
                <GoogleIcons.arrow.back className="fill-gray-500" />
              </IconSkeleton>
              <div className="flex items-center gap-2">
                <button
                  className={`btn2 !rounded-[20px]  ${
                    btnState === "loading" && "opacity-50 pointer-events-none"
                  }`}
                  onClick={() =>
                    setFormData(
                      (prev) =>
                        prev && {
                          ...prev,
                          ...resetData,
                        }
                    )
                  }
                >
                  Reset
                </button>
                {btnState === "loading" ? (
                  <button className="btnDisable !rounded-[20px]">
                    {type === "create" ? "Creating..." : "Updating..."}
                  </button>
                ) : btnState === "disable" ? (
                  <button className="btnDisable !rounded-[20px]">
                    {type === "create" ? "Create" : "Update"}
                  </button>
                ) : (
                  <button className="btn !rounded-[20px]" onClick={doSubmit}>
                    {type === "create" ? "Create" : "Update"}
                  </button>
                )}
              </div>
            </div>

            {/* Image section */}
            <div className="mt-4 flex justify-start items-center gap-6">
              <Image
                src={formData.image || $$.defaultUserImg}
                className="rounded-full"
                width="162"
                height="162"
                alt="Profile image"
              />
              <SelectRole formData={formData} setFormData={setFormData} />
            </div>

            {/* Form */}
            <div className="mt-8 space-y-5">
              {/* Name input field */}
              <div className="flex items-center gap-4">
                <GoogleIcons.person className="fill-gray-500" />
                <div className="textField">
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={writingOnInputField}
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <label>Name</label>
                </div>
              </div>
              {/* Email input field */}
              <div className="flex items-center gap-4">
                <GoogleIcons.email className="fill-gray-500" />
                <div className="textField">
                  <input
                    type="text"
                    required
                    name="email"
                    value={formData.email}
                    onChange={writingOnInputField}
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <label>Email</label>
                </div>
              </div>
              {/* Gender input field */}
              <div className="flex items-center gap-4">
                <svg
                  className="fill-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="M220-80v-300h-60v-220q0-33 23.5-56.5T240-680h120q33 0 56.5 23.5T440-600v220h-60v300H220Zm80-640q-33 0-56.5-23.5T220-800q0-33 23.5-56.5T300-880q33 0 56.5 23.5T380-800q0 33-23.5 56.5T300-720ZM600-80v-240H480l102-306q8-26 29.5-40t48.5-14q27 0 48.5 14t29.5 40l102 306H720v240H600Zm60-640q-33 0-56.5-23.5T580-800q0-33 23.5-56.5T660-880q33 0 56.5 23.5T740-800q0 33-23.5 56.5T660-720Z" />
                </svg>
                <SelectGender formData={formData} setFormData={setFormData} />
              </div>
              {/* Designation input field */}
              {formData.role !== "student" && (
                <div className="flex items-center gap-4">
                  <GoogleIcons.clock className="fill-gray-500" />
                  <div className="textField">
                    <input
                      type="text"
                      required
                      name="designation"
                      value={formData.designation}
                      onChange={writingOnInputField}
                      autoComplete="off"
                      spellCheck={false}
                    />
                    <label>Designation</label>
                  </div>
                </div>
              )}
              {/* Academic ID input field */}
              {formData.role === "student" && (
                <div className="flex items-center gap-4">
                  <svg
                    className="fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M160-80q-33 0-56.5-23.5T80-160v-440q0-33 23.5-56.5T160-680h200v-120q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v120h200q33 0 56.5 23.5T880-600v440q0 33-23.5 56.5T800-80H160Zm0-80h640v-440H600q0 33-23.5 56.5T520-520h-80q-33 0-56.5-23.5T360-600H160v440Zm80-80h240v-18q0-17-9.5-31.5T444-312q-20-9-40.5-13.5T360-330q-23 0-43.5 4.5T276-312q-17 8-26.5 22.5T240-258v18Zm320-60h160v-60H560v60Zm-200-60q25 0 42.5-17.5T420-420q0-25-17.5-42.5T360-480q-25 0-42.5 17.5T300-420q0 25 17.5 42.5T360-360Zm200-60h160v-60H560v60ZM440-600h80v-200h-80v200Zm40 220Z" />
                  </svg>
                  <div className="textField">
                    <input
                      type="number"
                      required
                      name="academicId"
                      value={formData.academicId || ""}
                      onChange={writingOnInputField}
                      autoComplete="off"
                      spellCheck={false}
                    />
                    <label>Academic ID</label>
                  </div>
                </div>
              )}
              {/*  */}
              {formData.role === "student" && (
                <div className="flex items-center gap-4">
                  <GoogleIcons.clock className="fill-gray-500" />
                  <SelectSession
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
              )}
              {/* Program input field */}
              {formData.role === "student" && (
                <div className="flex items-center gap-4">
                  <svg
                    className="fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M640-120q-33 0-56.5-23.5T560-200v-160q0-33 23.5-56.5T640-440h160q33 0 56.5 23.5T880-360v160q0 33-23.5 56.5T800-120H640Zm0-80h160v-160H640v160ZM80-240v-80h360v80H80Zm560-280q-33 0-56.5-23.5T560-600v-160q0-33 23.5-56.5T640-840h160q33 0 56.5 23.5T880-760v160q0 33-23.5 56.5T800-520H640Zm0-80h160v-160H640v160ZM80-640v-80h360v80H80Zm640 360Zm0-400Z" />
                  </svg>
                  <SelectProgram
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
              )}
              {/* Department input field */}
              {formData.role === "teacher" && (
                <div className="flex items-center gap-4">
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
                  <SelectDepartment
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
              )}
            </div>

            <div className="mt-6 pt-5 flex justify-start items-center gap-3 border-t border-gray-300">
              <div
                className="cursor-pointer hover:underline flex items-center gap-1"
                onClick={() =>
                  setFormData(
                    (prev) =>
                      prev && {
                        ...prev,
                        isMuted: !prev.isMuted,
                      }
                  )
                }
              >
                <div
                  className={`fontGsm ${
                    formData.isMuted ? "textBlue" : "text-gray-500"
                  }`}
                >
                  Muted
                </div>
                <GoogleIcons.selectCircle
                  fill={formData.isMuted}
                  className={formData.isMuted ? "fillBlue" : "fill-gray-500"}
                />
              </div>
              {/* --- */}
            </div>
          </>
        )}
      </div>
    </ModalContainer>
  );
}
