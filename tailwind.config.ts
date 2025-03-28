import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: { center: true, padding: {} },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      blur: "#0C0C0C40",
      white40: "#ffffff66",
      white20: "#ffffff10",
      current: "currentColor",
      black: "#1B1B1B",
      primaryOrange: "#FC4B1D",
      primaryOrange20: "#FC4B1D33",
      lightPink: "#dd6580",
      primaryPurple: "#0e0c15",
      purpleText: "#9a90bf",
      orangeGradient: "#ff5b2a80",
      primaryGreen: "#E8FB8E",
      primaryBlue: "#3397c2",
      primaryRed: "#fd515a",
      pink: "#fb0269",
      primary: "#1e1e1e",
      disabled: "#d1d1d1",
      greyLight: "#dbdbdb",
      toggleLight: "#0c0c0c18",
      neutral: {
        100: "#EEEEEE",
        200: "#e7e7e7",
        300: "#d1d1d1",
        400: "#aeaeae",
        500: "#8b8b8b",
        600: "#686868",
        650: "#3e3e3e",
        700: "#454545",
        750: "#292929",
        800: "#1e1e1e",
        900: "#0b0b0b",
        950: "#040404",
      },
      "p-2": "#9b9b9b",
      "p-1": "#454545",
    },
    extend: {
      transitionDuration: { 2000: "2000ms" },
      lineHeight: { normal: "120%", none: "100%" },
      spacing: {
        15: "60px",
      },
      screens: {
        "5xl": "2024px",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      fontFamily: {
        skinz: "var(--font-skinz)",
      },
      letterSpacing: {
        wider: "2.72px",
        wide: "-1.2px",
        normal: "-1.8px",
        tight: "-4.5px",
        light: "-2.8px",
      },
      translate: {
        "30": "30px",
        "60": "60px",
        "90": "90px",
        "120": "120px",
        "150": "150px",
      },
      maxWidth: {
        "mw-container": "1440px",
        wrapper: "1224px",
        358: "358px",
      },
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
      },
      fontSize: {
        h1: "56px",
        h2: "36px",
        super: "164px",
        clamp: "clamp(2rem, 5vw, 3.8rem)",
        "clamp-big": "clamp(2rem, 8vw, 8rem)",
        "clamp-opticore": "clamp(1rem, 3vw, 1.5rem)",
        "clamp-opticore-big": "clamp(2rem, 5vw, 4.4rem)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        main: "url(/images/bg.webp)",
        forge: "url(/images/forge-bg.webp)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        scale: "scale 2s infinite",
        rotate: "rotate 15s infinite linear",
        "spin-left": "rotateLeft 1s linear infinite 0.2s",
        "spin-loader": "spinVariableSpeed 3s infinite",
        "bounce-slow": "bounce 3s linear infinite",
        moveUp: "moveUp 3s forwards 1.5s",
        fadeOut: "fadeOut 2s forwards",
        fadeIn: "fadeIn 2s forwards",
        translateX: "translateToRight 2s linear",
        translateX100: "translateX100 2s forwards",
        translateX100N: "translateX100N 2s forwards",
        circle1: "moveCircle1 2s forwards 2s",
        circle2: "moveCircle2 2s forwards 2s",
        circle3: "moveCircle3 2s forwards 2s",
        circle4: "moveCircle4 2s forwards 2s",
        circle5: "moveCircle5 2s forwards 2s",
      },
      keyframes: {
        scale: {
          "0%": {
            transform: "scale(0.95)",
          },
          "50%": {
            transform: "scale(1.05)",
          },
          "100%": {
            transform: "scale(0.95)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(360deg)",
          },
        },

        fadeOut: {
          "0%": {
            opacity: "1",
            display: "block",
          },
          "100%": {
            opacity: "0",
            display: "none",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
            display: "none",
          },
          to: {
            opacity: "1",
            display: "block",
          },
        },
        translateX100: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(110%)",
          },
        },
        translateX100N: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-110%)",
          },
        },
        translateToRight: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(30px)",
          },
        },
        moveCircle1: {
          "0%": { backgroundColor: "#ffffff00" },
          "100%": { backgroundColor: "#ffffff0D" },
        },
        moveCircle2: {
          "0%": { transform: "translateX(0)", backgroundColor: "#ffffff00" },
          "100%": {
            transform: "translateX(55%)",
            backgroundColor: "#ffffff1A",
          },
        },
        moveCircle3: {
          "0%": { transform: "translateX(0)", backgroundColor: "#ffffff00" },
          "100%": {
            transform: "translateX(110%)",
            backgroundColor: "#ffffff33",
          },
        },
        moveCircle4: {
          "0%": { transform: "translateX(0)", backgroundColor: "#ffffff00" },
          "100%": {
            transform: "translateX(165%)",
            backgroundColor: "#ffffff4d",
          },
        },
        moveCircle5: {
          "0%": { transform: "translateX(0)", backgroundColor: "#ffffff00" },
          "100%": {
            transform: "translateX(220%)",
            backgroundColor: "#ffffff66",
          },
        },
      },
      borderRadius: {
        48: "48px",
      },
    },
  },
  plugins: [],
};
export default config;
