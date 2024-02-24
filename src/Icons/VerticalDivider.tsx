const VerticalDivider = ({
  width = 16,
  height = 102,
  color = "currentColor",
}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 101" fill="none">
      <line x1="8.5" y1="0.421875" x2="8.5" y2="80.4219" stroke={color} />
      <path
        d="M12.6663 87.7554L3.33301 97.0887"
        stroke={color}
        strokeWidth="0.666667"
        strokeMiterlimit="10"
      />
      <path
        d="M3.33301 87.7554L12.6663 97.0887"
        stroke={color}
        strokeWidth="0.666667"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default VerticalDivider;
