import { useResponsive } from "@/hooks";
import { useState } from "react";

const ReactIcon = ({ size = 80, color = "currentColor" }: IconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useResponsive();
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const fillMain = isHovered ? "#61DAFB" : "#fff";
  const fill = isHovered ? "#000B1D" : "#454545";

  const transitionStyle = { transition: "fill 0.2s ease-in-out" };

  const shadowStyle = isHovered
    ? { filter: "drop-shadow(2px 20px 50px #61DAFB43)" }
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
      <g clipPath="url(#clip0_538_1721)">
        <path
          d="M14.1667 6.44812e-06H65.8333C67.6942 -0.00179242 69.5372 0.372807 71.2568 1.10237C72.9763 1.83193 74.5387 2.90212 75.8546 4.25171C77.1704 5.60129 78.2139 7.20377 78.9252 8.96743C79.6365 10.7311 80.0017 12.6213 80 14.5299V65.4701C80.0017 67.3787 79.6365 69.2689 78.9252 71.0326C78.2139 72.7962 77.1704 74.3987 75.8546 75.7483C74.5387 77.0979 72.9763 78.1681 71.2568 78.8976C69.5372 79.6272 67.6942 80.0018 65.8333 80H14.1667C12.3058 80.0018 10.4628 79.6272 8.74325 78.8976C7.02368 78.1681 5.46126 77.0979 4.14541 75.7483C2.82957 74.3987 1.78613 72.7962 1.07481 71.0326C0.363487 69.2689 -0.00174761 67.3787 6.28692e-06 65.4701V14.5299C-0.00174761 12.6213 0.363487 10.7311 1.07481 8.96743C1.78613 7.20377 2.82957 5.60129 4.14541 4.25171C5.46126 2.90212 7.02368 1.83193 8.74325 1.10237C10.4628 0.372807 12.3058 -0.00179242 14.1667 6.44812e-06Z"
          fill={fill}
          style={transitionStyle}
        />
        <g clipPath="url(#clip1_538_1721)">
          <path
            d="M40 45.2896C43.0716 45.2896 45.5617 42.8318 45.5617 39.7998C45.5617 36.7679 43.0716 34.3101 40 34.3101C36.9283 34.3101 34.4382 36.7679 34.4382 39.7998C34.4382 42.8318 36.9283 45.2896 40 45.2896Z"
            fill={fillMain}
            style={transitionStyle}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3729 36.3746C12.0234 37.577 11.4565 38.7367 11.4565 39.8001C11.4565 40.8634 12.0234 42.0231 13.3729 43.2256C14.7222 44.4278 16.7476 45.5694 19.3612 46.5544C24.5793 48.521 31.8758 49.7642 40 49.7642C48.1241 49.7642 55.4207 48.521 60.6388 46.5544C63.2523 45.5694 65.2778 44.4278 66.6271 43.2256C67.9766 42.0231 68.5435 40.8634 68.5435 39.8001C68.5435 38.7367 67.9766 37.577 66.6271 36.3746C65.2778 35.1723 63.2523 34.0307 60.6388 33.0458C55.4207 31.0792 48.1241 29.8359 40 29.8359C31.8758 29.8359 24.5793 31.0792 19.3612 33.0458C16.7476 34.0307 14.7222 35.1723 13.3729 36.3746ZM18.4337 30.6482C24.0168 28.5441 31.642 27.2695 40 27.2695C48.3579 27.2695 55.9831 28.5441 61.5662 30.6482C64.3533 31.6986 66.6983 32.9807 68.3693 34.4696C70.0402 35.9584 71.1435 37.7575 71.1435 39.8001C71.1435 41.8426 70.0402 43.6417 68.3693 45.1305C66.6983 46.6195 64.3533 47.9015 61.5662 48.9519C55.9831 51.0561 48.3579 52.3306 40 52.3306C31.642 52.3306 24.0168 51.0561 18.4337 48.9519C15.6467 47.9015 13.3017 46.6195 11.6307 45.1305C9.95978 43.6417 8.85651 41.8426 8.85651 39.8001C8.85651 37.7575 9.95978 35.9584 11.6307 34.4696C13.3017 32.9807 15.6467 31.6986 18.4337 30.6482Z"
            fill={fillMain}
            style={transitionStyle}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.6919 15.3258C27.9622 14.7735 26.6612 14.8687 25.7282 15.4004C24.7953 15.9321 24.0612 16.9965 23.681 18.7513C23.3008 20.5058 23.3119 22.808 23.7545 25.5346C24.6381 30.9785 27.1956 37.8373 31.2576 44.782C35.3197 51.7267 40.0588 57.3423 44.3933 60.8196C46.5643 62.5612 48.5786 63.7218 50.3081 64.2741C52.0378 64.8264 53.3388 64.7312 54.2717 64.1995C55.2047 63.6678 55.9387 62.6034 56.319 60.8486C56.6992 59.0941 56.688 56.7919 56.2455 54.0653C55.3618 48.6214 52.8044 41.7625 48.7423 34.8179C44.6802 27.8732 39.9411 22.2576 35.6066 18.7803C33.4357 17.0387 31.4214 15.8781 29.6919 15.3258ZM37.2465 16.7888C41.8842 20.5092 46.815 26.3901 50.994 33.5347C55.173 40.6792 57.8673 47.8347 58.8127 53.6593C59.2847 56.5669 59.3323 59.2125 58.8615 61.3854C58.3907 63.5581 57.3638 65.4008 55.5717 66.422C53.7797 67.4433 51.6495 67.3998 49.5078 66.7159C47.3659 66.0319 45.0686 64.6684 42.7535 62.8111C38.1158 59.0907 33.1849 53.2098 29.006 46.0652C24.827 38.9207 22.1326 31.7652 21.1872 25.9406C20.7153 23.033 20.6676 20.3874 21.1385 18.2145C21.6093 16.0418 22.6362 14.1991 24.4282 13.1779C26.2203 12.1566 28.3505 12.2001 30.4921 12.884C32.634 13.568 34.9314 14.9315 37.2465 16.7888Z"
            fill={fillMain}
            style={transitionStyle}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M56.319 18.7513C55.9388 16.9965 55.2047 15.9321 54.2717 15.4004C53.3388 14.8687 52.0378 14.7734 50.3081 15.3258C48.5786 15.878 46.5643 17.0387 44.3933 18.7803C40.0588 22.2575 35.3197 27.8732 31.2577 34.8178C27.1956 41.7625 24.6381 48.6214 23.7545 54.0653C23.3119 56.7918 23.3008 59.094 23.681 60.8486C24.0612 62.6033 24.7953 63.6678 25.7283 64.1995C26.6612 64.7312 27.9622 64.8264 29.6919 64.2741C31.4214 63.7218 33.4357 62.5612 35.6067 60.8196C39.9412 57.3423 44.6803 51.7267 48.7423 44.782C52.8044 37.8373 55.3619 30.9784 56.2455 25.5346C56.688 22.808 56.6992 20.5058 56.319 18.7513ZM58.8127 25.9406C57.8673 31.7652 55.173 38.9206 50.994 46.0652C46.815 53.2097 41.8842 59.0906 37.2465 62.8111C34.9314 64.6684 32.634 66.0319 30.4922 66.7158C28.3505 67.3997 26.2203 67.4433 24.4283 66.422C22.6362 65.4008 21.6093 63.5581 21.1385 61.3854C20.6676 59.2125 20.7153 56.5669 21.1872 53.6593C22.1327 47.8346 24.827 40.6792 29.006 33.5347C33.185 26.3901 38.1158 20.5092 42.7535 16.7887C45.0686 14.9315 47.366 13.568 49.5078 12.884C51.6495 12.2001 53.7797 12.1566 55.5717 13.1778C57.3638 14.1991 58.3907 16.0418 58.8615 18.2145C59.3323 20.3874 59.2847 23.0329 58.8127 25.9406Z"
            fill={fillMain}
            style={transitionStyle}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_538_1721">
          <rect width={size} height={size} fill="white" />
        </clipPath>
        <clipPath id="clip1_538_1721">
          <rect
            width="62.4"
            height="54.8"
            fill="white"
            transform="translate(8.79999 12.3999)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ReactIcon;
