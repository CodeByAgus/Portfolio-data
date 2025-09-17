import React from 'react';
import { Github, ExternalLink, BarChart3, Presentation } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      icon: '📊',
      title: 'Dashboard de Empleabilidad',
      subtitle: 'Análisis de censos y mercado laboral',
      description: 'Dashboard informativo en Tableau sobre el desempleo en dos provincias, con distinción de género y observación de los beneficios del empleo.',
      tech: ['Tableau', 'Excel'],
      links: [
        { icon: <Github size={16} />, text: 'Código', href: '#' },
        { icon: <ExternalLink size={16} />, text: 'Demo', href: '#' }
      ]
    },
    {
      icon: '🎓',
      title: 'Dashboard Educativo',
      subtitle: 'Visualización de indicadores académicos',
      description: 'Construcción de un dashboard en Tableau que muestra evolución del rendimiento estudiantil, tasas de aprobación y asistencia. Transformación de datos dispersos en insights claros para la mejora pedagógica.',
      tech: ['Tableau', 'Excel', 'SQL'],
      links: [
        { icon: <Github size={16} />, text: 'Código', href: '#' },
        { icon: <Presentation size={16} />, text: 'Slides', href: '#' }
      ]
    },
    {
      icon: '🌦️',
      title: 'Análisis Climático',
      subtitle: 'Exploración de series temporales',
      description: 'Análisis de datos meteorológicos con Python y SQL para detectar patrones de temperatura y precipitaciones. Resultados presentados en gráficos y estadísticas que aportan valor en planificación y gestión de recursos.',
      tech: ['Python', 'SQL', 'Matplotlib', 'Pandas'],
      links: [
        { icon: <Github size={16} />, text: 'Código', href: '#' },
        { icon: <BarChart3 size={16} />, text: 'Visualizaciones', href: '#' }
      ]
    }
  ];

  return (
    <section id="projects" className="section relative"
             style={{ background: 'var(--soft-lavender)' }}>
      <div className="geometric-bg"></div>
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-minimal overflow-hidden group"
              style={{
                padding: '1rem',
                minHeight: '260px',
                maxWidth: '340px',
                margin: '0 auto'
              }}
            >
              {/* Imagen del proyecto */}
              <div
                className="relative mb-3 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 h-28 flex items-center justify-center"
              >
                <div className="text-center p-2">
                  <div className="text-3xl mb-1">{project.icon}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-light">
                    Aquí debes agregar una imagen del proyecto
                  </p>
                </div>
              </div>
              
              {/* Contenido del proyecto */}
              <div>
                <h3
                  className="text-lg font-semibold mb-1 tracking-tight"
                  style={{
                    color: 'var(--primary-green)',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}
                >
                  {project.title}
                </h3>
                
                <p
                  className="text-xs font-medium mb-2 opacity-80"
                  style={{ color: 'var(--secondary-green)' }}
                >
                  {project.subtitle}
                </p>
                
                <p
                  className="mb-3 leading-relaxed text-xs font-light"
                  style={{ color: 'var(--charcoal-text)' }}
                >
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 rounded-full text-xs font-medium tracking-wide dark:bg-gray-700 dark:text-gray-200"
                      style={{
                        background: 'var(--light-sage)',
                        color: 'var(--primary-green)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="flex items-center gap-1 font-medium transition-all duration-300 hover:opacity-70 text-xs tracking-wide"
                      style={{ color: 'var(--primary-green)' }}
                    >
                      {link.icon}
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
