import React, { useState } from "react";
import { THEMES } from "./theme";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";


export default function App() {
const [theme, setTheme] = useState(THEMES.GALAXY);


const cycleTheme = () => {
setTheme((prev) =>
prev === THEMES.GALAXY ? THEMES.DARK : prev === THEMES.DARK ? THEMES.LIGHT : THEMES.GALAXY
);
};


return (
<div
className={`min-h-screen relative transition-colors duration-500 ${
theme === THEMES.DARK
? "bg-black text-white"
: theme === THEMES.LIGHT
? "bg-white text-slate-900"
: "bg-gradient-to-b from-[#061826] to-[#140a2d] text-white"
}`}
>
{/* Galaxy canvas background */}
<Starfield mode={theme} />


{/* Navbar */}
<Navbar theme={theme} onToggleTheme={cycleTheme} />


{/* Main Content */}
<main className="relative z-20">
<Home />
</main>


{/* Footer */}
<Footer />
</div>
);
}