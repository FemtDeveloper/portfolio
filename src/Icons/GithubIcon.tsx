const GithubIcon = ({ size = 32, color = "currentColor" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke={color} />
      <g clipPath="url(#clip0_538_1452)">
        <path
          d="M14.0007 20.6668C10.6673 21.6668 10.6673 19.0001 9.33398 18.6668M18.6673 22.6668V20.0868C18.6923 19.7689 18.6494 19.4493 18.5413 19.1493C18.4333 18.8493 18.2626 18.5757 18.0407 18.3468C20.134 18.1135 22.334 17.3201 22.334 13.6801C22.3338 12.7493 21.9758 11.8543 21.334 11.1801C21.6379 10.3658 21.6164 9.46569 21.274 8.66679C21.274 8.66679 20.4873 8.43345 18.6673 9.65345C17.1393 9.23934 15.5286 9.23934 14.0007 9.65345C12.1807 8.43345 11.394 8.66679 11.394 8.66679C11.0516 9.46569 11.0301 10.3658 11.334 11.1801C10.6874 11.8593 10.329 12.7624 10.334 13.7001C10.334 17.3135 12.534 18.1068 14.6273 18.3668C14.408 18.5934 14.2388 18.8637 14.1309 19.1601C14.0229 19.4564 13.9785 19.7722 14.0007 20.0868V22.6668"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_538_1452">
          <rect
            width={(size as number) / 2}
            height={(size as number) / 2}
            fill={color}
            transform="translate(8 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GithubIcon;
