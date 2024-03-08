import { IsoIcon } from "@/Icons";
import { useIsDark } from "@/hooks";
import Image from "next/image";

const Footer = () => {
  const isDark = useIsDark();
  return (
    <footer className="w-full h-72 md:h-[385px] flex items-center justify-start md:justify-center overflow-y-clip">
      <div className="container flex relative w-full h-full items-start md:items-center justify-center">
        <div className="flex flex-col items-center z-10 gap-3 md:gap-8">
          <p className="l1 md:b3 text-primary dark:text-white">
            ©2024 Felix Miranda. All Rights Reserved.
          </p>
          <IsoIcon color={isDark ? "#fff" : "#1e1e1e"} />
        </div>
        <figure className="absolute -left-12 md:left-24 w-72 md:w-[700px] -bottom-20 h-60 md:h-[620px] md:-bottom-72 -rotate-12">
          <Image
            src="/images/spheres.png"
            width={700}
            height={620}
            alt="spheres decorative"
            className="absolute z-0 -right-16 md-right-52"
          />
          <Image
            src="/images/floating-macbook.png"
            width={700}
            height={620}
            alt="macbook decorative"
            className="z-10 relative"
          />
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
