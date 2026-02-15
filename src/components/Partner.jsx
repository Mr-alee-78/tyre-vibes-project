import React, { useRef } from 'react';
import './Partner.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

// ASSETS
import carImg from '../assets/audi-side.png'; 
import silverRing from '../assets/14.png';
import bgPattern from '../assets/bg-pattern.png';

const Partner = () => {
  const { t } = useLanguage();

  // --- SCROLL TRACKING SETUP ---
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const { scrollYProgress: titleScroll } = useScroll({
    target: titleRef,
    offset: ["start 0.9", "start 0.5"]
  });
  const titleFill = useTransform(titleScroll, [0, 1], ["0% 100%", "100% 100%"]);

  const { scrollYProgress: descScroll } = useScroll({
    target: descRef,
    offset: ["start 0.9", "start 0.6"]
  });
  const descFill = useTransform(descScroll, [0, 1], ["0% 100%", "100% 100%"]);

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
          
          {/* --- ANIMATED FILL TITLE --- */}
          <motion.h1 
            ref={titleRef}
            key={t.partnerTitle} 
            className="partner-title apple-text-fill-partner"
            style={{ backgroundSize: titleFill }}
          >
            {t.partnerTitle}
          </motion.h1>

          {/* --- ANIMATED FILL DESCRIPTION --- */}
          <motion.p 
            ref={descRef}
            className="partner-desc apple-text-fill-partner"
            style={{ backgroundSize: descFill }}
          >
            {t.partnerDesc}
          </motion.p>

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