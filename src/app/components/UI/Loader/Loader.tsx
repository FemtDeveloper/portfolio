"use client";
import { IsoIcon } from "@/Icons";
import { animationIn } from "@/utils";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    animationIn();
  }, []);
  return (
    <div
      id="loader"
      className="fixed w-full top-0 min-h-screen bg-white left-0 z-50 flex justify-center items-center"
    >
      <div className="">
        <IsoIcon width={400} height={240} />
      </div>
    </div>
  );
};

export default Loader;
