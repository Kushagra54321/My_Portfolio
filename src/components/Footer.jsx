import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2><span className="gradient-text">Kushagra</span> Singh</h2>
          <p className="footer-tagline">Aspiring Software Engineer & AI/ML Enthusiast</p>
        </div>
        
        <div className="footer-socials">
          <a href="https://github.com/Kushagra54321" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kushagra-singh-b86695297/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={20} />
          </a>
          <a href="mailto:kushagrasingh54321@gmail.com" className="social-icon">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kushagra Singh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
