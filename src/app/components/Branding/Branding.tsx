"use client";
import Image from "next/image";
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
            <p className="hover:scale-125 transition-all duration-500 dark:text-white relative text-center lg:text-start hover:z-50">
              BRANDING
            </p>
            <Image
              quality={100}
              src="/images/branding/glasses.jpg"
              width={600}
              height={400}
              alt="branding image "
              className="opacity-0 group-hover:opacity-100 transition duration-500 absolute -bottom-28 -right-20  h-[350px] w-72 object-cover"
            />
          </div>
          <div className="relative">
            <p className="hover:scale-125 transition-all relative duration-500 dark:text-white text-center lg:text-end z-0 hover:z-50">
              UX/UI{" "}
              <span className="text-p-2 dark:text-white text-center lg:text-start">
                DESIGN
              </span>
            </p>

            <Image
              quality={100}
              src="/images/branding/design.jpg"
              width={600}
              height={400}
              alt="branding image"
              className="opacity-0 group-hover:opacity-100   transition-all duration-1000 absolute bottom-16 -left-36 h-80 w-56 object-cover"
            />
          </div>
        </div>
        <div className="relative">
          <p className="hover:scale-125 z-0 hover:z-50 transition-all relative duration-500 dark:text-white text-center lg:text-start lg:ml-10">
            DEVELOPMENT
          </p>
          <Image
            quality={100}
            src="/images/branding/luxury.jpg"
            width={600}
            height={400}
            alt="branding image "
            className="opacity-0 group-hover:opacity-100    transition-all duration-700 absolute bottom-2 left-24 h-80 w-56 object-cover z-30"
          />
        </div>
        <div className="relative">
          <p className="hover:scale-125 transition-all relative duration-500 dark:text-white z-0 hover:z-50 text-center lg:text-end">
            MOTION <span className="text-p-2 dark:text-white">DESIGN</span>
          </p>
          <Image
            quality={100}
            src="/images/branding/mobile.jpg"
            width={600}
            height={400}
            alt="branding image "
            className="opacity-0 group-hover:opacity-100 z-30 transition-all duration-1000 absolute -bottom-2 right-24 h-80 w-56 object-cover"
          />
        </div>
        <div className="relative">
          <p className="hover:scale-125 transition-all duration-500 relative dark:text-white text-center lg:text-start  z-0 hover:z-50">
            FULLSTACK
          </p>
          <Image
            quality={100}
            src="/images/branding/optica.jpg"
            width={600}
            height={400}
            alt="branding image "
            className="opacity-0 group-hover:opacity-100  z-40  transition-all duration-2000 absolute -bottom-20 -left-24 h-80 w-56 object-cover"
          />
        </div>
        <div className="relative">
          <p className="hover:scale-125 transition-all relative hover:z-50 duration-500 dark:text-white text-center lg:text-center">
            MOBILE
          </p>
        </div>
      </div>
      <VerticalDividerUp color={isDark ? "white" : "#000"} />
    </section>
  );
};

export default Branding;
