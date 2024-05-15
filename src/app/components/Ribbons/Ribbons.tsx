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
          isDark
            ? "slide-orange-background"
            : "slide-grey-background opacity-70"
        } w-[105vw] absolute rotate-[7deg] py-[9px] md:py-5 z-20`}
      >
        <SlideRibbon text={<SlideRibbonContent />} />
      </div>
      <figure className="floatingMacbook h-72 w-96 md:h-[35vw] md:w-[35vw]">
        <Image
          src="/images/floating-macbook.webp"
          alt="macbook-image"
          className="z-10 object-contain"
          fill
          priority
          sizes="(max-width: 768px) 70vw, 35vw"
        />
      </figure>
      <div
        className={`${
          isDark ? "slide-black-background" : "slide-grey-background opacity-70"
        } w-[105vw] absolute -rotate-[7deg] py-5 z-0`}
      >
        <SlideRibbon text={<SlideRibbonContent />} />
      </div>
    </section>
  );
};

export default Ribbons;
