import { IsoIcon } from "@/Icons";
import { useIsDark } from "@/hooks";
import Image from "next/image";

const Footer = () => {
  const isDark = useIsDark();
  return (
    <footer className="w-full h-72 relative md:h-[385px] flex items-center justify-start md:justify-center">
      <div className="container flex  w-full  items-start md:items-center justify-center h-[400px]">
        <div className="flex flex-col items-center z-10 gap-3 md:gap-8">
          <p className="l1 md:b3 text-primary dark:text-white">
            ©2024 Felix Miranda. All Rights Reserved.
          </p>
          <div className="iso">
            <IsoIcon color={isDark ? "#fff" : "#1e1e1e"} />
          </div>
        </div>
        <figure className="absolute -left-12 md:left-24 w-72 md:w-[50vw]  -bottom-20 h-[35vh] md:h-[500px]  md:-bottom-72 -rotate-12">
          <Image
            src="/images/spheres.webp"
            fill
            alt="spheres decorative"
            className="absolute z-0 -right-16 md-right-52"
          />
          <Image
            src="/images/floating-macbook.webp"
            sizes="(max-width: 768px) 55vw, 35vw"
            fill
            alt="macbook decorative"
            className="z-10 object-contain"
          />
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
