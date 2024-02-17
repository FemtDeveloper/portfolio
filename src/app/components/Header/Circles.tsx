import React from "react";

const Circles = () => {
  return (
    <div className="circle-container flex-1 relative items-center flex">
      <div className="header-circle h-6 w-6 md:h-14 md:w-14 rounded-full dark:border-white border absolute animate-circle1 backdrop-blur-sm" />
      <div className="header-circle h-6 w-6 md:h-14 md:w-14 rounded-full dark:border-white border absolute animate-circle2 backdrop-blur-sm" />
      <div className="header-circle h-6 w-6 md:h-14 md:w-14 rounded-full dark:border-white border absolute animate-circle3 backdrop-blur-sm" />
      <div className="header-circle h-6 w-6 md:h-14 md:w-14 rounded-full dark:border-white border absolute animate-circle4 backdrop-blur-sm" />
      <div className="header-circle h-6 w-6 md:h-14 md:w-14 rounded-full dark:border-white border absolute animate-circle5 backdrop-blur-sm" />
    </div>
  );
};

export default Circles;
