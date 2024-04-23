"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { VerticalDivider, VerticalDividerUp } from "@/Icons";
import { useThemeStore } from "@/store/useThemeStore";

const Branding = () => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";
  return (
    <section
      id="branding"
      className="branding max-w-wrapper w-full flex flex-col items-center px-4 lg:px-0 z-20 overflow-x-clip"
    >
      <div className="container  group d3 lg:d1 flex flex-col items-center justify-center gap-4 relative">
        <Image
          quality={100}
          src="/assets/bicolor-spheres.svg"
          width={700}
          height={500}
          alt="background svg"
          className="absolute -z-10 opacity-80"
        />
        <VerticalDivider color={isDark ? "white" : "#000"} />
        <div className="flex flex-col gap-3 w-full lg:w-4/5 xl:w-2/3">
          <div className="relative">
            <p className="hover:scale-125 transition-all duration-500 dark:text-white text-center lg:text-start">
              BRANDING
            </p>
            <Image
              quality={100}
              src="/images/branding/branding.webp"
              width={200}
              height={400}
              alt="branding image "
              className="opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 transition duration-700 absolute -bottom-28 -right-20 xl:-right-56 h-[550px] w-80 object-cover"
            />
          </div>
          <div className="relative">
            <p className="hover:scale-125 transition-all duration-500 dark:text-white text-center lg:text-end z-10">
              UX/UI{" "}
              <span className="text-p-2 dark:text-white text-center lg:text-start">
                DESIGN
              </span>
            </p>

            <Image
              quality={100}
              src="/images/branding/ux.webp"
              width={200}
              height={400}
              alt="branding image "
              className="opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 translate-y-0 group-hover:translate-y-80 z-30 transition-all duration-2000 absolute bottom-2 -left-24 h-96 w-64 object-cover"
            />
          </div>
        </div>
        <div className="relative">
          <p className="hover:scale-125 transition-all duration-500 dark:text-white text-center lg:text-start lg:ml-10 ">
            DEVELOPMENT
          </p>
          <Image
            quality={100}
            src="/images/branding/development.jpeg"
            width={200}
            height={400}
            alt="branding image "
            className="opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100   transition-all duration-2000 absolute bottom-2 left-24 h-96 w-64 object-cover z-50"
          />
        </div>
        <div className="relative">
          <p className="hover:scale-125 transition-all duration-500 dark:text-white  text-center lg:text-end">
            MOTION <span className="text-p-2 dark:text-white">DESIGN</span>
          </p>
          <Image
            quality={100}
            src="/images/branding/mobile.webp"
            width={200}
            height={400}
            alt="branding image "
            className="opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100  group-hover:translate-y-0 translate-y-96 z-30 transition-all duration-2000 absolute -bottom-2 right-24 h-96 w-64 object-cover"
          />
        </div>
        <div className="relative">
          <p className="hover:scale-125 transition-all duration-500 dark:text-white text-center lg:text-start">
            FULLSTACK
          </p>
        </div>
        <div className="relative">
          <p className="hover:scale-125 transition-all duration-500 dark:text-white text-center lg:text-center">
            MOBILE
          </p>
        </div>
      </div>
      <VerticalDividerUp color={isDark ? "white" : "#000"} />
    </section>
  );
};

export default Branding;
