import { useIsDark, useIsSpanish } from "@/hooks";
import {
  ExternalLinkIcon,
  HorizontalDividerLeft,
  HorizontalDividerRight,
} from "@/Icons";
import parse from "html-react-parser";

interface Props {
  title: string;
  description: string;
  name: string;
  href: string;
}

const DescriptionCollab = ({ title, description, name, href }: Props) => {
  const isDark = useIsDark();
  const isSpanish = useIsSpanish();

  return (
    <div className="flex flex-col lg:flex-row items-end lg:items-center justify-center lg:justify-end gap-4 md:gap-6 lg:px-8">
      <div className="flex-3 flex flex-col gap-4">
        <div className="flex gap-5 md:gap-6 items-center">
          <HorizontalDividerLeft
            width={"100%"}
            color={!isDark ? "#1e1e1e" : "#fff"}
          />
          <p className="h3 lg:text-2xl text-primaryOrange text-nowrap whitespace-nowrap font-semibold">
            {title}
          </p>
          <HorizontalDividerRight
            width={"100%"}
            color={!isDark ? "#1e1e1e" : "#fff"}
          />
        </div>
        <p className={`text-center text-white `}>{parse(description)}</p>
      </div>
      <div className="text-white flex-1 flex flex-col gap-2 items-end h-full">
        <p className="b3">{isSpanish ? "Creado por" : "Created by"}</p>
        <a
          href={href}
          target="_blank"
          className="text-primaryOrange flex items-center gap-2 cursor-pointer h3 font-bold"
        >
          {name} <ExternalLinkIcon size={20} />
        </a>
      </div>
    </div>
  );
};

export default DescriptionCollab;
