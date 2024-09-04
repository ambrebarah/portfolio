// src/components/RepoFilter.js
import React from "react";

const RepoFilter = ({ currentFilter, setFilter }) => {
  const filters = ["all", "javascript", "php", "typescript", "laravel"];

  return (
    <div className="mb-8 flex justify-center space-x-4">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilter(filter)}
          className={`px-4 py-2 rounded text-white font-semibold ${
            currentFilter === filter ? "bg-blue-600" : "bg-gray-800"
          } hover:bg-blue-700 transition-colors`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default RepoFilter;
