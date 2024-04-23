import { useIsSpanish } from "@/hooks";
import Link from "next/link";
import React from "react";
import { languageLinks } from "./language";

const ListItems = () => {
  const isSpanish = useIsSpanish();
  const { spanish, english, urls } = languageLinks;
  const links = isSpanish ? spanish : english;
  return (
    <ul className="flex flex-2 justify-between">
      {links.map((link, i) => (
        <li key={i}>
          <Link
            href={`#${urls[i]}`}
            className="text-primary dark:text-white md:hover:scale-110 md:dark:hover:text-primaryOrange relative flex flex-col justify-center items-center hover:text-primaryOrange transition-all duration-500 group"
            aria-label="link that redirects to other section"
          >
            <p className="b1">{link}</p>
            <div className="dot opacity-0 absolute top-9 group-hover:opacity-100 w-[10px] h-[10px] bg-primaryOrange rounded-full transition-all duration-500" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
