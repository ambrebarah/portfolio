import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faPhp, faNodeJs, faApple, faLaravel, faSymfony, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faGem, faDatabase } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { icon: faHtml5, name: 'HTML5' },
  { icon: faCss3Alt, name: 'CSS3' },
  { icon: faJs, name: 'JavaScript' },
  { icon: faReact, name: 'React' },
  { icon: faPhp, name: 'PHP' },
  { icon: faLaravel, name: 'Laravel' },
  { icon: faSymfony, name: 'Symfony' },
  { icon: faNodeJs, name: 'Node.js' },
  { icon: faJava, name: 'Java' },
  { icon: faPython, name: 'Python' },
  { icon: faGem, name: 'Ruby' }, // Solid icon for Ruby
  { icon: faDatabase, name: 'GraphQL' },
  { icon: faApple, name: 'macOS' }
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-darkBackground text-primaryText flex items-center">
      <div className="container mx-auto text-center p-16">
        <motion.h2 
          className="text-4xl font-mysterious text-secondaryAccent mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="text-center p-6 bg-gray-900 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
            >
              <FontAwesomeIcon icon={skill.icon} size="4x" className="mb-3 text-accent" />
              <p className="font-bold text-secondaryAccent">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
