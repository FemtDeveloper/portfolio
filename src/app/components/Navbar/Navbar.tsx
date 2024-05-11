"use client";
import { LogoIcon } from "@/Icons";
import { useThemeStore } from "@/store/useThemeStore";
import { animationPageOut } from "@/utils";
import { useLenis } from "@studio-freight/react-lenis";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ListItems from "./ListItems";
import MobileNavbar from "./MobileNavbar";
import LanguageToggle from "./ToggleLanguage";
import ThemeToggle from "./ToggleTheme";

const Navbar = () => {
  const theme = useThemeStore((state) => state.theme);
  const [bgNavbar, setBgNavbar] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const onImplementaions = pathName.includes("implementations");
  const [isSafari, setIsSafari] = useState(false);

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
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgentString = navigator.userAgent;
      const chromeAgent = userAgentString.indexOf("Chrome") > -1;
      const safariAgent = userAgentString.indexOf("Safari") > -1;

      if (!chromeAgent && safariAgent) {
        setIsSafari(true);
      }
    }
  }, []);

  return (
    <>
      <MobileNavbar />
      <nav
        className={clsx(
          "hidden md:flex px-4 py-3 max-w-wrapper rounded-2xl w-full gap-4 transition justify-between duration-500",
          (bgNavbar || !onImplementaions) && !isSafari
            ? "bg-white20 bd-blur"
            : "bg-transparent"
        )}
      >
        <div className="flex w-3/5 items-center justify-between">
          <button
            className="flex md: min-w-20"
            aria-label="Link to redirect to homepage"
            onClick={
              pathName === "/"
                ? () => lenis?.scrollTo("top")
                : () => animationPageOut("/", router)
            }
          >
            <LogoIcon
              color={theme === "dark" || onImplementaions ? "white" : "#000"}
            />
          </button>
          {!onImplementaions && <ListItems />}
        </div>
        <div className="flex relative justify-end gap-4">
          <LanguageToggle />
          {!onImplementaions && <ThemeToggle />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
