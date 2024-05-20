"use client";
import clsx from "clsx";
import { useState } from "react";
import { links, OpticoreLinks } from "./linkList";

const Navbar = () => {
  const [linkSelected, setlinkSelected] = useState<OpticoreLinks>("Home");
  return (
    <div className="sticky bd-blur top-0 bg-white20 z-20 rounded-full flex items-center pl-8">
      <div className="w-1/3 py-5">
        <a
          href="#"
          className="text-white h3 font-bold flex items-center gap-1 tracking-widest"
        >
          <div className="w-7 h-7 border-[5px] border-pink rounded-full" />
          <p className="font-skinz mt-2">CORE</p>
        </a>
      </div>
      <div className="w-2/3 flex h-full gap-8 font-medium">
        <ul className="flex h-full items-center justify-between w-full">
          {links.map((link, i) => (
            <li
              key={i}
              className={
                "h-full flex items-center px-5  transition-all duration-300 relative"
              }
              onClick={() => setlinkSelected(link)}
            >
              <button className="b1  hover:scale-110 transition-all duration-300">
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
        <button className="b1  transition-all duration-300 bd-blur-md px-5 text-nowrap rounded-full m-2">
          Start a Project
        </button>
      </div>
    </div>
  );
};

export default Navbar;
