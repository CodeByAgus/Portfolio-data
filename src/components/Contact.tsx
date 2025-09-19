import React, { useState } from 'react';
import { Mail, Linkedin, Github, Download, X, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Configuración de EmailJS - REEMPLAZA ESTOS VALORES
      const SERVICE_ID = 'service_26qztta';        // Obten de emailjs.com
      const TEMPLATE_ID = 'template_fum46lf';      // Obten de emailjs.com  
      const PUBLIC_KEY = 'T5MYdPMBKqGuiNjbR';       // Obten de emailjs.com
      
      // Parámetros del template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Consulta desde Portfolio',
        message: formData.message,
        to_email: 'agusmendoza436@gmail.com'
      };
      
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      alert('¡Mensaje enviado exitosamente!');
      handleCloseModal();
      
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      
      // Fallback: abrir cliente de email
      const subject = encodeURIComponent(formData.subject || 'Consulta desde Portfolio');
      const body = encodeURIComponent(
        `Hola Agustina,\n\n` +
        `Mi nombre es ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `${formData.message}\n\n` +
        `Saludos cordiales.`
      );
      
      window.location.href = `mailto:agusmendoza436@gmail.com?subject=${subject}&body=${body}`;
      handleCloseModal();
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadCV = () => {
    // Ruta donde debe estar ubicado tu CV (ver explicación abajo)
    const cvUrl = '/Public/CV-Agustina-Mendoza.pdf';
    
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
      onClick: undefined
    },
    {
      icon: <Github size={32} />,
      label: 'GitHub',
      href: 'https://github.com/CodeByAgus',
      onClick: undefined
    },
    {
      icon: <Download size={32} />,
      label: 'CV',
      href: '#',
      onClick: handleDownloadCV
    }
  ];

  return (
    <>
      <section id="contact" className="section relative">
        <div className="geometric-bg"></div>
        <div className="container">
          <h2 className="section-title">¡Conectemos!</h2>
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-base mb-12 opacity-90 font-light leading-relaxed"
               style={{ color: 'var(--charcoal-text)' }}>
              Estoy siempre abierta a nuevos desafíos y oportunidades de colaboración. 
              Si tienes un proyecto emocionante o quieres charlar sobre datos y tecnología, no dudes en contactarme.
            </p>
            
            <div className="flex justify-center gap-6 flex-wrap">
              {contactLinks.map((link, index) => (
                <a key={index}
                   href={link.href}
                   target={link.href.startsWith('http') ? "_blank" : undefined}
                   rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                   onClick={link.onClick}
                   className="card-minimal flex flex-col items-center min-w-28 group cursor-pointer"
                   style={{ color: 'var(--primary-green)' }}>
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    {link.icon}
                  </div>
                  <span className="font-medium text-sm tracking-wide">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal del formulario de contacto */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Enviar mensaje</h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Asunto del mensaje"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    {isLoading ? 'Enviando...' : 'Enviar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
