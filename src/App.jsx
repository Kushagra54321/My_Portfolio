import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Certifications />
        <CodingProfiles />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
