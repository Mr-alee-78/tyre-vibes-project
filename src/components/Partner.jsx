import React from 'react';
import './Partner.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

// ASSETS
import carImg from '../assets/audi-side.png'; 
import silverRing from '../assets/14.png';
import bgPattern from '../assets/bg-pattern.png';

const Partner = () => {
  const { t } = useLanguage();

  return (
    <section className="partner-section">
      <motion.img 
        src={silverRing} className="p-ring p-ring-top"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="partner-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="partner-pattern"></div>

        <div className="partner-left">
          <span className="partner-label">{t.partnerLabel}</span>
          <motion.h1 key={t.partnerTitle} className="partner-title">
            {t.partnerTitle}
          </motion.h1>
          <p className="partner-desc">{t.partnerDesc}</p>

          <h4 className="why-title">{t.whyTitle}</h4>
          <ul className="partner-list">
            {t.partnerList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="partner-right">
          <div className="car-glow"></div>
          <motion.img 
            src={carImg} 
            className="partner-car-img"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, type: "spring", damping: 15 }}
          />
        </div>
      </motion.div>

      <motion.img 
        src={silverRing} className="p-ring p-ring-bottom"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </section>
  );
};

export default Partner;