import parse from "html-react-parser";

import {
  ArrowDiagonalIcon,
  HorizontalDividerLeft,
  HorizontalDividerRight,
} from "@/Icons";
import { useIsDark, useIsSpanish, useResponsive } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

interface Props {
  mainProps: MainProps;
  maxWidth?: number | string;
  isInSlider?: boolean;
}
const Project = ({ mainProps, isInSlider = false }: Props) => {
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

  console.log({ mainProps });

  return (
    <article
      className={`project flex justify-center items-center flex-col gap-6 md:gap-8`}
    >
      <figure
        className={`flex w-full  
         relative justify-center items-center group h-full `}
      >
        <Image
          width={isInSlider ? 1000 : 1440}
          height={800}
          alt="project image"
          src={img}
          className={`z-0 w-full object-cover`}
        />
        <Link
          href={url}
          target="_blank"
          className={`rounded-full w-44 h-44 ${bgButtonColor} absolute  z-10 flex opacity-0 group-hover:opacity-100 duration-300 transition-all items-center flex-col justify-center gap-2`}
        >
          <ArrowDiagonalIcon />
          <p className="l1">{titleButton}</p>
          <p className="b1">{isSpanish ? "Ver projecto" : "See project"}</p>
        </Link>
      </figure>
      <div className="flex flex-col items-center gap-4 md:gap-6">
        <div className="flex gap-5 md:gap-6 items-center">
          <HorizontalDividerLeft
            width={"100%"}
            color={!isDark ? "#1e1e1e" : "#fff"}
          />
          <p className="h4 md:h2 text-primary dark:text-white text-nowrap">
            {title}
          </p>
          <HorizontalDividerRight
            width={"100%"}
            color={!isDark ? "#1e1e1e" : "#fff"}
          />
        </div>
        <p
          className={`text-center text-primary dark:text-white ${
            isInSlider ? "max-w-[80%]" : "max-w-[70%]"
          }  `}
        >
          {parse(renderDescription())}
        </p>
      </div>
    </article>
  );
};

export default Project;
