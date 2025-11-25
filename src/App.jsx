import React, { useState, useEffect } from "react";
import { THEMES } from "./theme";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";

export default function App() {
  // Load theme from localStorage or start with WHITE
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || THEMES.DARK
  );

  // Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Cycle themes
  const cycleTheme = () => {
    setTheme((prev) => {
      if (prev === THEMES.WHITE) return THEMES.GALAXY;
      if (prev === THEMES.GALAXY) return THEMES.DARK;
      return THEMES.WHITE;
    });
  };

  return (
    <div
      className={`min-h-screen relative transition-colors duration-500 ${
        theme === THEMES.DARK
          ? "bg-black text-white"
          : theme === THEMES.GALAXY
          ? "bg-gradient-to-b from-[#061826] to-[#140a2d] text-white"
          : "bg-white text-black"
      }`}
    >
      {(theme === THEMES.GALAXY || theme === THEMES.DARK) && (
        <Starfield mode={theme} />
      )}

      <Navbar theme={theme} onToggleTheme={cycleTheme} />

      <main className="relative z-20">
        <Home theme={theme} />
      </main>

      <Footer theme={theme} />
    </div>
  );
}
