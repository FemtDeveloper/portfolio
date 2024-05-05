"use client";
import { useIsSpanish } from "@/hooks";
import { useLenis } from "@studio-freight/react-lenis";
import { languageLinks } from "./language";

const ListItems = () => {
  const isSpanish = useIsSpanish();
  const lenis = useLenis(({ scroll }) => {});
  const { spanish, english, urls } = languageLinks;
  const links = isSpanish ? spanish : english;
  return (
    <ul className="flex flex-2 justify-between">
      {links.map((link, i) => (
        <li key={i}>
          <a
            href={`#`}
            className="text-primary dark:text-white md:hover:scale-110 cursor-pointer md:dark:hover:text-primaryOrange relative flex flex-col justify-center items-center hover:text-primaryOrange transition-all duration-500 group"
            aria-label="link that redirects to other section"
            onClick={() => lenis?.scrollTo(`#${urls[i]}`)}
          >
            <p className="b1">{link}</p>
            <div className="dot opacity-0 absolute top-9 group-hover:opacity-100 w-[10px] h-[10px] bg-primaryOrange rounded-full transition-all duration-500" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
