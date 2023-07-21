import React, { useState, useEffect } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);

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

  return (
    <section className="bg-secondary text-white px-5 py-32" id="projects">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {repos.map((repo) => (
            <div className="bg-gray-900 rounded-lg p-6" key={repo.id}>
              <h3 className="text-xl font-bold mb-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white"
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
                  className="text-accent hover:text-white"
                >
                  View on GitHub
                </a>
                <span className="text-gray-400">
                  {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
