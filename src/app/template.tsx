"use client";
import { ReactNode } from "react";
import { Loader } from "./components/UI/Loader";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex justify-center">
      <Loader />

      {children}
    </div>
  );
};

export default Template;
