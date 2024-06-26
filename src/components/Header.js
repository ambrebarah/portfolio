import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = ({ changeLanguage }) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Ferme le menu après le clic sur un lien
  };

  return (
    <header className="fixed top-0 w-full bg-black text-lightPink py-4 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <a href="#home" className="text-2xl font-mysterious">Ambre</a>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-lightPink">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <ul className={`fixed inset-0 bg-black flex flex-col items-center justify-center space-y-4 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:flex md:flex-row md:space-y-0 md:space-x-4 md:translate-x-0`}>
          <li><a href="#about" className="hover:text-darkPink" onClick={handleLinkClick}>{t('header.about')}</a></li>
          <li><a href="#skills" className="hover:text-darkPink" onClick={handleLinkClick}>{t('header.skills')}</a></li>
          <li><a href="#projects" className="hover:text-darkPink" onClick={handleLinkClick}>{t('header.projects')}</a></li>
          <li><a href="#blog" className="hover:text-darkPink" onClick={handleLinkClick}>{t('header.blog')}</a></li>
          <li><a href="#contact" className="hover:text-darkPink" onClick={handleLinkClick}>{t('header.contact')}</a></li>
          <li><a href="/cv.pdf" className="hover:text-darkPink" download onClick={handleLinkClick}>{t('header.downloadCV')}</a></li>
          <li className="flex space-x-2">
            <button onClick={() => {changeLanguage('en'); handleLinkClick();}} className="hover:text-darkPink">EN</button>
            <button onClick={() => {changeLanguage('fr'); handleLinkClick();}} className="hover:text-darkPink">FR</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
