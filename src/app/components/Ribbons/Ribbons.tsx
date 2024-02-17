import React from "react";
import { SlideRibbon, SlideRibbonContent } from "../UI/SlideRibbon";
import Image from "next/image";
import { useThemeStore } from "@/store/useThemeStore";

const Ribbons = () => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";
  return (
    <div className="w-full flex justify-center items-center overflow-hidden py-5 h-full relative">
      <div
        className={`${
          isDark ? "slide-orange-background" : "slide-grey-background"
        } w-[105vw] absolute rotate-[7deg] py-5 z-20`}
      >
        <SlideRibbon text={<SlideRibbonContent />} />
      </div>
      <Image
        src="/images/floating-macbook.png"
        width={645}
        height={570}
        alt="macbook-image"
        className="floatingMacbook z-10"
      />
      <div
        className={`${
          isDark ? "slide-black-background" : "slide-grey-background"
        } w-[105vw] absolute -rotate-[7deg] py-5 z-0`}
      >
        <SlideRibbon text={<SlideRibbonContent />} />
      </div>
    </div>
  );
};

export default Ribbons;
