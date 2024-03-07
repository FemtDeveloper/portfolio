"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { useShallow } from "zustand/react/shallow";
import Ribbons from "./components/Ribbons/Ribbons";
import { Branding } from "./components/Branding";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { ProjectsSolo } from "./components/ProjectsSolo";
import ProjectsAsEmployee from "./components/ProjectsSolo/ProjectsAsEmployee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    const sections = ["#ribbons", "#branding", "#about", "#skills", ".project"];
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 95%",
          end: "bottom bottom",
          scrub: true,
        },

        opacity: 0,
        y: 200,
        duration: 1.5,
      });
    });
  }, []);

  return (
    <main className="flex w-full min-h-screen flex-col items-center gap-12">
      <Header />
      <Ribbons />
      <Branding />
      <About />
      <Skills />
      <ProjectsSolo />
      <ProjectsAsEmployee />
    </main>
  );
}
