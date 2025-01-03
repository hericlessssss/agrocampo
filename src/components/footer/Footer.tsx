import React from 'react';
import ContactInfo from './ContactInfo';
import QuickLinks from './QuickLinks';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <ContactInfo />
          <QuickLinks />
          <div className="space-y-6">
            <h3 className="font-poppins text-lg font-semibold text-white mb-6">Siga-nos</h3>
            <p className="text-gray-300 mb-4">
              Acompanhe nossas redes sociais para novidades, promoções e dicas para o campo.
            </p>
            <SocialLinks />
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 space-y-2">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} AGROCAMPO Corrente. Todos os direitos reservados.
          </p>
          <p className="text-center text-gray-400">
            {' '}
            <a 
              href="https://www.instagram.com/labora_tech/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Desenvolvido por Labora Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;