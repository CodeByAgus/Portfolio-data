import React from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5 backdrop-blur-xl border-b border-opacity-10"
         style={{ 
           background: 'rgba(255, 253, 247, 0.85)',
           borderColor: 'var(--primary-green)'
         }}>
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <a href="#" className="text-xl font-semibold transition-colors duration-300 tracking-tight"
           style={{ 
             color: 'var(--primary-green)', 
             fontFamily: "'Space Grotesk', sans-serif"
           }}>
          Agustina Mendoza
        </a>
        
        <ul className="hidden md:flex list-none gap-8">
          {[
            { href: '#about', text: 'Sobre Mí' },
            { href: '#skills', text: 'Habilidades' },
            { href: '#projects', text: 'Proyectos' },
            { href: '#experience', text: 'Experiencia' },
            { href: '#contact', text: 'Contacto' }
          ].map((link) => (
            <li key={link.href}>
              <a href={link.href}
                 onClick={(e) => handleSmoothScroll(e, link.href)}
                 className="font-medium transition-all duration-300 hover:opacity-80 text-sm tracking-wide relative group"
                 style={{ color: 'var(--charcoal-text)' }}>
                {link.text}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"
                      style={{ background: 'var(--primary-green)' }}></span>
              </a>
            </li>
          ))}
        </ul>
        
        <button 
          onClick={toggleDarkMode}
          className="px-5 py-2.5 rounded-full text-white text-sm font-medium transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg"
          style={{ 
            background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))'
          }}>
          {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;