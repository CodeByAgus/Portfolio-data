import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white text-center py-8 mt-20"
            style={{ background: 'var(--primary-green)' }}>
      <div className="container">
        <p>&copy; 2025, Agustina Mendoza Diseñado con 💚 y datos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;