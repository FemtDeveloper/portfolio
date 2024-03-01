const TailwindIcon = ({
  size = 80,
  color = "currentColor",
  isHovered = false,
}: IconProps) => {
  if (isHovered) {
    return (
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="80" height="80" rx="14" fill="#1E1E1E" />
        <path
          d="M40 22C32 22 27 25.9896 25 33.9688C28 29.9792 31.5 28.4831 35.5 29.4805C37.7822 30.0496 39.4134 31.701 41.219 33.529C44.1603 36.5068 47.5646 39.9532 55 39.9532C63 39.9532 68 35.9636 70 27.9844C67 31.974 63.5 33.4701 59.5 32.4727C57.2178 31.9037 55.5866 30.2523 53.781 28.4243C50.8397 25.4465 47.4354 22 40 22ZM25 39.9532C17 39.9532 12 43.9429 10 51.9221C13 47.9325 16.5 46.4364 20.5 47.4338C22.7822 48.0028 24.4134 49.6542 26.219 51.4822C29.1603 54.46 32.5646 57.9065 40 57.9065C48 57.9065 53 53.9169 55 45.9377C52 49.9273 48.5 51.4234 44.5 50.426C42.2178 49.8569 40.5866 48.2055 38.781 46.3775C35.8397 43.3997 32.4354 39.9532 25 39.9532Z"
          fill="url(#paint0_linear_538_2435)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_538_2435"
            x1="8.33333"
            y1="33.4901"
            x2="60.0858"
            y2="63.4071"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2298BD" />
            <stop offset="1" stop-color="#0ED7B5" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="80" rx="14" fill="#1E1E1E" />
      <path
        d="M40 22.4092C32 22.4092 27 26.3988 25 34.378C28 30.3884 31.5 28.8923 35.5 29.8897C37.7822 30.4588 39.4134 32.1101 41.219 33.9382C44.1603 36.916 47.5646 40.3624 55 40.3624C63 40.3624 68 36.3728 70 28.3936C67 32.3832 63.5 33.8793 59.5 32.8819C57.2178 32.3128 55.5866 30.6615 53.781 28.8334C50.8397 25.8556 47.4354 22.4092 40 22.4092ZM25 40.3624C17 40.3624 12 44.352 10 52.3313C13 48.3416 16.5 46.8455 20.5 47.8429C22.7822 48.412 24.4134 50.0634 26.219 51.8914C29.1603 54.8692 32.5646 58.3157 40 58.3157C48 58.3157 53 54.3261 55 46.3468C52 50.3365 48.5 51.8326 44.5 50.8352C42.2178 50.2661 40.5866 48.6147 38.781 46.7867C35.8397 43.8089 32.4354 40.3624 25 40.3624Z"
        fill="white"
      />
    </svg>
  );
};

export default TailwindIcon;
