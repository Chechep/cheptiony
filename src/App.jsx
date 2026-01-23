import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";

export default function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen relative bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      {/* Only visible in dark mode */}
      <Starfield />

      <Navbar dark={dark} setDark={setDark} />

      <main className="relative z-20">
        <Home />
      </main>

      <Footer />
    </div>
  );
}
