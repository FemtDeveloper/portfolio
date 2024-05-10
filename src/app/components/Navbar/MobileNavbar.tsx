"use client";
import { LogoIcon, MoonIcon, SunIcon } from "@/Icons";
import { useLanguageStore } from "@/store";
import { useThemeStore } from "@/store/useThemeStore";
import clsx from "clsx";
import { usePathname } from "next/navigation";
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
  const pathName = usePathname();
  const onImplementaions = pathName.includes("implementations");
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
    <div className="flex md:hidden flex-1 items-center justify-between px-5 py-3 mt-2">
      <a href="/" className="flex flex-1" aria-label="link to homepage">
        <LogoIcon
          color={theme === "dark" || onImplementaions ? "white" : "#000"}
          width={31}
          height={24}
        />
      </a>
      <div className="toggleContainer flex gap-3 items-center">
        {!onImplementaions && (
          <button
            className={`transform transition-all duration-700 ease-in-out p-[10px] bg-toggleLight dark:bg-neutral-800 rounded-full ${
              isDark ? "group-hover:rotate-[360deg]" : "group-hover:rotate-180"
            }`}
            onClick={toggleTheme}
            aria-label="Btoggle theme"
          >
            {!isDark ? (
              <MoonIcon color={isDark ? "white" : "#000"} size={14} />
            ) : (
              <SunIcon color={isDark ? "white" : "#f0e000"} size={14} />
            )}
          </button>
        )}
        <button
          onClick={toggleLanguage}
          className={clsx(
            "theme p-[10px] rounded-full",
            onImplementaions
              ? "bg-purpleText"
              : "bg-toggleLight dark:bg-neutral-800"
          )}
        >
          <p
            className={clsx(
              `text-[10px]  dark:text-white`,
              isSpanish ? "text-start" : "text-end"
            )}
          >
            {isSpanish ? "ES" : "EN"}
          </p>
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
