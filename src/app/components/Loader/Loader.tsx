"use client";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);
  return (
    <div className="h-full w-full flex items-center justify-center bg-black">
      {/* <Spline scene="https://prod.spline.design/WFzUKorGO5F46ifn/scene.splinecode" /> */}
      <video src="/assets/light.mp4" autoPlay muted />
    </div>
  );
};

export default Loader;
{
  /* <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/WFzUKorGO5F46ifn/scene.splinecode" />
      </Suspense> */
}
