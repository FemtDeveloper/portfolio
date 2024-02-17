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
            className="text-primary dark:text-white hover:scale-110 dark:hover:text-primaryOrange relative flex flex-col justify-center items-center hover:text-primaryOrange transition-all duration-500 group"
          >
            <p>{link}</p>
            <div className="dot opacity-0 absolute top-9 group-hover:opacity-100 w-2 h-2 bg-primaryOrange rounded-full transition-all duration-500" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
