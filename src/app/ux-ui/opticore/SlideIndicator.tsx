import clsx from "clsx";

export type Slides = 1 | 2 | 3;

const slides = [1, 2, 3];
interface Props {
  slideSelected: Slides;
}

const SlideIndicator = ({ slideSelected }: Props) => {
  return (
    <aside className="hidden md:flex flex-col gap-2 h-full justify-center absolute z-20 right-2 md:right-0">
      {slides.map((slide) => (
        <div
          className={clsx(
            "rounded-full h-4 md:h-7 w-1 md:w-[6px] border",
            slideSelected === slide && "bg-white"
          )}
          key={slide}
        />
      ))}
    </aside>
  );
};

export default SlideIndicator;
