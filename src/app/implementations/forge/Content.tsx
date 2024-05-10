import { PlusIcon } from "@/Icons";
import ThreeDForge from "./3dForge";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Content = () => {
  return (
    <div className="w-full h-full relative flex-col lg:flex-row backdrop-blur-sm bg-white20 max-w-wrapper flex lg:h-4/5 lg:max-h-[600px] border border-[#13111a]">
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
