"use client";
import { useLenis } from "@studio-freight/react-lenis";
import clsx from "clsx";
import { useEffect, useState } from "react";
import ListItems from "./ListItems";

const Navbar = () => {
  const [bgNavbar, setBgNavbar] = useState(false);
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
      {/* <MobileNavbar /> */}
      <nav
        className={clsx(
          "hidden md:flex  max-w-wrapper justify-center rounded-2xl w-full gap-4 transition duration-500",
          bgNavbar && !isSafari
            ? "bg-white20 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="flex flex-1 items-center justify-between">
          <a
            href="/"
            className="flex flex-1 d3 text-white items-end"
            aria-label="Link to redirect to homepage"
          >
            Forge
            <div className="bg-primaryOrange h-2 w-2 rounded-full relative bottom-1" />
          </a>
          <ListItems />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
