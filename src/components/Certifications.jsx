import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import './Certifications.css';

const certifications = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: '2025'
  },
  {
    name: 'Python Development',
    issuer: 'CipherSchools',
    date: '2024'
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    date: '2024'
  },
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2024'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Certifications
      </motion.h2>

      <div className="certs-grid">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index} 
            className="cert-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)" }}
          >
            <div className="cert-iconWrapper">
              <Award size={40} className="cert-awardicon" />
            </div>
            <h3>{cert.name}</h3>
            <p className="cert-issuer gradient-text">{cert.issuer}</p>
            {cert.date && <div className="cert-date">{cert.date}</div>}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
