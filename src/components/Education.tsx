import React from 'react';
import { ExternalLink, Award, GraduationCap } from 'lucide-react';

export const UniversityEducation: React.FC = () => {
  return (
    <div className="card-minimal w-full">
      <div className="text-center">
        <div className="font-medium text-sm mb-3 tracking-wide"
             style={{ color: 'var(--primary-green)' }}>
          2024 - Actualidad
        </div>
        
        <h3 className="text-2xl mb-3 font-semibold tracking-tight"
            style={{ 
              color: 'var(--charcoal-text)', 
              fontFamily: "'Space Grotesk', sans-serif" 
            }}>
          Licenciatura en Ciencia de Datos
        </h3>
        
        <div className="font-medium mb-6 text-lg"
             style={{ color: 'var(--secondary-green)' }}>
          Universidad de Buenos Aires
        </div>
        
        <p className="leading-relaxed text-base font-light"
           style={{ color: 'var(--charcoal-text)' }}>
          Formación integral en análisis de datos, estadística, machine learning y programación. 
          Desarrollando competencias en Python, R, SQL y herramientas de visualización para 
          resolver problemas complejos mediante el análisis de datos.
        </p>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      institution: 'Google / Coursera',
      year: 'En curso',
      link: 'https://www.coursera.org/professional-certificates/google-data-analytics'
    },
    {
      title: 'Testing QA Manual',
      institution: 'Coderhouse',
      year: '2025',
      link: 'https://www.coderhouse.com'
    },
    {
      title: 'Programación Inicial con Python',
      institution: 'Talento Tech', 
      year: '2025',
      link: 'https://www.talentotech.gob.ar'
    },
    {
      title: 'Excel de Básico a Experto',
      institution: 'Udemy',
      year: '2025',
      link: 'https://www.udemy.com'
    }
  ];

  return (
    <section id="education" className="section relative">
      <div className="geometric-bg"></div>
      <div className="container">
        <h2 className="section-title">Certificaciones Profesionales</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Category Header */}
          <div className="flex items-center gap-4 pb-5 border-b mb-6"
               style={{ borderColor: 'var(--light-sage)' }}>
            <div style={{ color: 'var(--primary-green)' }}>
              <Award size={20} />
            </div>
            <h3 className="text-xl font-semibold tracking-tight"
                style={{ 
                  color: 'var(--primary-green)',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}>
              Cursos y Certificaciones
            </h3>
          </div>

          {/* Items List */}
          <div className="space-y-5">
            {certifications.map((item, itemIndex) => (
              <div key={itemIndex} 
                   className="card-minimal flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Left side - Title and Institution */}
                <div className="flex-1">
                  <h4 className="font-semibold text-base mb-2 tracking-tight"
                      style={{ color: 'var(--charcoal-text)' }}>
                    {item.title}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm font-light">
                    <span style={{ color: 'var(--secondary-green)' }} className="font-medium">
                      {item.institution}
                    </span>
                    <span className="hidden sm:inline" style={{ color: 'var(--secondary-green)' }}>
                      •
                    </span>
                    <span style={{ color: 'var(--secondary-green)' }}>
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Right side - Link */}
                <div className="flex-shrink-0">
                  <a href={item.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg tracking-wide"
                     style={{ 
                       background: 'var(--primary-green)',
                       color: 'white'
                     }}>
                    <span>Ver certificado</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;