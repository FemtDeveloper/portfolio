import { Open_Sans } from "next/font/google";
import Navbar from "./Navbar";
import OpticoreButton from "./OpticoreButton";
import RightContent from "./RightContent";
import "./opticore.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: "400",
});

const Opticore = () => {
  return (
    <section className="flex-col h-screen min-h-screen w-full max-w-wrapper flex text-white relative justify-center">
      <Navbar />
      <div className="left-content w-full flex-1 gap-8 flex flex-col z-10 max-w-[824px] justify-center">
        <div className="title-container font-skinz flex gap-4 flex-col">
          <h3 className="d3">WE ARE</h3>
          <h2 className="d1">OPTICORE</h2>
        </div>
        <p className={`b1 tracking-widest  ${openSans.className}`}>
          In the dynamic landscape of business, navigating
          <br />
          complexities and amazing opportunities requires
          <br />
          expetise, vision and strategic acumen.
        </p>
        <OpticoreButton />
      </div>
      <div className="absolute w-1/2 h right-0 flex justify-center items-center">
        <RightContent />
      </div>
    </section>
  );
};

export default Opticore;
