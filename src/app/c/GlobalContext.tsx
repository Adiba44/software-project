"use client";
import React, {
  Context,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type loggedUserType =
  | {
      id: number;
      name: string;
      email: string;
      image: string;
      role: string;
      isMuted: boolean;
      lastLoginAt: string;
    }
  | undefined;

export type countSummaryType = {
  teachers: { total: number; muted: number };
  students: { total: number; muted: number };
  others: { total: number; muted: number };
  faculty: number;
  department: number;
  program: number;
  session: { total: number; muted: number };
};

export type myAccessType =
  | {
      createUser: boolean;
      editUser: boolean;
      deleteUser: boolean;
      createFaculty: boolean;
      editFaculty: boolean;
      deleteFaculty: boolean;
      createSession: boolean;
      editSession: boolean;
      deleteSession: boolean;
      editAccess: boolean;
      viewOthersHistory: boolean;
    }
  | undefined;

export type navSearchBarType = {
  keyword: string;
  isLoading: boolean;
};

type contextType = {
  loggedUser: loggedUserType;
  setLoggedUser: Dispatch<SetStateAction<loggedUserType>>;
  countSummary: countSummaryType;
  setCountSummary: Dispatch<SetStateAction<countSummaryType>>;
  myAccess: myAccessType;
  setMyAccess: Dispatch<SetStateAction<myAccessType>>;

  doRefetch: boolean;
  setDoRefetch: Dispatch<SetStateAction<boolean>>;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  navSearchBar: navSearchBarType;
  setNavSearchBar: Dispatch<SetStateAction<navSearchBarType>>;
} | null;

const globalContext: Context<contextType> = createContext<contextType>(null);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [loggedUser, setLoggedUser] = useState<loggedUserType>(undefined);
  const [countSummary, setCountSummary] = useState<countSummaryType>({
    teachers: { total: 0, muted: 0 },
    students: { total: 0, muted: 0 },
    others: { total: 0, muted: 0 },
    faculty: 0,
    department: 0,
    program: 0,
    session: { total: 0, muted: 0 },
  });
  const [myAccess, setMyAccess] = useState<myAccessType>(undefined);

  const [doRefetch, setDoRefetch] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("");
  const [navSearchBar, setNavSearchBar] = useState<navSearchBarType>({
    keyword: "",
    isLoading: false,
  });

  return (
    <globalContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        countSummary,
        setCountSummary,
        myAccess,
        setMyAccess,

        doRefetch,
        setDoRefetch,
        activeTab,
        setActiveTab,
        navSearchBar,
        setNavSearchBar,
      }}
    >
      {children}
    </globalContext.Provider>
  );
}

export default function useGlobalContext() {
  const stateVar: contextType = React.useContext(globalContext);
  if (!stateVar) throw new Error("usecontext found null");
  else return stateVar;
}
