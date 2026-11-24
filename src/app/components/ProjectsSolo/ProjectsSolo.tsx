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
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6 md:mb-10">
        <div className="flex flex-col gap-4">
          <span className="b3 uppercase tracking-[0.3em] text-primaryOrange">
            {isSpanish ? "(Proyectos)" : "(Projects)"}
          </span>
          <h2 className="text-[40px] md:text-[64px] leading-[1] tracking-[-0.03em] font-medium text-primary dark:text-white">
            {isSpanish ? "Trabajo " : "Selected "}
            <span className="text-p-2 dark:text-neutral-500">
              {isSpanish ? "seleccionado." : "work."}
            </span>
          </h2>
        </div>
        <p className="b1 max-w-sm text-p-1 dark:text-neutral-400">
          {isSpanish
            ? "Productos que diseñé y desarrollé de principio a fin: e-commerce, blogs con IA y sitios para marcas."
            : "Products I designed and built end to end: e-commerce, AI-powered blogs and brand websites."}
        </p>
      </header>
      <div className="inner flex flex-col gap-20 md:gap-32">
        {SOLO_PROJECTS.map((project) => (
          <Project
            mainProps={project}
            key={project.id}
            index={project.id + 10}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSolo;
