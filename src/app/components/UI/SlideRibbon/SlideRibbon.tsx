import { Fragment } from "react";

interface Props {
  text: JSX.Element;
}

export const SlideRibbon = ({ text }: Props) => {
  return (
    <div className="w-full flex items-center">
      <div className="w-full flex items-center">
        <div
          className="slideContent w-full flex items-center text-nowrap gap-14"
          onAnimationEnd={(e) =>
            (e.currentTarget.style.transform = "translateX(0%)")
          }
        >
          {Array(40)
            .fill(text)
            .map((item, index) => (
              <Fragment key={index}>{item}</Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};
