import { useIsSpanish } from "@/hooks";
import React, { useState } from "react";
import { ArrowRightIcon } from "../../../Icons";
import { useThemeStore } from "@/store/useThemeStore";

const SeeProjects = () => {
  const [ishover, setIshover] = useState(false);
  const isSpanish = useIsSpanish();
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";
  return (
    <div className="w-32 md:w-52 border flex items-center dark:border-white rounded-full py-[9px] md:py-[17px] relative">
      <p className="l1 md:b1 ml-4 dark:text-white">
        {isSpanish ? "Ver proyectos" : "See projects"}
      </p>
      <div
        className={`arrow absolute rounded-full right-0 transition duration-300 ${
          ishover ? "dark:bg-primaryOrange rotate-45" : "dark:bg-white40 "
        }  border dark:border-white ${ishover ? "p-4" : "p-[10px] md:p-5"}`}
        onMouseEnter={() => setIshover(true)}
        onMouseLeave={() => setIshover(false)}
      >
        <ArrowRightIcon
          size={ishover ? 24 : 16}
          color={isDark ? "#fff" : "#000"}
        />
      </div>
    </div>
  );
};

export default SeeProjects;
