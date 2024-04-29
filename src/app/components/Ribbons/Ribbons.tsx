import { useResponsive } from "@/hooks";
import { useThemeStore } from "@/store/useThemeStore";
import Image from "next/image";
import { SlideRibbon, SlideRibbonContent } from "../UI/SlideRibbon";

const Ribbons = () => {
  const theme = useThemeStore((state) => state.theme);
  const { isMobile } = useResponsive();
  const isDark = theme === "dark";
  return (
    <section
      id="ribbons"
      className="w-full flex justify-center items-center overflow-hidden py-5 h-full relative"
    >
      <div
        className={`${
          isDark ? "slide-orange-background" : "slide-grey-background"
        } w-[105vw] absolute rotate-[7deg] py-[9px] md:py-5 z-20`}
      >
        <SlideRibbon text={<SlideRibbonContent />} />
      </div>
      <Image
        src="/images/floating-macbook.webp"
        width={isMobile ? 266 : 645}
        height={isMobile ? 235 : 570}
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
    </section>
  );
};

export default Ribbons;
