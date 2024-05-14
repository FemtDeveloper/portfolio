import { Description } from "@/app/components";
import { useIsSpanish } from "@/hooks";
import Header from "./Header";

const Forge = () => {
  const isSpanish = useIsSpanish();
  return (
    <section className="flex w-full h-full flex-col gap-4">
      <Header />
      <div className="w-full px-4 lg:px-0">
        <Description
          title={"Forge Agency"}
          description={
            isSpanish
              ? "Proyecto de UI/UX para una agencia líder en innovación y desarrollo, creando experiencias digitales que destacan. Creado por <a href='https://dribbble.com/akramhs' className='text-primaryOrange cursor-pointer'>Akram Hossain</a>"
              : "UI/UX project for Forge Agency, a leader in innovation and development, creating standout digital experiences. Created by <a href='https://dribbble.com/akramhs' className='text-primaryOrange cursor-pointer'>Akram Hossain</a>"
          }
        />
      </div>
    </section>
  );
};

export default Forge;
