import parse from "html-react-parser";

import {
  ArrowDiagonalIcon,
  HorizontalDividerLeft,
  HorizontalDividerRight,
} from "@/Icons";
import { useIsSpanish } from "@/hooks";
import Image from "next/image";
import Link from "next/link";

interface Props {
  mainProps: MainProps;
}
const Project = ({ mainProps }: Props) => {
  const isSpanish = useIsSpanish();
  const { bgButtonColor, description, img, title, titleButton, url } =
    mainProps;
  return (
    <article className="flex w-full min-h-[500px] justify-center items-center h-full flex-col gap-15">
      <figure className="flex w-full md:min-h-[800px] relative justify-center items-center group">
        <Image
          width={1440}
          height={800}
          alt="project image"
          src={img}
          className="absolute z-0"
        />
        <Link
          href={url}
          target="_blank"
          className={`rounded-full w-44 h-44 ${bgButtonColor} z-10 flex opacity-0 group-hover:opacity-100 duration-300 transition-all items-center flex-col justify-center gap-2`}
        >
          <ArrowDiagonalIcon />
          <p className="l1">{titleButton}</p>
          <p className="b1">{isSpanish ? "Ver projecto" : "See project"}</p>
        </Link>
      </figure>
      <div className="flex flex-col items-center gap-4 md:gap-6">
        <div className="flex gap-9 md:gap-6 items-center">
          <HorizontalDividerLeft />
          <p className="h4 md:h2 text-p-2 dark:text-white">{title}</p>
          <HorizontalDividerRight />
        </div>
        <p className="text-center text-p-2 dark:text-white">
          {parse(description)}
        </p>
      </div>
    </article>
  );
};

export default Project;
