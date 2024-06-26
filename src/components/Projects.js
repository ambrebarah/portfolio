import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch("https://api.github.com/users/ambrebarah/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredRepos = repos.filter(repo => 
    filter === 'all' || (repo.language && repo.language.toLowerCase() === filter)
  );

  return (
    <section id="projects" className="min-h-screen bg-darkBackground text-lightPink flex items-center">
      <div className="container mx-auto text-center p-16">
        <motion.h2 
          className="text-4xl font-mysterious text-secondaryAccent mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t('projects.title')}
        </motion.h2>
        <div className="mb-8">
          <button onClick={() => setFilter('all')} className="bg-darkPink text-white px-4 py-2 m-2 rounded">All</button>
          <button onClick={() => setFilter('javascript')} className="bg-darkPink text-white px-4 py-2 m-2 rounded">JavaScript</button>
          <button onClick={() => setFilter('python')} className="bg-darkPink text-white px-4 py-2 m-2 rounded">Python</button>
          <button onClick={() => setFilter('java')} className="bg-darkPink text-white px-4 py-2 m-2 rounded">Java</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {filteredRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="bg-gray-900 rounded-lg p-6 shadow-lg hover:scale-105 transform transition duration-500"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-secondaryAccent">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-darkPink"
                >
                  {repo.name}
                </a>
              </h3>
              <p className="text-gray-400 mb-4">{repo.description}</p>
              <div className="flex justify-between">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-darkPink hover:text-secondaryAccent"
                >
                  {t('projects.viewOnGitHub')}
                </a>
                <span className="text-gray-400">
                  {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
