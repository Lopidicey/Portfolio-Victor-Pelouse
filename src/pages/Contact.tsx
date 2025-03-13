import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: <Mail size={24} />, text: "victorpelouse.pro@gmail.com" },
    { icon: <Phone size={24} />, text: "+33 6 14 28 73 36" },
    { icon: <MapPin size={24} />, text: "Canet-en-Roussillon, France" },
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, url: "https://linkedin.com" },
    { icon: <Github size={24} />, url: "https://github.com/Lopidicey" },
    { icon: <Twitter size={24} />, url: "https://x.com/Lopidicey" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Contactez-moi
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Informations de contact
              </h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="text-emerald-500 mr-4">{info.icon}</span>
                    {info.text}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Suivez-moi
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Envoyez-moi un message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}