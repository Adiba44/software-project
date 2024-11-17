"use client";
import { LocalStorage } from "@/utils/stroage";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    if (LocalStorage.authToken) {
      // Send authToken to the parent window
      window.parent.postMessage(LocalStorage.authToken, "*");
    } else {
      window.parent.postMessage("unauthenticated", "*");
    }
  }, []);

  return null;
}
