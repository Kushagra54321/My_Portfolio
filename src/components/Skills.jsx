import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Settings, TerminalSquare } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <TerminalSquare size={24} />,
    skills: ['C++', 'Java', 'Python']
  },
  {
    title: 'AI / ML & Development',
    icon: <Cpu size={24} />,
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'NLP', 'Flask', 'FastAPI']
  },
  {
    title: 'Core Computer Science',
    icon: <Code2 size={24} />,
    skills: ['DSA', 'OOPS', 'DBMS', 'OS', 'Computer Networks']
  },
  {
    title: 'Tools & Technologies',
    icon: <Settings size={24} />,
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Docker', 'AWS', 'Kubernetes']
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Technical Skills
      </motion.h2>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, index) => (
          <motion.div key={index} className="skill-category-card glass" variants={itemVariants}>
            <div className="skill-category-header">
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
