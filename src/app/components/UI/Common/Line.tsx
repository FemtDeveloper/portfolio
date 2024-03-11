import { useThemeStore } from "@/store/useThemeStore";

const Line = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <svg viewBox="0 0 1440 576" fill="none">
      <path
        id="profile-line"
        className="-inset-1 bg-gradient-to-tr from-primaryOrange to-orangeGradient"
        d="M0.08231 258.535L263.257 296.302C270.379 297.324 276.668 301.489 280.389 307.647L434.749 563.125C442.598 576.115 460.382 578.649 471.547 568.369L1080.95 7.26721C1095.7 -6.32158 1119.63 3.11886 1121.13 23.124L1141.3 291.417C1142.4 306.003 1156.18 316.224 1170.45 313.044L1440.07 252.979"
        stroke={theme === "dark" ? "#FC4B1D" : "#0d0d02"}
        style={{
          filter: `drop-shadow(2px 1px 2px ${
            theme === "dark" ? "#ec0d0dcb" : "#FC4B1D54"
          })`,
        }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_538_1461"
          x1="22"
          y1="205.5"
          x2="1422.5"
          y2="171.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FC4B1D" stopOpacity="0.5" />
          <stop offset="0.499561" stopColor="#fdfdf2" />
          <stop offset="1" stopColor="#FC4B1D" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Line;
