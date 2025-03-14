import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-poppins text-lg font-semibold text-footer-text mb-6">Contato</h3>
      <div className="flex items-center gap-3">
        <MapPin className="w-5 h-5 text-accent" />
        <p className="text-footer-text/90">R. do Ipiranga, 464, Corrente - PI, 64980-000</p>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5 text-accent" />
        <a href="tel:+558935731221" className="text-footer-text/90 hover:text-footer-hover">
          (89) 3573-1221
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 text-accent" />
        <a href="mailto:contato@agrocampocorrente.com.br" className="text-footer-text/90 hover:text-footer-hover">
          agrocampocorrente@gmail.com
        </a>
      </div>
      <div className="flex items-start gap-3">
        <Clock className="w-5 h-5 text-accent" />
        <div className="flex flex-col">
          <p className="text-footer-text/90">Seg - Sex: 07:00 - 18:00</p>
          <p className="text-footer-text/90">Sáb: 07:00 - 17:00</p>
        </div>
      </div>

    </div>
  );
};

export default ContactInfo;