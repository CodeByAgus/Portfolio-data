import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education, { UniversityEducation } from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Skills />
      <Projects />
      
      {/* Combined Experience and University Education Section */}
      <section id="experience-education" className="section relative" style={{ background: 'var(--soft-lavender)' }}>
        <div className="geometric-bg"></div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - University Education */}
            <div>
              <h2 className="section-title text-left mb-8">Educación Universitaria</h2>
              <UniversityEducation />
            </div>
            
            {/* Right Column - Experience */}
            <div>
              <h2 className="section-title text-left mb-8">Experiencia Profesional</h2>
              <Experience />
            </div>
          </div>
        </div>
      </section>
      
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;