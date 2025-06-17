import "./globals.css";

import { DM_Sans, Open_Sans } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localfont from "next/font/local";
import { BgImage } from "./components/BgImage";
import { LenisProvider } from "./components/LenisProvider";

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
  title: {
    default: "Felix Miranda - Full Stack Developer & UX/UI Designer",
    template: "%s | Felix Miranda - Full Stack Developer",
  },
  description:
    "Full Stack Developer & UX/UI Designer specializing in React, Next.js, Node.js, and modern web technologies. Creating engaging digital experiences with clean code and beautiful design.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "UX/UI Designer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio",
    "Felix Miranda",
    "Web Design",
    "Responsive Design",
    "Modern Web Development",
  ],
  authors: [{ name: "Felix Miranda" }],
  creator: "Felix Miranda",
  publisher: "Felix Miranda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.mirandadev.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mirandadev.com/",
    title: "Felix Miranda - Full Stack Developer & UX/UI Designer",
    description:
      "Full Stack Developer & UX/UI Designer specializing in React, Next.js, Node.js, React Native and modern web technologies. Creating engaging digital experiences with clean code and beautiful design.",
    siteName: "Felix Miranda Portfolio",
    images: [
      {
        url: "/images/cover.jpg",
        width: 1260,
        height: 630,
        alt: "Felix Miranda - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felix Miranda - Full Stack Developer & UX/UI Designer",
    description:
      "Full Stack Developer & UX/UI Designer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/images/cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta key="theme-color" name="theme-color" content="#0e0e0f" />
        <meta
          key="apple-mobile-web-app-status-bar-style"
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-title"
          content="Felix Miranda Portfolio"
        />
        <meta
          key="msapplication-navbutton-color"
          name="msapplication-navbutton-color"
          content="#0e0e0e"
        />
        <meta name="msapplication-TileColor" content="#0e0e0e" />
        <link rel="apple-touch-icon" href="/images/cover.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Felix Miranda",
              jobTitle: "Full Stack Developer & UX/UI Designer",
              description:
                "Full Stack Developer & UX/UI Designer specializing in React, Next.js, Node.js, and modern web technologies.",
              url: "https://www.mirandadev.com",
              image: "https://www.mirandadev.com/images/cover.jpg",
              sameAs: [
                "https://github.com/felixmiranda",
                "https://linkedin.com/in/felixmiranda",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "UX/UI Design",
                "Full Stack Development",
                "Frontend Development",
                "Backend Development",
                "Web Development",
              ],
              workLocation: {
                "@type": "Place",
                name: "Remote",
              },
              hasOccupation: {
                "@type": "Occupation",
                name: "Full Stack Developer",
                occupationLocation: {
                  "@type": "Country",
                  name: "Global",
                },
              },
            }),
          }}
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
