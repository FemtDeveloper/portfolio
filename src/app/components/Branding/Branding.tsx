"use client";

import { VerticalDivider, VerticalDividerUp } from "@/Icons";

import { useThemeStore } from "@/store/useThemeStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Branding = () => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  useGSAP(() => {
    gsap.to(".branding-title p", {
      backgroundPositionX: "100%",
      stagger: 1,
      scrollTrigger: {
        trigger: ".branding-title p",
        scrub: 1.2,
        start: "top center",
        end: "center center",
      },
    });
  }, []);
  return (
    <section
      id="branding"
      className="branding w-full flex flex-col items-center px-4 lg:px-0 z-20 overflow-x-clip"
    >
      <div className="container  group d3 lg:d1 flex flex-col items-center justify-center gap-4 relative  max-w-wrapper">
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
          <div className="branding-title relative">
            <p className="hover:scale-125 transition-all duration-500 relative text-center lg:text-start hover:z-50 bg-gradient-to-r from-transparent to-primary dark:to-white">
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
          <div className="branding-title relative">
            <p className="hover:scale-125 transition-all relative duration-500 text-center lg:text-end z-0 hover:z-50 bg-gradient-to-r from-transparent to-primary dark:to-white">
              UX/UI{" "}
              <span className="text-p-2 text-center lg:text-start">DESIGN</span>
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
        <div className="branding-title relative">
          <p className="hover:scale-125 z-0 hover:z-50 transition-all relative duration-500  text-center lg:text-start lg:ml-10 bg-gradient-to-r from-transparent to-primary dark:to-white">
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
        <div className="branding-title relative">
          <p className="hover:scale-125 transition-all relative duration-500  z-0 hover:z-50 text-center lg:text-end bg-gradient-to-r from-transparent to-primary dark:to-white">
            MOTION <span className="text-p-2 ">DESIGN</span>
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
        <div className="branding-title relative">
          <p className="hover:scale-125 transition-all duration-500 relative  text-center lg:text-start  z-0 hover:z-50 bg-gradient-to-r from-transparent to-primary dark:to-white">
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
        <div className="branding-title relative">
          <p className="hover:scale-125 transition-all relative hover:z-50 duration-500  text-center lg:text-center bg-gradient-to-r from-transparent to-primary dark:to-white">
            MOBILE
          </p>
        </div>
      </div>
      <VerticalDividerUp color={isDark ? "white" : "#000"} />
    </section>
  );
};

export default Branding;
