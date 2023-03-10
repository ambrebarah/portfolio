import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Ambre
      </a>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <button
          onClick={handleToggle}
          className="focus:outline-none text-3xl"
        >
          {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {toggle && (
          <nav className="bg-primary absolute top-16 left-0 right-0 px-5 py-2">
            <ul className="flex flex-col items-center">
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#projects">Projects</a>
              </li>
              <li>
                <a href="/#blog">Blog</a>
              </li>
              <li>
                <a href="/#skills">Skills</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
              <li>
                <a href="#resume-link" target="_blank" without rel="noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#blog">Blog</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="#resume-link" target="_blank" without rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;