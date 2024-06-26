import { useIsSpanish } from "@/hooks";
import { ContactButton, Line } from "../UI/Common";
import { CONTACT_INFORMATION, CONTACT_LINKS } from "./language";

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
    <section
      id="contact"
      className="text-center w-full relative flex flex-col gap-14 md:gap-44 mb-32 md:mb-0"
    >
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

          <h2 className="text-clamp-big text-primary dark:text-white font-medium tracking-wider">
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
