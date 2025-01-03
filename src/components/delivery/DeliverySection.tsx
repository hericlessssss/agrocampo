import React from 'react';
import { Truck, Clock, MapPin, Phone } from 'lucide-react';

const DeliverySection = () => {
  return (
    <section id="tele-entregas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-4">
            Tele Entregas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entregamos em Corrente e região. Faça seu pedido pelo WhatsApp!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Truck className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-gray-800 mb-2">
                  Entrega Rápida e Segura
                </h3>
                <p className="text-gray-600">
                  Entregamos seus produtos com agilidade e segurança em toda região de Corrente - PI
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-gray-800 mb-2">
                  Horário de Entregas
                </h3>
                <p className="text-gray-600">
                  Segunda a Sábado: 08:00 às 18:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-gray-800 mb-2">
                  Área de Cobertura
                </h3>
                <p className="text-gray-600">
                  Atendemos Corrente e municípios vizinhos em um raio de até 100km
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-gray-800 mb-2">
                  Faça seu Pedido
                </h3>
                <a 
                  href="https://wa.me/5589999731221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent transition-colors duration-200"
                >
                  (89) 99973-1221
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31439.035557942236!2d-43.34007365!3d-10.4406493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76b16e22f0000001%3A0x86f511e60e6593ac!2sCorrentes%2C%20PI%2C%2064980-000!5e0!3m2!1spt-BR!2sbr!4v1710561234567!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Mapa de Entrega"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;