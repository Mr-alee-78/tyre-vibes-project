import React from 'react';
import './Problem.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

// ASSETS
import phoneScreen from '../assets/iPhone 16 plus Dark (2).png'; 
import pinkShape from '../assets/Shape.png'; 
import silverRing from '../assets/14.png';  

const Problem = () => {
  const { t } = useLanguage(); // Get translations

  return (
    <section className="problem-section">
      <motion.div 
        className="problem-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="problem-pattern"></div>

        <motion.img 
          src={pinkShape} 
          className="floating-shape pink-blob" 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="problem-left">
          <span className="problem-label">{t.probLabel}</span>
          <motion.h2 
            key={t.probTitle}
            className="problem-title"
          >
            {t.probTitle}
          </motion.h2>
          <p className="problem-subtitle">{t.probSubtitle}</p>
          
          <ul className="problem-list">
            {/* Using the array from translations.js */}
            {t.probList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="problem-footer">
            {t.probFooter}
          </p>
        </div>

        <div className="problem-right">
          <motion.img 
            src={phoneScreen} 
            className="problem-phone" 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.0 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>

      <motion.img 
        src={silverRing} 
        className="floating-shape silver-ring" 
        animate={{ y: [0, 20, 0], rotate: [12, 15, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Problem;