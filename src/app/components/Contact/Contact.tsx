import React from "react";
import { CONTACT_INFORMATION, CONTACT_LINKS } from "./language";
import { useIsSpanish } from "@/hooks";
import { ContactButton, Line } from "../UI/Common";

const Contact = () => {
  const isSpanish = useIsSpanish();
  const {
    labelEnglish,
    labelSapnish,
    subtitleEnglish,
    subtitleSpanish,
    titleEnglish,
    titleSpanish,
  } = CONTACT_INFORMATION;

  return (
    <section className="text-center w-full relative flex flex-col gap-14 md:gap-44 mb-44">
      <div className="flex flex-col gap-[76px] mt-20 md:mt-40">
        <div className="flex flex-col text-primary gap-2 md:gap-4 dark:text-white">
          <p className="b3 md:b1">{isSpanish ? labelSapnish : labelEnglish}</p>
          <p className="h2">{isSpanish ? subtitleSpanish : subtitleEnglish}</p>
        </div>
        <div className="title-container">
          <div
            id="profile-line"
            className="absolute -z-10 w-full top-0"
            style={{ transform: "rotateY(180deg)" }}
          >
            <Line />
          </div>

          <h2 className="d2 md:d1 text-primary dark:text-white">
            {isSpanish ? titleSpanish : titleEnglish}
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-14 md:gap-[100px]">
        {CONTACT_LINKS.map(({ title, url }, i) => (
          <ContactButton key={i} title={title} url={url} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
