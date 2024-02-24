"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { LogoIcon, MoonIcon, SunIcon } from "../../../Icons";
import { useLanguageStore } from "@/store";
import { useShallow } from "zustand/react/shallow";

const MobileNavbar = () => {
  const { theme, setTheme } = useThemeStore(
    useShallow((state) => ({ theme: state.theme, setTheme: state.setTheme }))
  );
  const { language, setLanguage } = useLanguageStore(
    useShallow((state) => ({
      language: state.language,
      setLanguage: state.setLanguage,
    }))
  );
  const isSpanish = language === "ES";
  const isDark = theme === "dark";

  const toggleLanguage = () => {
    setLanguage(isSpanish ? "EN" : "ES");
  };
  const toggleTheme = () => {
    if (isDark) {
      return setTheme("light");
    }
    setTheme("dark");
  };

  return (
    <div className="flex flex-1 items-center justify-between px-4 py-3 mt-6">
      <a href="/" className="flex flex-1">
        <LogoIcon
          color={theme === "dark" ? "white" : "#000"}
          width={31}
          height={24}
        />
      </a>
      <div className="toggleContainer flex gap-3 items-center">
        <button
          className={`transform transition-all duration-700 ease-in-out p-[10px] bg-toggleLight dark:bg-neutral-800 rounded-full ${
            isDark ? "group-hover:rotate-[360deg]" : "group-hover:rotate-180"
          }`}
          onClick={toggleTheme}
        >
          {!isDark ? (
            <MoonIcon color={isDark ? "white" : "#000"} size={14} />
          ) : (
            <SunIcon color={isDark ? "white" : "#f0e000"} size={14} />
          )}
        </button>
        <button
          onClick={toggleLanguage}
          className="theme p-[10px] bg-toggleLight dark:bg-neutral-800 rounded-full"
        >
          <p
            className={`text-[10px] ${
              isSpanish ? "text-start" : "text-end"
            } dark:text-white`}
          >
            {isSpanish ? "ES" : "EN"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
