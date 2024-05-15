import { Header } from "@/app/ux-ui/forge";
import { useIsSpanish } from "@/hooks";
import { AnimationLink, Description } from "../UI/Common";

const Collaborations = () => {
  const isSpanish = useIsSpanish();
  return (
    <section
      id="collaborations"
      className="w-full h-full max-w-wrapper gap-4 lg:gap-8 flex flex-col items-end"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between w-full gap-3 text-primary dark:text-white lg: px-4 lg:px-0">
        <h2 className="h2 lg:d1 font-bold tracking-widest">COLLABORATIONS</h2>
        <h3 className="h4 lg:d3 font-bold text-right dark:text-primaryOrange">
          UX/UI Components
        </h3>
      </div>
      <Header />
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
