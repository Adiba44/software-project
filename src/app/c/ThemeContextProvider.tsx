"use client";
import { LocalStorage } from "@/utils/stroage";
import React, {
  useEffect,
  Context,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type contextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
} | null;

const context: Context<contextType> = createContext<contextType>(null);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (LocalStorage.bduAccountsTheme) setTheme(LocalStorage.bduAccountsTheme);
    else {
      LocalStorage.bduAccountsTheme = "light";
      setTheme("light");
    }
  }, [setTheme]);

  useEffect(() => {
    if (!theme) return;
    const doCurrent = theme;
    const skipPrev = theme === "light" ? "dark" : "light";
    const el = document.querySelector("html");
    if (el) {
      LocalStorage.bduAccountsTheme = doCurrent;
      el.classList.add(doCurrent);
      el.classList.remove(skipPrev);
      el.style.colorScheme = doCurrent;
    }
  }, [theme]);

  if (!theme) return <div></div>;
  else
    return (
      <context.Provider value={{ theme, setTheme }}>
        {children}
      </context.Provider>
    );
}

export default function useThemeContext() {
  const stateVar: contextType = React.useContext(context);
  if (!stateVar) throw new Error("usecontext found null");
  else return stateVar;
}
