import { useIsSpanish, useResponsive } from "@/hooks";
import React, { useState } from "react";
import { ArrowRightIcon } from "../../../Icons";
import { useThemeStore } from "@/store/useThemeStore";

const SeeProjects = () => {
  const [ishover, setIshover] = useState(false);
  const { isMobile } = useResponsive();
  const isSpanish = useIsSpanish();
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";
  return (
    <a
      className="w-32 md:w-52 border flex items-center dark:border-white rounded-full py-[9px] md:py-[17px] relative cursor-pointer"
      aria-label="To Projects"
      href="#solo_projects"
    >
      <p className="l1 md:b1 ml-4 dark:text-white">
        {isSpanish ? "Ver proyectos" : "See projects"}
      </p>
      <div
        className={`arrow absolute rounded-full right-0 transition duration-300 ${
          ishover ? "dark:bg-primaryOrange rotate-45" : "dark:bg-white40 "
        }  border dark:border-white ${
          ishover && !isMobile ? "p-4" : "p-[10px] md:p-5"
        }`}
        onMouseEnter={() => setIshover(true)}
        onMouseLeave={() => setIshover(false)}
      >
        <ArrowRightIcon
          size={ishover && !isMobile ? 24 : 16}
          color={isDark ? "#fff" : "#000"}
        />
      </div>
    </a>
  );
};

export default SeeProjects;
