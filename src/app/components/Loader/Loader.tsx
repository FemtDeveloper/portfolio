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
    <div
      className="fixed w-full top-0 min-h-screen bg-black left-0 z-50"
      // id="loader"
    >
      <Spline
        scene="https://prod.spline.design/WFzUKorGO5F46ifn/scene.splinecode"
        className="h-screen w-screen bg-black block"
      />
    </div>
  );
};

export default Loader;
