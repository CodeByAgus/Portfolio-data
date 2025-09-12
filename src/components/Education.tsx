import React from 'react';
import { ExternalLink, Award, GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      category: 'Educación Universitaria',
      icon: <GraduationCap size={20} />,
      items: [
        {
          title: 'Licenciatura en Ciencia de Datos',
          institution: 'Universidad de Buenos Aires',
          year: '2024 - Actualidad',
          link: 'https://www.uba.ar'
        }
      ]
    },
    {
      category: 'Certificaciones Profesionales',
      icon: <Award size={20} />,
      items: [
        {
          title: 'Google Data Analytics Professional Certificate',
          institution: 'Google / Coursera',
          year: '2025',
          link: 'https://www.coursera.org/professional-certificates/google-data-analytics'
        },
        {
          title: 'Testing QA Manual',
          institution: 'Coderhouse',
          year: '2025',
          link: 'https://www.coderhouse.com'
        },
        {
          title: 'Consultas Avanzadas con SQL',
          institution: 'Fundaula',
          year: '2025',
          link: 'https://www.fundaula.com'
        },
        {
          title: 'Programación Inicial con Python',
          institution: 'Talento Tech',
          year: '2025',
          link: 'https://www.talentotech.gob.ar'
        },
        {
          title: 'Curso Intensivo de Data Analytics',
          institution: 'Chicas en Tecnología',
          year: '2025',
          link: 'https://www.chicasentecnologia.org'
        },
        {
          title: 'Excel de Básico a Experto',
          institution: 'Udemy',
          year: '2025',
          link: 'https://www.udemy.com'
        }
      ]
    }
  ];

  return (
    <section id="education" className="section relative">
      <div className="geometric-bg"></div>
      <div className="container">
        <h2 className="section-title">Educación & Certificaciones</h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {education.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-4 pb-5 border-b"
                   style={{ borderColor: 'var(--light-sage)' }}>
                <div style={{ color: 'var(--primary-green)' }}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight"
                    style={{ 
                      color: 'var(--primary-green)',
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}>
                  {category.category}
                </h3>
              </div>

              {/* Items List */}
              <div className="space-y-5">
                {category.items.map((item, itemIndex) => (
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
                    {/* Right side - Link (only for certifications) */}
                    {category.category !== 'Educación Universitaria' && (
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
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;