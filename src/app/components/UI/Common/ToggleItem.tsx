"use client";
import { useIsSpanish } from "@/hooks";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface ToggleItemProps {
  onToggle: () => void;
  titleES: string;
  titleEN: string;
}

const ToggleItem = ({ onToggle, titleES, titleEN }: ToggleItemProps) => {
  const isSpanish = useIsSpanish();
  const pathName = usePathname();
  const onImplementaions = pathName.includes("implementations");
  return (
    <div
      className={clsx(
        `flex items-center relative  px-6 rounded-full cursor-pointer transition-all duration-1000 min-h-[56px]`,
        isSpanish ? "pr-16 min-w-36" : "pl-16 min-w-44",
        onImplementaions
          ? "bg-transparent"
          : " bg-neutral-200 dark:bg-neutral-800"
      )}
      onClick={onToggle}
    >
      <p
        className={` ${
          isSpanish ? "animate-fadeIn" : "animate-fadeOut"
        } absolute top-1/2 -translate-y-1/2 dark:text-white`}
      >
        {titleES}
      </p>
      <p
        className={` ${
          isSpanish ? "animate-fadeOut" : "animate-fadeIn"
        } absolute top-1/2 -translate-y-1/2 dark:text-white`}
      >
        {titleEN}
      </p>
      <div
        className={clsx(
          `flex p-4 transition-all duration-1000 justify-center absolute transform items-center rounded-full`,
          isSpanish ? "translate-x-[130%]" : "-translate-x-[130%]",
          onImplementaions
            ? "bg-white20"
            : " bg-neutral-300 dark:bg-neutral-650 "
        )}
      >
        <p
          className={` ${
            isSpanish ? "text-start" : "text-end"
          } dark:text-white`}
        >
          {isSpanish ? "ES" : "EN"}
        </p>
      </div>
    </div>
  );
};

export default ToggleItem;
