import React, { useState } from "react";
import { motion } from "framer-motion";

const Puzzle = ({ onSolve }) => {
  const [input, setInput] = useState("");
  const [isSolved, setIsSolved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSolved(true);
    onSolve();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-lightPink">
      {!isSolved ? (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-mysterious text-darkPink mb-8">Solve the Puzzle to Enter</h1>
          <p className="text-xl mb-8">What is the secret word?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="p-2 text-black rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="ml-4 p-2 bg-darkPink text-white rounded">Submit</button>
          </form>
        </motion.div>
      ) : (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-mysterious text-secondaryAccent mb-8">Welcome to My Portfolio</h1>
          <p className="text-xl">Redirecting...</p>
        </motion.div>
      )}
    </div>
  );
};

export default Puzzle;

