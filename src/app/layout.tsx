import type { Metadata } from "next";
import "@/scss/main.scss";

export const metadata: Metadata = {
  title: "BDU Accounts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-screen text-sm textBlack fontGst bgWhite2 dark:bgBlack">
        {children}
      </body>
    </html>
  );
}
