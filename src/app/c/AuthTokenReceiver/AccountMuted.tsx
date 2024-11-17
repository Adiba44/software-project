"use client";
import Console from "@/utils/console";
import Image from "next/image";
import $$ from "@/utils/global-variables";
import { useMemo } from "react";
import useGlobalContext, { loggedUserType } from "../GlobalContext";
import { encode } from "@/utils/text-encode-decode";
import Link from "next/link";
import { LocalStorage } from "@/utils/stroage";

export default function AccountMuted() {
  const { loggedUser } = useGlobalContext();
  return useMemo(() => <_AccountMuted loggedUser={loggedUser} />, [loggedUser]);
}

function _AccountMuted({ loggedUser }: { loggedUser: loggedUserType }) {
  Console.component("AccountMuted");

  if (!loggedUser) return null;
  return (
    <div className="w-full h-full flex justify-center items-center bg-white dark:bgBlack">
      <div className="w-[480px] px-11 py-16 dark:bgBlack2 border border-gray-300 rounded-md flex flex-col justify-center items-center">
        <Image
          src="/image/bdu-logo.png"
          className="mb-4"
          width="100"
          height="0"
          alt="BDU Logo"
        />
        <div className="mb-8 fontGs text-xl">BDU Accounts</div>
        <div className="mb-2 fontGs text-xl">Hi, {loggedUser.name}</div>
        <div className="w-full mb-8">
          <div>It seems that your account has not yet been disabled.</div>
          <div>Kindly contact your advisor.</div>
        </div>

        <div className="w-full mb-2">Current account:</div>
        {/*  */}
        <div className="w-full mb-8 flex justify-between items-center gap-1">
          <div className="flex gap-2">
            <Image
              src={loggedUser.image || $$.defaultUserImg}
              className="max-w-[40px] max-h-[40px] rounded-full"
              width="40"
              height="40"
              alt="Profile image"
            />
            <div>
              <div className="fontGsm">{loggedUser.name}</div>
              <div className="text-gray-500">{loggedUser.email}</div>
            </div>
          </div>
          <div className="px-1 bg-gray-200 dark:bgBlack4 text-gray-600 text-13">
            Muted
          </div>
        </div>
        {/*  */}
        <div className="w-full mb-6 flex justify-between items-center">
          <div>Try with another account:</div>
          <Link
            href={`${$$.loginSiteDomain}/c/logout`}
            onClick={() => LocalStorage.clear()}
          >
            <button className="btn">Logout</button>
          </Link>
        </div>
        {/*  */}
        <div className="w-full">
          Having trouble to switch account? See the{" "}
          <span
            className="text-blue-600 hover:underline cursor-pointer"
            onClick={() => alert("Added soon!")}
          >
            documentation
          </span>
          .
        </div>
      </div>
    </div>
  );
}
