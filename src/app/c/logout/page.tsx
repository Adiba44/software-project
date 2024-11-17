"use client";
import SpinLoader from "@/components/preloader/SpinLoader";
import $$ from "@/utils/global-variables";
import { LocalStorage } from "@/utils/stroage";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // When already doing signout then redirect to the link
    if (LocalStorage.signOut === true) {
      LocalStorage.removeItem("signOut");
      window.location.replace($$.domain + "/c/app");
    } else {
      // When not signout once then signout now
      LocalStorage.signOut = true;
      LocalStorage.removeItem("authToken");
      LocalStorage.removeItem("loggedUser");
      signOut();
    }
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center transform -translate-y-[50px]">
      <SpinLoader />
    </div>
  );
}
