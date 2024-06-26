import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black text-lightPink py-4 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-mysterious">Ambre</a>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-darkPink">About</a></li>
          <li><a href="#skills" className="hover:text-darkPink">Skills</a></li>
          <li><a href="#projects" className="hover:text-darkPink">Projects</a></li>
          <li><a href="#blog" className="hover:text-darkPink">Blog</a></li>
          <li><a href="#contact" className="hover:text-darkPink">Contact</a></li>
          <li><a href="/path/to/CV.pdf" className="hover:text-darkPink">Download CV</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
