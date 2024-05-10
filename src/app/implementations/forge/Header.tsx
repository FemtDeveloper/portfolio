import Content from "./Content";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-full lg:h-full flex-col lg:bg-primaryPurple flex gap-10 items-center px-4 lg:px-0 mt-12 lg:mt-0">
      <article className=" flex flex-col gap-10 p-8 max-w-wrapper">
        <Navbar />
        <Content />
      </article>
    </div>
  );
};

export default Header;
