"use client";

import { animationPageOut } from "@/utils";
import clsx from "clsx";
import { useRouter } from "next/navigation";

interface Props {
  href: string;
  label: string;
  fontStyle?: string;
}
const AnimationLink = ({ href, label, fontStyle }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    animationPageOut(href, router);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "text-primary dark:text-white md:hover:scale-110 cursor-pointer md:dark:hover:text-primaryOrange relative flex flex-col justify-center items-center hover:text-primaryOrange transition-all duration-500 group",
        fontStyle
      )}
    >
      {label}
    </button>
  );
};

export default AnimationLink;
