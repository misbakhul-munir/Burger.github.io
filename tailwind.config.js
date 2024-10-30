/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "selector",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        primary: "#010a5e",
        primaryLight: "#010d78",
        secondary: "#FFCC00",
        paragraph: "#c0c0c0",
        white: "#fff",
        black: "#000",
        green: "#007936",
        red: "#cc3433",
        illegal: "#000",
        clandestine: "#171717",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingY: "move 2s linear infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      dmsans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
