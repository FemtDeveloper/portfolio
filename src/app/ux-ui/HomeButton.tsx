"use client";
import { HomeIcon } from "@/Icons";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomeButton = () => {
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
    <button
      onClick={() => router.push("/")}
      className={clsx(
        "fixed bottom-5 md:bottom-auto md:top-5 z-30 right-5 lg:right-20 transition duration-500",
        isVisible ? "opacity-100" : "opacity-5 lg:opacity-0"
      )}
    >
      <HomeIcon size={50} color="#fff" />
    </button>
  );
};

export default HomeButton;
