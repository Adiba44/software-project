"use client";
import GoogleIcons from "@/components/icons/GoogleIcons";
import CreateUserModal from "./CreateUserModal";
import Console from "@/utils/console";
import { useState } from "react";

export default function CreateBtn() {
  Console.component("CreateBtn");
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenModal((prev) => !prev)}
        className="w-fit mb-4 py-2 pl-3 pr-4 flex justify-between items-center gap-1 btn !rounded-[20px] bgBlue hover:bgBlue2 cursor-pointer"
      >
        <GoogleIcons.plus className="fill-white" />
        <div className="fontGsm text-white">Create User</div>
      </div>
      {openModal && (
        <CreateUserModal type="create" setOpenModal={setOpenModal} />
      )}
    </>
  );
}
