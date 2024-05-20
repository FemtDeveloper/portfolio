import { PhoneIcon } from "@/Icons";
import "./opticore.css";

const OpticoreButton = () => {
  return (
    <>
      <button className="opt-btn-container w-36 h-14 rounded-full bd-blur-md p-2 items-center flex gap-4">
        <div className="w-36 flex justify-center bg-neutral-400 absolute  p-2  rounded-full z-10">
          <div className="w-full flex justify-center bg-neutral-700 rounded-full py-2 px-6 bd-blur-md">
            <p className="text-nowrap font-semibold b2">SIGN UP</p>
          </div>
        </div>
        <div className="phone  flex justify-center bg-neutral-400 rounded-full p-[6px]  right-0 absolute z-0">
          <div className="flex justify-center p-2 rounded-full bg-white">
            <PhoneIcon size={24} color="#000" />
          </div>
        </div>
      </button>
      <svg>
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
