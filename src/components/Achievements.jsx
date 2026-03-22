import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';
import './Achievements.css';

const achievements = [
  {
    title: 'Top 10 Finalist',
    event: 'All India Developer Challenge',
    desc: 'National Level Hackathon 2025',
    icon: <Trophy size={32} />
  },
  {
    title: '5th Rank Overall (CSE)',
    event: 'Innotek Innovation Hackathon',
    desc: 'Lovely Professional University (2025)',
    icon: <Star size={32} />
  },
  {
    title: 'Winner',
    event: 'Technical Quiz Competition',
    desc: 'Department level quiz contest (2025)',
    icon: <Award size={32} />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Achievements
      </motion.h2>

      <div className="achievements-list">
        {achievements.map((item, index) => (
          <motion.div 
            key={index}
            className="achievement-card glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="achievement-icon-container">
              {item.icon}
            </div>
            <div className="achievement-content">
              <h3>{item.title}</h3>
              <h4 className="gradient-text">{item.event}</h4>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
