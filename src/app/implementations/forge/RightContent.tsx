import Image from "next/image";

const RightContent = () => {
  return (
    <div className="lg:flex-1 flex justify-center items-end px-4 py-6 lg:py-0 lg:pr-10 flex-col lg:h-full z-10 pointer-events-none  lg:backdrop-blur-none lg:bg-transparent smbac">
      <div className="inner-container w-full lg:max-w-72 h-full flex flex-col justify-center gap-6 lg:gap-12">
        <div className="flex flex-col gap-4">
          <h4 className=" b1 text-white">
            Innovative Solutions,
            <br /> Impactful Results
          </h4>
          <p className="text-purpleText">
            Our mission is to empower individuals and organizations to unleash
            their creative potential and make a positive inpact on the world
          </p>
        </div>
        <figure className="h-36 w-40 flex relative self-center lg:self-end">
          <Image
            src="/images/forge-lat.webp"
            alt="decorative image"
            sizes="(max-width: 768px) 95ww, 35vw"
            fill
            className="object-contain"
          />
        </figure>
        <div className="flex flex-col gap-4 lg:gap-10">
          <p className="text-purpleText">
            Solutions that drive success and <br />
            propel your business forward
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <p className="h2 text-white">400+</p>
              <p className="text-purpleText">Succesful projects</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="h2 text-white">150+</p>
              <p className="text-purpleText">Startups raised</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
