import { useIsDark } from "@/hooks";
import { HorizontalDividerLeft, HorizontalDividerRight } from "@/Icons";
import parse from "html-react-parser";

interface Props {
  title: string;
  description: string;
  isInSlider?: boolean;
}

const Description = ({ title, description, isInSlider = false }: Props) => {
  const isDark = useIsDark();

  return (
    <div className="flex flex-col items-center gap-4 md:gap-6">
      <div className="flex gap-5 md:gap-6 items-center">
        <HorizontalDividerLeft
          width={"100%"}
          color={!isDark ? "#1e1e1e" : "#fff"}
        />
        <p className="h3 md:h2 text-primary dark:text-white text-nowrap whitespace-nowrap">
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
        {parse(description)}
      </p>
    </div>
  );
};

export default Description;
