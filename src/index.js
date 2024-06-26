import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
import { ParallaxProvider } from 'react-scroll-parallax'; // Importez ParallaxProvider

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ParallaxProvider> {/* Enveloppez votre application ici */}
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);
