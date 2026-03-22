import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Education
      </motion.h2>

      <div className="education-grid">
        <motion.div
          className="edu-details glass"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="edu-icon">
            <BookOpen size={30} />
          </div>
          <h3>Bachelor of Technology</h3>
          <h4 className="gradient-text">Computer Science and Engineering</h4>

          <div className="edu-meta">
            <p className="edu-university">Lovely Professional University, Punjab</p>
            <p className="edu-duration">Aug 2023 - Present</p>
          </div>

          <div className="edu-score">
            <span>CGPA:</span> <strong>7.59</strong>
          </div>
        </motion.div>

        <motion.div
          className="edu-gallery"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Real images for campus life */}
          <div className="gallery-item img-1">
            <img src="/LPU_cmapus2.jpeg" alt="LPU Campus 1" />
          </div>
          <div className="gallery-item img-2">
            <img src="/LPu_campus1.jpeg" alt="LPU Campus 2" />
          </div>
          <div className="gallery-item img-3">
            <img src="/LPU-Campus-4.jpg" alt="LPU Campus 3" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
