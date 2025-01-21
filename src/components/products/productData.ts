import { Product } from '../../types/product';

export const products: Product[] = [
  // Eletrificadores
  {
    id: 'mp-1000',
    name: "Eletrificador MP 1000",
    description: "Eletrificador profissional para cercas elétricas. Ideal para pequenas áreas.",
    price: 794.00,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
    categoryId: 'eletrificadores',
    variants: [
      { id: 'mp-1000', name: 'MP 1000', price: 794.00 },
      { id: 'mp-2000', name: 'MP 2000', price: 1050.00 },
      { id: 'mp-4000', name: 'MP 4000', price: 1439.00 },
      { id: 'mp-8000', name: 'MP 8000', price: 2626.00 }
    ]
  },

  // Geradores Fotovoltaicos
  {
    id: 'gerador-25w',
    name: "Gerador Fotovoltaico 25 Watts",
    description: "Gerador solar para alimentação de cercas elétricas. Sistema completo e eficiente.",
    price: 1141.00,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
    categoryId: 'geradores',
    variants: [
      { id: 'gerador-25w', name: '25 Watts', price: 1141.00 },
      { id: 'gerador-55w', name: '55 Watts', price: 1976.00 },
      { id: 'gerador-95w', name: '95 Watts', price: 2615.00 }
    ]
  },

  // Cabos e Cordas
  {
    id: 'cabo-subterraneo-2.7',
    name: "Cabo Subterrâneo 2.7 mm",
    description: "Cabo subterrâneo de alta qualidade para instalações elétricas.",
    price: 500.00,
    image: "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80",
    categoryId: 'cabos'
  },
  {
    id: 'cabo-subterraneo-1.6',
    name: "Cabo Subterrâneo 1.6 mm",
    description: "Cabo subterrâneo ideal para instalações menores.",
    price: 437.00,
    image: "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80",
    categoryId: 'cabos'
  },
  {
    id: 'corda-eletroplastica',
    name: "Corda Eletroplástica 50m × 7mm",
    description: "Corda eletroplástica resistente e durável.",
    price: 687.00,
    image: "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80",
    categoryId: 'cabos'
  },
  {
    id: 'fio-eletroplastico',
    name: "Fio Eletroplástico 500m",
    description: "Fio eletroplástico para cercas elétricas.",
    price: 571.00,
    image: "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80",
    categoryId: 'cabos'
  },
  {
    id: 'insultubo',
    name: "Insultubo 9/16 × 50m",
    description: "Insultubo para proteção de fios e cabos.",
    price: 226.00,
    image: "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80",
    categoryId: 'cabos'
  },
  {
    id: 'fita-maxitape',
    name: "Fita Maxitape 50m 40mm",
    description: "Fita condutora de alta qualidade.",
    price: 141.00,
    image: "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80",
    categoryId: 'cabos'
  },
  {
    id: 'carretel-jumbo',
    name: "Carretel Jumbo",
    description: "Carretel para armazenamento de fios e cordas.",
    price: 345.00,
    image: "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80",
    categoryId: 'cabos'
  },

  // Medidores e Proteção
  {
    id: 'voltimetro-digital',
    name: "Voltímetro Digital 3 Dígitos",
    description: "Voltímetro digital preciso para medição de tensão.",
    price: 493.00,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'medidores'
  },
  {
    id: 'voltimetro-falhas',
    name: "Voltímetro Indicador de Falhas",
    description: "Voltímetro especializado para detecção de falhas.",
    price: 1560.00,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'medidores'
  },
  {
    id: 'kit-para-raios',
    name: "Kit Para-Raios",
    description: "Kit completo de proteção contra descargas.",
    price: 230.00,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'medidores'
  },

  // Isoladores com variações de preço
  {
    id: 'isolador-canto',
    name: "Isolador de Canto",
    description: "Isolador resistente para cantos de cerca elétrica.",
    price: 3.00,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'isoladores',
    variants: [
      { id: 'isolador-canto-un', name: 'Unidade', price: 3.00 },
      { id: 'isolador-canto-pc', name: 'Pacote c/ 25', price: 75.00 }
    ]
  },
  {
    id: 'isolador-linha-w',
    name: "Isolador de Linha W",
    description: "Isolador tipo W para cercas elétricas.",
    price: 3.00,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'isoladores',
    variants: [
      { id: 'isolador-linha-w-un', name: 'Unidade', price: 3.00 },
      { id: 'isolador-linha-w-pc', name: 'Pacote c/ 25', price: 75.00 }
    ]
  },
  {
    id: 'catraca-redonda',
    name: "Catraca Redonda de Alumínio",
    description: "Catraca de alta qualidade para tensionamento.",
    price: 26.50,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'isoladores',
    variants: [
      { id: 'catraca-redonda-un', name: 'Unidade', price: 26.50 },
      { id: 'catraca-redonda-pc', name: 'Pacote c/ 10', price: 265.00 }
    ]
  },
  {
    id: 'grampo-conector',
    name: "Grampo Conector",
    description: "Grampo para conexão de fios e cabos.",
    price: 9.50,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'isoladores',
    variants: [
      { id: 'grampo-conector-un', name: 'Unidade', price: 9.50 },
      { id: 'grampo-conector-pc', name: 'Pacote c/ 25', price: 237.50 }
    ]
  },

  // Acessórios
  {
    id: 'dispositivo-para-raios',
    name: "Dispositivo Para-Raios",
    description: "Dispositivo de proteção contra descargas atmosféricas.",
    price: 113.00,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'acessorios'
  },
  {
    id: 'chave-interruptora',
    name: "Chave Interruptora",
    description: "Chave para controle de circuito elétrico.",
    price: 81.00,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'acessorios'
  },
  {
    id: 'haste-aterramento',
    name: "Hastes de Aterramento",
    description: "Hastes para sistema de aterramento.",
    price: 81.00,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'acessorios'
  },
  {
    id: 'vareta-plastica',
    name: "Vareta Plástica",
    description: "Vareta para suporte de fios e cabos.",
    price: 31.50,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'acessorios'
  },
  {
    id: 'conector-galvanizado',
    name: "Conectores Galvanizado Para Hastes",
    description: "Conectores resistentes à corrosão.",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'acessorios'
  },
  {
    id: 'porteira-speed',
    name: "Porteira Speed Pró",
    description: "Porteira prática e resistente.",
    price: 26.00,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'acessorios'
  },
  {
    id: 'suporte-porteira',
    name: "Suporte de Porteira",
    description: "Suporte robusto para porteiras.",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'acessorios'
  },
  {
    id: 'isolador-anel',
    name: "Isoladores Tipo Anel",
    description: "Isoladores tipo anel para cercas.",
    price: 11.50,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'acessorios'
  },
  {
    id: 'chave-isolador-anel',
    name: "Chave Para Isolador Tipo Anel",
    description: "Ferramenta específica para isoladores tipo anel.",
    price: 16.00,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'acessorios'
  },
  {
    id: 'chave-catraca',
    name: "Chave Para Catraca Redonda",
    description: "Ferramenta para instalação de catracas.",
    price: 68.50,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    categoryId: 'acessorios'
  }
];