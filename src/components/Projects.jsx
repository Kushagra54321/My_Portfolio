import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code, X } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'EduNova - AI Study Assistant',
    status: 'Live',
    date: 'March 2026 - Present',
    shortDesc: 'Intelligent query handling and concept explanation system.',
    description: 
      'A comprehensive AI-powered study platform featuring dynamic response generation based on user input, modular architecture for scalability, and intelligent query handling. Developed with a high-performance backend and an interactive frontend.',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'Python/Flask/FastAPI', 'MongoDB'],
    live: 'https://edunova-ai-xauf.onrender.com/',
    github: 'https://github.com/Kushagra54321/EduNova-AI'
  },
  {
    id: 2,
    title: 'SouveniAI - Tourist Souvenir Finder',
    status: 'Completed',
    date: 'Feb 2025 - Apr 2025',
    shortDesc: 'AI-based recommendation system for personalized souvenir suggestions.',
    description: 
      'An interactive chatbot-style UI that leverages OpenAI APIs and GeoAPI to recommend souvenirs. The application integrates multiple APIs perfectly, reducing response times by 30% and enhancing user engagement.',
    tech: ['JavaScript', 'Flask', 'GeoAPI', 'Python', 'OpenAI API', 'HTML/CSS'],
    live: '#',
    github: 'https://github.com/Kushagra54321'
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div 
            layoutId={`card-${project.id}`}
            key={project.id}
            className="project-card glass"
            onClick={() => setSelectedId(project.id)}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="project-card-inner">
              <motion.div className="project-header" layoutId={`header-${project.id}`}>
                <Code className="project-icon" size={32} />
                <span className="project-status">{project.status}</span>
              </motion.div>
              <motion.h3 layoutId={`title-${project.id}`}>{project.title}</motion.h3>
              <motion.p layoutId={`desc-${project.id}`} className="project-short-desc">
                {project.shortDesc}
              </motion.p>
              
              <div className="tech-stack-mini">
                {project.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
                {project.tech.length > 3 && <span className="tech-tag">+more</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedId(null)}>
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="project-modal glass"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedId(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-content">
                <motion.div className="project-header" layoutId={`header-${selectedProject.id}`}>
                  <Code className="project-icon" size={40} />
                  <span className="project-date">{selectedProject.date}</span>
                </motion.div>
                
                <motion.h3 layoutId={`title-${selectedProject.id}`} className="modal-title">
                  {selectedProject.title}
                </motion.h3>
                
                <motion.p layoutId={`desc-${selectedProject.id}`} className="modal-desc">
                  {selectedProject.description}
                </motion.p>

                <div className="modal-tech">
                  <h4>Tech Stack</h4>
                  <div className="tech-stack-full">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="tech-tag large">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  {selectedProject.live !== '#' && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary glass">
                    <Github size={18} /> GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
