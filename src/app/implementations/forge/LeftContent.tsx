const LeftContent = () => {
  return (
    <div className="flex-1 flex py-6 justify-center z-10 px-4 lg:pl-10 flex-col h-full lg:backdrop-blur-sm gap-20 lg:bg-white20 pointer-events-none">
      <div className="inner-container h-1/2 flex flex-col lg:h-3/5 justify-between lg:w-4/5 gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-clamp text-white text-start leading-normal">
            Ready to Take <br /> the Next Step?
          </h1>
          <p className="b2 text-purpleText ">
            From branding a design to digital marketing and strategy, we offer a
            full suite of services designed to help our clients stand out and
            achieve their goals.
          </p>
        </div>
        <div className="flex justify-between gap-5 w-full lg:w-4/5">
          <h3 className="b1 lg:h3 text-white w-4/5 text-wrap">
            Solutions that drive <br /> real results and make <br /> a
            difference
          </h3>
          <div className="p-4 bg-primaryOrange rounded-full flex justify-center items-center shadow-primaryBlue shadow-lg -rotate-[25deg] ">
            <p className="text-white leading-4 text-center ">
              Let&apos;s <br /> talk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
