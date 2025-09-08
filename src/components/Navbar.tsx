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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 backdrop-blur-md"
         style={{ background: 'var(--soft-lavender)' }}>
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold transition-colors duration-300"
           style={{ 
             color: 'var(--primary-green)', 
             fontFamily: 'var(--font-heading)', 
             fontStyle: 'italic' 
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
                 className="font-medium transition-colors duration-300 hover:opacity-80"
                 style={{ color: 'var(--dark-charcoal)' }}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        
        <button 
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:transform hover:-translate-y-0.5"
          style={{ background: 'var(--primary-green)' }}>
          {darkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;