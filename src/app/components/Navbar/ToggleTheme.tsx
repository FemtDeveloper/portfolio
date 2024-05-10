import { useIsSpanish } from "@/hooks";
import { MoonIcon, SunIcon } from "@/Icons";
import { useThemeStore } from "@/store/useThemeStore";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useShallow } from "zustand/react/shallow";

const ThemeToggle = () => {
  const [ishover, setIshover] = useState(false);
  const pathName = usePathname();
  const onImplementaions = pathName.includes("implementations");
  const isSpanish = useIsSpanish();
  const { theme, setTheme } = useThemeStore(
    useShallow((state) => ({ theme: state.theme, setTheme: state.setTheme }))
  );

  const isDark = theme === "dark";

  const onToggle = () => {
    if (isDark) {
      return setTheme("light");
    }
    setTheme("dark");
  };

  return (
    <div
      className={clsx(
        `flex items-center relative justify-between px-6 rounded-full cursor-pointer transition-all duration-1000 min-h-[56px] min-w-52 group`,
        onImplementaions
          ? "bg-transparent"
          : " bg-neutral-200 dark:bg-neutral-800"
      )}
      onClick={onToggle}
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
    >
      <div className="mode-container">
        <p
          className={`${
            isDark ? "animate-fadeIn" : "animate-fadeOut"
          } absolute top-1/2 -translate-y-1/2 dark:text-white`}
        >
          {isSpanish ? "Modo oscuro" : "Dark mode"}
        </p>
        <p
          className={`${
            isDark ? "animate-fadeOut" : "animate-fadeIn"
          } absolute top-1/2 -translate-y-1/2 dark:text-white`}
        >
          {isSpanish ? "Modo claro" : "Light mode"}
        </p>
      </div>
      <div className="relative w-14 p-4" />
      <div
        className={clsx(
          `flex p-4 transition-all duration-1000 justify-center absolute transform items-center right-0 rounded-full`,
          ishover ? "w-full" : "w-14",
          onImplementaions
            ? "bg-purpleText"
            : " bg-neutral-300 dark:bg-neutral-650"
        )}
      >
        <div
          className={`transform transition-all duration-700 ease-in-out ${
            isDark
              ? "group-hover:rotate-[360deg]"
              : "group-hover:rotate-[270deg]"
          }`}
        >
          {!isDark ? (
            <MoonIcon color={isDark ? "white" : "#000"} />
          ) : (
            <SunIcon color={isDark ? "white" : "#f0e000"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
