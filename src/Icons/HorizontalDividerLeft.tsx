import { useResponsive } from "@/hooks";

const HorizontalDividerLeft = ({
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
      <path d="M127 19L113 5" stroke={color} strokeMiterlimit="10" />
      <path d="M127 5L113 19" stroke={color} strokeMiterlimit="10" />
      <line x1="100" y1="12.5" y2="12.5" stroke={color} />
    </svg>
  );
};

export default HorizontalDividerLeft;
