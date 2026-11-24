import { useIsSpanish } from "@/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface TeamProject {
  name: string;
  domain: string;
  url: string;
  img: string;
  accent: string;
  type: { es: string; en: string };
  summary: { es: string; en: string };
  role: { es: string; en: string };
  stack: string[];
}

const TEAM_PROJECTS: TeamProject[] = [
  {
    name: "Aviva",
    domain: "aviva.pe",
    url: "https://aviva.pe/",
    img: "/images/projects/aviva.webp",
    accent: "#3397c2",
    type: { es: "Sitio institucional", en: "Corporate website" },
    summary: {
      es: "Sitio web dinámico con un diseño elegante y contenido administrable: el equipo de la marca publica y actualiza secciones sin depender de desarrollo.",
      en: "A dynamic website with a sleek design and editable content: the brand team publishes and updates sections without depending on developers.",
    },
    role: {
      es: "Desarrollo frontend con Next.js y SASS, integrado con un CMS en Django.",
      en: "Front-end development with Next.js and SASS, integrated with a Django CMS.",
    },
    stack: ["Next.js", "SASS", "Django CMS"],
  },
  {
    name: "Up",
    domain: "up-capacitaciones.com",
    url: "https://up-capacitaciones.com/",
    img: "/images/projects/up.webp",
    accent: "#fd515a",
    type: { es: "Plataforma e-learning", en: "E-learning platform" },
    summary: {
      es: "Plataforma educativa interactiva y personalizable, con navegación rápida y un backend que organiza cursos y contenidos de forma eficiente.",
      en: "An interactive, customizable learning platform with fast navigation and a backend that organizes courses and content efficiently.",
    },
    role: {
      es: "Desarrollo de la interfaz con Next.js y SASS, conectada a un backend en Django.",
      en: "Interface development with Next.js and SASS, connected to a Django backend.",
    },
    stack: ["Next.js", "SASS", "Django"],
  },
];

const ProjectsAsEmployee = () => {
  const isSpanish = useIsSpanish();
  const lang = isSpanish ? "es" : "en";
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".team-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 80 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 90%", once: true },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="employee-projects"
      ref={sectionRef}
      className="w-full max-w-wrapper flex flex-col gap-10 md:gap-14 px-4 lg:px-0 mt-20 md:mt-40"
    >
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-4">
          <span className="b3 uppercase tracking-[0.3em] text-primaryOrange">
            {isSpanish ? "(Trabajo en equipo)" : "(Team work)"}
          </span>
          <h2 className="text-[40px] md:text-[64px] leading-[1] tracking-[-0.03em] font-medium text-primary dark:text-white max-w-3xl">
            {isSpanish
              ? "Proyectos institucionales "
              : "Institutional projects "}
            <span className="text-p-2 dark:text-neutral-500">
              {isSpanish ? "en los que participé." : "I contributed to."}
            </span>
          </h2>
        </div>
        <p className="b1 max-w-md text-p-1 dark:text-neutral-400">
          {isSpanish
            ? "Además de mis proyectos propios, he trabajado dentro de equipos de producto junto a diseñadores, backend y clientes, siguiendo procesos, revisiones de código y entregas por etapas."
            : "Besides my own projects, I've worked inside product teams alongside designers, back-end developers and clients, following processes, code reviews and staged deliveries."}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {TEAM_PROJECTS.map((project, i) => (
          <article
            key={project.name}
            className="team-card group flex flex-col overflow-hidden rounded-[32px] border border-primary/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-md"
            style={{ "--accent": project.accent } as React.CSSProperties}
          >
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${isSpanish ? "Ver" : "See"} ${project.name}`}
              className="relative block aspect-[16/10] overflow-hidden"
            >
              <Image
                src={project.img}
                alt={
                  isSpanish
                    ? `Vista del proyecto ${project.name}`
                    : `${project.name} project preview`
                }
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 l1 md:b3 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md px-3 py-1 text-primary dark:text-white">
                {project.type[lang]}
              </span>
              <span className="absolute top-4 right-4 l1 md:b3 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-white tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>

            <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[32px] md:text-[40px] leading-none tracking-[-0.02em] font-medium text-primary dark:text-white">
                    {project.name}
                  </h3>
                  <p className="b3 mt-2 text-p-2 dark:text-neutral-500">
                    {project.domain}
                  </p>
                </div>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full border border-primary/15 dark:border-white/15 px-4 py-2 b3 text-primary dark:text-white transition-colors hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white"
                >
                  {isSpanish ? "Visitar" : "Visit"}
                  <span className="-rotate-45 transition-transform duration-300 group-hover:rotate-0">
                    →
                  </span>
                </Link>
              </div>

              <p className="text-base leading-relaxed text-p-1 dark:text-neutral-400">
                {project.summary[lang]}
              </p>

              <div className="flex gap-3 rounded-2xl bg-primary/[0.04] dark:bg-white/[0.04] p-4">
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                <p className="b3 md:text-base text-primary dark:text-white">
                  <span className="font-semibold">
                    {isSpanish ? "Mi rol: " : "My role: "}
                  </span>
                  {project.role[lang]}
                </p>
              </div>

              <ul className="mt-auto flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="l1 md:b3 rounded-full border border-primary/15 dark:border-white/15 px-3 py-1 text-primary dark:text-white"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsAsEmployee;
