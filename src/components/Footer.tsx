import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
     className="text-center py-10 mt-20 relative overflow-hidden bg-gradient-to-br from-[var(--primary-green)] to-[var(--secondary-green)] dark:bg-[var(--darkbg)]"
    >
      <div className="absolute inset-0 bg-white opacity-5 dark:bg-black dark:opacity-10"></div>
      <div className="container">
        <p className="font-light text-sm tracking-wide relative z-10 text-white dark:text-gray-300">
          &copy; 2025, Agustina Mendoza Diseñado con 💚 y datos. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;