import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Navbar } from "./components";
import { BgImage } from "./components/BgImage";
import { LenisProvider } from "./components/LenisProvider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
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
    url: "https://www.fmiranda.com/",
    images: [
      {
        url: "https://www.fmiranda.com/images/cover.jpg",
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
          <header className="w-full max-w-mw-container flex justify-center fixed top-3 z-50">
            <Navbar />
          </header>
          <BgImage />
          {children}
        </body>
      </LenisProvider>
    </html>
  );
}
