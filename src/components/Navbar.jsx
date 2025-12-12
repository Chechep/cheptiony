import React from "react";
import { Sun, Moon, Star } from "lucide-react";
import { THEMES } from "../theme";

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-full transition"
          aria-label="Toggle Theme"
        >
          {/* WHITE MODE ICON */}
          <Sun
            className={`w-6 h-6 text-black transition-all duration-300 transform
            ${theme === THEMES.WHITE ? "opacity-100 scale-100" : "opacity-0 scale-75 absolute"}`}
          />

          {/* GALAXY MODE ICON */}
          <Star
            className={`w-6 h-6 text-gray-300 transition-all duration-300 transform
            ${theme === THEMES.GALAXY ? "opacity-100 scale-100" : "opacity-0 scale-75 absolute"}`}
          />

          {/* DARK MODE ICON */}
          <Moon
            className={`w-6 h-6 text-gray-403 transition-all duration-300 transform
            ${theme === THEMES.DARK ? "opacity-100 scale-100" : "opacity-0 scale-75 absolute"}`}
          />
        </button>

      </div>
    </nav>
  );
}
