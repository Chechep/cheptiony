import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-end">
        <motion.button
          onClick={() => setDark(!dark)}
          whileTap={{ scale: 1.3, rotate: 360 }}
          className="p-2 rounded-full transition"
          aria-label="Toggle theme"
        >
          {dark ? (
            <Sun className="w-4 h-4 text-teal-700" />
          ) : (
            <Moon className="w-4 h-4 text-teal-500" />
          )}
        </motion.button>
      </div>
    </nav>
  );
}
