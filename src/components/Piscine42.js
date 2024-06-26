import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import piscineImage from '../assets/piscine42.jpg'; // Assurez-vous d'avoir une image appropriée

const Piscine42 = () => {
  const { t } = useTranslation();

  return (
    <section id="piscine42" className="min-h-screen bg-darkBackground text-lightPink flex items-center">
      <div className="container mx-auto text-center p-16">
        <motion.h2 
          className="text-4xl font-mysterious text-secondaryAccent mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t('piscine42.title')}
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.img
            src={piscineImage}
            alt="Piscine 42"
            className="w-1/2 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div 
            className="mt-8 md:mt-0 md:ml-8 text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xl">{t('piscine42.description')}</p>
            <p className="mt-4 text-gray-400">{t('piscine42.period')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Piscine42;

