"use client";
import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  return (
    <Spline
      scene="https://prod.spline.design/WFzUKorGO5F46ifn/scene.splinecode"
      className="h-screen w-screen bg-black block"
    />
  );
};

export default Loader;

{
  /* <Spline
  scene="https://prod.spline.design/WFzUKorGO5F46ifn/scene.splinecode"
  className="h-full w-full"
/> */
}
