import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Circles from "./Circles";
import SeeProjects from "./SeeProjects";
import { useIsSpanish, useResponsive } from "@/hooks";
import { headerText } from "./language";
import Social from "./Social";
import { Suspense, useRef, useState } from "react";

const Header = () => {
  const isSpanish = useIsSpanish();
  const { isMobile } = useResponsive();
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    headerEnglish,
    headerLabelEnglish,
    headerLabelSpanish,
    headerSpanish,
    subheaderEnglish,
    subheaderSpanish,
  } = headerText;

  return (
    <section
      id="header"
      className="w-full mt-6 md:mt-14 relative max-w-wrapper md:min-h-[650px] overflow-x-hidden items-center flex flex-col md:flex-row gap-4 lg:gap-16 px-4 md:px-0"
    >
      <Image
        src="/images/spheres.png"
        width={700}
        height={620}
        alt="spheres decorative"
        className="absolute -z-10 -top-[520px] left-1/4 opacity-60"
      />
      <div className="w-full md:w-[55%] gap-3 md:gap-4 flex flex-col justify-center">
        <div className="header-title w-full flex justify-center md:justify-start gap-4">
          <h2 className="h2 md:h1 text-primary dark:text-white md:flex-none text-right md:text-left">
            {isSpanish ? headerSpanish : headerEnglish}
          </h2>
          <Circles />
        </div>
        <h2 className="h2 md:h1 animated-gradient-text text-primary dark:text-primaryOrange text-center md:text-left">
          {isSpanish ? headerLabelSpanish : headerLabelEnglish}
        </h2>
        {isMobile && (
          <div className="flex gap-4 justify-center">
            <SeeProjects />
          </div>
        )}
        <h2 className="h2 md:h1 text-primary dark:text-white text-center md:text-left">
          {isSpanish ? subheaderSpanish : subheaderEnglish}
        </h2>
        <p className="l1 md:b1 text-primary dark:text-white text-center md:text-left">
          Front End — Developer
        </p>
        <Social />
        {!isMobile && (
          <div className="flex gap-4">
            <SeeProjects />
          </div>
        )}
      </div>
      <div
        ref={containerRef}
        className="w-full h-[500px] md:flex-1 grayscale-[50%] rounded-[200px] opacity-90 dark:opacity-80"
      >
        <video loop autoPlay className="video rounded-[48px]" muted>
          <source src="/images/header-video.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};

export default Header;
