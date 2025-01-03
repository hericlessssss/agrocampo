import React from 'react';
import { Stethoscope, Leaf, Wrench, PawPrint, Trees, HardHat, Sprout, Bird, Package } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: PawPrint,
    title: 'Farmácia veterinária',
    description: 'Medicamentos e produtos veterinários de alta qualidade para seus animais.'
  },
  {
    icon: Leaf,
    title: 'Sementes',
    description: 'Variedade de sementes certificadas para cultivo e plantio.'
  },
  {
    icon: Wrench,
    title: 'Pistolas Sincro',
    description: 'Equipamentos profissionais para manejo de rebanho.'
  },
  {
    icon: Stethoscope,
    title: 'Atendimento veterinário',
    description: 'Profissionais qualificados para cuidar da saúde dos seus animais.'
  },
  {
    icon: Trees,
    title: 'Instalação de cercas elétricas',
    description: 'Serviço completo de instalação e manutenção de cercas elétricas.'
  },
  {
    icon: HardHat,
    title: 'Loja Country',
    description: 'Moda country e acessórios para o homem do campo.'
  },
  {
    icon: Sprout,
    title: 'Jardinagem',
    description: 'Produtos e ferramentas para jardinagem profissional.'
  },
  {
    icon: Bird,
    title: 'Venda de Animais',
    description: 'Comercialização responsável de animais selecionados.'
  },
  {
    icon: Package,
    title: 'Produtos agropecuários',
    description: 'Linha completa de produtos para agricultura e pecuária.'
  }
];

const ServicesSection = () => {
  return (
    <section id="nossos-servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços para atender todas as necessidades do campo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;