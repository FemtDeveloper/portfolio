import { useResponsive } from "@/hooks";
import { ArrowDownIcon } from "@/Icons";
import Image from "next/image";
import { useEffect } from "react";
import "./opticore.css";

const RoundedButton = () => {
  const { isMobile } = useResponsive();
  useEffect(() => {
    const text = document.getElementById("circle-text");
    if (text && text.textContent) {
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    }
    const elem = document.querySelectorAll("span");
    console.log(elem.length);
    if (elem) {
      for (let i = 1; i < elem.length - 1; i++) {
        elem[i].style.transform = `rotate(${i * 10}deg)`;
      }
    }
  }, []);

  return (
    <button className="h-20 w-20 md:h-28 md:w-28 relative pointer-events-auto">
      <figure className="w-full h-full">
        <Image
          src="/images/uxui/opticore-down2.webp"
          alt="Scroll down button"
          fill
          className="object-contain animate-rotate "
        />
      </figure>
      <div className="absolute top-[40%] left-[37%] -translate-x-1/2 transform animate-bounce-slow">
        <ArrowDownIcon size={isMobile ? 24 : 30} />
      </div>
    </button>
  );
};

export default RoundedButton;
