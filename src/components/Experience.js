import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      role: t('experience.role'),
      company: t('experience.company'),
      period: t('experience.period'),
      tasks: [
        {
          title: t('experience.gofer.title'),
          details: t('experience.gofer.details', { returnObjects: true })
        },
        {
          title: t('experience.garden.title'),
          details: t('experience.garden.details', { returnObjects: true })
        }
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-darkBackground text-lightPink flex items-center">
      <div className="container mx-auto text-center p-16">
        <motion.h2 
          className="text-4xl font-mysterious text-secondaryAccent mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t('experience.title')}
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              className="p-8 bg-gray-800 rounded shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-2">{experience.role}</h3>
              <p className="text-gray-400 mb-4">{experience.company} | {experience.period}</p>
              {experience.tasks.map((task, taskIndex) => (
                <div key={taskIndex} className="text-left">
                  <h4 className="text-xl font-semibold">{task.title}</h4>
                  <ul className="list-disc list-inside mb-4">
                    {task.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
