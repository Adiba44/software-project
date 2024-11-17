"use client";

import Console from "@/utils/console";
import { useEffect, useState } from "react";

let isLight = true;
let isBlue = true;

export default function ThemeColorSwitch() {
  Console.component("ThemeColorSwitch");

  function changeTheme() {
    isLight = !isLight;
    const el = document.querySelector("html");
    if (isLight) {
      if (el) el.classList.remove("dark");
    } else {
      if (el) el.classList.add("dark");
    }
  }

  return (
    <div
      element-name="Theme switcher"
      className="fixed left-5 bottom-5 flex gap-2"
    >
      <div
        className="text-xs hover:underline text-gray-500 cursor-pointer"
        onClick={changeTheme}
      >
        Switch theme
      </div>
    </div>
  );
}
