"use client";
import { LocalStorage } from "@/utils/stroage";
import { decode } from "@/utils/text-encode-decode";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

export default function Page() {
  return (
    <Suspense>
      <_Page />
    </Suspense>
  );
}

function _Page() {
  const router = useRouter();
  const encodedUrlData = useSearchParams().get("data");

  useEffect(() => {
    if (encodedUrlData) {
      LocalStorage.data = encodedUrlData;

      const decodedUrlData = decode(encodedUrlData);
      if (decodedUrlData.redirect) router.replace(decodedUrlData.redirect);
    }
  }, []);
  return null;
}
