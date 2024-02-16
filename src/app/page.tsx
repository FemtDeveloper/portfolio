"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { useShallow } from "zustand/react/shallow";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
    </main>
  );
}
