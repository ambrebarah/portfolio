import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const certifications = [
    {
        title: "Full Stack Web Development",
        institution: "EPITECH",
        date: "Novemeber 2024",
      },
  {
    title: "B1 PRELIMINARY",
    institution: "Cambridge",
    date: "November 2015",
  }
];

const Certifications = () => {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="min-h-screen bg-darkBackground text-lightPink flex items-center">
      <div className="container mx-auto text-center p-16">
        <motion.h2 
          className="text-4xl font-mysterious text-secondaryAccent mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t('certifications.title')}
        </motion.h2>
        <div className="space-y-8">
          {certifications.map((certification, index) => (
            <motion.div 
              key={index}
              className="p-8 bg-gray-800 rounded shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2">{certification.title}</h3>
              <p className="text-gray-400 mb-4">{certification.institution} | {certification.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
