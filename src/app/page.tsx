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

export default function Home() {
  const { theme } = useThemeStore(
    useShallow((state) => ({ theme: state.theme }))
  );
  const hasHydrated = useThemeStore.persist?.hasHydrated();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <main className="flex w-full min-h-screen flex-col items-center gap-12">
      <Header />
      <Ribbons />
      <Branding />
      <About />
      <Skills />
      <ProjectsSolo />
    </main>
  );
}
