"use client";
import Spline from "@splinetool/react-spline";
import clsx from "clsx";
import { Suspense, useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);
  return (
    <div className="h-full w-full flex items-center justify-center bg-black">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/WFzUKorGO5F46ifn/scene.splinecode" />
      </Suspense>
      {/* <h2
        className={clsx(
          "font-bold text-white  tracking-wider transition-all opacity-0 transform duration-2000",
          isLoading
            ? "scale-50 text-[20vh]"
            : "scale-150 text-[5050vh] opacity-100"
        )}
      >
        Motion
      </h2> */}
    </div>
  );
};

export default Loader;
{
  /* <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/WFzUKorGO5F46ifn/scene.splinecode" />
      </Suspense> */
}
