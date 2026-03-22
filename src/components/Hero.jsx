import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = ({ theme }) => {
  const { scrollY } = useScroll();
  
  // On scroll -> image zooms in slightly and moves up, text moves up
  const imageScale = useTransform(scrollY, [0, 400], [0.9, 1.1]);
  const imageY = useTransform(scrollY, [0, 400], [0, -50]);
  const textY = useTransform(scrollY, [0, 400], [0, -80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="hero-section">
      {/* Background Cinematic Particles / Glow */}
      <div className="hero-bg-glow"></div>
      <div className="hero-bg-glow-2"></div>
      
      <div className="hero-container">
        
        {/* Profile Image with zoom-out cinematic effect on load */}
        <motion.div 
          className="hero-image-container"
          initial={{ scale: 1.5, opacity: 0, filter: 'blur(20px)' }}
          animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ scale: imageScale, y: imageY, opacity }}
        >
          {/* We assume profile.png is placed in the public folder */}
          <div className="image-wrapper">
             <img src="/profile.png" alt="Kushagra Singh" className="profile-img" onError={(e) => {
               e.target.src = 'https://source.unsplash.com/random/400x400/?tech,portrait';
             }} />
             <div className="img-glow"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          style={{ y: textY, opacity }}
        >
          <motion.p 
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Hello, I am
          </motion.p>
          
          <motion.h1 
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Kushagra Singh
          </motion.h1>

          <motion.h2 
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Aspiring Software Engineer <span className="gradient-text">|</span> AI/ML Enthusiast
          </motion.h2>

          <motion.p 
            className="hero-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            Crafting intelligent solutions and seamless web experiences. 
            Transforming ideas into scalable, high-performance applications.
          </motion.p>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary glass">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
