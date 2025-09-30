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
          "0%": { transform: "rotate(0deg) translateX(180px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(180px) rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        orbit: "orbit 12s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
