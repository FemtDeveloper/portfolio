import { SOLO_PROJECTS } from "./projects";
import Project from "./Project";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsive } from "@/hooks";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectsSolo = () => {
  const { isMobile } = useResponsive();

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
          markers: true,
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
      className="w-full h-full max-w-wrapper px-4 lg:px-0 flex flex-col"
    >
      <div className="inner flex flex-col gap-20 md:gap-32">
        {SOLO_PROJECTS.map((project, i) => (
          <Project mainProps={project} key={project.id} index={project.id} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSolo;
