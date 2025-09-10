import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: <Mail size={32} />,
      label: 'Email',
      href: 'mailto:agusmendoza436@gmail.com'
    },
    {
      icon: <Linkedin size={32} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mendozaagus'
    },
    {
      icon: <Github size={32} />,
      label: 'GitHub',
      href: 'https://github.com/CodeByAgus'
    },
    {
      icon: <Phone size={32} />,
      label: 'Teléfono',
      href: 'tel:+54-11-5947-8248'
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">¡Conectemos!</h2>
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg mb-10 opacity-80"
             style={{ color: 'var(--dark-charcoal)' }}>
            Estoy siempre abierta a nuevos desafíos y oportunidades de colaboración. 
            Si tienes un proyecto emocionante o quieres charlar sobre datos y tecnología, no dudes en contactarme.
          </p>
          
          <div className="flex justify-center gap-8 flex-wrap">
            {contactLinks.map((link, index) => (
              <a key={index}
                 href={link.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex flex-col items-center p-5 rounded-2xl shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl min-w-28"
                 style={{ 
                   background: 'var(--cream)',
                   color: 'var(--primary-green)'
                 }}>
                <div className="mb-3">
                  {link.icon}
                </div>
                <span className="font-semibold text-sm">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
