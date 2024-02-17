import React from "react";
import Circles from "./Circles";
import SeeProjects from "./SeeProjects";
import { useIsSpanish } from "@/hooks";
import { headerText } from "./language";
import Social from "./Social";
import Image from "next/image";

const Header = () => {
  const isSpanish = useIsSpanish();

  const {
    headerEnglish,
    headerLabelEnglish,
    headerLabelSpanish,
    headerSpanish,
    subheaderEnglish,
    subheaderSpanish,
  } = headerText;
  return (
    <section className="w-full max-w-wrapper items-center flex gap-16">
      <div className="w-[55%] gap-4 flex flex-col justify-center">
        <div className="header-title flex gap-4">
          <h2 className="h1 text-primary dark:text-white">
            {isSpanish ? headerSpanish : headerEnglish}
          </h2>
          <Circles />
        </div>
        <h2 className="h1 animated-gradient-text text-primary dark:text-primaryOrange">
          {isSpanish ? headerLabelSpanish : headerLabelEnglish}
        </h2>
        <h2 className="h1 text-primary dark:text-white">
          {isSpanish ? subheaderSpanish : subheaderEnglish}
        </h2>
        <p className="b1 text-primary dark:text-white">Front End — Developer</p>
        <Social />
        <div className="flex gap-4">
          <SeeProjects />
        </div>
      </div>
      <div className="flex-1 grayscale-[80%] opacity-80 dark:opacity-60">
        <Image
          src="/images/header-gif.gif"
          style={{ width: "100%", borderRadius: 48 }}
          width={471}
          height={498}
          alt=""
        />
      </div>
    </section>
  );
};

export default Header;
