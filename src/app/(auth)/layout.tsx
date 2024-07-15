import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { HomeSVG } from "@/components/svgs/home";
import { Toaster } from "@/components/shadcn/toaster";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App - login",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="flex h-screen w-full items-center justify-center">
          <div>{children}</div>
          <div className="ml-56 hidden lg:block">
            <HomeSVG />
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
