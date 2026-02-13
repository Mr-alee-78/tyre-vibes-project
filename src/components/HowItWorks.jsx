import React from 'react';
import './HowItWorks.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import silverRing from '../assets/14.png'; 
import listDot from '../assets/list-dot.png'; 

const HowItWorks = () => {
  const { t } = useLanguage(); // Get translations

  // Re-creating the features array using translation keys
  const features = [
    { title: t.feat1, desc: t.feat1D, color: "dark" },
    { title: t.feat2, desc: t.feat2D, color: "orange" },
    { title: t.feat3, desc: t.feat3D, color: "dark" },
    { title: t.feat4, desc: t.feat4D, color: "dark" },
    { title: t.feat5, desc: t.feat5D, color: "dark" },
    { title: t.feat6, desc: t.feat6D, color: "dark" },
  ];

  return (
    <section className="hiw-section">
      {/* --- THE STACK OF 3 RINGS --- */}
      <motion.img 
        src={silverRing} className="hiw-ring hiw-ring-back"
        animate={{ y: [0, -25, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img 
        src={silverRing} className="hiw-ring hiw-ring-mid"
        animate={{ y: [0, -15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.img 
        src={silverRing} className="hiw-ring hiw-ring-front"
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="hiw-content-wrapper">
        <div className="hiw-header">
          <span className="hiw-label">{t.hiwLabel}</span>
          <h2 className="hiw-main-title">{t.hiwTitle}</h2>
        </div>

        <motion.div 
          className="hiw-grid"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              className={`hiw-card ${f.color === 'orange' ? 'hiw-orange' : 'hiw-dark'}`}
              whileHover={{ scale: 1.02, backgroundColor: f.color === 'orange' ? '#ff7a60' : '#151515' }}
            >
              <div className="hiw-icon-circle">
                <img src={listDot} className="hiw-icon-img" alt="" />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.img 
          src={silverRing} className="hiw-ring hiw-ring-bottom"
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </section>
  );
};

export default HowItWorks;