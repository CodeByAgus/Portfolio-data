import React from 'react';
import { TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="about" className="pt-32 pb-20 text-center"
             style={{ background: 'linear-gradient(135deg, var(--soft-lavender), var(--soft-lavender)' }}>
      <div className="container">
        <div className="w-44 h-44 rounded-full mx-auto mb-8 flex items-center justify-center text-white shadow-xl"
             style={{ background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))' }}>
          <TrendingUp size={64} />
        </div>
        
        <h1 className="text-6xl mb-3"
            style={{ 
              color: 'var(--primary-green)', 
              fontFamily: 'var(--font-heading)'
            }}>
          Agustina Ariana Mendoza
        </h1>
        
        <p className="text-xl font-light uppercase tracking-widest mb-5"
           style={{ color: 'var(--secondary-green)' }}>
          Data Analyst
        </p>
        
        <p className="text-lg max-w-2xl mx-auto mb-10 opacity-80 leading-relaxed"
           style={{ color: 'var(--charcoal-text)' }}>
          Estudiante de Ciencia de Datos en la Universidad de Buenos Aires, apasionada por transformar información en conocimiento útil.
           Me defino como una mente analítica con curiosidad constante, capaz de unir la lógica matemática con la creatividad para encontrar soluciones prácticas. 
          Mi meta es crecer dentro del mundo tecnológico, aportando valor a través del análisis, la visualización y la interpretación de datos.
        </p>
        
        <div className="flex gap-5 justify-center flex-wrap">
          <a href="#projects" 
             onClick={(e) => handleSmoothScroll(e, '#projects')}
             className="btn-primary">
            Ver Proyectos
          </a>
          <a href="#contact" 
             onClick={(e) => handleSmoothScroll(e, '#contact')}
             className="btn-secondary">
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;