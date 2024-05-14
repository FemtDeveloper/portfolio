"use client";
import { useRouter } from "next/navigation";
import { Forge } from "./forge";

const UxuiPage = () => {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col justify-center items-center gap-4 min-h-screen relative lg:bg-primaryPurple pb-4">
      {/* <button
        onClick={() => animationPageOut("/", router)}
        className="fixed top-5 z-30"
      >
        <HomeIcon size={40} color="#fff" />
      </button> */}
      <Forge />
    </div>
  );
};

export default UxuiPage;
