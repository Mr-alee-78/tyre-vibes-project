import React, { useRef, useState } from 'react';
import './Footer.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import logoImg from '../assets/logo.svg';
import silverRing from '../assets/14.png';
import { useLanguage } from '../LanguageContext';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const { t, lang } = useLanguage();
  const form = useRef();
  const [status, setStatus] = useState('');

  // --- SCROLL TRACKING SETUP ---
  const headRef = useRef(null);
  const titleRef = useRef(null);

  const { scrollYProgress: headScroll } = useScroll({
    target: headRef,
    offset: ["start 0.95", "start 0.6"]
  });
  const headFill = useTransform(headScroll, [0, 1], ["0% 100%", "100% 100%"]);

  const { scrollYProgress: titleScroll } = useScroll({
    target: titleRef,
    offset: ["start 0.95", "start 0.7"]
  });
  const titleFill = useTransform(titleScroll, [0, 1], ["0% 100%", "100% 100%"]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = "service_pbmn7cp"; 
    const TEMPLATE_ID = "template_d0gl0ta";
    const PUBLIC_KEY = "YEpbPzLUyNO-v-iUg";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
      }, (error) => {
          console.error(error.text);
          setStatus('error');
      });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logoImg} alt="TyreVibes Logo" className="footer-logo" />
          
          {/* --- ANIMATED FILL HEADING --- */}
          <motion.h2 
            ref={headRef}
            key={t.footerHead}
            className="footer-heading apple-text-fill-footer"
            style={{ backgroundSize: headFill }}
          >
            {t.footerHead}
          </motion.h2>

          <nav className="footer-nav">
            <ul>
              <li><a href="#home">{t.home}</a></li>
              <li><a href="#how-it-works">{t.howItWorks}</a></li>
              <li><a href="#features">{t.features}</a></li>
              <li><a href="#partners">{t.partners}</a></li>
              <li><a href="#who-its-for">{t.whoItsFor}</a></li>
            </ul>
          </nav>
        </div>

        <div className="footer-right">
          {/* --- ANIMATED FILL TITLE --- */}
          <motion.h3 
            ref={titleRef}
            key={t.getInTouch}
            className="form-title apple-text-fill-footer"
            style={{ backgroundSize: titleFill }}
          >
            {t.getInTouch}
          </motion.h3>
          
          <form ref={form} className="footer-form" onSubmit={sendEmail}>
            <div className="footer-form-grid">
              <input type="text" name="user_name" placeholder={t.phName} required />
              <input type="text" name="user_phone" placeholder={t.phPhone} />
              <input type="email" name="user_email" placeholder={t.phEmail} required />
              <input type="text" name="user_company" placeholder={t.phCompany} />
            </div>
            <textarea name="message" placeholder={t.phMsg} className="footer-textarea" required></textarea>
            <motion.button type="submit" className="footer-submit-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={status === 'sending'}>
              {status === 'sending' ? '...' : t.btnSend}
            </motion.button>
            {status === 'success' && <p style={{ color: '#f06449', marginTop: '10px' }}>{lang === 'it' ? 'Inviato!' : 'Sent!'}</p>}
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">{t.copyright}</p>
          <div className="legal-links">
            <span>{t.privacy || "Privacy Policy"}</span>
            <span>{t.terms || "Terms & Conditions"}</span>
          </div>
        </div>
      </div>

      <motion.img src={silverRing} className="footer-ring" animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
    </footer>
  );
};

export default Footer;