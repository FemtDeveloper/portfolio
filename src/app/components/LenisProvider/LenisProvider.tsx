"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  children: ReactNode;
  isRoot?: boolean;
}

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LenisProvider = ({ children, isRoot }: Props) => {
  const lenis = useLenis(({ scroll }) => {
    // Update ScrollTrigger on every scroll
    ScrollTrigger.update();
  });

  return (
    <ReactLenis
      root={isRoot}
      options={{
        duration: 2,
        wheelMultiplier: 0.7,
        touchMultiplier: 1,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
