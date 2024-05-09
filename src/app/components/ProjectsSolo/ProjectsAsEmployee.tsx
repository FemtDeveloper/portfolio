import { useIsSpanish, useResponsive } from "@/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "./Project";
import { PROJECTS_AS_EMPLOYEE } from "./projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectsAsEmployee = () => {
  const isSpanish = useIsSpanish();
  const { isMobile } = useResponsive();
  useGSAP(() => {
    const projects = ["#project-0", "#project-1"];

    projects.forEach((project, index) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: "#employee-slider",
          start: "top 80%",
          end: "bottom bottom",
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
      id="employee-projects"
      className="outer-container  w-full max-w-wrapper flex flex-col items-center px-4 lg:px-0 gap-6 md:gap-10 "
    >
      <h2 className="h2 md:d1 text-center text-primary max-w-80  md:max-w-max dark:text-neutral-200 my-20 md:my-40 anim animated-gradient-text-gemeric dark: dark:gradient-grey-white">
        {isSpanish
          ? "Proyectos institucionales en los que he participado"
          : "Institutional projects I have contributed to as part of a team"}
      </h2>
      <div
        id="employee-slider"
        className="slider flex flex-col md:flex-row justify-start lg:px-15 gap-10"
      >
        {PROJECTS_AS_EMPLOYEE.map((project, i) => (
          <Project mainProps={project} isInSlider key={project.id} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsAsEmployee;
