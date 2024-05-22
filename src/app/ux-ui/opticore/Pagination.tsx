import { ArrowLeftIconW, ArrowRightIconW } from "@/Icons";
import { Slides } from "./SlideIndicator";

interface Props {
  handleNextSlide: () => void;
  handlePreviousSlide: () => void;
  slideSelected: Slides;
}

const Pagination = ({ handleNextSlide, handlePreviousSlide }: Props) => {
  return (
    <div className="hidden md:flex gap-10">
      <button
        onClick={handlePreviousSlide}
        className="hover:scale-110 rounded-full md:p-2 hover:-translate-y-1 transition duration-500 pointer-events-auto"
      >
        <ArrowLeftIconW />
      </button>
      <button
        onClick={handleNextSlide}
        className="hover:scale-110 rounded-full md:p-2 hover:-translate-y-1 transition duration-500 pointer-events-auto"
      >
        <ArrowRightIconW />
      </button>
    </div>
  );
};

export default Pagination;
