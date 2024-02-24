import Image from "next/image";
import { language } from "./language";
import { useIsSpanish, useResponsive } from "@/hooks";
import { Line } from "../UI/Common";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const isSpanish = useIsSpanish();
  const { isMobile } = useResponsive();
  const { aboutEnglish, aboutSpanish, contentEnglish, contentSpanish } =
    language;

  const tl = gsap.timeline();

  useGSAP(() => {
    gsap.from("#profile", {
      scrollTrigger: "#profile",
      x: -400,
      duration: 3,
      rotate: -360,
    });
  });
  return (
    <section
      id="about"
      className="flex flex-col items-center w-full gap-10 lg:gap-40"
    >
      <div className="about-title flex flex-col gap-2 lg:gap-4 items-center">
        <p className="b3 lg:b1 text-p-2 dark:text-white">
          {isSpanish ? aboutSpanish : aboutEnglish}
        </p>
        <p className="text-2xl lg:text-[32px] dark:text-white">
          Full Stack — Developer
        </p>
      </div>
      <figure className="relative w-full flex items-center justify-center">
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
          width={isMobile ? 280 : 464}
          height={isMobile ? 422 : 703}
          className="rounded-48"
        />
      </figure>
    </section>
  );
};

export default About;
