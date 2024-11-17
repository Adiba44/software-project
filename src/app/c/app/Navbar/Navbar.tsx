"use client";
import UserImgLogo from "./UserImgLogo";
import { useEffect, useState } from "react";
import Console from "@/utils/console";
import { hideLoader } from "@/components/preloader/show-hide";
import NavbarSkeleton from "@/components/navbar/NavbarSkeleton";
import $$ from "@/utils/global-variables";
import { encode } from "@/utils/text-encode-decode";
import { LocalStorage } from "@/utils/stroage";

export default function Navbar() {
  Console.component("Navbar");

  const [loggedUser, setLoggedUser] = useState(undefined);

  // Hide the line prelaoder
  useEffect(() => {
    hideLoader();
    if (LocalStorage.loggedUser) setLoggedUser(LocalStorage.loggedUser);
  }, []);

  return (
    <NavbarSkeleton zIndex={5} className="dark:!bgBlack">
      {/* Left sided content */}
      <div className="flex items-center gap-4">
        <div className="w-[267px] text-2xl text-gray-600">
          <span className="mr-2 fontGsm">BDU</span>
          <span className="fontGs">Login</span>
        </div>
      </div>

      {/* Right sided content */}
      <div className="flex gap-3 items-center">
        {!loggedUser ? (
          <div
            onClick={() =>
              window.location.replace(
                `${$$.domain}/c/login?next=${$$.domain}/c/app`
              )
            }
            className="btn !bg-[#2280BF]"
          >
            Sign in
          </div>
        ) : (
          <UserImgLogo data={loggedUser} />
        )}
      </div>
    </NavbarSkeleton>
  );
}
