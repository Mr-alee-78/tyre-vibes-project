import React from 'react';
import './FinalCTA.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

// ASSETS
import silverRing from '../assets/14.png';
import icon1 from '../assets/1st.png'; 
import icon2 from '../assets/2nd.png';
import icon3 from '../assets/3rd.png';

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="cta-section">
      {/* Background Rings */}
      <motion.img 
        src={silverRing} className="cta-ring cta-ring-top"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img 
        src={silverRing} className="cta-ring cta-ring-bottom"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div 
        className="cta-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="cta-content">
          <span className="cta-label">{t.ctaLabel}</span>
          <motion.h2 key={t.ctaTitle} className="cta-title">
            {t.ctaTitle}
          </motion.h2>
          
          <div className="cta-btn-group">
            <button className="btn-primary">{t.downloadBtn}</button>
            <button className="btn-secondary">{t.waitlistBtn}</button>
          </div>

          {/* Trust Chips with translated text */}
          <div className="trust-chips">
            <div className="trust-item">
              <div className="trust-icon-wrapper">
                <img src={icon1} alt="" className="trust-img" />
              </div>
              <span>{t.badge1}</span>
            </div>
            
            <div className="trust-item">
              <div className="trust-icon-wrapper">
                <img src={icon2} alt="" className="trust-img" />
              </div>
              <span>{t.badge2}</span>
            </div>
            
            <div className="trust-item">
              <div className="trust-icon-wrapper">
                <img src={icon3} alt="" className="trust-img" />
              </div>
              <span>{t.badge3}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;