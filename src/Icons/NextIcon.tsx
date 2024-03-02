import { useResponsive } from "@/hooks";
import { useState } from "react";

const NextIcon = ({ size = 80, color = "currentColor" }: IconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useResponsive();
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const fillMain = isHovered ? "#1E1E1E" : "#fff";
  const fill = isHovered ? "#fff" : "#1E1E1E";

  const transitionStyle = { transition: "fill 0.2s ease-in-out" };
  const shadowStyle = isHovered
    ? { boxShadow: "2px 30px 70px 30px #00008F23" }
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
        width={size}
        height={size}
        rx="14"
        fill={fill}
        style={transitionStyle}
      />
      <path
        d="M38.0352 10.0161C37.9062 10.0279 37.4956 10.0689 37.1261 10.0982C28.6041 10.8665 20.6217 15.464 15.566 22.5304C12.7507 26.4595 10.9501 30.9163 10.2698 35.637C10.0293 37.2848 10 37.7716 10 40.0059C10 42.2401 10.0293 42.7269 10.2698 44.3748C11.9003 55.6399 19.9179 65.1047 30.7918 68.6116C32.739 69.2392 34.7918 69.6673 37.1261 69.9252C38.0352 70.0249 41.9648 70.0249 42.8739 69.9252C46.9032 69.4794 50.3168 68.4825 53.6835 66.7643C54.1994 66.5003 54.2991 66.4299 54.2287 66.3716C54.182 66.3362 51.9823 63.3865 49.3431 59.8212L44.5453 53.3412L38.5338 44.4452C35.2258 39.5543 32.5044 35.5549 32.4809 35.5549C32.4575 35.549 32.434 39.5015 32.4223 44.3278C32.4047 52.7783 32.3988 53.1183 32.2933 53.3178C32.1408 53.6051 32.0235 53.7222 31.7771 53.8513C31.5895 53.945 31.4252 53.9627 30.5396 53.9627H29.5249L29.2551 53.7926C29.0792 53.6811 28.9502 53.5347 28.8622 53.3645L28.739 53.1006L28.7507 41.3429L28.7683 29.5792L28.9502 29.3505C29.044 29.2274 29.2434 29.0691 29.3842 28.9928C29.6246 28.8755 29.7185 28.8638 30.7331 28.8638C31.9296 28.8638 32.129 28.9107 32.4399 29.2508C32.5279 29.3447 35.783 34.2472 39.6774 40.1525C43.5719 46.0577 48.8973 54.1212 51.5131 58.0795L56.2639 65.2749L56.5045 65.1164C58.6335 63.7324 60.8855 61.7623 62.6688 59.7097C66.4635 55.3527 68.9092 50.0394 69.7304 44.3748C69.9706 42.7269 70 42.2401 70 40.0059C70 37.7716 69.9706 37.2848 69.7304 35.637C68.0996 24.3718 60.082 14.9069 49.2083 11.4001C47.2903 10.7785 45.2494 10.3504 42.9619 10.0924C42.3988 10.0337 38.522 9.96923 38.0352 10.0161ZM50.3168 28.1601C50.5982 28.3008 50.8271 28.5706 50.9092 28.8521C50.9559 29.0045 50.9679 32.2651 50.9559 39.6129L50.9385 50.1569L49.0792 47.3069L47.2142 44.4569V36.7923C47.2142 31.837 47.2375 29.0514 47.2729 28.9166C47.3667 28.5882 47.5719 28.3301 47.8535 28.1777C48.0938 28.0545 48.1819 28.0428 49.1026 28.0428C49.9708 28.0428 50.1233 28.0545 50.3168 28.1601Z"
        fill={fillMain}
        style={transitionStyle}
      />
    </svg>
  );
};

export default NextIcon;
