import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { LenisProvider } from "./components/LenisProvider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Felix Miranda s Portfolio",
  description: "Felix Miranda. Portfolio web with some of my jobs. ",
  openGraph: {
    title: "Felix Miranda s Portfolio",
    description: "Felix Miranda. Portfolio web with some of my jobs. ",
    url: "https://www.fmiranda.com/",
    images: [
      {
        url: "/images/cover.webp",
        width: 1260,
        height: 800,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.className} dark scroll-smooth`}>
      <head>
        <meta key="theme-color" name="theme-color" content={"#0e0e0e"} />
        <meta
          key="apple-mobile-web-app-status-bar-style"
          name="apple-mobile-web-app-status-bar-style"
          content={"#0e0e0e"}
        />
        <meta
          key="msapplication-navbutton-color"
          name="msapplication-navbutton-color"
          content={"#0e0e0e"}
        />
      </head>
      <LenisProvider isRoot>
        <body
          className={`w-full flex items-center bg-white  dark:bg-neutral-900 flex-col justify-center relative`}
          data-scroll-container
        >
          {children}
        </body>
      </LenisProvider>
    </html>
  );
}
