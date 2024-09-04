// src/components/Projects.js
import React, { useState } from "react";
import useGithubRepos from "./useGithubRepos";

const Projects = () => {
  const { repos, loading, error } = useGithubRepos("ambrebarah"); // Replace with your GitHub username
  const [filter, setFilter] = useState("all");

  const filteredRepos = repos.filter(
    (repo) => filter === "all" || (repo.language && repo.language.toLowerCase() === filter)
  );

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section id="projects" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

        {/* Filter Options */}
        <div className="text-center mb-8">
          <button onClick={() => setFilter('all')} className="px-4 py-2 m-2 bg-yellow-600 rounded hover:bg-yellow-700">All</button>
          <button onClick={() => setFilter('javascript')} className="px-4 py-2 m-2 bg-yellow-600 rounded hover:bg-yellow-700">JavaScript</button>
          <button onClick={() => setFilter('php')} className="px-4 py-2 m-2 bg-yellow-600 rounded hover:bg-yellow-700">PHP</button>
          <button onClick={() => setFilter('typescript')} className="px-4 py-2 m-2 bg-yellow-600 rounded hover:bg-yellow-700">TypeScript</button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRepos.map((repo) => (
            <div key={repo.id} className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
                <p className="text-gray-400 mb-4">{repo.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 text-sm text-white opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p>Technologies: {repo.language || 'Not specified'}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300">View on GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
