// @ts-nocheck
"use client";
import { ReactNode, useEffect, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";

interface Props {
  children: ReactNode;
  isRoot?: boolean;
}

const LenisProvider = ({ children, isRoot }: Props) => {
  const lenisRef = useRef();

  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);
  return (
    <ReactLenis root={isRoot} options={{ duration: 2 }}>
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
