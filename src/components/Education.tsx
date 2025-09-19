import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const Education: React.FC = () => {
  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      institution: 'Google / Coursera',
      year: 'En curso',
      link: 'https://drive.google.com/drive/u/0/folders/1SXxEadDg3fOKPsiF918Id02iFUquvd_P?q=sharedwith:public%20parent:1HIjjwFsee3TTmzRhdMMB7BPwnuo3YFa6',
    },
    {
      title: 'Programación Inicial con Python',
      institution: 'Talento Tech',
      year: '2025',
      link: 'https://talentotech.ar/python-inicial',
    },
    {
      title: 'Excel de Básico a Experto',
      institution: 'Udemy',
      year: '2025',
      link: 'https://drive.google.com/file/d/1knx6BSGhjWVItSLYaGyyOs7ZF-oPQ29w/view?usp=sharing',
    },
     {
      title: 'Testing QA Manual',
      institution: 'Coderhouse',
      year: '2024',
      link: 'https://drive.google.com/drive/folders/1HIjjwFsee3TTmzRhdMMB7BPwnuo3YFa6',
    },
  ];

  return (
    <section id="education" className="section relative" style={{ background: 'var(--soft-lavender)' }}>
      <div className="geometric-bg" />
      <div className="container">
        <h2 className="section-title">Certificaciones </h2>
        <div className="card-minimal w-full">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Award size={20} /> Cursos y Certificados
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="border-l-4 pl-4 border--primary-green:;">
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
