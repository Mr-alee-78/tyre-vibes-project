import React, { useRef } from 'react';
import './hero.css';
import { motion, useScroll, useTransform } from 'framer-motion'; 

import logoImg from '../assets/logo.svg'; 
import screenFront from '../assets/iPhone 16 plus Dark.png'; 
import screenBack from '../assets/iPhone 16 plus Dark (1).png'; 
import leftani from '../assets/hero-left-ani.png'; 
import heroVideo from '../assets/hero-video.mp4'; 
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { lang, setLang, t } = useLanguage();

  // --- 1. SCROLL TRACKING FOR H1 TITLE ---
  const titleRef = useRef(null);
  const { scrollYProgress: titleScroll } = useScroll({
    target: titleRef,
    offset: ["start 0.1", "end 0.5"] // Triggers as it enters the screen
  });
  const titleFill = useTransform(titleScroll, [0, 1], ["0% 100%", "100% 100%"]);

  // --- 2. SCROLL TRACKING FOR P DESCRIPTION ---
  const descRef = useRef(null);
  const { scrollYProgress: descScroll } = useScroll({
    target: descRef,
    offset: ["start 0.3", "end 0.7"]
  });
  const descFill = useTransform(descScroll, [0, 1], ["0% 100%", "100% 100%"]);

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
          <li className="active"><a href="#home">{t.home}</a></li>
          <li><a href="#how-it-works">{t.howItWorks}</a></li>
          <li><a href="#features">{t.features}</a></li>
          <li><a href="#partners">{t.partners}</a></li>
          <li><a href="#who-its-for">{t.whoItsFor}</a></li>
        </ul>
        <div className="nav-actions">
          <div><img src="./src/assets/global.png" alt="" /></div>
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
          
          {/* --- ANIMATED H1: Liquid Fill --- */}
          <motion.h1 
            ref={titleRef}
            key={t.heroTitle} 
            className="apple-text-fill h1-style"
            style={{ backgroundSize: titleFill }}
          >
            {t.heroTitle}
          </motion.h1>

          {/* --- ANIMATED P: Liquid Fill --- */}
          <motion.p 
            ref={descRef}
            key={t.heroDesc}
            className="apple-text-fill p-style"
            style={{ backgroundSize: descFill }}
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
                
                {/* BACK PHONE (LEFT) WITH VIDEO */}
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