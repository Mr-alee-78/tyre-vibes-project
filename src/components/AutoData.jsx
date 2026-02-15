import React, { useRef } from 'react';
import './AutoData.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

// ASSETS
import confirmedPhone from '../assets/iPhone 15.png'; 

const AutoData = () => {
  const { t } = useLanguage();

  // --- SCROLL TRACKING SETUP ---
  const titleRef = useRef(null);
  const subRef = useRef(null);

  // Tracking for the Title
  const { scrollYProgress: titleScroll } = useScroll({
    target: titleRef,
    offset: ["start 0.5", "end 0.6"]
  });
  const titleFill = useTransform(titleScroll, [0, 1], ["0% 100%", "100% 100%"]);

  // Tracking for the Subtitle
  const { scrollYProgress: subScroll } = useScroll({
    target: subRef,
    offset: ["start 0.6", "end 0.5"]
  });
  const subFill = useTransform(subScroll, [0, 1], ["0% 100%", "100% 100%"]);

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

          {/* --- ANIMATED FILL TITLE --- */}
          <motion.h2 
            ref={titleRef}
            key={t.adTitle}
            className="ad-title apple-text-fill-ad"
            style={{ backgroundSize: titleFill }}
          >
            {t.adTitle}
          </motion.h2>

          {/* --- ANIMATED FILL SUBTITLE --- */}
          <motion.p 
            ref={subRef}
            className="ad-subtitle apple-text-fill-ad"
            style={{ backgroundSize: subFill }}
          >
            {t.adSub}
          </motion.p>

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