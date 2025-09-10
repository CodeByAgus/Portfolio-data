import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="section" style={{ background: 'var(--soft-lavender)' }}>
      <div className="container">
        <h2 className="section-title">Experiencia Profesional</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
                 style={{ background: 'var(--soft-lavender)' }}></div>
            
            {/* Timeline item */}
            <div className="relative flex justify-center">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full z-10 top-4"
                   style={{ background: 'var(--primary-green)' }}></div>
              
              {/* Content */}
              <div className="rounded-2xl p-8 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl max-w-lg"
                   style={{ background: 'var(--cream)' }}>
                <div className="text-center">
                  <div className="font-semibold text-sm mb-3"
                       style={{ color: 'var(--primary-green)' }}>
                    2022 - Presente
                  </div>
                  
                  <h3 className="text-2xl mb-2"
                      style={{ color: 'var(--dark-charcoal)', fontFamily: 'var(--font-heading)' }}>
                    Senior Data Analyst
                  </h3>
                  
                  <div className="font-semibold mb-4"
                       style={{ color: 'var(--secondary-green)' }}>
                    TechFlow Solutions
                  </div>
                  
                  <p className="leading-relaxed text-sm"
                     style={{ color: 'var(--dark-charcoal)' }}>
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