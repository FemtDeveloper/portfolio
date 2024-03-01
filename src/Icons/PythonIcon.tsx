const PythonIcon = ({
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
        <g clip-path="url(#clip0_538_2745)">
          <path
            d="M14.1667 6.44812e-06H65.8333C67.6942 -0.00179242 69.5372 0.372807 71.2568 1.10237C72.9763 1.83193 74.5387 2.90212 75.8546 4.25171C77.1704 5.60129 78.2139 7.20377 78.9252 8.96743C79.6365 10.7311 80.0018 12.6213 80 14.5299V65.4701C80.0018 67.3787 79.6365 69.2689 78.9252 71.0326C78.2139 72.7962 77.1704 74.3987 75.8546 75.7483C74.5387 77.0979 72.9763 78.1681 71.2568 78.8976C69.5372 79.6272 67.6942 80.0018 65.8333 80H14.1667C12.3058 80.0018 10.4628 79.6272 8.74325 78.8976C7.02368 78.1681 5.46126 77.0979 4.14541 75.7483C2.82957 74.3987 1.78613 72.7962 1.07481 71.0326C0.363487 69.2689 -0.00174761 67.3787 6.28692e-06 65.4701V14.5299C-0.00174761 12.6213 0.363487 10.7311 1.07481 8.96743C1.78613 7.20377 2.82957 5.60129 4.14541 4.25171C5.46126 2.90212 7.02368 1.83193 8.74325 1.10237C10.4628 0.372807 12.3058 -0.00179242 14.1667 6.44812e-06Z"
            fill="#000B1D"
          />
          <path
            d="M39.8874 13.2C26.0207 13.2 26.8866 19.2134 26.8866 19.2134L26.9021 25.4432H40.1347V27.3137H21.6461C21.6461 27.3137 12.7728 26.3074 12.7728 40.299C12.7728 54.2906 20.5176 53.7945 20.5176 53.7945H25.1398V47.3018C25.1398 47.3018 24.8906 39.557 32.7609 39.557C40.6312 39.557 45.8853 39.557 45.8853 39.557C45.8853 39.557 53.2591 39.6762 53.2591 32.4306C53.2591 25.1849 53.2591 20.4501 53.2591 20.4501C53.2591 20.4501 54.3787 13.2 39.8874 13.2ZM32.5909 17.3893C33.9074 17.3893 34.9715 18.4533 34.9715 19.7699C34.9715 21.0864 33.9074 22.1505 32.5909 22.1505C31.2743 22.1505 30.2102 21.0864 30.2102 19.7699C30.2102 18.4533 31.2743 17.3893 32.5909 17.3893Z"
            fill="url(#paint0_linear_538_2745)"
          />
          <path
            d="M40.2812 67.5383C54.1479 67.5383 53.282 61.5249 53.282 61.5249L53.2665 55.2951H40.0339V53.4246H58.5225C58.5225 53.4246 67.3958 54.4309 67.3958 40.4393C67.3958 26.4477 59.651 26.9438 59.651 26.9438H55.0288V33.4365C55.0288 33.4365 55.278 41.1813 47.4077 41.1813C39.5374 41.1813 34.2832 41.1813 34.2832 41.1813C34.2832 41.1813 26.9095 41.0621 26.9095 48.3077C26.9095 55.5534 26.9095 60.2882 26.9095 60.2882C26.9095 60.2882 25.7899 67.5383 40.2812 67.5383ZM47.5777 63.349C46.2612 63.349 45.1971 62.2849 45.1971 60.9684C45.1971 59.6518 46.2612 58.5878 47.5777 58.5878C48.8943 58.5878 49.9584 59.6518 49.9584 60.9684C49.9584 62.2849 48.8943 63.349 47.5777 63.349Z"
            fill="url(#paint1_linear_538_2745)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_538_2745"
            x1="18.0222"
            y1="17.9496"
            x2="45.0316"
            y2="45.0494"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#387EB8" />
            <stop offset="1" stop-color="#366994" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_538_2745"
            x1="34.6373"
            y1="35.1892"
            x2="63.6455"
            y2="62.9805"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFE052" />
            <stop offset="1" stop-color="#FFC331" />
          </linearGradient>
          <clipPath id="clip0_538_2745">
            <rect width="80" height="80" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_538_1502)">
        <path
          d="M14.1667 6.44812e-06H65.8333C67.6942 -0.00179242 69.5372 0.372807 71.2568 1.10237C72.9763 1.83193 74.5387 2.90212 75.8546 4.25171C77.1704 5.60129 78.2139 7.20377 78.9252 8.96743C79.6365 10.7311 80.0018 12.6213 80 14.5299V65.4701C80.0018 67.3787 79.6365 69.2689 78.9252 71.0326C78.2139 72.7962 77.1704 74.3987 75.8546 75.7483C74.5387 77.0979 72.9763 78.1681 71.2568 78.8976C69.5372 79.6272 67.6942 80.0018 65.8333 80H14.1667C12.3058 80.0018 10.4628 79.6272 8.74325 78.8976C7.02368 78.1681 5.46126 77.0979 4.14541 75.7483C2.82957 74.3987 1.78613 72.7962 1.07481 71.0326C0.363487 69.2689 -0.00174761 67.3787 6.28692e-06 65.4701V14.5299C-0.00174761 12.6213 0.363487 10.7311 1.07481 8.96743C1.78613 7.20377 2.82957 5.60129 4.14541 4.25171C5.46126 2.90212 7.02368 1.83193 8.74325 1.10237C10.4628 0.372807 12.3058 -0.00179242 14.1667 6.44812e-06Z"
          fill="#1E1E1E"
        />
        <path
          d="M39.8872 13.2C26.0206 13.2 26.8865 19.2134 26.8865 19.2134L26.9019 25.4432H40.1346V27.3137H21.646C21.646 27.3137 12.7727 26.3074 12.7727 40.299C12.7727 54.2906 20.5175 53.7945 20.5175 53.7945H25.1397V47.3018C25.1397 47.3018 24.8905 39.557 32.7608 39.557C40.6311 39.557 45.8852 39.557 45.8852 39.557C45.8852 39.557 53.259 39.6762 53.259 32.4306C53.259 25.1849 53.259 20.4501 53.259 20.4501C53.259 20.4501 54.3786 13.2 39.8872 13.2ZM32.5907 17.3893C33.9073 17.3893 34.9714 18.4533 34.9714 19.7699C34.9714 21.0864 33.9073 22.1505 32.5907 22.1505C31.2742 22.1505 30.2101 21.0864 30.2101 19.7699C30.2101 18.4533 31.2742 17.3893 32.5907 17.3893Z"
          fill="white"
        />
        <path
          d="M40.281 67.5383C54.1477 67.5383 53.2817 61.5249 53.2817 61.5249L53.2663 55.2951H40.0336V53.4246H58.5222C58.5222 53.4246 67.3955 54.4309 67.3955 40.4393C67.3955 26.4477 59.6507 26.9438 59.6507 26.9438H55.0286V33.4365C55.0286 33.4365 55.2777 41.1813 47.4074 41.1813C39.5372 41.1813 34.283 41.1813 34.283 41.1813C34.283 41.1813 26.9092 41.0621 26.9092 48.3077C26.9092 55.5534 26.9092 60.2882 26.9092 60.2882C26.9092 60.2882 25.7897 67.5383 40.281 67.5383ZM47.5775 63.349C46.2609 63.349 45.1968 62.2849 45.1968 60.9684C45.1968 59.6518 46.2609 58.5878 47.5775 58.5878C48.894 58.5878 49.9581 59.6518 49.9581 60.9684C49.9581 62.2849 48.894 63.349 47.5775 63.349Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_538_1502">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PythonIcon;
