import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      date: '2024 - Actualidad',
      title: 'Licenciatura en Ciencia de Datos',
      company: 'Universidad de Buenos Aires',
      description: 'Carrera universitaria que combina matemáticas, estadística y programación para el análisis y modelado de datos. Formación sólida en pensamiento lógico, análisis crítico y resolución de problemas.'
    },
    {
      date: '2025',
      title: 'Google Data Analytics Professional Certificate',
      company: 'Google / Coursera',
      description: 'Certificación en análisis de datos que abarca SQL, R, Tableau y metodologías de análisis. Incluye prácticas de limpieza, validación y visualización de datos con enfoque en la toma de decisiones.'
    },
    {
      date: '2025',
      title: 'Testing QA Manual',
      company: 'Coderhouse',
      description: 'Formación en fundamentos de testing de software, diseño de casos de prueba, reporte de bugs y metodologías ágiles. Uso de Postman y herramientas colaborativas para asegurar calidad en proyectos.'
    },
    {
      date: '2025',
      title: 'Consultas Avanzadas con SQL',
      company: 'Fundaula',
      description: 'Capacitación en comprensión de estructuras de tablas, manejo de sentencias complejas y funciones agregadas como SUM, AVG y COUNT.'
    },
    {
      date: '2025',
      title: 'Programación Inicial con Python',
      company: 'Talento Tech',
      description: 'Curso enfocado en estructuras de control, programación estructurada, manejo de colecciones y bases de datos SQLite.'
    },
    {
      date: '2025',
      title: 'Curso Intensivo de Data Analytics',
      company: 'Chicas en Tecnología',
      description: 'Programa de 15 horas con enfoque en visualización de datos, lógica estadística y uso de herramientas como Power BI y Tableau.'
    },
    {
      date: '2025',
      title: 'Excel de Básico a Experto',
      company: 'Udemy',
      description: 'Formación en el uso avanzado de Excel: tablas dinámicas, funciones condicionales y de búsqueda, además de operaciones aritméticas aplicadas al análisis de datos.'
    }
  ];

  return (
    <section id="education" className="section"
             style={{ background: 'var(--soft-lavender)' }}>
      <div className="container">
        <h2 className="section-title">Educación & Certificaciones</h2>
        
        <div className="relative max-w-4xl mx-auto mt-10">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block"
               style={{ background: 'var(--light-sage)' }}></div>
          
          <div className="space-y-8 md:space-y-0">
            {education.map((item, index) => (
              <div key={index} 
                   className={`relative md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10 md:ml-auto'}`}>
                
                {/* Timeline dot */}
                <div className={`absolute w-5 h-5 rounded-full z-10 hidden md:block ${
                  index % 2 === 0 ? 'right-0 mr-2' : 'left-0 ml-2'
                }`}
                     style={{
                       background: 'var(--primary-green)',
                       top: '15px',
                       transform: index % 2 === 0 ? 'translateX(50%)' : 'translateX(-50%)'
                     }}></div>
                
                {/* Content */}
                <div className="rounded-2xl p-6 shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
                     style={{ background: 'white' }}>
                  <div className="font-semibold text-sm mb-3"
                       style={{ color: 'var(--primary-green)' }}>
                    {item.date}
                  </div>
                  
                  <h3 className="text-xl mb-2"
                      style={{ color: 'var(--dark-charcoal)', fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </h3>
                  
                  <div className="font-semibold mb-4"
                       style={{ color: 'var(--secondary-green)' }}>
                    {item.company}
                  </div>
                  
                  <p className="leading-relaxed text-sm"
                     style={{ color: 'var(--dark-charcoal)' }}>
                    {item.description}
                  </p>
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
