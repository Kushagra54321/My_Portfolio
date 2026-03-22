import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Brain, Cpu } from 'lucide-react';
import './CodingProfiles.css';

const profiles = [
  {
    platform: 'LeetCode',
    icon: <Code size={28} />,
    color: '#FFA116',
    stats: { solved: '350+', rating: '1650', badges: 'Knight' },
    link: '#'
  },
  {
    platform: 'GeeksforGeeks',
    icon: <Brain size={28} />,
    color: '#2F8D46',
    stats: { solved: '250+', rating: '4 Star', rank: 'Top 5%' },
    link: '#'
  },
  {
    platform: 'HackerRank',
    icon: <Terminal size={28} />,
    color: '#00EA64',
    stats: { badges: '5 Star Problem Solving', rank: 'Gold' },
    link: '#'
  },
  {
    platform: 'CodeChef',
    icon: <Cpu size={28} />,
    color: '#5B4638',
    stats: { rating: '1500 (2 Star)', solved: '120+' },
    link: '#'
  }
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Coding Profiles
      </motion.h2>

      <div className="profiles-grid">
        {profiles.map((profile, index) => (
          <motion.a 
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card glass"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, boxShadow: `0 10px 30px -10px ${profile.color}40` }}
            style={{ '--theme-color': profile.color }}
          >
            <div className="profile-header">
              <div className="profile-icon" style={{ color: profile.color, background: `${profile.color}20` }}>
                {profile.icon}
              </div>
              <h3>{profile.platform}</h3>
            </div>
            
            <div className="profile-stats">
              {Object.entries(profile.stats).map(([key, value], i) => (
                <div key={i} className="stat-item">
                  <span className="stat-label">{key}</span>
                  <span className="stat-value">{value}</span>
                </div>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
