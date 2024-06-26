import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section id="blog" className="min-h-screen bg-darkBackground text-lightPink flex items-center">
      <div className="container mx-auto text-center p-16">
        <motion.h2 
          className="text-4xl font-mysterious text-secondaryAccent mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Blog
        </motion.h2>
        <motion.p 
          className="text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Blog content will go here.
        </motion.p>
      </div>
    </section>
  );
};

export default Blog;
