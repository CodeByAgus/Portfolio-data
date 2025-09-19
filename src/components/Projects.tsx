import React from 'react';
import { Github, ExternalLink, BarChart3, Presentation } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      icon: '📊',
      title: 'Dashboard de Empleabilidad',
      subtitle: 'Análisis de censos y mercado laboral',
      description: 'Dashboard informativo en Tableau sobre el desempleo en dos provincias, con distinción de género y observación de los beneficios del empleo. Análisis profundo de indicadores laborales con visualizaciones interactivas.',
      tech: ['Tableau', 'Excel'],
      links: [
        { icon: <ExternalLink size={16} />, text: 'Tableau', href: 'https://public.tableau.com/views/tableuchicastec13_17429608121370/Dashboard1?:language=es-ES&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link' }
      ],
      image: 'empleabilidad-dashboard.png' // Coloca esta imagen en: Proyect1.png
    },
    {
      icon: '🎓',
      title: 'Dashboard Educativo',
      subtitle: 'Visualización de indicadores académicos',
      description: 'Construcción de un dashboard en Tableau que muestra evolución del rendimiento estudiantil, tasas de aprobación y asistencia. Transformación de datos dispersos en insights claros para la mejora pedagógica y toma de decisiones.',
      tech: ['PowerBI', 'Excel', 'SQL'],
      links: [
        { icon: <Github size={16} />, text: 'Código', href: '#' },
        { icon: <Presentation size={16} />, text: 'Slides', href: '#' }
      ],
      image: 'dashboard-educativo.jpg' // Coloca esta imagen en: public/images/projects/dashboard-educativo.jpg
    },
    {
      icon: '🌦️',
      title: 'Análisis Climático',
      subtitle: 'Exploración de series temporales',
      description: 'Análisis de datos meteorológicos con Python y SQL para detectar patrones de temperatura y precipitaciones. Resultados presentados en gráficos y estadísticas que aportan valor en planificación y gestión de recursos ambientales.',
      tech: ['Python', 'SQL', 'Matplotlib', 'Pandas'],
      links: [
        { icon: <Github size={16} />, text: 'Código', href: '#' },
        { icon: <BarChart3 size={16} />, text: 'Visualizaciones', href: '#' }
      ],
      image: 'analisis-climatico.jpg' // Coloca esta imagen en: public/images/projects/analisis-climatico.jpg
    }
  ];

  return (
    <section id="projects" className="section relative"
             style={{ background: 'var(--soft-lavender)' }}>
      <div className="geometric-bg"></div>
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-minimal overflow-hidden group hover:shadow-lg transition-all duration-300"
              style={{
                padding: '2rem',
                minHeight: '450px',
                maxWidth: '400px',
                margin: '0 auto',
                borderRadius: '16px'
              }}
            >
              {/* Imagen del proyecto */}
              <div
                className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 h-48 group-hover:scale-105 transition-transform duration-300"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                }}
              >
                <img
                  src={`/images/projects/${project.image}`}
                  alt={`Captura de pantalla del proyecto ${project.title}`}
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(0.95) contrast(1.05)'
                  }}
                  onError={(e) => {
                    // Fallback en caso de que la imagen no se encuentre
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback icon si la imagen no carga */}
                <div 
                  className="fallback-icon absolute inset-0 items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800"
                  style={{ display: 'none' }}
                >
                  <div className="text-6xl opacity-70">{project.icon}</div>
                </div>
                
                {/* Overlay con efecto hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Contenido del proyecto */}
              <div className="space-y-4">
                <div>
                  <h3
                    className="text-xl font-bold mb-2 tracking-tight group-hover:text-opacity-80 transition-colors duration-300"
                    style={{
                      color: 'var(--primary-green)',
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}
                  >
                    {project.title}
                  </h3>
                  
                  <p
                    className="text-sm font-semibold mb-3 opacity-80"
                    style={{ color: 'var(--secondary-green)' }}
                  >
                    {project.subtitle}
                  </p>
                </div>
                
                <p
                  className="leading-relaxed text-sm font-normal line-clamp-4"
                  style={{ 
                    color: 'var(--charcoal-text)',
                    lineHeight: '1.6'
                  }}
                >
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide dark:bg-gray-700 dark:text-gray-200 transition-all duration-200 hover:scale-105"
                      style={{
                        background: 'var(--light-sage)',
                        color: 'var(--primary-green)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-2">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-semibold transition-all duration-300 hover:opacity-70 hover:translate-y-[-2px] text-sm tracking-wide"
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