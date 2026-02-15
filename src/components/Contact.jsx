import React, { useRef, useState } from 'react';
import './Contact.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // FIXED: Added 'lang' here so the success message knows which language to show
  const { t, lang } = useLanguage(); 
  const form = useRef();
  const [status, setStatus] = useState('idle'); 

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Your actual keys are now plugged in
    const SERVICE_ID = "service_pbmn7cp"; 
    const TEMPLATE_ID = "template_d0gl0ta";
    const PUBLIC_KEY = "YEpbPzLUyNO-v-iUg";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          setStatus('success');
          form.current.reset();
      }, (error) => {
          console.error(error.text);
          setStatus('error');
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-header">
          <motion.span className="contact-label">{t.contactLabel}</motion.span>
          <motion.h2 className="contact-title">{t.contactTitle}</motion.h2>
          <motion.p className="contact-subtitle">{t.contactSub}</motion.p>
        </div>

        <div className="form-wrapper">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="success-message"
              >
                <div className="success-icon">✓</div>
                <h3>{lang === 'it' ? 'Grazie!' : 'Thank You!'}</h3>
                <p>{lang === 'it' ? 'Abbiamo ricevuto il tuo messaggio.' : 'We have received your message.'}</p>
                <button onClick={() => setStatus('idle')} className="btn-back">
                   {lang === 'it' ? 'Invia un altro' : 'Send another'}
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                ref={form}
                className="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={sendEmail}
              >
                <div className="form-grid">
                  <input type="text" name="user_name" placeholder={t.phName} className="form-input" required />
                  <input type="text" name="user_phone" placeholder={t.phPhone} className="form-input" />
                  <input type="email" name="user_email" placeholder={t.phEmail} className="form-input" required />
                  <input type="text" name="user_company" placeholder={t.phCompany} className="form-input" />
                </div>
                
                <textarea name="message" placeholder={t.phMsg} className="form-textarea" required></textarea>
                
                <div className="form-button-wrapper">
                  <motion.button 
                    type="submit" 
                    className="contact-submit-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? '...' : t.btnSend}
                  </motion.button>
                </div>
                {status === 'error' && <p className="error-text">Error. Please try again later.</p>}
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Contact;