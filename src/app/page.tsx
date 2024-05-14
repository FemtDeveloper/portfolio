"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import {
  About,
  Branding,
  Collaborations,
  Contact,
  Footer,
  Header,
  Navbar,
  ProjectsAsEmployee,
  ProjectsSolo,
  Ribbons,
  Skills,
} from "./components";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const { theme } = useThemeStore(
    useShallow((state) => ({ theme: state.theme }))
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useGSAP(() => {
    const sections = [
      "#ribbons",
      "#branding",
      "#about",
      "#skills",
      "#collaborations",
    ];
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 115%",
          end: "bottom bottom",
          scrub: true,
        },
        opacity: 0,
        y: 100,
        duration: 1.5,
      });
    });
  }, []);

  return (
    <main className="flex w-full min-h-screen flex-col items-center relative gap-12">
      <div
        className={clsx(
          "w-full flex flex-col items-center relative gap-12 transition-opacity transform duration-1000",
          "opacity-100"
        )}
      >
        <div className="w-full max-w-mw-container flex justify-center sticky top-3 z-50">
          <Navbar />
        </div>
        <Header />
        <Ribbons />
        <Branding />
        <About />
        <Skills />
        <Collaborations />
        <ProjectsSolo />
        <ProjectsAsEmployee />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
