import React from "react";
import Circles from "./Circles";
import SeeProjects from "./SeeProjects";
import { useIsSpanish } from "@/hooks";

const Header = () => {
  const isSpanish = useIsSpanish();
  return (
    <section className="w-full flex flex-col gap-4">
      <div className="header-title flex gap-4">
        <h2 className="h1 text-primary dark:text-white">
          {isSpanish ? "Transformo" : "Turn"}
        </h2>
        <Circles />
      </div>
      <div className="flex gap-4">
        <SeeProjects />
        <h2 className="h1 animated-gradient-text text-primary dark:text-primaryOrange">
          {isSpanish ? "tus ideas en proyectos" : "your ideas into projects"}
        </h2>
      </div>
    </section>
  );
};

export default Header;
