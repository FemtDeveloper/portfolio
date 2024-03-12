import { useIsDark, useResponsive } from "@/hooks";
import { useState } from "react";

const TailwindIcon = ({ size = 80, color = "currentColor" }: IconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useResponsive();
  const isDark = useIsDark();
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const fillMain = isHovered || isMobile ? "#2298BD" : "#fff";
  const fill = isHovered || isMobile ? "#fff" : "#454545";

  const transitionStyle = { transition: "fill 0.2s ease-in-out" };
  const shadowStyle =
    isHovered || (isMobile && isDark)
      ? { filter: "drop-shadow(2px 20px 50px #2298BD53)" }
      : {};
  return (
    <svg
      width={isMobile ? 48 : size}
      height={isMobile ? 48 : size}
      viewBox="0 0 80 80"
      fill="none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ ...shadowStyle, ...transitionStyle }}
    >
      <rect
        width="80"
        height="80"
        rx="14"
        fill={fill}
        style={transitionStyle}
      />
      <path
        d="M40 22.4092C32 22.4092 27 26.3988 25 34.378C28 30.3884 31.5 28.8923 35.5 29.8897C37.7822 30.4588 39.4134 32.1101 41.219 33.9382C44.1603 36.916 47.5646 40.3624 55 40.3624C63 40.3624 68 36.3728 70 28.3936C67 32.3832 63.5 33.8793 59.5 32.8819C57.2178 32.3128 55.5866 30.6615 53.781 28.8334C50.8397 25.8556 47.4354 22.4092 40 22.4092ZM25 40.3624C17 40.3624 12 44.352 10 52.3313C13 48.3416 16.5 46.8455 20.5 47.8429C22.7822 48.412 24.4134 50.0634 26.219 51.8914C29.1603 54.8692 32.5646 58.3157 40 58.3157C48 58.3157 53 54.3261 55 46.3468C52 50.3365 48.5 51.8326 44.5 50.8352C42.2178 50.2661 40.5866 48.6147 38.781 46.7867C35.8397 43.8089 32.4354 40.3624 25 40.3624Z"
        fill={fillMain}
        style={transitionStyle}
      />
    </svg>
  );
};

export default TailwindIcon;
