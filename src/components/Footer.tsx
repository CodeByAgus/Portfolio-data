import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white text-center py-10 mt-20 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--primary-green), var(--secondary-green))' }}>
      <div className="absolute inset-0 bg-white opacity-5"></div>
      <div className="container">
        <p className="font-light text-sm tracking-wide relative z-10">
          &copy; 2025, Agustina Mendoza Diseñado con 💚 y datos. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;