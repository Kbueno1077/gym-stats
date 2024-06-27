import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        contactUs: "url('/gym.jpg')",
      },

      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },

      colors: {
        primary: "rgb(var(--color-primary) / 1)",
        primarylight: "rgb(var(--color-primarylight) / 1)",
        secondary: "rgb(var(--color-secondary) / 1)",
        secondaryDark: "rgb(var(--color-secondaryDark) / 1)",
        // text: "rgb(var(--color-text) / 1)",
        success: "rgb(var(--color-success) / 1)",
        info: "rgb(var(--color-info) / 1)",
        warn: "rgb(var(--color-warn) / 1)",
        error: "rgb(var(--color-error) / 1)",
        // default: "rgb(var(--color-default) / 1)",

        transparent: "transparent",
        current: "currentColor",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
