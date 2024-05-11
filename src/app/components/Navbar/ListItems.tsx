"use client";
import { useIsSpanish } from "@/hooks";
import { useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import { AnimationLink } from "../UI/Common";
import { languageLinks } from "./language";

const ListItems = () => {
  const isSpanish = useIsSpanish();
  const lenis = useLenis(({ scroll }) => {});
  const { spanish, english, urls } = languageLinks;
  const links = isSpanish ? spanish : english;
  const pathName = usePathname();
  const onImplementaions = pathName.includes("implementations");
  const getHref = (link: string) => {
    if (onImplementaions) return "/";
  };
  return (
    <ul className="flex flex-2 gap-10 justify-center">
      {links.map((link, i) => (
        <li key={i}>
          <a
            href={getHref(link)}
            className="text-primary dark:text-white md:hover:scale-110 cursor-pointer md:dark:hover:text-primaryOrange relative flex flex-col justify-center items-center hover:text-primaryOrange transition-all duration-500 group"
            aria-label="link that redirects to other section"
            onClick={() => lenis?.scrollTo(`#${urls[i]}`)}
          >
            <p className="b1 relative group-hover:-translate-y-1  transition duration-500">
              {link}
            </p>
            <div className="dot opacity-0 absolute top-6 group-hover:opacity-100 w-[10px] h-[10px] bg-primaryOrange rounded-full transition-all duration-500" />
          </a>
        </li>
      ))}
      <div className="relative">
        <span className="glow absolute -top-[6px] -right-4 tracking-wider l2 text-primaryPurple dark:text-primaryOrange font-semibold">
          NEW
        </span>
        <AnimationLink href="/ux-ui" label="UX|UI" />
      </div>
    </ul>
  );
};

export default ListItems;
