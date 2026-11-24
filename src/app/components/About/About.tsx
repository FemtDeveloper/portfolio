"use client";
import { useIsDark, useIsSpanish, useOnLeave, useOnMove } from "@/hooks";
import { GithubIcon, LinkedInIcon } from "@/Icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { language } from "./language";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const isSpanish = useIsSpanish();
  const isDark = useIsDark();
  const lang = isSpanish ? "es" : "en";
  const { label, heading, body, available, cta, stats } = language;

  const onMove = useOnMove(aboutRef, "#circle-about");
  const onLeave = useOnLeave("#circle-about");

  useEffect(() => {
    const aboutElement = aboutRef.current;
    if (!aboutElement) return;

    aboutElement.addEventListener("mousemove", onMove);
    aboutElement.addEventListener("mouseleave", onLeave);

    return () => {
      aboutElement.removeEventListener("mousemove", onMove);
      aboutElement.removeEventListener("mouseleave", onLeave);
    };
  }, [onMove, onLeave]);

  useGSAP(
    () => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
          end: "top 30%",
          scrub: 1,
        },
      });
      gsap.from("#profile", {
        scale: 1.25,
        ease: "none",
        scrollTrigger: {
          trigger: "#profile-card",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: aboutRef },
  );

  const iconColor = isDark ? "#fff" : "#1e1e1e";

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative w-full max-w-wrapper px-4 lg:px-0 py-10 md:py-20"
    >
      <div
        id="circle-about"
        className="pointer-events-none absolute hidden lg:block top-1/2 left-1/2 h-72 w-72 -z-10 bg-primaryOrange rounded-full opacity-20 blur-3xl"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
        {/* Texto principal */}
        <div className="about-reveal lg:col-span-7 flex flex-col justify-between gap-8 rounded-[32px] border border-primary/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-md p-6 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="b3 uppercase tracking-[0.3em] text-primaryOrange">
              {label[lang]}
            </span>
            <span className="l1 md:b3 inline-flex items-center gap-2 rounded-full border border-primary/10 dark:border-white/10 px-3 py-1.5 text-primary dark:text-white">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
              </span>
              {available[lang]}
            </span>
          </div>

          <h2 className="text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.02em] font-medium text-primary dark:text-white">
            {parse(heading[lang])}
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-p-1 dark:text-neutral-400 max-w-2xl">
            {body[lang]}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-primary dark:bg-white px-6 py-3 text-white dark:text-primary font-medium transition-colors hover:bg-primaryOrange dark:hover:bg-primaryOrange dark:hover:text-white"
            >
              {cta[lang]}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="https://github.com/FemtDeveloper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 dark:border-white/15 transition-colors hover:border-primaryOrange"
            >
              <GithubIcon color={iconColor} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fmirandat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/15 dark:border-white/15 transition-colors hover:border-primaryOrange"
            >
              <LinkedInIcon color={iconColor} />
            </Link>
          </div>
        </div>

        {/* Imagen */}
        <figure
          id="profile-card"
          className="about-reveal group lg:col-span-5 relative min-h-[320px] md:min-h-[420px] overflow-hidden rounded-[32px]"
        >
          <Image
            id="profile"
            src="/images/about/setup.webp"
            alt={
              isSpanish
                ? "Espacio de trabajo de Felix Miranda"
                : "Felix Miranda's workspace"
            }
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 md:p-8 text-white">
            <div>
              <p className="text-2xl md:text-3xl font-medium leading-none">
                Felix Miranda
              </p>
              <p className="b3 mt-2 text-white/70">
                Full Stack Developer · UX/UI Designer
              </p>
            </div>
          </figcaption>
        </figure>

        {/* Datos */}
        {stats.map((stat) => (
          <div
            key={stat.value.en}
            className="about-reveal lg:col-span-4 flex flex-col gap-2 rounded-[32px] border border-primary/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-md p-6 md:p-8 transition-colors hover:border-primaryOrange/60"
          >
            <p className="text-[32px] md:text-[40px] leading-none tracking-[-0.02em] font-medium text-primary dark:text-white">
              {stat.value[lang]}
            </p>
            <p className="b3 md:text-base text-p-1 dark:text-neutral-400">
              {stat.label[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
