import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { DM_Sans, Open_Sans } from "next/font/google";
import localfont from "next/font/local";
import { BgImage } from "./components/BgImage";
import { LenisProvider } from "./components/LenisProvider";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: "400",
});

const skinz = localfont({
  src: "./fonts/Skinz.ttf",
  display: "swap",
  variable: "--font-skinz",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Felix Miranda- Crafting Engaging & Effective Web Experiences",
  description:
    "Discover innovative web solutions and projects by Felix Miranda. Explore my portfolio and see how I can help bring your vision online.",
  openGraph: {
    title: "Felix Miranda- Crafting Engaging & Effective Web Experiences",
    description:
      "Discover innovative web solutions and projects by Felix Miranda. Explore my portfolio and see how I can help bring your vision online.",
    url: "https://www.mirandadev.com/",
    images: [
      {
        url: "https://www.mirandadev.com/images/cover.jpg",
        width: 1260,
        height: 630,
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
    <html
      lang="en"
      className={`${dmSans.className} ${skinz.variable} ${openSans.className} dark scroll-smooth`}
    >
      <head>
        <meta key="theme-color" name="theme-color" content={"#0e0e0f"} />
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
          <BgImage />
          <Analytics />
          {children}
        </body>
      </LenisProvider>
    </html>
  );
}
