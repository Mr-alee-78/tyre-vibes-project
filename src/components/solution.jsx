import React from 'react';
import './Solution.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

// ASSET IMPORTS
import handPhone from '../assets/hand-phone.png'; 
import tyreCard1 from '../assets/tyre-card-1.png'; 
import tyreCard2 from '../assets/tyre-card-2.png'; 

const Solution = () => {
  const { t } = useLanguage(); // Get translations

  const listVariant = (delay) => ({
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { delay: delay, duration: 0.5 } 
    }
  });

  return (
    <section className="solution-section">
      <div className="solution-container">
        
        {/* LEFT SIDE CONTENT */}
        <div className="solution-left">
          <motion.span 
            className="solution-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.solLabel}
          </motion.span>

          <motion.h2 
            key={t.solTitle}
            className="solution-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.solTitle}
          </motion.h2>

          <motion.p 
            key={t.solDesc}
            className="solution-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.solDesc}
          </motion.p>

          <ul className="solution-list">
            {/* Mapping through translated list for staggered animation */}
            {t.solList.map((item, index) => (
              <motion.li 
                key={index}
                variants={listVariant(0.4 + (index * 0.1))}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <motion.button 
            className="btn-solution-download"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            {t.downloadBtn}
          </motion.button>
        </div>

        {/* RIGHT SIDE ANIMATION */}
        <div className="solution-right">
          <div className="hand-animation-wrapper">
            <motion.img 
              src={handPhone} 
              className="hand-main-img" 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            />

            <motion.img 
              src={tyreCard1} 
              className="pop-card card-1"
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 100 }} 
              transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
            />

            <motion.img 
              src={tyreCard2} 
              className="pop-card card-2"
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 190 }}
              transition={{ delay: 1.9, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solution;