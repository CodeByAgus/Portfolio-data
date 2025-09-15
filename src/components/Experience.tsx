import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="card-minimal w-full">
      <div className="text-center">
        <div className="font-medium text-sm mb-3 tracking-wide"
             style={{ color: 'var(--primary-green)' }}>
          2022 - Presente
        </div>
        
        <h3 className="text-2xl mb-3 font-semibold tracking-tight"
            style={{ 
              color: 'var(--charcoal-text)', 
              fontFamily: "'Space Grotesk', sans-serif" 
            }}>
          Senior Data Analyst
        </h3>
        
        <div className="font-medium mb-6 text-lg"
             style={{ color: 'var(--secondary-green)' }}>
          TechFlow Solutions
        </div>
        
        <p className="leading-relaxed text-base font-light"
           style={{ color: 'var(--charcoal-text)' }}>
          Lidero un equipo de 3 analistas desarrollando modelos predictivos para optimización 
          de procesos. Implementé pipelines de datos que procesan 2TB+ diarios y creé 
          dashboards ejecutivos que impactan decisiones estratégicas de C-level.
        </p>
      </div>
    </div>
  );
};

export default Experience;