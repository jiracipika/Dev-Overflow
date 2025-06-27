/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(93.22deg, #FF7000 -13.95%, #E2995F 99.54%)",
        "card-gradient":
          "linear-gradient(267.08deg, rgba(23, 28, 35, 0.406) 10.27%, rgba(19, 22, 28, 0.7) 88.57%)",
      },
      colors: {
        accent: {
          DEFAULT: "#FF5F1F",
          gradient: "linear-gradient(to right, #FF5F1F, #FFF1E6)",
          800: "#FFF1E6",
        },
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#191821",
          400: "#212734",
          500: "#3F4354",
          gradient: "rgba(23, 28, 35, 0.41)",
        },
        light: {
          900: "#FFFFFF",
          850: "#F0F0F0",
          800: "#F4F6F8",
          700: "#DCE3F1",
          500: "#7B8EC8",
          400: "#858EAD",
        },
      },
    },
  },
  plugins: [],
};
