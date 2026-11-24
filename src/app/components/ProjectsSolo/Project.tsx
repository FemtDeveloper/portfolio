import { useIsSpanish, useResponsive } from "@/hooks";

import { ArrowDiagonalIcon } from "@/Icons";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Description } from "../UI/Common";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface Props {
  mainProps: MainProps;
  maxWidth?: number | string;
  isInSlider?: boolean;
  index?: number;
}
const Project = ({ mainProps, isInSlider = false, index }: Props) => {
  const isSpanish = useIsSpanish();
  const { isMobile } = useResponsive();
  const {
    bgButtonColor,
    description,
    img,
    title,
    titleButton,
    url,
    englishDescription,
    mobileDescription,
    mobileEnglishDescription,
    tags,
  } = mainProps;

  const renderDescription = () => {
    if (isMobile && isSpanish) return mobileDescription;
    if (isMobile && !isSpanish) return mobileEnglishDescription;
    if (isSpanish) return description;
    return englishDescription;
  };

  const isLightButton = bgButtonColor === "bg-primaryGreen";

  return (
    <article
      id={`project-${index}`}
      className="project flex justify-center items-center flex-col gap-6 md:gap-8"
    >
      <figure className="flex w-full relative justify-center items-center group h-full overflow-hidden rounded-3xl lg:rounded-[80px] ring-1 ring-black/5 dark:ring-white/10">
        <Image
          width={1600}
          height={1000}
          sizes={
            isInSlider
              ? "(max-width: 768px) 100vw, 600px"
              : "(max-width: 1224px) 100vw, 1224px"
          }
          quality={90}
          loading="lazy"
          alt={
            isSpanish
              ? `Vista del proyecto ${title} en escritorio y móvil`
              : `${title} project shown on desktop and mobile`
          }
          src={img}
          className="z-0 w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${isSpanish ? "Ver proyecto" : "See project"} ${title}`}
          className={clsx(
            `rounded-full w-32 h-32 md:w-44 md:h-44 ${bgButtonColor} absolute z-10 flex items-center flex-col justify-center gap-1 md:gap-2 shadow-2xl transition-all duration-500`,
            "md:scale-0 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100 md:focus-visible:scale-100 md:focus-visible:opacity-100",
            "max-md:bottom-4 max-md:right-4 max-md:w-auto max-md:h-auto max-md:flex-row max-md:px-4 max-md:py-2",
            isLightButton ? "text-primary" : "text-white"
          )}
        >
          <ArrowDiagonalIcon
            color={isLightButton ? undefined : "#fff"}
            size={isMobile ? 18 : 32}
          />
          <p className="l1 max-md:hidden">{titleButton}</p>
          <p className="l1 md:h4_medium">
            {isSpanish ? "Ver proyecto" : "See project"}
          </p>
        </Link>
      </figure>
      <Description
        title={title}
        description={renderDescription()}
        isInSlider={isInSlider}
      />
      {tags && tags.length > 0 && (
        <ul
          className="flex flex-wrap justify-center gap-2 max-w-[90%]"
          aria-label={isSpanish ? "Tecnologías" : "Tech stack"}
        >
          {tags.map((tag) => (
            <li
              key={tag}
              className="l1 rounded-full border border-primary/15 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur px-3 py-1 text-primary dark:text-white"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default Project;
