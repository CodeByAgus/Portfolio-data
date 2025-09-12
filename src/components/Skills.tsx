import React from 'react';
import { Database, BarChart3, Code, FileSpreadsheet } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'SQL',
      icon: <Database size={36} />, // más chico
      details: [
        'Consultas complejas y optimización',
        'Stored procedures y funciones',
        'Análisis de rendimiento de BD',
        'PostgreSQL, MySQL, SQL Server'
      ]
    },
    {
      name: 'Power BI',
      icon: <BarChart3 size={36} />,
      details: [
        'Dashboards interactivos',
        'Modelado de datos con DAX',
        'Reportes automatizados',
        'Integración con múltiples fuentes'
      ]
    },
    {
      name: 'Python',
      icon: <Code size={36} />,
      details: [
        'Pandas y NumPy para análisis',
        'Machine Learning con Scikit-learn',
        'Visualización con Matplotlib',
        'Automatización de procesos'
      ]
    },
    {
      name: 'Excel',
      icon: <FileSpreadsheet size={36} />,
      details: [
        'Análisis avanzado con tablas dinámicas',
        'Macros y automatización VBA',
        'Modelado financiero',
        'Visualizaciones y gráficos'
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="section relative"
      style={{ background: 'var(--soft-lavender)' }}
    >
      <div className="geometric-bg"></div>
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="card-minimal text-center group"
              >
                <div
                  className="flex justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: 'var(--primary-green)' }}
                >
                  {skill.icon}
                </div>

                <h3
                  className="text-lg font-semibold mb-5 tracking-tight"
                  style={{
                    color: 'var(--primary-green)',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}
                >
                  {skill.name}
                </h3>

                <ul className="text-left space-y-3">
                  {skill.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start gap-3 text-sm font-light"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ background: 'var(--secondary-green)' }}
                      ></span>
                      <span style={{ color: 'var(--charcoal-text)', lineHeight: '1.5' }}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
