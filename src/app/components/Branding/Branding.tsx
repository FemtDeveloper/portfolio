"use client";
import Image from "next/image";
import { VerticalDivider, VerticalDividerUp } from "@/Icons";
import { useThemeStore } from "@/store/useThemeStore";

const Branding = () => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";
  return (
    <section className="branding max-w-wrapper w-full">
      <div className="container d3 lg:d1 flex flex-col items-center justify-center gap-4 relative">
        <Image
          src="/assets/bicolor-spheres.svg"
          width={700}
          height={500}
          alt="background svg"
          className="absolute -z-10 opacity-80"
        />
        <VerticalDivider color={isDark ? "white" : "#000"} />
        <div className="flex flex-col gap-3 w-full px-4 lg:px-0 lg:w-1/3 xl:w-2/3">
          <p className="dark:text-white text-center lg:text-start">BRANDING</p>
          <p className="dark:text-white text-center lg:text-end">
            UX/UI{" "}
            <span className="text-p-2 dark:text-white text-center lg:text-start">
              DESIGN
            </span>
          </p>
          <p className="dark:text-white text-center lg:text-start lg:ml-10 ">
            DEVELOPMENT
          </p>
          <p className="dark:text-white  text-center lg:text-end">
            MOTION <span className="text-p-2 dark:text-white">DESIGN</span>
          </p>
          <p className="dark:text-white text-center lg:text-start">FULLSTACK</p>
          <p className="dark:text-white text-center lg:text-center">MOBILE</p>
        </div>
        <VerticalDividerUp color={isDark ? "white" : "#000"} />
      </div>
    </section>
  );
};

export default Branding;
