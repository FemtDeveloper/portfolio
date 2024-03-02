import Image from "next/image";
import parse from "html-react-parser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { language } from "./language";
import { useIsSpanish, useResponsive } from "@/hooks";
import { Line } from "../UI/Common";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const isSpanish = useIsSpanish();
  const { isMobile } = useResponsive();
  const { aboutEnglish, aboutSpanish, contentEnglish, contentSpanish } =
    language;

  useGSAP(() => {
    gsap.from("#profile", {
      scrollTrigger: { trigger: "#profile", end: "top 10%" },
      opacity: 0,
      scale: 0.2,
      duration: 3,
    });
  });
  return (
    <section
      id="about"
      className="flex flex-col items-center w-full gap-10 lg:gap-40 px-4 lg:px-0"
    >
      <div className="about-title flex flex-col gap-2 lg:gap-4 items-center">
        <p className="b3 lg:b1 text-p-2 dark:text-white">
          {isSpanish ? aboutSpanish : aboutEnglish}
        </p>
        <p className="text-2xl lg:text-[32px] dark:text-white">
          Full Stack — Developer
        </p>
      </div>
      <figure className="relative w-full flex  flex-col items-center justify-center gap-12">
        <div id="profile-line" className="absolute -z-10 w-full">
          <Line />
        </div>
        <Image
          src="/assets/bicolor-spheres.svg"
          width={1000}
          height={500}
          alt="background svg"
          className="absolute -z-10 opacity-80"
        />

        <Image
          src="/images/about/mock-profile.png"
          id="profile"
          alt="profile image"
          loading="lazy"
          width={isMobile ? 280 : 464}
          height={isMobile ? 422 : 703}
          className="rounded-48"
        />
        <p className="md:text-2xl max-w-[571px] text-center tracking-wide dark:text-white">
          {parse(isSpanish ? contentSpanish : contentEnglish)}
        </p>
      </figure>
    </section>
  );
};

export default About;
