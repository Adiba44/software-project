"use client";
import $$ from "@/utils/global-variables";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace($$.domain + "/c/app");
  }, [router]);

  return null;
}
