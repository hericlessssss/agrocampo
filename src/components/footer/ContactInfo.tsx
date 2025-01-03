import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-poppins text-lg font-semibold text-white mb-6">Contato</h3>
      <div className="flex items-center gap-3">
        <MapPin className="w-5 h-5 text-primary" />
        <p className="text-gray-300">R. do Ipiranga, 464, Corrente - PI, 64980-000</p>
      </div>
      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5 text-primary" />
        <a href="tel:+558935731221" className="text-gray-300 hover:text-primary">(89) 3573-1221</a>
      </div>
      <div className="flex items-center gap-3">
        <Mail className="w-5 h-5 text-primary" />
        <a href="mailto:contato@agrocampocorrente.com.br" className="text-gray-300 hover:text-primary">
          contato@agrocampocorrente.com.br
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Clock className="w-5 h-5 text-primary" />
        <p className="text-gray-300">Seg - Sáb: 08:00 - 18:00</p>
      </div>
    </div>
  );
};

export default ContactInfo;