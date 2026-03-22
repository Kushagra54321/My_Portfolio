import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        About Me
      </motion.h2>

      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="about-text glass" variants={itemVariants}>
          <p>
            I am a passionate technology enthusiast currently pursuing my Bachelor of Technology 
            in Computer Science and Engineering. I specialize in building robust software 
            applications and integrating intelligent Artificial Intelligence & Machine Learning 
            solutions.
          </p>
          <p>
            My goal is to continually challenge myself and build products that not only 
            solve complex problems but also provide an exceptional user experience.
          </p>
        </motion.div>

        <motion.div className="about-grid" variants={containerVariants}>
          <motion.div className="about-card glass" variants={itemVariants}>
            <div className="icon-wrapper"><GraduationCap size={28} /></div>
            <h3>Education</h3>
            <p>B.Tech CSE (2023 - Present)</p>
            <span className="highlight">Lovely Professional University</span>
          </motion.div>

          <motion.div className="about-card glass" variants={itemVariants}>
            <div className="icon-wrapper"><Terminal size={28} /></div>
            <h3>Focus Area</h3>
            <p>Software Engineering</p>
            <span className="highlight">Full-Stack & Backend</span>
          </motion.div>

          <motion.div className="about-card glass" variants={itemVariants}>
            <div className="icon-wrapper"><Target size={28} /></div>
            <h3>Career Goal</h3>
            <p>AI / ML Engineer</p>
            <span className="highlight">Building Intelligent Systems</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
