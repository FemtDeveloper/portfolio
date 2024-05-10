import Image from "next/image";

const LeftContent = () => {
  return (
    <div className="flex-1 flex py-6 justify-center z-10 px-4 lg:pl-10 flex-col h-full lg:bd-blur gap-20 lg:bg-white20 pointer-events-none">
      <div className="inner-container h-1/2 flex flex-col lg:h-2/3 justify-between lg:w-4/5 gap-10 lg:gap-12">
        <div className="flex flex-col gap-7 lg:gap-5">
          <h1 className="text-clamp text-white text-start leading-normal">
            Ready to Take <br /> the Next Step?
          </h1>
          <p className="b2 text-purpleText ">
            From branding a design to digital marketing and strategy, we offer a
            full suite of services designed to help our clients stand out and
            achieve their goals.
          </p>
        </div>
        <div className="flex justify-between gap-5 w-full ">
          <h3 className="b1 lg:h3 text-white w-4/5 text-wrap">
            Solutions that drive <br /> real results and make <br /> a
            difference
          </h3>
          <button className="p-4 lg:w-20 lg:h-20 w-14 h-14 rounded-full flex justify-center hover:-translate-y-[2px] transition duration-500 hover:drop-shadow-sm pointer-events-auto hover:shadow-primaryOrange items-center -rotate-[25deg] ">
            <Image
              src="/images/uxui/letstalk.webp"
              alt="lets talk button"
              fill
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
