import { PhoneIcon } from "@/Icons";
import "./opticore.css";

const OpticoreButton = () => {
  return (
    <>
      <button
        className="opt-btn-container rounded-full .bd-blur-md-opticore items-center flex gap-2 h-16 pointer-events-auto"
        aria-label="button to contact the company"
        name="button to contact the company"
      >
        <div className="flex justify-center bg-neutral-400 p-1 rounded-full z-10">
          <div className="w-full flex justify-center bg-neutral-700 rounded-full py-2 px-6 .bd-blur-md-opticore">
            <p className="text-nowrap font-medium b3">SIGN UP</p>
          </div>
        </div>
        <div className="phone  flex justify-center bg-neutral-400 rounded-full p-[6px]">
          <div className="flex justify-center p-2 rounded-full bg-white">
            <PhoneIcon size={24} color="#000" />
          </div>
        </div>
      </button>
      <svg className="absolute">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="12"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default OpticoreButton;
