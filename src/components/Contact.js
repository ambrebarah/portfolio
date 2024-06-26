import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then(() => {
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => console.error("Failed to send message", err));
  };

  return (
    <section id="contact" className="min-h-screen bg-darkBackground text-lightPink flex items-center">
      <div className="container mx-auto text-center p-16">
        <motion.h2 
          className="text-4xl font-mysterious text-secondaryAccent mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        {sent ? (
          <motion.div 
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>Thank you for your message! I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <motion.form 
            className="mt-8 space-y-4 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium">Name:</label>
              <input 
                type="text" 
                className="mt-1 p-2 w-full border border-gray-300 rounded bg-darkBackground text-white" 
                placeholder="Your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email:</label>
              <input 
                type="email" 
                className="mt-1 p-2 w-full border border-gray-300 rounded bg-darkBackground text-white" 
                placeholder="Your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message:</label>
              <textarea 
                className="mt-1 p-2 w-full border border-gray-300 rounded bg-darkBackground text-white" 
                placeholder="Your message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="bg-darkPink hover:bg-secondaryAccent text-white font-bold py-2 px-4 rounded">
              Send
            </button>
          </motion.form>
        )}
        <div className="mt-8">
          <p>Email: ambrebarah@gmail.com</p>
          <p>Phone: +33 6 63 05 74 20</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
