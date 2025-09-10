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
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Educación & Certificaciones</h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {education.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 border-b-2"
                   style={{ borderColor: 'var(--light-sage)' }}>
                <div style={{ color: 'var(--primary-green)' }}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold"
                    style={{ 
                      color: 'var(--primary-green)',
                      fontFamily: 'var(--font-subtitle)'
                    }}>
                  {category.category}
                </h3>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} 
                       className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                       style={{ background: 'var(--soft-lavender)' }}>
                    
                    {/* Left side - Title and Institution */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1"
                          style={{ color: 'var(--dark-charcoal)' }}>
                        {item.title}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                        <span style={{ color: 'var(--secondary-green)' }}>
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
                         className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;