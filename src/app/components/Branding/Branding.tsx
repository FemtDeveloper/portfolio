"use client";
import { VerticalDivider, VerticalDividerUp } from "@/Icons";
import { useThemeStore } from "@/store/useThemeStore";
import Image from "next/image";

const Branding = () => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";
  return (
    <section
      id="branding"
      className="branding max-w-wrapper w-full flex flex-col items-center px-4 lg:px-0 z-20 overflow-x-clip"
    >
      <div className="container  group d3 lg:d1 flex flex-col items-center justify-center gap-4 relative">
        <figure className="">
          <Image
            sizes="(max-width: 768px) 25vw, 15vw"
            quality={100}
            src="/assets/bicolor-spheres.svg"
            width={700}
            height={500}
            alt="background svg"
            className="absolute -z-10 opacity-80"
          />
          <VerticalDivider color={isDark ? "white" : "#000"} />
        </figure>
        <div className="flex flex-col gap-3 w-full lg:w-4/5 xl:w-2/3">
          <div className="relative">
            <p className="hover:scale-125 transition-all duration-500 dark:text-white relative text-center lg:text-start hover:z-50">
              BRANDING
            </p>
            <figure className="absolute -bottom-10 md:-bottom-28 right-0 md:-right-20 h-44 w-32 md:h-[350px] md:w-72">
              <Image
                sizes="(max-width: 768px) 25vw, 15vw"
                quality={100}
                fill
                src="/images/branding/glasses.webp"
                loading="lazy"
                alt="branding image "
                className="opacity-0 md:group-hover:opacity-100 group-hover:opacity-90 transition duration-500 object-cover"
              />
            </figure>
          </div>
          <div className="relative">
            <p className="hover:scale-125 transition-all relative duration-500 dark:text-white text-center lg:text-end z-0 hover:z-50">
              UX/UI{" "}
              <span className="text-p-2 dark:text-white text-center lg:text-start">
                DESIGN
              </span>
            </p>

            <figure className="absolute bottom-16 left-0 md:-left-36 h-52 md:h-80 w-40 md:w-56">
              <Image
                sizes="(max-width: 768px) 25vw, 15vw"
                quality={100}
                fill
                src="/images/branding/design.webp"
                loading="lazy"
                alt="branding image"
                className="opacity-0 md:group-hover:opacity-100 group-hover:opacity-90 transition-all duration-1000  object-cover"
              />
            </figure>
          </div>
        </div>
        <div className="relative">
          <p className="hover:scale-125 z-0 hover:z-50 transition-all relative duration-500 dark:text-white text-center lg:text-start lg:ml-10">
            DEVELOPMENT
          </p>
          <figure className="absolute bottom-2 left-24 h-52 md:h-80 w-40 md:w-56">
            <Image
              sizes="(max-width: 768px) 25vw, 15vw"
              quality={100}
              fill
              src="/images/branding/luxury.webp"
              loading="lazy"
              alt="branding image "
              className="opacity-0 md:group-hover:opacity-100 group-hover:opacity-90 transition-all duration-700  object-cover z-30"
            />
          </figure>
        </div>
        <div className="relative">
          <p className="hover:scale-125 transition-all relative duration-500 dark:text-white z-0 hover:z-50 text-center lg:text-end">
            MOTION <span className="text-p-2 dark:text-white">DESIGN</span>
          </p>
          <figure className="absolute -bottom-2 right-24 h-52 md:h-80 w-40 md:w-56">
            <Image
              sizes="(max-width: 768px) 25vw, 15vw"
              quality={100}
              fill
              src="/images/branding/mobile.webp"
              loading="lazy"
              alt="branding image "
              className="opacity-0 md:group-hover:opacity-100 group-hover:opacity-90 z-30 transition-all duration-1000  object-cover"
            />
          </figure>
        </div>
        <div className="relative">
          <p className="hover:scale-125 transition-all duration-500 relative dark:text-white text-center lg:text-start  z-0 hover:z-50">
            FULLSTACK
          </p>
          <figure className="absolute -bottom-20 -left-10 md:-left-24 h-52 md:h-80 w-36 md:w-56 ">
            <Image
              sizes="(max-width: 768px) 25vw, 15vw"
              quality={100}
              fill
              src="/images/branding/optica.webp"
              loading="lazy"
              alt="branding image "
              className="opacity-0 md:group-hover:opacity-100 group-hover:opacity-90  z-40  transition-all duration-2000 object-cover"
            />
          </figure>
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
