import React from "react";
import { Moon, Star } from "lucide-react";
import { THEMES } from "../theme";

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-full hover:bg-slate-200/20 transition"
          aria-label="Toggle Theme"
        >
          {theme === THEMES.DARK && (
            <Moon className="w-6 h-6 text-blue-400" />
          )}
          {theme === THEMES.GALAXY && (
            <Star className="w-6 h-6 text-sky-400" />
          )}
        </button>
      </div>
    </nav>
  );
}
