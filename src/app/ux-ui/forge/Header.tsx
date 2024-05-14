import { useIsSpanish } from "@/hooks";
import Content from "./Content";
import Navbar from "./Navbar";

const Header = () => {
  const isSpanish = useIsSpanish();
  return (
    <div className="w-full lg:h-full flex-col lg:bg-primaryPurple flex gap-10 items-center px-4 lg:px-0 lg:max-h-[712px]">
      <article className="h-full flex w-full flex-col gap-4 justify-between p-0 lg:p-8 max-w-wrapper">
        <Navbar />
        <Content />
      </article>
    </div>
  );
};

export default Header;
