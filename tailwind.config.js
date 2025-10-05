/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(110px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(110px) rotate(-360deg)" },
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
  darkMode: "class",
  plugins: [],
};
