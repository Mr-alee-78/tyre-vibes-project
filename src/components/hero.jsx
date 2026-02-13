import React from 'react';
import './hero.css';
import { motion } from 'framer-motion'; 

import logoImg from '../assets/logo.svg'; 
import screenFront from '../assets/iPhone 16 plus Dark.png'; 
import screenBack from '../assets/iPhone 16 plus Dark (1).png'; 
import leftani from '../assets/hero-left-ani.png'; 
import heroVideo from '../assets/hero-video.mp4'; // Make sure this path is correct
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="hero-container">
      <div className="left-ani">
          <img src={leftani} alt="Animation Background" /> 
      </div>

      <nav className="navbar">
        <div className="logo">
          <img src={logoImg} alt="Logo" /> 
        </div>
        <ul className="nav-links">
          <li className="active">{t.home}</li>
          <li>{t.howItWorks}</li>
          <li>{t.features}</li>
          <li>{t.partners}</li>
          <li>{t.whoItsFor}</li>
        </ul>
        <div className="nav-actions">
          <div className="custom-select-wrapper">
            <select 
              name="lang" 
              id="language" 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="styled-select"
            >
              <option value="it">ITA</option>
              <option value="en">ENG</option>
            </select>
            <span className="select-arrow">▾</span>
          </div>
          <button className="btn-nav-download">{t.downloadBtn}</button>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-left">
          <motion.h1 
            key={t.heroTitle} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p 
            key={t.heroDesc}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.heroDesc}
          </motion.p>

          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="btn-primary btns" >{t.downloadBtn}</button>
            <button className="btn-secondary btns">{t.waitlistBtn}</button>
          </motion.div>
        </div>

        <div className="hero-right">
           <div className="phone-wrapper">
                
                {/* --- BACK PHONE (LEFT) WITH VIDEO --- */}
                <motion.div 
                  className="back-phone-container"
                  initial={{ opacity: 0, x: -250 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 1.2, delay: 0.4 }}
                >
                    <video 
                        className="phone-video"
                        src={heroVideo}
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    />
                    <img src={screenBack} className="phone-img back-phone" alt="Back Phone" />
                </motion.div>

                {/* FRONT PHONE (RIGHT) */}
                <motion.img 
                  src={screenFront} 
                  className="front-phone phone-img" 
                  alt="Front Phone" 
                  initial={{ opacity: 0, x: 250 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 1.2, delay: 0.6 }}
                />

           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;