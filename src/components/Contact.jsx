import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, HeartHandshake } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', gender: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      // In a real app, send data to backend or EmailJS here
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '', gender: '' });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-wrapper">
        <motion.div 
          className="contact-card glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                className="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="" disabled>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange} placeholder="How can I help you?"></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message <Send size={18} />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <motion.div 
                  className="success-icon"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                >
                  <HeartHandshake size={80} />
                </motion.div>
                <h3>Thank You, {formData.name || 'Friend'}!</h3>
                <p>Your message has been received. I'll get back to you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
