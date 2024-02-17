"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { useShallow } from "zustand/react/shallow";
import Ribbons from "./components/Ribbons/Ribbons";

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
    <main className="flex w-full min-h-screen flex-col items-center">
      <Header />
      <Ribbons />
    </main>
  );
}
