"use lient";

const LogoIcon = ({
  width = 53,
  height = 40,
  color = "currentColor",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 53 40"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M26.047 0a7.442 7.442 0 100 14.884 7.442 7.442 0 000-14.884zM40.77 14.477c-7.746 0-14.026 6.28-14.026 14.027V40h6.977V28.504c0-.646.087-1.272.25-1.867l10.72 10.72 4.933-4.933-10.72-10.72a7.057 7.057 0 011.866-.25h11.496v-6.977H40.772zm-29.274 0c7.746 0 14.026 6.28 14.026 14.027V40h-6.976V28.504c0-.825-.142-1.617-.402-2.353L7.896 36.4l-4.934-4.933 9.883-9.883a7.086 7.086 0 00-1.349-.129H0v-6.976h11.496z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default LogoIcon;
