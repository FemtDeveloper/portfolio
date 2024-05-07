"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import {
  About,
  Branding,
  Contact,
  Footer,
  Header,
  Loader,
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useGSAP(() => {
    const sections = ["#ribbons", "#branding", "#about", "#skills"];
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
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  return (
    <main className="flex w-full min-h-screen flex-col items-center relative gap-12">
      <Image
        src={theme === "dark" ? "/images/bg.webp" : "/images/bg-light.webp"}
        alt="decorative"
        width={600}
        height={400}
        className="fixed h-screen w-screen left-0 top-0 opacity-10 -z-10"
      />
      <div
        className={clsx(
          "transition-opacity transform duration-2000 h-screen w-screen fixed top-0 z-50",
          !isLoading ? "opacity-0 hidden" : "opacity-100"
        )}
      >
        <Loader />
      </div>
      <div
        className={clsx(
          "w-full flex flex-col items-center relative gap-12 transition-opacity transform duration-1000",
          isLoading ? "lg:opacity-0" : "opacity-100"
        )}
      >
        <header className="w-full max-w-mw-container flex justify-center sticky top-3 z-50">
          <Navbar />
        </header>

        <Header />
        <Ribbons />
        <Branding />
        <About />
        <Skills />
        <ProjectsSolo />
        <ProjectsAsEmployee />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
