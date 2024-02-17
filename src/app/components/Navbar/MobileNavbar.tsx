"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { LogoIcon, MoonIcon, SunIcon } from "../Icons";
import { useLanguageStore } from "@/store";

const MobileNavbar = () => {
  const theme = useThemeStore((state) => state.theme);
  const language = useLanguageStore((state) => state.language);
  const isSpanish = language === "ES";
  const isDark = theme === "dark";
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
        <div
          className={`transform transition-all duration-700 ease-in-out p-[10px] bg-neutral-800 rounded-full ${
            isDark ? "group-hover:rotate-[360deg]" : "group-hover:rotate-180"
          }`}
        >
          {!isDark ? (
            <MoonIcon color={isDark ? "white" : "#000"} size={14} />
          ) : (
            <SunIcon color={isDark ? "white" : "#f0e000"} size={14} />
          )}
        </div>
        <div className="theme p-[10px] bg-neutral-800 rounded-full">
          <p
            className={`text-[10px] ${
              isSpanish ? "text-start" : "text-end"
            } dark:text-white`}
          >
            {isSpanish ? "ES" : "EN"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
