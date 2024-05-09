import { useIsSpanish, useResponsive } from "@/hooks";
import Circles from "./Circles";
import { headerText } from "./language";
import SeeProjects from "./SeeProjects";
import Social from "./Social";

const Header = () => {
  const isSpanish = useIsSpanish();
  const { isMobile } = useResponsive();

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
      className="w-full relative max-w-wrapper  overflow-x-hidden items-center flex flex-col md:flex-row gap-8 lg:gap-16 px-4 md:px-0"
    >
      <div className="w-full md:w-[55%] gap-3 md:gap-4 flex flex-col justify-center">
        <div className="header-title w-full flex justify-center md:justify-start gap-4">
          <h2 className="h2 md:h1 text-primary dark:text-white md:flex-none text-right md:text-left">
            {isSpanish ? headerSpanish : headerEnglish}
          </h2>
          <Circles />
        </div>
        <h2 className="h2 md:d2 animated-gradient-text text-primary dark:text-primaryOrange text-center md:text-left">
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
          <div className="flex gap-4 z-40">
            <SeeProjects />
          </div>
        )}
      </div>
      <picture className="w-full h-72 md:h-[500px] md:flex-1 grayscale-[50%] rounded-[200px] opacity-90 dark:opacity-80">
        <video
          src="/images/header/header.mp4"
          autoPlay
          muted
          loop
          className="video rounded-[48px] object-cover w-full h-full"
        />
        {/* <img src="/images/header/header.gif" alt="decorative giv" /> */}
        {/* <Image
          src="/images/header/header.mp4"
          // src="/images/header/header.gif"
          className="video rounded-[48px] object-cover w-full h-full"
          sizes="(min-width: 768px) 90vw, 45vw"
          priority
          fill
          alt="gif header"
        /> */}
      </picture>
    </section>
  );
};

export default Header;
