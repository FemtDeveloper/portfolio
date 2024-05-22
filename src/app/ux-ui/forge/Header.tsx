import clsx from "clsx";
import Content from "./Content";
import Navbar from "./Navbar";

interface Props {
  inHome?: boolean;
}

const Header = ({ inHome = false }: Props) => {
  return (
    <div className="w-full lg:h-full flex-col lg:bg-primaryPurple flex gap-10 items-center px-4 lg:px-0 lg:max-h-[712px]">
      <article
        className={clsx(
          "h-full flex w-full flex-col gap-4 justify-between p-0  max-w-wrapper",
          inHome ? "lg:p-8" : "py-8"
        )}
      >
        <Navbar />
        <Content />
      </article>
    </div>
  );
};

export default Header;
