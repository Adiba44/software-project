"use client";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ModalContainer({ children }: { children: ReactNode }) {
  useEffect(() => {
    setTimeout(() => {
      const el = document.getElementById("idModalContainer");
      if (el) el.style.opacity = "1";
    }, 0);
  }, []);

  return createPortal(
    <div
      id="idModalContainer"
      className="w-full h-full fixed top-0 left-0 flex justify-center items-center"
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 50,
        opacity: 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <div className="bg-white dark:bgBlack boxShadow rounded-md transform -translate-y-[50px]">
        {children}
      </div>
    </div>,
    document.body
  );
}

export function closingTransition(func: () => void) {
  const el = document.getElementById("idModalContainer");
  if (el) el.style.opacity = "0";
  setTimeout(() => {
    func();
  }, 300);
}
