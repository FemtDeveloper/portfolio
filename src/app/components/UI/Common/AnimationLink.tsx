"use client";

import { animationPageOut } from "@/utils";
import { useRouter } from "next/navigation";

interface Props {
  href: string;
  label: string;
}
const AnimationLink = ({ href, label }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    animationPageOut(href, router);
  };

  return (
    <button
      onClick={handleClick}
      className="text-primary dark:text-white md:hover:scale-110 cursor-pointer md:dark:hover:text-primaryOrange relative flex flex-col justify-center items-center hover:text-primaryOrange transition-all duration-500 group"
    >
      {label}
    </button>
  );
};

export default AnimationLink;
