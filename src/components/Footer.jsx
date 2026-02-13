import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.svg';
import silverRing from '../assets/14.png';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* --- LEFT SIDE: BRANDING & NAV --- */}
        <div className="footer-left">
          <img src={logoImg} alt="TyreVibes Logo" className="footer-logo" />
          
          <motion.h2 
            key={t.footerHead}
            className="footer-heading"
          >
            {t.footerHead}
          </motion.h2>

          <nav className="footer-nav">
            <ul>
              <li>{t.home}</li>
              <li>{t.howItWorks}</li>
              <li>{t.features}</li>
              <li>{t.partners}</li>
              <li>{t.whoItsFor}</li>
            </ul>
          </nav>
        </div>

        {/* --- RIGHT SIDE: CONTACT FORM --- */}
        <div className="footer-right">
          <h3 className="form-title">{t.getInTouch}</h3>
          
          <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
            <div className="footer-form-grid">
              <input type="text" placeholder={t.phName} />
              <input type="text" placeholder={t.phPhone} />
              <input type="email" placeholder={t.phEmail} />
              <input type="text" placeholder={t.phCompany} />
            </div>
            
            <textarea placeholder={t.phMsg} className="footer-textarea"></textarea>
            
            <motion.button 
              type="submit" 
              className="footer-submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.btnSend}
            </motion.button>
          </form>
        </div>
      </div>

      {/* --- BOTTOM BAR: COPYRIGHT & LEGAL --- */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">{t.copyright}</p>
          
          <div className="legal-links">
            <span>{t.privacy || "Privacy Policy"}</span>
            <span>{t.terms || "Terms & Conditions"}</span>
          </div>
        </div>
      </div>

      {/* --- DECORATIVE RING --- */}
      <motion.img 
        src={silverRing} 
        className="footer-ring"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </footer>
  );
};

export default Footer;