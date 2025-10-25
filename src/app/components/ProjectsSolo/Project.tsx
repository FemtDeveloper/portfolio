import { useIsDark, useIsSpanish, useResponsive } from "@/hooks";

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
  const isDark = useIsDark();
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
  } = mainProps;

  const renderDescription = () => {
    if (isMobile && isSpanish) return mobileDescription;
    if (isMobile && !isSpanish) return mobileEnglishDescription;
    if (isSpanish) return description;
    return englishDescription;
  };

  return (
    <article
      id={`project-${index}`}
      className={`project  flex justify-center items-center flex-col gap-6 md:gap-8`}
    >
      <figure
        className={`flex w-full  
         relative justify-center items-center group h-full `}
      >
        <Image
          width={isInSlider ? 1000 : 1440}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          height={800}
          quality={100}
          loading="lazy"
          alt="project image"
          src={img}
          className={`z-0 w-full object-cover rounded-3xl lg:rounded-[80px]`}
        />
        <Link
          href={url}
          target="_blank"
          className={clsx(
            `rounded-full w-44 h-44 ${bgButtonColor} absolute scale-0 group-hover:scale-100  z-10 flex opacity-0 group-hover:opacity-100 duration-500 transition-all items-center flex-col justify-center gap-2`,
            bgButtonColor === "bg-primaryGreen" ? undefined : "text-white"
          )}
        >
          <ArrowDiagonalIcon
            color={bgButtonColor === "bg-primaryGreen" ? undefined : "#fff"}
            size={32}
          />
          <p className="l1">{titleButton}</p>
          <p className="b1: md:h4_medium">
            {isSpanish ? "Ver projecto" : "See project"}
          </p>
        </Link>
      </figure>
      <Description
        title={title}
        description={renderDescription()}
        isInSlider={isInSlider}
      />
    </article>
  );
};

export default Project;
