import React, { memo, useMemo } from 'react';
import { Stethoscope, Leaf, PawPrint, Package, Sprout, Bird, Tractor } from 'lucide-react';
import ServiceCard from './ServiceCard';

// Definição dos serviços movida para fora do componente
const servicesData = [
  {
    id: 1,
    icon: PawPrint,
    title: 'Farmácia Veterinária',
    description: 'Medicamentos e produtos veterinários de alta qualidade para seus animais.'
  },
  {
    id: 2,
    icon: Leaf,
    title: 'Sementes',
    description: 'Variedade de sementes certificadas para cultivo e plantio.'
  },
  {
    id: 3,
    icon: Stethoscope,
    title: 'Atendimento veterinário',
    description: 'Profissionais qualificados para cuidar da saúde dos seus animais.'
  },
  {
    id: 4,
    icon: Package,
    title: 'Selas e Arreios',
    description: 'Produtos e acessórios para montaria de alta qualidade.'
  },
  {
    id: 5,
    icon: Sprout,
    title: 'Jardinagem',
    description: 'Produtos e ferramentas para jardinagem profissional.'
  },
  {
    id: 6,
    icon: Bird,
    title: 'Venda de Animais',
    description: 'Comercialização responsável de animais selecionados.'
  },
] as const;

// Componente de título memoizado
const SectionTitle = memo(() => (
  <div className="text-center mb-12">
    <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-4">
      Nossos Serviços
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Oferecemos uma ampla gama de serviços para atender todas as necessidades do campo.
    </p>
  </div>
));

SectionTitle.displayName = 'SectionTitle';

// Componente de grid memoizado
const ServicesGrid = memo(({ services }: { services: typeof servicesData }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {services.map((service) => (
      <ServiceCard
        key={service.id}
        icon={service.icon}
        title={service.title}
        description={service.description}
      />
    ))}
  </div>
));

ServicesGrid.displayName = 'ServicesGrid';

// Componente principal
const ServicesSection = () => {
  // Memoiza os serviços para evitar recriação a cada render
  const services = useMemo(() => servicesData, []);

  return (
    <section id="nossos-servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle />
        <ServicesGrid services={services} />
      </div>
    </section>
  );
};

export default memo(ServicesSection);