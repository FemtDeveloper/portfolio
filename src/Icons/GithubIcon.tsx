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
      <path
        d="M18.666 13.3335C19.7269 13.3335 20.7443 13.7549 21.4944 14.5051C22.2446 15.2552 22.666 16.2726 22.666 17.3335V22.0002H19.9993V17.3335C19.9993 16.9799 19.8589 16.6407 19.6088 16.3907C19.3588 16.1406 19.0196 16.0002 18.666 16.0002C18.3124 16.0002 17.9733 16.1406 17.7232 16.3907C17.4732 16.6407 17.3327 16.9799 17.3327 17.3335V22.0002H14.666V17.3335C14.666 16.2726 15.0874 15.2552 15.8376 14.5051C16.5877 13.7549 17.6051 13.3335 18.666 13.3335Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0007 14H9.33398V22H12.0007V14Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6673 12.0002C11.4037 12.0002 12.0007 11.4032 12.0007 10.6668C12.0007 9.93045 11.4037 9.3335 10.6673 9.3335C9.93094 9.3335 9.33398 9.93045 9.33398 10.6668C9.33398 11.4032 9.93094 12.0002 10.6673 12.0002Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GithubIcon;
