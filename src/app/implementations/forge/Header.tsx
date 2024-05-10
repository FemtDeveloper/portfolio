import Content from "./Content";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-full lg:h-screen flex-col bg-primaryPurple flex gap-10 items-center px-4 lg:px-0 pb-4 pt-6">
      <Navbar />
      <Content />
    </div>
  );
};

export default Header;
