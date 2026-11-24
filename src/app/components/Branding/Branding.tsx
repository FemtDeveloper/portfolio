"use client";

import { VerticalDivider, VerticalDividerUp } from "@/Icons";

import { useIsDark, useIsSpanish } from "@/hooks";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Text = { es: string; en: string };

interface Service {
  /** Primera parte del título (tinta) y segunda parte (gris). */
  title: [Text, Text | null];
  description: Text;
  tags: string[];
  img: string;
}

const SERVICES: Service[] = [
  {
    title: [{ es: "Diseño", en: "UX/UI" }, { es: "UX/UI", en: "Design" }],
    description: {
      es: "Interfaces claras y accesibles, del wireframe al prototipo en Figma.",
      en: "Clear, accessible interfaces, from wireframe to Figma prototype.",
    },
    tags: ["Figma", "Design systems", "Prototyping"],
    img: "/images/branding/design.webp",
  },
  {
    title: [{ es: "Desarrollo", en: "Web" }, { es: "web", en: "development" }],
    description: {
      es: "Sitios rápidos, con buen SEO y animaciones fluidas.",
      en: "Fast, SEO-friendly sites with smooth motion.",
    },
    tags: ["Next.js", "React", "Tailwind", "GSAP"],
    img: "/images/branding/luxury.webp",
  },
  {
    title: [{ es: "Full", en: "Full" }, { es: "Stack", en: "Stack" }],
    description: {
      es: "APIs, bases de datos y e-commerce listos para escalar.",
      en: "APIs, databases and e-commerce ready to scale.",
    },
    tags: ["NestJS", "PostgreSQL", "Supabase"],
    img: "/images/branding/optica.webp",
  },
  {
    title: [{ es: "Apps", en: "Mobile" }, { es: "móviles", en: "apps" }],
    description: {
      es: "iOS y Android con una sola base de código.",
      en: "iOS and Android from a single codebase.",
    },
    tags: ["React Native", "Expo"],
    img: "/images/branding/mobile.webp",
  },
  {
    title: [{ es: "Branding", en: "Branding" }, null],
    description: {
      es: "Identidad visual y sistemas de marca coherentes.",
      en: "Visual identity and consistent brand systems.",
    },
    tags: ["Logo", "Identity"],
    img: "/images/branding/glasses.webp",
  },
  {
    title: [{ es: "IA &", en: "AI &" }, { es: "Motion", en: "Motion" }],
    description: {
      es: "Contenido, imágenes y video generados con IA, y animación que da vida a la marca.",
      en: "AI-generated content, images and video, plus motion that brings the brand to life.",
    },
    tags: ["Generative AI", "Automation", "Motion"],
    img: "/images/projects/revolution-mockup.webp",
  },
];

const Branding = () => {
  const isDark = useIsDark();
  const isSpanish = useIsSpanish();
  const lang = isSpanish ? "es" : "en";
  const sectionRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(0);

  const openOnHover = (i: number) => {
    if (window.matchMedia("(hover: hover)").matches) setOpen(i);
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".service-row",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.07,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: { trigger: ".services-list", start: "top 85%", once: true },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="branding"
      ref={sectionRef}
      className="branding relative w-full flex flex-col items-center px-4 lg:px-0 z-20"
    >
      <VerticalDivider color={isDark ? "white" : "#000"} />

      <div className="w-full max-w-wrapper flex flex-col gap-10 md:gap-14 py-10 md:py-16">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="b3 uppercase tracking-[0.3em] text-primaryOrange">
              {isSpanish ? "(Servicios)" : "(Services)"}
            </span>
            <h2 className="text-[40px] md:text-[64px] leading-[1] tracking-[-0.03em] font-medium text-primary dark:text-white max-w-3xl">
              {isSpanish ? "Lo que " : "What I "}
              <span className="text-p-2 dark:text-neutral-500">
                {isSpanish ? "hago." : "do."}
              </span>
            </h2>
          </div>
          <p className="b1 max-w-sm text-p-1 dark:text-neutral-400">
            {isSpanish
              ? "De la marca al producto final: diseño, desarrollo e IA trabajando juntos para que tu proyecto se vea bien y funcione mejor."
              : "From brand to finished product: design, code and AI working together so your project looks great and performs even better."}
          </p>
        </header>

        <ul className="services-list border-b border-primary/15 dark:border-white/15">
          {SERVICES.map((service, i) => {
            const isOpen = open === i;
            const [first, second] = service.title;
            return (
              <li
                key={service.img}
                className="service-row border-t border-primary/15 dark:border-white/15"
                onMouseEnter={() => openOnHover(i)}
              >
                <button
                  type="button"
                  id={`service-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${i}`}
                  onClick={() => setOpen(i)}
                  className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left text-primary dark:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primaryOrange rounded-lg"
                >
                  <span className="flex items-baseline gap-4 md:gap-8">
                    <span className="b3 tabular-nums text-p-2 dark:text-neutral-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={clsx(
                        "text-[32px] md:text-[64px] leading-none tracking-[-0.03em] font-medium transition-transform duration-500 ease-out",
                        isOpen && "translate-x-3"
                      )}
                    >
                      {first[lang]}
                      {second && (
                        <span className="font-normal text-p-2 dark:text-neutral-500">
                          {" "}
                          {second[lang]}
                        </span>
                      )}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={clsx(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-xl transition-all duration-500",
                      isOpen
                        ? "rotate-45 border-primaryOrange bg-primaryOrange text-white"
                        : "border-primary/15 dark:border-white/20"
                    )}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`service-panel-${i}`}
                  role="region"
                  aria-labelledby={`service-${i}`}
                  className={clsx(
                    "grid transition-[grid-template-rows] duration-500 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6 items-end pb-8 md:pl-[calc(2rem+2ch)]">
                      <div className="relative aspect-video overflow-hidden rounded-[20px] bg-neutral-200 dark:bg-neutral-800">
                        <Image
                          src={service.img}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 640px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="b1 text-p-1 dark:text-neutral-400">
                          {service.description[lang]}
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <li
                              key={tag}
                              className="l1 rounded-full border border-primary/15 dark:border-white/20 px-3 py-1 text-primary dark:text-white"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <VerticalDividerUp color={isDark ? "white" : "#000"} />
    </section>
  );
};

export default Branding;
