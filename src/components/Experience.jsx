import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    company: 'CodeSoft',
    role: 'Artificial Intelligence Intern',
    duration: 'Jun 2025 - Jul 2025',
    location: 'Remote',
    description: [
      'Designed and developed an AI chatbot and recommendation system using Python and algorithms.',
      'Implemented data preprocessing and model optimization techniques to enhance system scalability.',
      'Integrated backend logic with AI modules to enable real-time recommendation generation.'
    ]
  },
  {
    company: 'CodeAlpha',
    role: 'Machine Learning Intern',
    duration: 'Jul 2025 - Aug 2025',
    location: 'Remote',
    description: [
      'Developed a breast cancer prediction model using Scikit-learn, achieving 95% classification accuracy.',
      'Performed feature engineering and model evaluation to improve reliability.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Work Experience
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, index) => {
          // Alternate animation direction based on index
          const isEven = index % 2 === 0;
          const cardVariants = {
            hidden: { opacity: 0, x: isEven ? -50 : 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
          };

          return (
            <div key={index} className={`timeline-item ${isEven ? 'left' : 'right'}`}>
              <div className="timeline-dot">
                <Briefcase size={16} />
              </div>
              
              <motion.div 
                className="timeline-content glass"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company gradient-text">{exp.company}</h4>
                <div className="timeline-meta">
                  <span className="timeline-duration">{exp.duration}</span>
                  <span className="timeline-location">{exp.location}</span>
                </div>
                <ul className="timeline-desc">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
