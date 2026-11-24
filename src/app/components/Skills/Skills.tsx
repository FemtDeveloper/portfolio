"use client";
import { useIsDark, useIsSpanish } from "@/hooks";
import { VerticalDivider, VerticalDividerUp } from "@/Icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSProperties, useRef } from "react";
import { SKILLS } from "./content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Los logos casi negros (Next.js, Vercel, Expo…) usan el color del texto. */
const brandColor = (hex: string) => {
  const n = parseInt(hex, 16);
  const luminance =
    0.2126 * ((n >> 16) & 255) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255);
  return luminance < 60 ? "currentColor" : `#${hex}`;
};

const Skills = () => {
  const isDark = useIsDark();
  const isSpanish = useIsSpanish();
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".logo-cell",
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.025,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
          scrollTrigger: { trigger: ".logo-wall", start: "top 85%", once: true },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full flex flex-col justify-center items-center gap-12 md:my-16"
    >
      <VerticalDivider color={isDark ? "white" : "#000"} />

      <div className="w-full max-w-wrapper px-4 lg:px-0 flex flex-col gap-8 md:gap-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <span className="b3 uppercase tracking-[0.3em] text-primaryOrange">
              (Stack)
            </span>
            <h2 className="text-[40px] md:text-[64px] leading-[1] tracking-[-0.03em] font-medium text-primary dark:text-white">
              {isSpanish ? "Con lo que " : "What I "}
              <span className="text-p-2 dark:text-neutral-500">
                {isSpanish ? "construyo." : "build with."}
              </span>
            </h2>
          </div>
          <p className="b1 max-w-sm text-p-1 dark:text-neutral-400">
            {isSpanish
              ? "Elijo la herramienta según el proyecto, no al revés. Estas son las que uso a diario para diseñar, construir y publicar."
              : "I pick the tool for the project, not the other way around. These are the ones I use daily to design, build and ship."}
          </p>
        </header>

        <ul className="logo-wall grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 border-l border-t border-primary/15 dark:border-white/15">
          {SKILLS.map((skill) => (
            <li
              key={`${skill.category}-${skill.name}`}
              className="logo-cell group relative flex aspect-[3/2] items-center justify-center overflow-hidden border-r border-b border-primary/15 dark:border-white/15 text-primary dark:text-white"
              style={{ "--brand": brandColor(skill.hex) } as CSSProperties}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.12]"
                style={{
                  background:
                    "radial-gradient(circle at 50% 40%, var(--brand), transparent 70%)",
                }}
              />
              <svg
                role="img"
                aria-label={skill.name}
                viewBox="0 0 24 24"
                className="relative max-md:-translate-y-2 h-8 w-8 md:h-10 md:w-10 fill-p-2 dark:fill-neutral-500 transition-all duration-500 ease-out group-hover:fill-[var(--brand)] group-hover:-translate-y-2 group-hover:scale-110"
              >
                <path d={skill.path} />
              </svg>
              <span className="absolute bottom-2 md:bottom-3 l1 md:b3 tracking-wide opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 max-md:opacity-100 max-md:translate-y-0">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <VerticalDividerUp color={isDark ? "white" : "#000"} />
    </section>
  );
};

export default Skills;
