import { PlusIcon } from "@/Icons";
import clsx from "clsx";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThreeDForge from "./3dForge";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
const mediator = Plus_Jakarta_Sans({ subsets: ["latin"] });

const Content = () => {
  return (
    <div
      className={clsx(
        "w-full h-full relative flex-col lg:flex-row bd-blur bg-white20 max-w-wrapper flex lg:h-4/5 lg:min-h-[550px] border-2 border-[#13111a] gap-32 lg:gap-0",
        mediator.className
      )}
    >
      <ThreeDForge />
      <div className="absolute -top-3 -left-3">
        <PlusIcon />
      </div>
      <div className="absolute -top-3 -right-3">
        <PlusIcon />
      </div>
      <div className="absolute -bottom-3  -right-3">
        <PlusIcon />
      </div>
      <div className="absolute -bottom-3 -left-3">
        <PlusIcon />
      </div>
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Content;
