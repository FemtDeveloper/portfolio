"use client";
import { MenuOpticore } from "@/app/components";
import clsx from "clsx";
import { useState } from "react";
import { links, OpticoreLinks } from "./linkList";

const Navbar = () => {
  const [linkSelected, setlinkSelected] = useState<OpticoreLinks>("Home");
  return (
    <nav className="relative navbar-blur-opticore top-4 md:bg-white20 z-20 rounded-full flex items-center px-2 md:px-0 gap-4 md:gap-0 md:pl-8 w-full max-w-wrapper">
      <div className="w-full md:w-1/3 py-5">
        <a
          href="#"
          className="text-white md:h3 font-bold flex items-center gap-1 tracking-widest"
        >
          <div className="w-5 h-5 md:w-7 md:h-7 border-[5px] border-pink rounded-full" />
          <p className="font-skinz mt-1 md:mt-2">CORE</p>
        </a>
      </div>
      <div className="w-full md:w-2/3 hidden md:flex h-full lg:gap-8 font-medium justify-end">
        <ul className="flex h-full items-center justify-between w-full">
          {links.map((link, i) => (
            <li
              key={i}
              className={
                "h-full flex items-center px-2 lg:px-5  transition-all duration-300 relative pointer-events-auto"
              }
              onClick={() => setlinkSelected(link)}
            >
              <button
                className="b1  hover:scale-110 transition-all duration-300"
                name="mock button"
              >
                {link}
              </button>
              <div
                className={clsx(
                  "w-full absolute h-1 bottom-0 left-0 bg-pink transition-opacity duration-700",
                  linkSelected === link ? "opacity-100" : "opacity-0"
                )}
              />
            </li>
          ))}
        </ul>
        <button className="md:b1 w-full max-w-[170px] transition-all duration-300 bd-blur-md-opticore bg-white20 px-3 md:px-5 text-nowrap rounded-full my-2 md:m-2">
          Start a Project
        </button>
      </div>
      <MenuOpticore />
    </nav>
  );
};

export default Navbar;
