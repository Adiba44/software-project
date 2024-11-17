"use client";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import GoogleIcons from "@/components/icons/GoogleIcons";
import { showLoader } from "@/components/preloader/show-hide";
import { useRouter, useSearchParams } from "next/navigation";
import { LocalStorage } from "@/utils/stroage";

export default function Page() {
  return (
    <Suspense>
      <_Page />
    </Suspense>
  );
}

function _Page() {
  // Read the encoded data from URL
  const encodedUrlData = useSearchParams().get("data");
  const router = useRouter();
  const [loggedUser, setLoggedUser] = useState<any>(undefined);

  // Hide the line prelaoder
  useEffect(() => {
    if (LocalStorage.loggedUser) setLoggedUser(LocalStorage.loggedUser);
  }, []);

  useEffect(() => {
    if (encodedUrlData)
      router.replace(window.location.origin + window.location.pathname);
  }, [encodedUrlData]);

  console.log("loggedUser", loggedUser);

  return (
    <>
      <Navbar />
      <div className="pt-24">
        <div className="w-full text-center text-4xl fontGsm text-[#2280BF]">
          User Management System
        </div>
        {loggedUser && (
          <div className="w-full mt-6 text-center text-lg fontGsm text-[#2280BF]">
            Hi, {loggedUser.name}, You logged in successfully.
          </div>
        )}

        <div className="mt-16 flex justify-center items-center">
          {/* Column 1 */}
          <Image
            src="/image/manage-people.png"
            className="transform -translate-x-[78px]"
            width="500"
            height="1"
            alt="Banner"
          />

          {/* Column 2 */}
          <div className="w-[324px]">
            <div className="mt-4 text-lg">
              Streamline your experience with our powerful User Management
              System. Take control and elevate the app's potential today!
            </div>
            {loggedUser && (
              <a href="http://localhost:3001">
                <div className="mt-4 flex justify-start items-center gap-4 group cursor-pointer">
                  <div className="p-3 bg-[#2280BF] group-hover:bgBlue2 rounded-full">
                    <GoogleIcons.arrow.forward className="fill-white" />
                  </div>
                  <div
                    className="text-base text-[#2280BF] group-hover:textBlue2 fontGsm"
                    // onClick={showLoader}
                  >
                    Explore the app
                  </div>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
