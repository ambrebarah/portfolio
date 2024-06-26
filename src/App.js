import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Puzzle from "./components/Puzzle";

function App() {
  const [isSolved, setIsSolved] = useState(false);

  const handleSolve = () => {
    setIsSolved(true);
  };

  return (
    <>
      {!isSolved ? (
        <Puzzle onSolve={handleSolve} />
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
