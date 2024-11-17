import StopRefetchAction from "@/components/StopRefetchAction";
import { GlobalContextProvider } from "./GlobalContext";
import { ThemeContextProvider } from "./ThemeContextProvider";
import Fetcher from "./Fetcher";
import BlankPageLoader from "./BlankPageLoader";
import Navbar from "./Navbar";
import TabList from "./TabList/TabList";
import DeviceDetectorRouter from "./DeviceDetectorRouter";
import AuthTokenReceiver from "./AuthTokenReceiver/AuthTokenReceiver";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DeviceDetectorRouter>
      <GlobalContextProvider>
        <ThemeContextProvider>
          <AuthTokenReceiver>
            <StopRefetchAction />
            <Fetcher>
              <div className="w-full h-full">
                <Navbar />
                <div className="pt-4 flex">
                  <TabList />
                  <div className="flex-1 pr-7">{children}</div>
                </div>
              </div>
            </Fetcher>
            <BlankPageLoader />
          </AuthTokenReceiver>
        </ThemeContextProvider>
      </GlobalContextProvider>
    </DeviceDetectorRouter>
  );
}
