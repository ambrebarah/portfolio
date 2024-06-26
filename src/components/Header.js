import React from "react";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="fixed top-0 w-full bg-black text-lightPink py-4 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-mysterious">Ambre</a>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-darkPink">{t('header.about')}</a></li>
          <li><a href="#skills" className="hover:text-darkPink">{t('header.skills')}</a></li>
          <li><a href="#projects" className="hover:text-darkPink">{t('header.projects')}</a></li>
          <li><a href="#blog" className="hover:text-darkPink">{t('header.blog')}</a></li>
          <li><a href="#contact" className="hover:text-darkPink">{t('header.contact')}</a></li>
          <li><a href="/cv.pdf" className="hover:text-darkPink">{t('header.downloadCV')}</a></li>
        </ul>
        <div className="flex space-x-2">
          <button onClick={() => changeLanguage('en')} className="hover:text-darkPink">EN</button>
          <button onClick={() => changeLanguage('fr')} className="hover:text-darkPink">FR</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
