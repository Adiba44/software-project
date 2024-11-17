"use client";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Console from "@/utils/console";
import $$ from "@/utils/global-variables";
import GoogleIcons from "@/components/icons/GoogleIcons";
import { encode } from "@/utils/text-encode-decode";
import Link from "next/link";
import { LocalStorage } from "@/utils/stroage";

export default function UserImgLogo({
  data,
}: {
  data:
    | {
        name: string;
        email: string;
        image: string;
      }
    | any;
}) {
  Console.component("UserImgLogo");

  const [isApear, setIsApear] = useState<boolean>(false);
  let isHovered: boolean = false;

  if (data)
    return (
      <div className="relative">
        {/* Click section */}
        <label className="cursor-pointer">
          <input
            type="text"
            className="w-0 h-0 absolute"
            onClick={() => setIsApear(true)}
            onBlur={() => {
              !isHovered && setIsApear(false);
            }}
          />
          <Image
            src={data.image || $$.defaultUserImg}
            width={36}
            height={36}
            alt=""
            className="rounded-full"
          />
        </label>

        {/* Apear-Disapear section */}
        {isApear && (
          <div
            onMouseEnter={() => (isHovered = true)}
            onMouseLeave={() => {
              isHovered = false;
              setTimeout(() => {
                if (!isHovered) setIsApear(false);
              }, 2000);
            }}
            className="w-[350px] px-4 py-6 absolute top-[50px] right-0 flex flex-col gap-4 !items-center rounded-xl bg-gray-100 dark:bg-black-600 box-shadow overflow-hidden"
          >
            <div className="w-full text-center truncate">{data.email}</div>
            <Image
              src={data.image || $$.defaultUserImg}
              className="rounded-full"
              width={75}
              height={75}
              alt=""
              priority={true}
            />
            <div className="w-full text-center truncate text-2xl font-gs">
              Hi, {data.name}
            </div>
            <a
              href="https://myaccount.google.com/"
              target="_blank"
              className="w-fit px-3 py-2 rounded-[20px] border border-gray-300 hover:bg-white dark:hover:bg-black-500 hover:cursor-pointer"
            >
              Manage google account
            </a>
            <div className="flex">
              <div
                onClick={() => signIn("google")}
                className="w-[162px] p-3 flex gap-2 rounded-tl-3xl rounded-bl-3xl cursor-pointer bg-white dark:bg-black-500 hover:bg-gray-200 border-r border-gray-100"
              >
                <GoogleIcons.swap className="w-5 h-5 fill-black" />
                <div>Change account</div>
              </div>
              <Link
                href={`${$$.domain}/c/logout`}
                onClick={() => LocalStorage.clear()}
              >
                <div className="w-[158px] p-3 flex gap-2 rounded-tr-3xl rounded-br-3xl cursor-pointer bg-white dark:bg-black-500 hover:bg-gray-200">
                  <GoogleIcons.logout className="w-5 h-5 fill-black" />
                  <div>Logout</div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
}
