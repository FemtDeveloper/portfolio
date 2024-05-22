// @ts-nocheck
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isRoot?: boolean;
}

const LenisProvider = ({ children, isRoot }: Props) => {
  return (
    <ReactLenis root={isRoot} options={{ duration: 2, wheelMultiplier: 0.7 }}>
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
