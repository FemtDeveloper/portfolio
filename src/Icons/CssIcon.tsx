"use client";
import { useIsDark, useResponsive } from "@/hooks";
import { useState } from "react";

const CssIcon = ({ size = 80, color = "currentColor" }: IconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useResponsive();
  const isDark = useIsDark();
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const fillMain = isHovered || isMobile ? "#2965F1" : "#454545";

  const transitionStyle = { transition: "fill 0.2s ease-in-out" };

  const shadowStyle =
    isHovered || (isMobile && isDark)
      ? { filter: "drop-shadow(2px 20px 50px #2965F193)" }
      : {};

  return (
    <svg
      width={isMobile ? 48 : size}
      height={isMobile ? 48 : size}
      viewBox="0 0 80 80"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ ...shadowStyle, ...transitionStyle }}
    >
      <g clipPath="url(#clip0_538_2683)">
        <path
          d="M14.1667 6.44812e-06H65.8333C67.6942 -0.00179242 69.5372 0.372807 71.2568 1.10237C72.9763 1.83193 74.5387 2.90212 75.8546 4.25171C77.1704 5.60129 78.2139 7.20377 78.9252 8.96743C79.6365 10.7311 80.0018 12.6213 80 14.5299V65.4701C80.0018 67.3787 79.6365 69.2689 78.9252 71.0326C78.2139 72.7962 77.1704 74.3987 75.8546 75.7483C74.5387 77.0979 72.9763 78.1681 71.2568 78.8976C69.5372 79.6272 67.6942 80.0018 65.8333 80H14.1667C12.3058 80.0018 10.4628 79.6272 8.74325 78.8976C7.02368 78.1681 5.46126 77.0979 4.14541 75.7483C2.82957 74.3987 1.78613 72.7962 1.07481 71.0326C0.363487 69.2689 -0.00174761 67.3787 6.28692e-06 65.4701V14.5299C-0.00174761 12.6213 0.363487 10.7311 1.07481 8.96743C1.78613 7.20377 2.82957 5.60129 4.14541 4.25171C5.46126 2.90212 7.02368 1.83193 8.74325 1.10237C10.4628 0.372807 12.3058 -0.00179242 14.1667 6.44812e-06Z"
          fill={fillMain}
          style={transitionStyle}
        />
        <path
          d="M19.582 32.979L20.3692 41.7631H40.0263V32.979H19.582ZM18 15.2L18.7985 23.984H40.0263V15.2H18ZM40.0263 55.7922L39.9878 55.8024L30.205 53.1609L29.5796 46.1552H20.7617L21.9923 59.9475L39.9858 64.9423L40.0263 64.9313V55.7922Z"
          fill="#EBEBEB"
        />
        <path
          d="M60.4144 32.979L62 15.2H39.996V23.984H52.3735L51.5742 32.979H39.996V41.7631H50.8126L49.7928 53.1553L39.9957 55.7996V64.9382L58.0036 59.9475L58.1356 58.4634L60.2001 35.3378L60.4144 32.979Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_538_2683">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CssIcon;
