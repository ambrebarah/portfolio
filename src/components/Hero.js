import React from "react";
import { ReactTyped as Typed } from 'react-typed';
import { useTranslation } from 'react-i18next';
import HeroImg from "../assets/hero-img.png";
import { motion } from "framer-motion";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-black text-lightPink relative px-4">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-mysterious text-darkPink mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {t('hero.welcome')}
        </motion.h1>
        <motion.div 
          className="text-xl md:text-2xl mt-4 text-lightGray"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Typed
            strings={[
              t('hero.description1'),
              t('hero.description2'),
              t('hero.description3')
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </motion.div>
        <motion.div 
          className="flex justify-center py-5"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <a
            href="https://www.linkedin.com/in/ambre-barah-b9543a176/"
            className="pr-4 inline-block text-darkPink hover:text-lightGray"
          >
            <AiOutlineLinkedin size={40} />
          </a>
          <a
            href="https://github.com/ambrebarah"
            className="pr-4 inline-block text-darkPink hover:text-lightGray"
          >
            <AiOutlineGithub size={40} />
          </a>
        </motion.div>
        <motion.a
          href="/#projects"
          className="btn bg-darkPink border-2 border-lightGray text-white px-6 py-3 hover:bg-transparent hover:border-darkPink"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {t('hero.seeProjects')}
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
