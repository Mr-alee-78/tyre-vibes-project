import React from 'react';
import './WhoIsItFor.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

// ASSETS
import garageCar from '../assets/who-bg.png'; 

const WhoIsItFor = () => {
  const { t } = useLanguage();

  return (
    <section className="who-section" style={{ backgroundImage: `url(${garageCar})` }}>
      <div className="who-overlay"></div>

      <div className="who-container">
        {/* --- LEFT CONTENT --- */}
        <div className="who-left">
          <motion.span 
            className="who-label"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {t.whoLabel}
          </motion.span>

          <motion.h2 
            key={t.whoTitle}
            className="who-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.whoTitle}
          </motion.h2>

          <motion.p 
            className="who-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t.whoSub}
          </motion.p>

          <p className="perfect-for">{t.perfectFor}</p>

          <ul className="who-list">
            {t.whoList.map((point, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                {point}
              </motion.li>
            ))}
          </ul>

          <motion.p 
            key={t.whoFooter}
            className="who-footer-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {t.whoFooter}
          </motion.p>

          <motion.button 
            className="btn-primary who-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.downloadBtn}
          </motion.button>
        </div>

        {/* --- CENTER PLAY BUTTON --- */}
        <div className="who-center">
          <motion.div 
            className="play-button"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="play-pulse"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <div className="play-icon"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;