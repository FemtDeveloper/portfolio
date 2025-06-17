import { Metadata } from "next";
import { Forge } from "./forge";
import HomeButton from "./HomeButton";
import { Opticore } from "./opticore";

export const metadata: Metadata = {
  title: "UX/UI Components & Design Portfolio - Felix Miranda",
  description:
    "Explore interactive UX/UI components and design systems created by Felix Miranda. Featuring responsive designs, modern interfaces, and pixel-perfect implementations.",
  keywords: [
    "UX/UI Design",
    "Component Library",
    "Design System",
    "User Interface",
    "User Experience",
    "Responsive Design",
    "Interactive Components",
    "Web Design",
    "Frontend Design",
    "Modern UI",
  ],
  openGraph: {
    type: "website",
    url: "https://www.mirandadev.com/ux-ui",
    title: "UX/UI Components & Design Portfolio - Felix Miranda",
    description:
      "Explore interactive UX/UI components and design systems created by Felix Miranda. Featuring responsive designs, modern interfaces, and pixel-perfect implementations.",
    images: [
      {
        url: "/images/ux-ui-cover.webp",
        width: 1260,
        height: 630,
        alt: "Felix Miranda UX/UI Design Portfolio - Interactive Components and Modern Interfaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UX/UI Components & Design Portfolio - Felix Miranda",
    description:
      "Explore interactive UX/UI components and design systems created by Felix Miranda. Featuring responsive designs, modern interfaces, and pixel-perfect implementations.",
    images: ["/images/ux-ui-cover.webp"],
  },
  alternates: {
    canonical: "/ux-ui",
  },
};
const UxuiPage = () => {
  return (
    <div
      className={`flex w-full flex-col justify-center items-center min-h-screen relative lg:bg-primaryPurple`}
    >
      <HomeButton />
      <Opticore />
      <Forge />
    </div>
  );
};

export default UxuiPage;
