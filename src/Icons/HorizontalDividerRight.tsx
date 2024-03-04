import { useResponsive } from "@/hooks";

const HorizontalDividerRight = ({
  width = 132,
  height = 24,
  color = "currentColor",
}: IconProps) => {
  const { isMobile } = useResponsive();
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 132 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 19L19 5" stroke={color} strokeMiterlimit="10" />
      <path d="M5 5L19 19" stroke={color} strokeMiterlimit="10" />
      <line
        y1="-0.5"
        x2="100"
        y2="-0.5"
        transform="matrix(1 0 0 -1 32 12)"
        stroke={color}
      />
    </svg>
  );
};

export default HorizontalDividerRight;
