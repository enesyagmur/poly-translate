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
        firstWordColorChange: {
          "0%": { color: "white" },
          "20%": { color: "#F5AF54" },
          "100%": { color: "white" },
        },
        secondWordColorChange: {
          "20%": { color: "white" },
          "40%": { color: "#F5AF54" },
          "100%": { color: "white" },
        },
        thirtWordColorChange: {
          "40%": { color: "white" },
          "60%": { color: "#F5AF54" },
          "100%": { color: "white" },
        },
        fourtrtWordColorChange: {
          "60%": { color: "white" },
          "80%": { color: "#F5AF54" },
          "100%": { color: "white" },
        },
        fifthWordColorChange: {
          "80%": { color: "white" },
          "100%": { color: "#F5AF54" },
        },
      },
      animation: {
        firstWordColorChange: "firstWordColorChange 3s infinite",
        secondWordColorChange: "secondWordColorChange 3s infinite",
        thirtWordColorChange: "thirtWordColorChange 3s infinite",
        fourtrtWordColorChange: "fourtrtWordColorChange 3s infinite",
        fifthWordColorChange: "fifthWordColorChange 3s infinite",
      },
    },
  },
  plugins: [],
};
