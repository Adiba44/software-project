"use client";
import { Suspense, useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import axios from "@/utils/api-handler/axios";
import SignUpForm from "./SignUpForm/SignUpForm";
import { LocalStorage } from "@/utils/stroage";
import Console from "@/utils/console";
import { useSearchParams } from "next/navigation";
import { encode } from "@/utils/text-encode-decode";
import SpinLoader from "@/components/preloader/SpinLoader";
import NotBduEmailMsg from "./NotBduEmailMsg";
import EmailNotRegisteredMsg from "./EmailNotRegisteredMsg";
import api from "@/app/api/endpoints";

export default function Page() {
  return (
    <Suspense>
      <_Page />
    </Suspense>
  );
}

function _Page() {
  Console.component("Login");
  const session = useSession();
  console.log("session", session);
  const [page, setPage] = useState<string>("");

  // Read the encoded data from URL
  const nextLink = useSearchParams().get("next");

  useEffect(() => {
    (async () => {
      // Update doument title
      document.title = "Login";

      // if format `?data=someting` not match then do nothing
      if (!nextLink) {
        console.log("Next link not found");
        return;
      }

      // If auth-token found then send it.
      if (LocalStorage.authToken) {
        window.location.replace(nextLink);
        return;
      }

      if (session.status === "loading") return;
      // Is the email authenticated by google?
      // If no then go to google login page.
      else if (session.status === "unauthenticated") signIn("google");
      // When email authenticated by google:
      else if (session.status === "authenticated") {
        if (!session.data || !session.data.user) return;

        // Check is email registered on BDU database?
        let res = await axios.post(api.isBduEmail, {
          email: session.data.user.email,
        });
        const isBduEmail = res.isBduEmail;

        if (!isBduEmail) {
          setPage("notBduEmail");
          return;
        }

        // Fetch user data
        res = await axios.post(api.readLoggedUserData, {
          ...session.data.user,
        });
        if (res.status === 403) setPage("notRegistered");
        else if (res.status === 200) {
          LocalStorage.authToken = res.token;
          LocalStorage.loggedUser = session.data.user;
          window.location.replace(nextLink);
        } else alert("Something went wrong! Please login again.");
      }
    })();
  }, [nextLink, session.status]);

  // --------------------

  function Loader() {
    return (
      <div className="w-full h-full flex justify-center items-center transform -translate-y-[50px]">
        <SpinLoader />
      </div>
    );
  }

  // --------------------

  if (session.status === "loading" || session.status === "unauthenticated")
    return <Loader />;
  if (session.status === "authenticated") {
    if (!session.data || !session.data.user) return <Loader />;
    else if (page === "notBduEmail")
      return <NotBduEmailMsg email={session.data.user.email || ""} />;
    else if (page === "notRegistered")
      return (
        <EmailNotRegisteredMsg
          setPage={setPage}
          email={session.data.user.email || ""}
        />
      );
    else if (page === "signupForm")
      return <SignUpForm setPage={setPage} sessionData={session} />;
    else return <Loader />;
  }
}
