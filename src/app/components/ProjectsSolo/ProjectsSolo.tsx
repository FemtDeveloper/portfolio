import Project from "./Project";
import { SOLO_PROJECTS } from "./projects";

import { useIsSpanish, useResponsive } from "@/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectsSolo = () => {
  const { isMobile } = useResponsive();
  const isSpanish = useIsSpanish();

  const start = isMobile ? "top 90%" : "top bottom";
  useGSAP(() => {
    const projects = ["#project-3", "#project-4"];

    projects.forEach((project, index) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: ".inner",
          start,
          end: "bottom 200%",
          scrub: true,
        },
        opacity: 0,
        y: 100,
        duration: 1.5,
      });
    });
  }, [isMobile]);

  return (
    <section
      id="solo_projects"
      className="w-full h-full max-w-wrapper px-4 lg:px-0 flex flex-col gap-4"
    >
      <div className="branding-title flex flex-col lg:flex-row items-center lg:items-end justify-between w-full gap-3 lg: px-4 lg:px-0">
        <h2 className="h2 lg:d1 font-bold tracking-widest bg-gradient-to-r from-transparent to-primary dark:to-white">
          {isSpanish ? "PROECTOS" : "PROJECTS"}
        </h2>
      </div>
      <div className="inner flex flex-col gap-20 md:gap-32">
        {SOLO_PROJECTS.map((project, i) => (
          <Project mainProps={project} key={project.id} index={project.id} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSolo;
