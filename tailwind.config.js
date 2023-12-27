/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        get_pink: "#EF476F",
        get_yellow: "#FFD166",
        get_cyan: "#06D6A0",
        get_blue: "#118AB2",
        get_navy: "#073B4C",
        get_text: "#2D2D2D",
        get_desc: "#555555",
        get_light_desc: "#e5e5e5",
        white: "#ffffff",
        main: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
  plugins: [],
};
