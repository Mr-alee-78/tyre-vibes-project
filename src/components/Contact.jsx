import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Header Text */}
        <div className="contact-header">
          <motion.span 
            className="contact-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.contactLabel}
          </motion.span>
          <motion.h2 
            key={t.contactTitle}
            className="contact-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t.contactTitle}
          </motion.h2>
          <motion.p 
            key={t.contactSub}
            className="contact-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {t.contactSub}
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-grid">
            <input type="text" placeholder={t.phName} className="form-input" />
            <input type="text" placeholder={t.phPhone} className="form-input" />
            <input type="email" placeholder={t.phEmail} className="form-input" />
            <input type="text" placeholder={t.phCompany} className="form-input" />
          </div>
          
          <textarea placeholder={t.phMsg} className="form-textarea"></textarea>
          
          <div className="form-button-wrapper">
            <motion.button 
              type="submit" 
              className="contact-submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.btnSend}
            </motion.button>
          </div>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;