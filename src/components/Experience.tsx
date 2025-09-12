import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="section relative" style={{ background: 'var(--soft-lavender)' }}>
      <div className="geometric-bg"></div>
      <div className="container">
        <h2 className="section-title">Experiencia Profesional</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full opacity-30"
                 style={{ background: 'var(--primary-green)' }}></div>
            
            {/* Timeline item */}
            <div className="relative flex justify-center">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 top-6 border-2 border-white shadow-lg"
                   style={{ background: 'var(--primary-green)' }}></div>
              
              {/* Content */}
              <div className="card-minimal max-w-lg">
                <div className="text-center">
                  <div className="font-medium text-sm mb-4 tracking-wide"
                       style={{ color: 'var(--primary-green)' }}>
                    2022 - Presente
                  </div>
                  
                  <h3 className="text-xl mb-3 font-semibold tracking-tight"
                      style={{ 
                        color: 'var(--charcoal-text)', 
                        fontFamily: "'Space Grotesk', sans-serif" 
                      }}>
                    Senior Data Analyst
                  </h3>
                  
                  <div className="font-medium mb-5 text-base"
                       style={{ color: 'var(--secondary-green)' }}>
                    TechFlow Solutions
                  </div>
                  
                  <p className="leading-relaxed text-sm font-light"
                     style={{ color: 'var(--charcoal-text)' }}>
                    Lidero un equipo de 3 analistas desarrollando modelos predictivos para optimización 
                    de procesos. Implementé pipelines de datos que procesan 2TB+ diarios y creé 
                    dashboards ejecutivos que impactan decisiones estratégicas de C-level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;