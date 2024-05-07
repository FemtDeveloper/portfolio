"use client";
import { LogoIcon } from "@/Icons";
import { useThemeStore } from "@/store/useThemeStore";
import { useLenis } from "@studio-freight/react-lenis";
import clsx from "clsx";
import { useEffect, useState } from "react";
import ListItems from "./ListItems";
import MobileNavbar from "./MobileNavbar";
import LanguageToggle from "./ToggleLanguage";
import ThemeToggle from "./ToggleTheme";

const Navbar = () => {
  const theme = useThemeStore((state) => state.theme);
  const [bgNavbar, setBgNavbar] = useState(false);

  const lenis = useLenis(() => {});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = lenis?.scroll;
      if (scrollPos > 100) {
        setBgNavbar(true);
      } else {
        setBgNavbar(false);
      }
    };

    lenis?.on("scroll", handleScroll);

    return () => lenis?.off("scroll", handleScroll);
  }, [lenis]);

  return (
    <>
      <MobileNavbar />
      <nav
        className={clsx(
          "hidden md:flex p-2 max-w-wrapper rounded-2xl w-full gap-4 transition duration-500",
          bgNavbar ? "bg-white20 backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="flex flex-1 items-center justify-between">
          <a
            href="/"
            className="flex flex-1"
            aria-label="Link to redirect to homepage"
          >
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
