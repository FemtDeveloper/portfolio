"use client";
import { HomeIcon } from "@/Icons";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Forge } from "./forge";
import { Opticore } from "./opticore";

const UxuiPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout: any;

    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(false), 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`flex w-full flex-col justify-center items-center min-h-screen relative lg:bg-primaryPurple`}
    >
      <button
        onClick={() => router.push("/")}
        className={clsx(
          "fixed bottom-5 md:bottom-auto md:top-5 z-30 right-5 lg:right-20 transition duration-500",
          isVisible ? "opacity-100" : "opacity-5 lg:opacity-0"
        )}
      >
        <HomeIcon size={50} color="#fff" />
      </button>
      <Opticore />
      <Forge />
    </div>
  );
};

export default UxuiPage;
