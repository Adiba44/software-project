import type { Metadata } from "next";
import "@/scss/main.scss";

export const metadata: Metadata = {
  // title: "BDU Apps",
  title: "BDU Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-screen text-sm textBlack fontRoboto">
        {children}
      </body>
    </html>
  );
}
