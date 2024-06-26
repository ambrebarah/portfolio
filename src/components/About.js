import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen bg-darkBackground text-lightPink flex items-center">
      <div className="container mx-auto text-center px-4 md:px-8">
        <motion.h2 
          className="text-4xl md:text-6xl font-mysterious text-secondaryAccent mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t('about.title')}
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="mt-8 md:mt-0 md:ml-8 text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg md:text-xl">{t('about.description')}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

