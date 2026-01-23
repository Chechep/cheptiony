import { Sun, Moon } from "lucide-react";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-end">
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full transition"
          aria-label="Toggle theme"
        >
          {dark ? (
            <Sun className="w-6 h-6 text-teal-500" />
          ) : (
            <Moon className="w-6 h-6 text-teal-500" />
          )}
        </button>
      </div>
    </nav>
  );
}
