"use client";
import ThemeColorSwitch from "@/components/ThemeColorSwitch";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        {children}
        <ThemeColorSwitch />
      </SessionProvider>
    </>
  );
}
