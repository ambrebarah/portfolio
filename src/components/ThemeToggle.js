import React from 'react';
import { useTranslation } from 'react-i18next';

const ThemeToggle = ({ theme, setTheme }) => {
  const { t } = useTranslation();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleTheme} className="fixed top-4 left-4 p-2 bg-darkPink text-white rounded">
      {theme === 'dark' ? t('theme.light') : t('theme.dark')}
    </button>
  );
};

export default ThemeToggle;
