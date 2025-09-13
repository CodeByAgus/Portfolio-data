import React from 'react';
import { Github, ExternalLink, FileText, BarChart3, Presentation } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      icon: '📊',
      title: 'Dashboard de Ventas Retail',
      subtitle: 'Análisis de métricas comerciales',
      description: 'Creación de un dashboard interactivo en Power BI para visualizar productos más vendidos, períodos de mayor demanda y ticket promedio. Permite filtrar y explorar datos para apoyar decisiones estratégicas.',
      tech: ['Power BI', 'SQL', 'DAX'],
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
      icon: '🤖',
      title: 'Automatización de Testing',
      subtitle: 'Validación de formularios web con Python',
      description: 'Desarrollo de un script en Python que automatiza pruebas de campos obligatorios y formatos en formularios. Genera reportes automáticos, optimizando procesos de QA y reduciendo errores manuales.',
      tech: ['Python', 'Selenium', 'Pytest'],
      links: [
        { icon: <Github size={16} />, text: 'Código', href: '#' },
        { icon: <FileText size={16} />, text: 'Doc', href: '#' }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="card-minimal overflow-hidden group">
              
              {/* Imagen del proyecto */}
              <div className="relative mb-6 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">{project.icon}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
                    Aquí debes agregar una imagen del proyecto
                  </p>
                </div>
              </div>
              
              {/* Contenido del proyecto */}
              <div>
                <h3 className="text-xl font-semibold mb-2 tracking-tight" 
                    style={{ 
                      color: 'var(--primary-green)',
                      fontFamily: "'Space Grotesk', sans-serif" 
                    }}>
                  {project.title}
                </h3>
                
                <p className="text-sm font-medium mb-4 opacity-80"
                   style={{ color: 'var(--secondary-green)' }}>
                  {project.subtitle}
                </p>
                
                <p className="mb-6 leading-relaxed text-sm font-light"
                   style={{ color: 'var(--charcoal-text)' }}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}
                          className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide"
                          style={{ 
                            background: 'var(--light-sage)',
                            color: 'var(--primary-green)'
                          }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.links.map((link, linkIndex) => (
                    <a key={linkIndex}
                       href={link.href}
                       className="flex items-center gap-2 font-medium transition-all duration-300 hover:opacity-70 text-sm tracking-wide"
                       style={{ color: 'var(--primary-green)' }}>
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
