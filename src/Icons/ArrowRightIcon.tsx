const ArrowRightIcon = ({ size = 24, color = "currentColor" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.33333 12.6668L14 8.00016L9.33333 3.3335"
        stroke={color}
        strokeWidth="0.666667"
        strokeMiterlimit="10"
      />
      <path
        d="M14 8L1.33333 8"
        stroke={color}
        strokeWidth="0.666667"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default ArrowRightIcon;
