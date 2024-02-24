const VerticalDividerUp = ({
  width = 16,
  height = 102,
  color = "currentColor",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-0.5"
        x2="80"
        y2="-0.5"
        transform="matrix(0 -1 -1 0 8 100.422)"
        stroke={color}
      />
      <path
        d="M12.6663 13.0884L3.33301 3.75505"
        stroke={color}
        strokeWidth="0.666667"
        strokeMiterlimit="10"
      />
      <path
        d="M3.33301 13.0884L12.6663 3.75505"
        stroke={color}
        strokeWidth="0.666667"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default VerticalDividerUp;
