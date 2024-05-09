import { useIsSpanish } from "@/hooks";

interface ToggleItemProps {
  onToggle: () => void;
  titleES: string;
  titleEN: string;
}

const ToggleItem = ({ onToggle, titleES, titleEN }: ToggleItemProps) => {
  const isSpanish = useIsSpanish();
  return (
    <div
      className={`flex items-center relative ${
        isSpanish ? "pr-16" : "pl-16"
      } px-6 bg-neutral-200 dark:bg-neutral-800 rounded-full cursor-pointer transition-all duration-1000 min-h-[56px] ${
        isSpanish ? "min-w-36" : "min-w-44"
      }`}
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
        className={`flex p-4 transition-all duration-1000 justify-center absolute transform items-center rounded-full bg-neutral-300 dark:bg-neutral-650 ${
          isSpanish ? "translate-x-[130%]" : "-translate-x-[130%]"
        }`}
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
