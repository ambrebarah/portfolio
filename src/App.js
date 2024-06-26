import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import ThemeToggle from "./components/ThemeToggle";
import Puzzle from "./components/Puzzle";
import Blog from "./components/Blog"; // Importez le nouveau composant
import { useTranslation } from 'react-i18next';

function App() {
  const [isSolved, setIsSolved] = useState(false);
  const { i18n } = useTranslation();

  const handleSolve = () => {
    setIsSolved(true);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <ThemeToggle />
      {!isSolved ? (
        <Puzzle onSolve={handleSolve} />
      ) : (
        <>
          <Header changeLanguage={changeLanguage} />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Blog /> {/* Ajoutez le nouveau composant ici */}
          <Certifications />
          <Testimonials />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
