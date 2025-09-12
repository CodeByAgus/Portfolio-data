import React from 'react';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Configuración de EmailJS - Reemplaza estos valores con los reales de tu cuenta
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
    
    // Si las credenciales no están configuradas, usar fallback directo
    if (SERVICE_ID === 'YOUR_SERVICE_ID' || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      // Abrir cliente de email por defecto
      window.location.href = 'mailto:agusmendoza436@gmail.com?subject=Consulta sobre oportunidades laborales - Data Analyst&body=Hola Agustina,%0D%0A%0D%0AMe pongo en contacto contigo porque...%0D%0A%0D%0A[Escribe tu mensaje aquí]%0D%0A%0D%0ASaludos cordiales.';
      return;
    }

    // Configuración del email con EmailJS (solo si las credenciales están configuradas)
    const templateParams = {
      to_email: 'agusmendoza436@gmail.com',
      subject: 'Consulta sobre oportunidades laborales - Data Analyst',
      message: 'Hola Agustina,\n\nMe pongo en contacto contigo porque...\n\n[Escribe tu mensaje aquí]\n\nSaludos cordiales.'
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email enviado exitosamente!', response.status, response.text);
        alert('¡Email enviado exitosamente!');
      })
      .catch((error) => {
        console.error('Error al enviar email:', error);
        // Fallback: abrir cliente de email por defecto
        window.location.href = 'mailto:agusmendoza436@gmail.com?subject=Consulta sobre oportunidades laborales - Data Analyst&body=Hola Agustina,%0D%0A%0D%0AMe pongo en contacto contigo porque...%0D%0A%0D%0A[Escribe tu mensaje aquí]%0D%0A%0D%0ASaludos cordiales.';
      });
  };

  const handleDownloadCV = () => {
    // Aquí deberías poner la ruta real de tu CV
    // Por ejemplo: '/assets/cv-agustina-mendoza.pdf'
    const cvUrl = '/cv-agustina-mendoza.pdf';
    
    // Crear un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV-Agustina-Mendoza.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactLinks = [
    {
      icon: <Mail size={32} />,
      label: 'Email',
      href: '#',
      onClick: handleEmailClick
    },
    {
      icon: <Linkedin size={32} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mendozaagus',
      onClick: null
    },
    {
      icon: <Github size={32} />,
      label: 'GitHub',
      href: 'https://github.com/CodeByAgus',
      onClick: null
    },
    {
      icon: <Download size={32} />,
      label: 'CV',
      href: '#',
      onClick: handleDownloadCV
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">¡Conectemos!</h2>
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg mb-10 opacity-80"
             style={{ color: 'var(--charcoal-text)' }}>
            Estoy siempre abierta a nuevos desafíos y oportunidades de colaboración. 
            Si tienes un proyecto emocionante o quieres charlar sobre datos y tecnología, no dudes en contactarme.
          </p>
          
          <div className="flex justify-center gap-8 flex-wrap">
            {contactLinks.map((link, index) => (
              <a key={index}
                 href={link.href}
                 target={link.href.startsWith('http') ? "_blank" : undefined}
                 rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                 onClick={link.onClick}
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
