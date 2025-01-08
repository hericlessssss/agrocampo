import React from 'react';
import ContactInfo from './ContactInfo';
import QuickLinks from './QuickLinks';
import SocialLinks from './SocialLinks';
import CepeaWidget from './CepeaWidget';

const Footer = () => {
  return (
    <footer id="contato" className="bg-footer-bg pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-3">
            <ContactInfo />
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <QuickLinks />
          </div>

          {/* Social Links */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <h3 className="font-poppins text-lg font-semibold text-footer-text mb-6">Siga-nos</h3>
              <p className="text-footer-text/90 mb-4">
                Acompanhe nossas redes sociais para novidades, promoções e dicas para o campo.
              </p>
              <SocialLinks />
            </div>
          </div>

          {/* CEPEA Widget */}
          <div className="lg:col-span-3">
            <CepeaWidget />
          </div>
        </div>
        
        <div className="border-t border-footer-hover/20 pt-8 space-y-2">
          <p className="text-center text-footer-text/80">
            © {new Date().getFullYear()} AGRO CAMPO Corrente. Todos os direitos reservados.
          </p>
          <p className="text-center text-footer-text/80">
            {' '}
            <a 
              href="https://www.instagram.com/labora_tech/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
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