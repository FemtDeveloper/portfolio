import { useIsDark, useResponsive } from "@/hooks";
import { useState } from "react";

const JsIcon = ({ size = 80, color = "currentColor" }: IconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDark = useIsDark();
  const { isMobile } = useResponsive();
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const fillMain = () => {
    if (isHovered || isMobile) return "#F7DF1E";
    if ((isHovered && isDark) || isMobile) return "#fff";
    return "#454545";
  };

  const transitionStyle = { transition: "fill 0.2s ease-in-out" };

  const shadowStyle =
    isHovered || (isMobile && isDark)
      ? { filter: "drop-shadow(2px 20px 50px #F7DF1E13)" }
      : {};

  return (
    <svg
      width={isMobile ? 48 : size}
      height={isMobile ? 48 : size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ ...shadowStyle, ...transitionStyle }}
    >
      <g clipPath="url(#clip0_538_2696)">
        <path
          d="M14.1667 6.44812e-06H65.8333C67.6942 -0.00179242 69.5372 0.372807 71.2568 1.10237C72.9763 1.83193 74.5387 2.90212 75.8546 4.25171C77.1704 5.60129 78.2139 7.20377 78.9252 8.96743C79.6365 10.7311 80.0017 12.6213 80 14.5299V65.4701C80.0017 67.3787 79.6365 69.2689 78.9252 71.0326C78.2139 72.7962 77.1704 74.3987 75.8546 75.7483C74.5387 77.0979 72.9763 78.1681 71.2568 78.8976C69.5372 79.6272 67.6942 80.0018 65.8333 80H14.1667C12.3058 80.0018 10.4628 79.6272 8.74325 78.8976C7.02368 78.1681 5.46126 77.0979 4.14541 75.7483C2.82957 74.3987 1.78613 72.7962 1.07481 71.0326C0.363487 69.2689 -0.00174761 67.3787 6.28692e-06 65.4701V14.5299C-0.00174761 12.6213 0.363487 10.7311 1.07481 8.96743C1.78613 7.20377 2.82957 5.60129 4.14541 4.25171C5.46126 2.90212 7.02368 1.83193 8.74325 1.10237C10.4628 0.372807 12.3058 -0.00179242 14.1667 6.44812e-06Z"
          fill={fillMain()}
          style={transitionStyle}
        />
        <path
          d="M53.8755 62.5967C55.4869 65.2278 57.5834 67.1618 61.2914 67.1618C64.4063 67.1618 66.3961 65.605 66.3961 63.4539C66.3961 60.8761 64.3517 59.9631 60.9231 58.4634L59.0438 57.657C53.619 55.3459 50.0152 52.4507 50.0152 46.3301C50.0152 40.692 54.3111 36.3999 61.0247 36.3999C65.8044 36.3999 69.2406 38.0634 71.7168 42.4189L65.8628 46.1777C64.5739 43.8666 63.1834 42.9561 61.0247 42.9561C58.8228 42.9561 57.4273 44.3529 57.4273 46.1777C57.4273 48.4329 58.8241 49.3459 62.0495 50.7428L63.9288 51.5478C70.3161 54.2869 73.9225 57.0793 73.9225 63.3574C73.9225 70.1256 68.6057 73.8336 61.4654 73.8336C54.4838 73.8336 49.9733 70.5066 47.7663 66.1459L53.8755 62.5967ZM27.3193 63.2482C28.5003 65.3434 29.5746 67.1148 32.1574 67.1148C34.6273 67.1148 36.1854 66.1485 36.1854 62.391V36.8291H43.7028V62.4926C43.7028 70.2767 39.139 73.8196 32.4774 73.8196C26.4584 73.8196 22.9726 70.7047 21.2 66.9529L27.3193 63.2482Z"
          fill={isDark && isHovered ? "#454545" : "white"}
        />
      </g>
      <defs>
        <clipPath id="clip0_538_2696">
          <rect
            width={size}
            height={size}
            fill={isDark ? "#454545" : "white"}
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default JsIcon;
