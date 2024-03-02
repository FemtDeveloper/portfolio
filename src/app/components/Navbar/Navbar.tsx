"use client";
import { useThemeStore } from "@/store/useThemeStore";
import { LogoIcon } from "..";
import ListItems from "./ListItems";
import LanguageToggle from "./ToggleLanguage";
import ThemeToggle from "./ToggleTheme";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <>
      <MobileNavbar />
      <nav className="hidden md:flex py-6 max-w-wrapper w-full gap-4">
        <div className="flex flex-1 items-center justify-between">
          <a href="/" className="flex flex-1">
            <LogoIcon color={theme === "dark" ? "white" : "#000"} />
          </a>
          <ListItems />
        </div>
        <div className="flex flex-1 relative justify-end gap-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
