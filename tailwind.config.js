/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#323232",
        customBlue: "#439CFE",
        customYellow: "#F5AF54",
      },
      keyframes: {
        wordColorChange1: {
          "0%": { color: "white" },
          "20%": { color: "#F5AF54" },
          "100%": { color: "white" },
        },
        wordColorChange2: {
          "20%": { color: "white" },
          "40%": { color: "#F5AF54" },
          "100%": { color: "white" },
        },
        wordColorChange3: {
          "40%": { color: "white" },
          "60%": { color: "#F5AF54" },
          "100%": { color: "white" },
        },
        wordColorChange4: {
          "60%": { color: "white" },
          "80%": { color: "#F5AF54" },
          "100%": { color: "white" },
        },
        wordColorChange5: {
          "80%": { color: "white" },
          "100%": { color: "#F5AF54" },
        },
      },
      animation: {
        wordColorChange1: "wordColorChange1 3s infinite",
        wordColorChange2: "wordColorChange2 3s infinite",
        wordColorChange3: "wordColorChange3 3s infinite",
        wordColorChange4: "wordColorChange4 3s infinite",
        wordColorChange5: "wordColorChange5 3s infinite",
      },
    },
  },
  plugins: [],
};
