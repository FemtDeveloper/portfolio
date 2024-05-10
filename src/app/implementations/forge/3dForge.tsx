"use client";
import Spline from "@splinetool/react-spline";

const ThreeDForge = () => {
  return (
    <div className="absolute w-full -z-20 h-full opacity-70 lg:opacity-100">
      <Spline scene="https://prod.spline.design/2t4IJKUQlkxkvLT6/scene.splinecode" />
    </div>
  );
};

export default ThreeDForge;
