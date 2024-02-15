import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miranda dev",
  description: "Felix Mirandas Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex justify-center w-full">
      <body
        className={`${inter.className} w-full max-w-mw-container flex bg-white  dark:bg-neutral-950 flex-col justify-center`}
      >
        <header className="w-full flex justify-center">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
