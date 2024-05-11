import { gsap } from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animationIn = () => {
  const loader = document.getElementById("loader");
  if (loader) {
    console.log("loader");

    const tl = gsap.timeline();
    tl.set(loader, { opacity: "100%" }).to(loader, {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 1,
    });
  }
};

export const animationPageOut = (href: string, router: AppRouterInstance) => {
  const loader = document.getElementById("loader");
  if (loader) {
    console.log("loader");

    const tl = gsap.timeline();
    tl.set(loader, { opacity: 0, display: "none" }).to(loader, {
      opacity: "100%",
      display: "flex",
      duration: 1.5,
      onComplete: () => router.push(href),
    });
  }
};
