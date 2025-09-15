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
    <section id="about" className="pt-32 pb-20 text-center relative overflow-hidden"
             style={{ background: 'var(--cream)' }}>
      <div className="geometric-bg"></div>
      <div className="container">
        <div className="w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center text-white shadow-lg floating relative"
             style={{ background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))' }}>
          <TrendingUp size={48} strokeWidth={1.5} />
          <div className="absolute inset-0 rounded-full border-2 border-white opacity-20"></div>
        </div>
        
        <h1 className="text-5xl md:text-6xl mb-4 font-light tracking-tight"
            style={{ 
              color: 'var(--primary-green)', 
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: '700',
              letterSpacing: '-0.02em'
            }}>
          Agustina Ariana Mendoza
        </h1>
        
        <p className="text-lg font-medium uppercase tracking-[0.3em] mb-6 opacity-80"
           style={{ color: 'var(--secondary-green)' }}>
          Data Analyst
        </p>
        
        <p className="text-base max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed font-light"
           style={{ color: 'var(--charcoal-text)' }}>
          Estudiante de Ciencia de Datos en la Universidad de Buenos Aires, apasionada por transformar información en conocimiento útil.
           Me defino como una mente analítica con curiosidad constante, capaz de unir la lógica matemática con la creatividad para encontrar soluciones prácticas. 
          Mi meta es crecer dentro del mundo tecnológico, aportando valor a través del análisis, la visualización y la interpretación de datos.
        </p>
        
        <div className="flex gap-6 justify-center flex-wrap">
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