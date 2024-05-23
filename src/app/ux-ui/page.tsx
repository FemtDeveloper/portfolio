import { Metadata } from "next";
import { Forge } from "./forge";
import HomeButton from "./HomeButton";
import { Opticore } from "./opticore";

export const metadata: Metadata = {
  title: "UX/UI Components - Felix Miranda",
  description:
    "Discover components translated from UX/UI designs by Felix Miranda.",
  openGraph: {
    type: "website",
    url: "https://www.fmiranda.com/ux-ui",
    title: "UX/UI Components - Felix Miranda",
    description:
      "Discover components translated from UX/UI designs by Felix Miranda.",
    images: [
      {
        url: "https://www.fmiranda.com/images/ux-ui-cover.webp",
        width: 1260,
        height: 630,
        alt: "UX/UI Components",
      },
    ],
  },
  twitter: {
    title: "UX/UI Components - Felix Miranda",
    description:
      "Discover components translated from UX/UI designs by Felix Miranda.",
    images: [
      {
        url: "https://www.fmiranda.com/images/ux-ui-cover.webp",
        width: 1260,
        height: 630,
        alt: "UX/UI Components",
      },
    ],
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
