import React, { useState } from "react";
import { THEMES } from "./theme";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";

export default function App() {
  // Start with Galaxy by default
  const [theme, setTheme] = useState(THEMES.GALAXY);

  // Toggle only between DARK and GALAXY
  const cycleTheme = () => {
    setTheme((prev) => (prev === THEMES.GALAXY ? THEMES.DARK : THEMES.GALAXY));
  };

  return (
    <div
      className={`min-h-screen relative transition-colors duration-500 ${
        theme === THEMES.DARK
          ? "bg-black text-white"
          : "bg-gradient-to-b from-[#061826] to-[#140a2d] text-white"
      }`}
    >
      {/* Starfield only for Galaxy/Dark */}
      <Starfield mode={theme} />

      {/* Navbar */}
      <Navbar theme={theme} onToggleTheme={cycleTheme} />

      {/* Main Content */}
      <main className="relative z-20">
        <Home theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}
