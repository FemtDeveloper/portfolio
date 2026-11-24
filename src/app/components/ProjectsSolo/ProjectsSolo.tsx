import { useIsSpanish, useResponsive } from "@/hooks";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "./Project";
import { SOLO_PROJECTS } from "./projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectsSolo = () => {
  const { isMobile } = useResponsive();
  const isSpanish = useIsSpanish();

  useGSAP(() => {
    // Cada proyecto entra al hacer scroll, sin depender de ids fijos.
    gsap.utils.toArray<HTMLElement>("#solo_projects .project").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: isMobile ? "top 95%" : "top bottom",
          end: "top 55%",
          scrub: true,
        },
        opacity: 0,
        y: 100,
      });
    });
  }, [isMobile]);

  return (
    <section
      id="solo_projects"
      className="w-full h-full max-w-wrapper px-4 lg:px-0 flex flex-col gap-4"
    >
      <div className="branding-title flex flex-col lg:flex-row items-center lg:items-end justify-between w-full gap-3 px-4 lg:px-0">
        <h2 className="h2 lg:d1 font-bold tracking-widest bg-gradient-to-r from-primary to-primary dark:from-white dark:to-white [background-size:100%_100%]">
          {isSpanish ? "PROYECTOS" : "PROJECTS"}
        </h2>
      </div>
      <div className="inner flex flex-col gap-20 md:gap-32">
        {SOLO_PROJECTS.map((project) => (
          <Project mainProps={project} key={project.id} index={project.id + 10} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSolo;
