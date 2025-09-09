import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X, Phone, Mail, Github, MapPin } from "lucide-react";

export default function HeaderNav() {
  const [active, setActive] = useState("profile");
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const navItems = [
    { id: "profile", name: "Profile" },
    { id: "services", name: "Services" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  const handleClick = (id) => {
    setActive(id);
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        menuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-[1000] px-9 md:px-10 py-7 md:py-5
                 bg-white dark:bg-black dark:text-white
                 transition-colors duration-300 shadow-md"
    >
      <div className="relative flex items-center justify-center w-full">
        {/* Mobile: hamburger (left) */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-lg md:hidden hover:bg-gray-200 dark:hover:bg-gray-800"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`rounded-full px-10 py-2.5 text-sm cursor-pointer transition-all duration-200 
                          bg-[rgb(170,175,169)] hover:bg-gray-500 hover:scale-105
                          dark:bg-[#222] dark:text-white dark:hover:bg-[#444]
                          ${
                            active === item.id
                              ? "bg-white text-black dark:bg-gray-400 dark:text-black"
                              : ""
                          }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Dark mode toggle (top-right, icon only) */}
        <button
          onClick={toggleDarkMode}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-[1001] 
                     rounded-full p-2 md:p-3 cursor-pointer 
                     transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110"
          aria-label="Toggle dark mode"
        >
          <span className="relative flex items-center justify-center w-5 h-5">
            <Sun
              size={18}
              className={`absolute transition-all duration-500 ${
                darkMode
                  ? "opacity-100 rotate-0 text-yellow-400"
                  : "opacity-0 -rotate-90"
              }`}
            />
            <Moon
              size={18}
              className={`absolute transition-all duration-500 ${
                darkMode
                  ? "opacity-0 rotate-90"
                  : "opacity-100 rotate-0 text-blue-300"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile sidebar (slides in from left) */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 
                    bg-white dark:bg-black shadow-lg 
                    transform transition-transform duration-300 ease-in-out 
                    ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:hidden z-[999]`}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>

        {/* Nav items */}
        <nav className="mt-20 flex flex-col gap-2 px-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`w-full text-left rounded-lg px-6 py-3 text-base cursor-pointer transition-all duration-200 
                          bg-[rgb(170,175,169)] hover:bg-gray-500
                          dark:bg-[#222] dark:text-white dark:hover:bg-[#444]
                          ${
                            active === item.id
                              ? "bg-white text-black dark:bg-gray-400 dark:text-black"
                              : ""
                          }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="absolute bottom-6 left-0 w-full px-6 text-sm text-gray-700 dark:text-gray-300 space-y-3">
          <a
            href="mailto:cheptiony6@gmail.com"
            className="flex items-center gap-2 hover:text-blue-500"
          >
            <Mail size={16} /> cheptiony6@gmail.com
          </a>
          <a
            href="tel:+254790086093"
            className="flex items-center gap-2 hover:text-green-500"
          >
            <Phone size={16} /> +254 790 086 093
          </a>
          <a
            href="https://wa.me/254790086093"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-600"
          >
            <Phone size={16} /> WhatsApp
          </a>
          <a
            href="https://github.com/Chechep"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white"
          >
            <Github size={16} /> github.com/Chechep
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={16} /> Nairobi, Kenya
          </div>
        </div>
      </div>
    </header>
  );
}
