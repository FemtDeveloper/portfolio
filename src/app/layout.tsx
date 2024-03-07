import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components";
import { LenisProvider } from "./components/LenisProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Miranda dev",
  description: "Felix Miranda's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.className} scroll-smooth`}>
      <head>
        <meta key="theme-color" name="theme-color" content={"#ffddaa"} />
      </head>
      <LenisProvider isRoot>
        <body
          className={`w-full flex items-center bg-white  dark:bg-neutral-950 flex-col justify-center`}
          data-scroll-container
        >
          <header className="w-full max-w-mw-container flex justify-center">
            <Navbar />
          </header>
          {children}
        </body>
      </LenisProvider>
    </html>
  );
}
