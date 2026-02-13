import React from 'react';
import './DoubleSection.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

// ASSETS
import handGarage from '../assets/Artboard-L.png'; 
import handTire from '../assets/Artboard-R.png';     

const DoubleSection = () => {
  const { t } = useLanguage(); // Get translations

  return (
    <section className="ds-section">
      <div className="ds-container">
        
        {/* --- LEFT CARD: GARAGE --- */}
        <motion.div 
          className="ds-card ds-garage-bg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="ds-content">
            <span className="ds-label">{t.garageLabel}</span>
            <h2 className="ds-title">{t.garageTitle}</h2>
            <p className="ds-subtitle">{t.garageSub}</p>
            
            <ul className="ds-list">
              {/* Mapping from translations.js array */}
              {t.garageList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            
            <p className="ds-footer-text">{t.garageFooter}</p>
            <button className="btn-primary ds-btn">{t.downloadBtn}</button>
          </div>

          <motion.img 
            src={handGarage} 
            className="ds-hand-img-left" 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* --- RIGHT CARD: MONITORING --- */}
        <motion.div 
          className="ds-card ds-tire-bg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="ds-content">
            <span className="ds-label">{t.tireLabel}</span>
            <h2 className="ds-title">{t.tireTitle}</h2>
            <p className="ds-subtitle">{t.tireSub}</p>
            
            <ul className="ds-list">
              {/* Mapping from translations.js array */}
              {t.tireList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            
            <p className="ds-footer-text">{t.tireFooter}</p>
            <button className="btn-secondary ds-btn">{t.waitlistBtn}</button>
          </div>

          <motion.img 
            src={handTire} 
            className="ds-hand-img-right" 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default DoubleSection;