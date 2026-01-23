/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media' if you want to use the system's dark mode setting
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add other paths if necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(110px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(110px) rotate(-360deg)",
          },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        orbit: "orbit 12s linear infinite",
        "spin-slow": "spin-slow 3s linear infinite",
        slideIn: "slideIn 0.4s ease-out forwards",
        fadeOut: "fadeOut 0.4s ease-in forwards",
      },
    },
  },
  plugins: [],
};
