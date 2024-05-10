"use client";
import { useThemeStore } from "@/store/useThemeStore";
import Image from "next/image";
import { useShallow } from "zustand/react/shallow";

const BgImage = () => {
  const { theme } = useThemeStore(
    useShallow((state) => ({ theme: state.theme }))
  );
  return (
    <Image
      src={theme === "dark" ? "/images/bg.webp" : "/images/bg-light.webp"}
      alt="decorative"
      width={640}
      height={440}
      className="fixed h-screen w-screen left-0 top-0 opacity-10 -z-10"
    />
  );
};

export default BgImage;
