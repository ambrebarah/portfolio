import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Ambre is an amazing developer!",
    name: "Lalla",
    position: "CEO"
  },
  {
    quote: "Great to work with and highly skilled.",
    name: "Philippe",
    position: "Project manager"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="min-h-screen bg-darkBackground text-lightPink flex items-center">
      <div className="container mx-auto text-center p-16">
        <motion.h2 
          className="text-4xl font-mysterious text-secondaryAccent mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Testimonials
        </motion.h2>
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="p-8 bg-gray-800 rounded shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <p className="text-xl mb-4">"{testimonial.quote}"</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-gray-400">{testimonial.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
