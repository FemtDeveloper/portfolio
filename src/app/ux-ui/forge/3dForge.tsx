"use client";
import Spline from "@splinetool/react-spline";

const ThreeDForge = () => {
  return (
    <div className="absolute w-full -z-20 h-full opacity-100">
      <Spline scene="https://prod.spline.design/XVkFiyjDbiMixV9D/scene.splinecode" />
    </div>
  );
};

export default ThreeDForge;
