import Content from "./Content";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-full h-screen flex-col lg:bg-primaryPurple flex gap-10 items-center px-4 lg:px-0 pt-20">
      <article className=" h-full flex w-full flex-col gap-10 p-8 max-w-wrapper">
        <Navbar />
        <Content />
      </article>
    </div>
  );
};

export default Header;
