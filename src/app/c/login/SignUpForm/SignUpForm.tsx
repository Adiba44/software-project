"use client";
import Console from "@/utils/console";
import { hideLoader } from "@/components/preloader/show-hide";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import UserImgLogo from "../../app/Navbar/UserImgLogo";
import IconSkeleton from "@/components/icons/IconSkeleton";
import GoogleIcons from "@/components/icons/GoogleIcons";
import SelectRole from "./SelectRole";
import Image from "next/image";
import Link from "next/link";
import StudentUserForm from "./StudentUserForm";
import OtherUserForm from "./OtherUserForm";
import TeacherUserForm from "./TeacherUserForm";
import { useSession } from "next-auth/react";
import axios from "@/utils/api-handler/axios";
import api from "@/app/api/endpoints";

export type formDataType = {
  role: string;
  name: string;
  email: string;
  image: string;
  gender: string;
  academicId: number | string;
  session: { id: number; value: string };
  department: { id: number; full: string; short: string };
  program: { id: number; full: string; short: string };
  designation: string;
};

export default function SignUpForm({
  setPage,
  sessionData,
}: {
  setPage: Dispatch<SetStateAction<string>>;
  sessionData: any;
}) {
  Console.component("SignUpForm");

  const [formData, setFormData] = useState<formDataType>({
    role: "",
    name: sessionData.data.user.name,
    email: sessionData.data.user.email,
    image: sessionData.data.user.image,
    gender: "",
    academicId: 0,
    session: { id: 0, value: "" },
    department: { id: 0, full: "", short: "" },
    program: { id: 0, full: "", short: "" },
    designation: "",
  });
  const [showForm, setShowForm] = useState<boolean>(false);

  // Hide the line prelaoder
  useEffect(hideLoader, []);

  useEffect(() => {
    if (formData.name === "" || formData.email === "" || formData.gender === "")
      setSubmitBtnState("disable");
    else if (formData.role === "teacher") {
      if (formData.designation === "" || formData.department.full === "")
        setSubmitBtnState("disable");
      else setSubmitBtnState("active");
    } else if (formData.role === "student") {
      if (
        formData.academicId === 0 ||
        formData.academicId === "" ||
        formData.session.value === "" ||
        formData.program.full === ""
      )
        setSubmitBtnState("disable");
      else setSubmitBtnState("active");
    } else if (formData.role === "other") {
      if (formData.designation === "") setSubmitBtnState("disable");
      else setSubmitBtnState("active");
    }
  }, [formData]);

  // Create user related
  const [submitBtnState, setSubmitBtnState] = useState<
    "active" | "disable" | "loading"
  >("disable");
  async function createNewUser() {
    setSubmitBtnState("loading");
    const res = await axios.post(api.createNewUser, formData);
    if (res.status === 200) window.location.reload();
    else if (res.status === 403) alert(res.message);
    else alert("Something went wrong! Please, try again.");

    if (res.status !== 200) setSubmitBtnState("active");
  }

  console.log("formData", formData);
  console.log("submitBtnState", submitBtnState);

  if (!["loading", "authenticated"].includes(sessionData.status)) return null;
  else
    return (
      /*****
       * Navbar
       ******/
      <>
        <div className="bg-white border-b border-gray-300">
          {/* 1st row */}
          <div className="w-full h-[64px] px-6 flex justify-between items-center">
            {/* Left sided content */}
            <div className="flex items-center gap-4">
              <div className="w-[267px] text-2xl text-gray-600">
                <span className="mr-2 fontGsm">BDU</span>
                <span className="fontGs">Accounts</span>
              </div>
            </div>

            {/* Right sided content */}
            <div className="flex gap-3 items-center">
              {sessionData.status === "loading" ? (
                <></>
              ) : (
                <div className="w-fit flex justify-center items-center gap-5">
                  <Link href="/c/app">
                    <IconSkeleton title="BDU Apps">
                      <GoogleIcons.apps className="fill-gray-500" />
                    </IconSkeleton>
                  </Link>
                  <UserImgLogo data={sessionData.data?.user} />
                </div>
              )}
            </div>
          </div>

          {/* 2nd row */}
          <div className="pb-4">
            <div className="w-[570px] mx-auto flex justify-between items-center">
              <div className="fontGs text-xl">Create New Account</div>
              <IconSkeleton
                title="Close"
                onClick={() => setPage("notRegistered")}
              >
                <GoogleIcons.close className="fill-gray-500" />
              </IconSkeleton>
            </div>
          </div>
        </div>

        <div className="w-[570px] mx-auto">
          <Image
            src="/image/password-manager.png"
            className="mx-auto pt-16"
            width="250"
            height="0"
            alt="Password"
          />
          <div className="mt-8 text-center text-2xl fontGsm">
            Hi, {sessionData.data?.user?.name}
          </div>
          <div className="mt-8 text-center">
            All the information is registered to {sessionData.data?.user?.email}
            . After submiting information, you are not able to change any
            information by yourself. But you can place application to your
            advisor or department chairman for furthur any modification.
          </div>

          {/* When no role selected */}
          {!showForm && (
            <div className="w-[60%] mt-12 mx-auto">
              <SelectRole formData={formData} setFormData={setFormData} />

              <div className="w-full mt-8 flex justify-end">
                <button
                  className={formData.role ? "btn" : "btnDisable"}
                  onClick={() => {
                    if (formData.role === "") return;
                    setShowForm((prev) => !prev);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          <div className="w-[60%] mt-12 mx-auto">
            {/* When role is Student */}
            {showForm && formData.role === "student" && (
              <StudentUserForm
                setShowForm={setShowForm}
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {/* When role is Student */}
            {showForm && formData.role === "teacher" && (
              <TeacherUserForm
                setShowForm={setShowForm}
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {/* When role is Student */}
            {showForm && formData.role === "other" && (
              <OtherUserForm
                setShowForm={setShowForm}
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {/* Buttons */}
            {showForm && (
              <div className="mt-6 flex justify-end items-center gap-2">
                <button
                  className="btn2"
                  onClick={() => setShowForm((prev) => !prev)}
                >
                  Back
                </button>
                {submitBtnState === "loading" ? (
                  <button className="btnDisable">Submiting...</button>
                ) : submitBtnState === "active" ? (
                  <button className="btn" onClick={createNewUser}>
                    Submit
                  </button>
                ) : (
                  <button className="btnDisable">Submit</button>
                )}
              </div>
            )}
          </div>
        </div>
      </>
    );
}
