import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Puzzle = ({ onSolve }) => {
  const { t, i18n } = useTranslation();
  const [input, setInput] = useState("");
  const [isSolved, setIsSolved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSolved(true);
    onSolve();
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-lightPink">
      <div className="absolute top-4 right-4 flex space-x-2">
        <button onClick={() => changeLanguage('en')} className="bg-darkPink text-white px-4 py-2 rounded hover:bg-secondaryAccent">EN</button>
        <button onClick={() => changeLanguage('fr')} className="bg-darkPink text-white px-4 py-2 rounded hover:bg-secondaryAccent">FR</button>
      </div>
      {!isSolved ? (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-mysterious text-darkPink mb-8">{t('puzzle.title')}</h1>
          <p className="text-xl mb-8">{t('puzzle.description')}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="p-2 text-black rounded"
              placeholder={t('puzzle.placeholder')}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button type="submit" className="ml-4 p-2 bg-darkPink text-white rounded">{t('puzzle.submit')}</button>
          </form>
        </motion.div>
      ) : (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-mysterious text-secondaryAccent mb-8">{t('puzzle.welcome')}</h1>
          <p className="text-xl">{t('puzzle.redirecting')}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Puzzle;



