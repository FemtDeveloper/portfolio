"use client";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { useState } from "react";
import { useScramble } from "use-scramble";
import Navbar from "./Navbar";
import "./opticore.css";
import OpticoreButton from "./OpticoreButton";
import Pagination from "./Pagination";
import RoundedButton from "./RoundedButton";
import SlideIndicator, { Slides } from "./SlideIndicator";
import SocialLinks from "./SocialLinks";

const Opticore = () => {
  const [slideSelected, setSlideSelected] = useState<Slides>(1);
  const { ref } = useScramble({
    text: "OPTICORE",
    speed: 0.15,
    tick: 10,
    step: 1,
    seed: 7,
    scramble: 10,
    overflow: false,
    range: [65, 90],
    overdrive: 103,
  });

  const handleNextSlide = () => {
    setSlideSelected((prevSlide) =>
      prevSlide === 3 ? 1 : ((prevSlide + 1) as Slides)
    );
  };

  const handlePreviousSlide = () => {
    setSlideSelected((prevSlide) =>
      prevSlide === 1 ? 3 : ((prevSlide - 1) as Slides)
    );
  };

  return (
    <section
      id="opticore"
      className="flex-col h-full md:h-screen min-h-screen w-full flex text-white relative items-center justify-center pointer-events-none md:px-4"
    >
      <Spline
        scene="https://prod.spline.design/YsXWaKOqiyhRywGF/scene.splinecode"
        className="absolute w-screen"
      />
      <div className="w-full px-4 md:px-0 flex justify-center">
        <Navbar />
      </div>
      <div className="max-w-wrapper w-full flex justify-center relative h-full md:max-h-[550px] mt-10 md:mt-16 pb-4">
        <div className="left-content w-full  md:flex-1 gap-4 md:gap-8 flex flex-col z-10 justify-center lg:justify-end pb-6 bd-blur-opticore p-4 md:px-0">
          <div className="title-container font-skinz flex md:gap-4 flex-col">
            <h3 className="text-clamp-opticore">WE ARE</h3>
            <h2 className="text-clamp-opticore-big" ref={ref} />
          </div>
          <p className={`b3 md:b1 tracking-widest `}>
            In the dynamic landscape of business, navigating
            <br className="hidden md:flex" />
            complexities and amazing opportunities requires
            <br className="hidden md:flex" />
            expertise, vision and strategic acumen.
          </p>
          <OpticoreButton />
        </div>
        <figure className="h-[110%] w-[110%] md:w-1/2 md:h-full absolute -top-10 md:top-auto right-0">
          <Image
            src="/images/uxui/opticore2.webp"
            alt="figure"
            fill
            className="object-cover md:object-contain"
          />
        </figure>
        <SlideIndicator slideSelected={slideSelected} />
      </div>
      <div className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-wrapper mb-6 md:mb-10 gap-8 md:gap-0">
        <SocialLinks />
        <RoundedButton />
        <Pagination
          slideSelected={slideSelected}
          handleNextSlide={handleNextSlide}
          handlePreviousSlide={handlePreviousSlide}
        />
      </div>
    </section>
  );
};

export default Opticore;
