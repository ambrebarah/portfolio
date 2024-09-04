// ThemeToggle.js
import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="btn bg-darkPink text-lightPink hover:text-darkPink"
      onClick={toggleTheme}
    >
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
