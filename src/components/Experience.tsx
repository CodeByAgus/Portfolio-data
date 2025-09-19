import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row"> {/* Contenedor flex responsive */}
        <div className="w-full md:w-1/2 md:pr-4 mb-8 md:mb-0"> {/* Ancho para la sección de experiencia */}
          <div className="flex justify-center">
            <div className="card-minimal max-w-md">
              <div className="text-center">
                <div
                  className="font-medium text-sm mb-3 tracking-wide"
                  style={{ color: 'var(--primary-green)' }}
                >
                  Junio 2025 - Presente
                </div>

                <h3
                  className="text-2xl mb-3 font-semibold tracking-tight"
                  style={{
                    color: 'var(--charcoal-text)',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Pasante Analisis de Datos
                </h3>

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
                  Pasantía con formación y participación en proyectos orientados a la inserción laboral en el sector IT. Se realizaron proyectos aplicando tecnologías como SQL, Power BI, Python, Databricks y PowerApps, junto con el desarrollo de habilidades socioemocionales y trabajo colaborativo.

                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Educación */}
        <div className="w-full md:w-1/2 md:pl-4 items-start"> {/* Removido mt-16 y agregadas clases responsive */}
          <div className="max-w-md text-left">
            <h3 className="text-xl font-semibold mb-8 tracking-tight"
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
              La Licenciatura en Ciencia de Datos de la UBA forma profesionales capaces de analizar, interpretar y extraer valor de grandes volúmenes de datos. El egresado está preparado para aplicar herramientas estadísticas, algoritmos de machine learning y técnicas de visualización para resolver problemas en diversos sectores como la industria, la salud y el comercio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;