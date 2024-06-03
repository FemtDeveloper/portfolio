import { Header } from "@/app/ux-ui/forge";
import { useIsSpanish, useResponsive } from "@/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimationLink, Description } from "../UI/Common";

const Collaborations = () => {
  const isSpanish = useIsSpanish();
  const isMobile = useResponsive();

  useGSAP(() => {
    gsap.to(".branding-title > *", {
      backgroundPositionX: "100%",
      stagger: 1,
      duration: 2000,
      scrollTrigger: {
        trigger: ".branding-title h2",
        scrub: 1,
        start: "top 80%",
        end: "center center",
      },
    });
  }, []);
  if (isMobile) return null;
  return (
    <section
      id="collaborations"
      className="w-full h-full max-w-wrapper gap-4 lg:gap-8 flex flex-col items-end"
    >
      <div className="branding-title flex flex-col lg:flex-row items-center lg:items-end justify-between w-full gap-3 text-primary dark:text-white lg: px-4 lg:px-0 ">
        <h2 className="h2 lg:d1 font-bold tracking-widest bg-gradient-to-r from-transparent to-primary dark:to-white">
          COLLABORATIONS
        </h2>
        <h3 className="h4 lg:d3 font-bold text-right bg-gradient-to-r from-transparent to-primary dark:to-white">
          UX/UI Components
        </h3>
      </div>
      <Header inHome />
      <div className="w-full">
        <Description
          title={"Forge Agency"}
          description={
            isSpanish
              ? "Proyecto de UI/UX para una agencia líder en innovación y desarrollo, creando experiencias digitales que destacan. Creado por <a href='https://dribbble.com/akramhs' className='text-primary dark:text-primaryOrange cursor-pointer'>Akram Hossain</a>"
              : "UI/UX project for Forge Agency, a leader in innovation and development, creating standout digital experiences. Created by <a href='https://dribbble.com/akramhs' className='text-primary dark:text-primaryOrange cursor-pointer'>Akram Hossain</a>"
          }
        />
      </div>
      <div className="px-4 lg:px-0">
        <AnimationLink
          label={isSpanish ? "Ver todos >>>" : "See all >>>"}
          href="/ux-ui"
          fontStyle="text-[20px] font-extrabold dark:text-primaryOrange"
        />
      </div>
    </section>
  );
};

export default Collaborations;
