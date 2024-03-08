const IsoIcon = ({
  width = 64,
  height = 48,
  color = "currentColor",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.896 0C26.964 0 22.9658 3.9982 22.9658 8.93022C22.9658 13.8622 26.964 17.8604 31.896 17.8604C36.8281 17.8604 40.8263 13.8622 40.8263 8.93022C40.8263 3.9982 36.8281 0 31.896 0ZM49.565 17.373C40.2692 17.373 32.7334 24.9088 32.7334 34.2047V47.9999H41.1055V34.2047C41.1055 33.4292 41.2098 32.6781 41.4053 31.9646L54.2692 44.8286L60.1892 38.9086L47.3254 26.0448C48.0387 25.8494 48.7897 25.7451 49.565 25.7451H63.3602V17.373H49.565ZM14.4348 17.3732C23.7307 17.3732 31.2665 24.9089 31.2665 34.2048V48H22.8944V34.2048C22.8944 33.2148 22.7243 32.2646 22.4119 31.3817L10.1144 43.6791L4.19449 37.7591L16.0536 25.9C15.5297 25.7984 14.9885 25.7452 14.4348 25.7452H0.639648V17.3732H14.4348Z"
        fill={color}
      />
    </svg>
  );
};

export default IsoIcon;