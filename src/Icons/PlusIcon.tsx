const PlusIcon = ({ size = 24, color = "#a3a3a4" }: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16">
      <path
        fill={color}
        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
      ></path>
    </svg>
  );
};

export default PlusIcon;
