import { useIsSpanish, useOnLeave, useOnMove } from "@/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import parse from "html-react-parser";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Line } from "../UI/Common";
import { language } from "./language";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const isSpanish = useIsSpanish();
  const { aboutEnglish, aboutSpanish, contentEnglish, contentSpanish } =
    language;

  const onMove = useOnMove(aboutRef, "#circle-about");
  const onLeave = useOnLeave("#circle-about");

  useEffect(() => {
    const aboutElement = aboutRef.current;
    if (!aboutElement) return;

    aboutElement.addEventListener("mousemove", onMove);
    aboutElement.addEventListener("mouseleave", onLeave);

    return () => {
      aboutElement.removeEventListener("mousemove", onMove);
      aboutElement.removeEventListener("mouseleave", onLeave);
    };
  }, [onMove, onLeave]);

  useGSAP(() => {
    gsap.from("#profile", {
      scrollTrigger: { trigger: "#about", end: "top 10%" },
      opacity: 0,
      scale: 0.2,
      duration: 1.5,
    });
  });

  return (
    <section
      id="about"
      className="flex flex-col items-center w-full gap-10 lg:gap-20 relative"
      ref={aboutRef}
    >
      <div
        id="circle-about"
        className="absolute hidden lg:flex top-1/2 h-20 w-20 z-10 bg-primaryOrange rounded-full opacity-15 blur-lg"
      />
      <div className="about-title flex flex-col gap-2 lg:gap-4 items-center">
        <p className="b3 lg:b1 text-p-2 dark:text-white">
          {isSpanish ? aboutSpanish : aboutEnglish}
        </p>
        <p className="text-2xl lg:text-[32px] dark:text-white">
          Full Stack — Developer
        </p>
      </div>
      <figure className="absolute w-full flex  flex-col items-center justify-center gap-12 mx-[-16px]">
        <div id="profile-line" className="absolute -z-10 w-full ">
          <Line />
        </div>
        <Image
          src="/assets/bicolor-spheres.svg"
          sizes="(max-width: 768px) 85ww, 35vw"
          loading="lazy"
          fill
          alt="background svg"
          className="absolute -z-10 opacity-80"
        />
      </figure>
      <figure className="max-w-[600px] w-[95%] md:w-[600px] h-80 md:h-96 max-h-96 flex relative flex-col overflow-hidden items-center justify-center rounded-3xl z-10">
        <Image
          sizes="(max-width: 768px) 95ww, 35vw"
          src="/images/about/setup.webp"
          id="profile"
          alt="profile image"
          loading="lazy"
          fill
          className="setup rounded-3xl grayscale object-cover hover:grayscale-[30%] hover:scale-110 transition-all duration-700 z-50"
        />
      </figure>
      <p className="md:text-2xl max-w-[571px] text-center tracking-wide dark:text-white px-4 lg:px-0">
        {parse(isSpanish ? contentSpanish : contentEnglish)}
      </p>
    </section>
  );
};

export default About;
