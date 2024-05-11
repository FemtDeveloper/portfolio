"use client";
import { HomeIcon } from "@/Icons";
import { animationPageOut } from "@/utils";
import { useRouter } from "next/navigation";
import { Header } from "./forge";

const UxuiPage = () => {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col justify-center items-center gap-4 min-h-screen relative">
      <button
        onClick={() => animationPageOut("/", router)}
        className="fixed top-5"
      >
        <HomeIcon size={40} color="#fff" />
      </button>
      <Header />
    </div>
  );
};

export default UxuiPage;
