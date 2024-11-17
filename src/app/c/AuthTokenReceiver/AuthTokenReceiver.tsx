"use client";
import Console from "@/utils/console";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import useGlobalContext, { loggedUserType } from "../GlobalContext";
import SpinLoader from "@/components/preloader/SpinLoader";
import axios from "@/utils/api-handler/axios";
import api from "@/app/api/endpoints";
import AccountMuted from "./AccountMuted";
import $$ from "@/utils/global-variables";

export default function AuthTokenReceiver({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loggedUser, setLoggedUser } = useGlobalContext();
  return useMemo(
    () => (
      <_AuthTokenReceiver
        children={children}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
      />
    ),
    [loggedUser, setLoggedUser]
  );
}

function _AuthTokenReceiver({
  children,
  loggedUser,
  setLoggedUser,
}: {
  children: React.ReactNode;
  loggedUser: loggedUserType;
  setLoggedUser: Dispatch<SetStateAction<loggedUserType>>;
}) {
  Console.component("AuthTokenReceiver");

  const [page, setPage] = useState<string>("");

  const getLoggedUserData = async () => {
    const res = await axios.get(api.getLoggedUserData);
    if (res.status === 200) {
      if (res.data.isMuted) setPage("accountMuted");
      setLoggedUser(res.data);
    }
  };

  useEffect(() => {
    // Listen for the message event to receive authToken
    const handleAuthToken = (event: any) => {
      if (event.origin === $$.loginSiteDomain) {
        const authToken = event.data;
        if (authToken === "unauthenticated")
          window.location.replace(
            `${$$.loginSiteDomain}/c/login?next=${window.location.href}`
          );
        else if (authToken) {
          $$.authToken = authToken;
          getLoggedUserData();

          setTimeout(() => {
            const el = document.getElementById("tokenReceiverIframe");
            if (el) el.remove();
          }, 1000);
        }
      }
    };

    window.addEventListener("message", handleAuthToken);

    // Clean up the event listener
    return () => {
      window.removeEventListener("message", handleAuthToken);
    };
  }, []);

  return (
    <>
      {page === "accountMuted" ? (
        <AccountMuted />
      ) : loggedUser === undefined ? (
        <div className="w-full h-full flex justify-center items-center transform -translate-y-[50px]">
          <SpinLoader />
        </div>
      ) : (
        <>{children}</>
      )}

      <iframe
        id="tokenReceiverIframe"
        src={$$.loginSiteDomain + "/c/auth-token-provider"}
        style={{ display: "none" }}
        title="Token Receiver"
      />
    </>
  );
}
