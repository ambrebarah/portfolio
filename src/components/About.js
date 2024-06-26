import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-darkBackground text-lightPink flex items-center">
      <div className="container mx-auto text-center p-16">
        <motion.h2 
          className="text-4xl font-mysterious text-secondaryAccent mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I am a passionate developer with expertise in both front-end and back-end development. Over the years, I've had the opportunity to work on a variety of projects using a range of technologies. I have experience building responsive, user-friendly web applications with modern front-end frameworks such as React, Laravel, and Symfony. On the back-end, I'm comfortable working with languages such as Node.js, PHP, and JavaScript, as well as databases such as MongoDB and MySQL.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
