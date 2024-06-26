import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formState.name,
      reply_to: formState.email,
      message: formState.message,
      phone: formState.phone
    };

    emailjs.send('service_i59q37j', 'template_ikqiaee', templateParams, 'pJkxQfYPsaUywbFSK')
    .then(() => {
      setSent(true);
      setFormState({
        name: '',
        email: '',
        message: '',
        phone: ''
      });
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
          {t('contact.title')}
        </motion.h2>
        {sent ? (
          <motion.div 
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>{t('contact.thankYou')}</p>
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
              <label className="block text-sm font-medium">{t('contact.name')}</label>
              <input 
                type="text" 
                name="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded bg-darkBackground text-white" 
                placeholder="Your name" 
                value={formState.name} 
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">{t('contact.email')}</label>
              <input 
                type="email" 
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded bg-darkBackground text-white" 
                placeholder="Your email" 
                value={formState.email} 
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">{t('contact.phone')}</label>
              <input 
                type="text" 
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded bg-darkBackground text-white" 
                placeholder="Your phone number" 
                value={formState.phone} 
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">{t('contact.message')}</label>
              <textarea 
                name="message"
                className="mt-1 p-2 w-full border border-gray-300 rounded bg-darkBackground text-white" 
                placeholder="Your message" 
                value={formState.message} 
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="bg-darkPink hover:bg-secondaryAccent text-white font-bold py-2 px-4 rounded">
              {t('contact.send')}
            </button>
          </motion.form>
        )}
        <div className="mt-8">
          <p>Email: ambrebarah@gmail.com</p>
          <p>Phone: +33 6 63 05 74 20</p>
        </div>
        <div className="mt-8">
          <div className="relative pb-56.25 overflow-hidden rounded shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.513337871221!2d7.742609315665874!3d48.58461457925786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796b7a1a2e5d6c9%3A0x408ab2ae4bb64b0!2sStrasbourg%2C%20France!5e0!3m2!1sen!2sfr!4v1626541249898!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Strasbourg Map"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;