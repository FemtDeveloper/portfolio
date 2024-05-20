"use client";
import { DescriptionCollab } from "@/app/components";
import { useIsSpanish } from "@/hooks";
import Header from "./Header";

const Forge = () => {
  const isSpanish = useIsSpanish();
  return (
    <section className="flex w-full items-center max-w-wrapper h-full flex-col gap-4">
      <Header />
      <div className="w-full px-4 lg:px-0">
        <DescriptionCollab
          title={"Forge Agency"}
          href="https://dribbble.com/akramhs"
          name="Akram Hossain"
          description={
            isSpanish
              ? "Proyecto de UI/UX para una agencia líder en innovación y desarrollo, creando experiencias digitales que destacan."
              : "UI/UX project for Forge Agency, a leader in innovation and development, creating standout digital experiences"
          }
        />
      </div>
    </section>
  );
};

export default Forge;
