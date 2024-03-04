import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SOLO_PROJECTS } from "./projects";
import Project from "./Project";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectsSolo = () => {
  useGSAP(() => {
    gsap.from("#hola", {
      scrollTrigger: { trigger: "#hola", end: "top 10%" },
      opacity: 0,
      scale: 0.2,
      duration: 3,
    });
  });
  return (
    <section className="w-full h-full max-w-wrapper flex flex-col px-4 lg:px-0 gap-20 md:gap-40">
      {SOLO_PROJECTS.map((project) => (
        <Project mainProps={project} key={project.id} />
      ))}
    </section>
  );
};

export default ProjectsSolo;
