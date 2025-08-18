import React from "react";
import "./index.css";
import Header from "./components/header";
import Profile from "./components/profile";
import Skills from "./components/skills";
import Services from "./components/services";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Services />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;