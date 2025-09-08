import { useState } from "react";

export default function HeaderNav() {
  const [active, setActive] = useState("profile");
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { id: "profile", name: "Profile" },
    { id: "services", name: "Services" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  const handleClick = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] px-10 py-5 bg-transparent transition-colors duration-300 dark:bg-[#121212] dark:text-white">
      <div className="flex items-center justify-center w-full">
        {/* Navigation */}
        <nav className="flex gap-2 bg-transparent dark:bg-transparent">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`rounded-full px-10 py-2.5 text-sm cursor-pointer transition-all duration-200 
                bg-[rgb(170,175,169)] hover:bg-gray-500 hover:scale-110
                dark:bg-[#333] dark:text-white dark:hover:bg-[#555]
                ${active === item.id ? "bg-white text-black dark:bg-white dark:text-black" : ""}`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed bottom-5 right-5 z-[1001] rounded-full bg-[#333] text-white px-4 py-2 text-sm cursor-pointer transition-all duration-200 hover:bg-[#555] hover:scale-110 dark:bg-[#555] dark:text-white"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
