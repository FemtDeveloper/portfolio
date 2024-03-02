const ArrowDiagonalIcon = ({
  size = 24,
  color = "currentColor",
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.5 16V6H9.5" stroke="#1E1E1E" strokeMiterlimit="10" />
      <path d="M19.5 6L6.5 19" stroke="#1E1E1E" strokeMiterlimit="10" />
    </svg>
  );
};

export default ArrowDiagonalIcon;
