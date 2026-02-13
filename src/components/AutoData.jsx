import React from 'react';
import './AutoData.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

// ASSETS
import confirmedPhone from '../assets/iPhone 15.png'; 

const AutoData = () => {
  const { t } = useLanguage();

  return (
    <section className="ad-section">
      <div className="ad-container">
        
        <div className="ad-left">
          <motion.span 
            className="ad-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.adLabel}
          </motion.span>

          <motion.h2 
            key={t.adTitle}
            className="ad-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.adTitle}
          </motion.h2>

          <p className="ad-subtitle">{t.adSub}</p>

          <ul className="ad-list">
            {t.adList.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                {item}
              </motion.li>
            ))}
          </ul>

          <p className="ad-footer">{t.adFooter}</p>

          <button className="btn-primary ad-btn">{t.downloadBtn}</button>
        </div>

        <div className="ad-right">
          <div className="ad-glow-effect"></div>
          
          <motion.img 
            src={confirmedPhone} 
            className="ad-phone-3d" 
            alt="Data Confirmed"
            initial={{ opacity: 0, rotateY: 0, rotateX: 0, rotateZ: 0, x: 100 }}
            whileInView={{ 
                opacity: 1, 
                rotateY: -22,
                rotateX: 3, 
                rotateZ: -5,
                x: 0 
            }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: true }}
          />
        </div>

      </div>
    </section>
  );
};

export default AutoData;