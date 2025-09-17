import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Experiencia Profesional */}
      <div className="flex justify-center">
        <div className="card-minimal max-w-md w-full">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 tracking-tight"
                style={{
                  color: 'var(--primary-green)',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
              Experiencia Profesional
            </h3>
            
            <div
              className="font-medium text-sm mb-3 tracking-wide"
              style={{ color: 'var(--primary-green)' }}
            >
              Junio 2025 - Presente
            </div>

            <h4
              className="text-2xl mb-3 font-semibold tracking-tight"
              style={{
                color: 'var(--charcoal-text)',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Pasante Analisis de Datos
            </h4>

            <div
              className="font-medium mb-6 text-lg"
              style={{ color: 'var(--secondary-green)' }}
            >
              Artech - Fundacion Pescar 
            </div>

            <p
              className="leading-relaxed text-base font-light"
              style={{ color: 'var(--charcoal-text)' }}
            >
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

      {/* Educación Universitaria */}
      <div className="flex justify-center">
        <div className="card-minimal max-w-md w-full">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 tracking-tight"
                style={{
                  color: 'var(--primary-green)',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
              Educación Universitaria
            </h3>
            
            <div
              className="font-medium text-sm mb-2 tracking-wide"
              style={{ color: 'var(--primary-green)' }}
            >
              2024 - Actualidad
            </div>

            <h4
              className="text-xl mb-2 font-semibold"
              style={{
                color: 'var(--charcoal-text)',
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Licenciatura en Ciencia de Datos
            </h4>

        </p>
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Licenciatura en Ciencia de Datos
          </h4>

          <div
            className="font-medium mb-4 text-lg"
            style={{ color: 'var(--secondary-green)' }}
          >
            Universidad de Buenos Aires
          </div>

          <p
            className="leading-relaxed text-base font-light"
            style={{ color: 'var(--charcoal-text)' }}
          >
            Formación integral en análisis de datos, estadística, machine learning y programación.
            Desarrollo competencias en Python, R, SQL y herramientas de visualización para resolver
            problemas complejos mediante el análisis de datos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;