import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

// 👉 Este componente se usará en la sección combinada de experiencia y educación
export const UniversityEducation: React.FC = () => {
  return (
    <div className="card-minimal w-full">
      <div className="text-center">
        <div className="font-medium text-sm mb-3 tracking-wide" style={{ color: 'var(--primary-green)' }}>
          2024 - Actualidad
        </div>

        <h3
          className="text-2xl mb-3 font-semibold tracking-tight"
          style={{
            color: 'var(--charcoal-text)',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Licenciatura en Ciencia de Datos
        </h3>

        <div className="font-medium mb-6 text-lg" style={{ color: 'var(--secondary-green)' }}>
          Universidad de Buenos Aires
        </div>

        <p className="leading-relaxed text-base font-light" style={{ color: 'var(--charcoal-text)' }}>
          Formación integral en análisis de datos, estadística, machine learning y programación.
          Desarrollando competencias en Python, R, SQL y herramientas de visualización para
          resolver problemas complejos mediante el análisis de datos.
        </p>
      </div>
    </div>
  );
};

// 👉 Este componente se mantiene como sección separada para certificaciones
const Education: React.FC = () => {
  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      institution: 'Google / Coursera',
      year: 'En curso',
      link: 'https://www.coursera.org/professional-certificates/google-data-analytics',
    },
    {
      title: 'Testing QA Manual',
      institution: 'Coderhouse',
      year: '2023',
      link: 'https://www.coderhouse.com/certificados/qa-manual',
    },
    {
      title: 'Programación Inicial con Python',
      institution: 'Talento Tech',
      year: '2023',
      link: 'https://talentotech.ar/python-inicial',
    },
    {
      title: 'Excel de Básico a Experto',
      institution: 'Udemy',
      year: '2022',
      link: 'https://www.udemy.com/course/excel-basico-a-avanzado/',
    },
  ];

  return (
    <section id="education" className="section relative" style={{ background: 'var(--soft-lavender)' }}>
      <div className="geometric-bg" />
      <div className="container">
        <h2 className="section-title">Certificaciones Profesionales</h2>
        <div className="card-minimal w-full">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award size={20} /> Cursos y Certificados
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="border-l-4 pl-4 border-green-500">
                <div className="text-lg font-medium">{cert.title}</div>
                <div className="text-sm text-gray-600">
                  {cert.institution} — {cert.year}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline flex items-center gap-1 text-sm"
                >
                  Ver certificado <ExternalLink size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
