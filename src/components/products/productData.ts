// src/components/products/productData.ts
import { Product } from '../../types/product';

export const products: Product[] = [
  // Eletrificadores
  {
<<<<<<< HEAD
    id: '1',
    name: "Ração Premium para Bovinos",
    description: "Ração balanceada com alto teor proteico para engorda de bovinos",
    versions: [
      { version: "500g", price: 89.90 },
      { version: "1kg", price: 149.90 },
      { version: "5kg", price: 699.90 },
    ],
    image: "https://images.unsplash.com/photo-1554522844-a4ce09fd8313?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoryId: 'feed',
    featured: true,
    price: 89.90, // Preço da versão mais barata
  },
  {
    id: '2',
    name: "Kit Veterinário Básico",
    description: "Kit completo com instrumentos essenciais para cuidados veterinários",
    versions: [
      { version: "Básico", price: 299.90 },
      { version: "Completo", price: 499.90 },
    ],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80",
    categoryId: 'veterinary',
    price: 299.90, // Preço da versão básica
  },
  {
    id: '3',
    name: "Sementes de Capim Brachiaria",
    description: "Sementes certificadas para formação de pastagem",
    versions: [
      { version: "Pacote 1kg", price: 45.90 },
      { version: "Pacote 5kg", price: 199.90 },
    ],
    image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&q=80",
    categoryId: 'seeds',
    price: 45.90, // Preço do pacote de 1kg
  },
  {
    id: '4',
    name: "Cerca Elétrica Solar 1000m",
    description: "Kit completo de cerca elétrica com painel solar",
    versions: [
      { version: "1000m", price: 799.90 },
      { version: "2000m", price: 1399.90 },
    ],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
    categoryId: 'equipment',
    featured: true,
    price: 799.90, // Preço da versão de 1000m
  },
  {
    id: '5',
    name: "Chapéu Country Premium",
    description: "Chapéu de couro legítimo para trabalho no campo",
    versions: [
      { version: "P", price: 189.90 },
      { version: "M", price: 199.90 },
      { version: "G", price: 209.90 },
    ],
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80",
    categoryId: 'country',
    price: 189.90, // Preço da versão P
  },
  {
    id: '6',
    name: "Kit Jardinagem Profissional",
    description: "Conjunto completo de ferramentas para jardinagem",
    versions: [
      { version: "Básico", price: 249.90 },
      { version: "Avançado", price: 399.90 },
    ],
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80",
    categoryId: 'garden',
    price: 249.90, // Preço da versão básica
  },
  {
    id: '7',
    name: "Suplemento Mineral Premium",
    description: "Suplemento mineral completo para bovinos",
    versions: [
      { version: "500g", price: 129.90 },
      { version: "1kg", price: 199.90 },
    ],
    image: "https://images.unsplash.com/photo-1560893788-e932737f218b?auto=format&fit=crop&q=80",
    categoryId: 'feed',
    price: 129.90, // Preço da versão de 500g
  },
  {
    id: '8',
    name: "Botina de Segurança",
    description: "Botina em couro com biqueira de aço",
    versions: [
      { version: "P", price: 159.90 },
      { version: "M", price: 169.90 },
      { version: "G", price: 179.90 },
    ],
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80",
    categoryId: 'country',
    price: 159.90, // Preço da versão P
  },
=======
    id: 'mp-1000',
    name: "Eletrificador MP 1000",
    description: "Eletrificador profissional para cercas elétricas.",
    price: 794.00,
    images: [
      "https://br.speedrite.com/sites/default/files/linha-mp-mp1000.png",
      "https://br.speedrite.com/sites/default/files/linha-mp-mp2000.png",
      "https://br.speedrite.com/sites/default/files/linha-mp-mp4000.png",
      "https://br.speedrite.com/sites/default/files/linha-mp-mp8000.png"
    ],
    categoryId: 'eletrificadores',
    specifications: [
      "Alcance: 15km de cerca",
      "Tensão máxima: 9.000V",
      "Consumo: 0.15Ah/dia",
      "Proteção contra raios"
    ],
    variants: [
      {
        id: 'mp-1000',
        name: 'MP 1000',
        price: 794.00,
        images: [
          "https://br.speedrite.com/sites/default/files/linha-mp-mp1000.png",
          "https://br.speedrite.com/sites/default/files/linha-mp-mp1000.png"
        ]
      },
      {
        id: 'mp-2000',
        name: 'MP 2000',
        price: 1050.00,
        images: [
          "https://br.speedrite.com/sites/default/files/linha-mp-mp2000.png",
          "https://br.speedrite.com/sites/default/files/linha-mp-mp2000.png"
        ]
      },
      {
        id: 'mp-4000',
        name: 'MP 4000',
        price: 1439.00,
        images: [
          "https://br.speedrite.com/sites/default/files/linha-mp-mp4000.png",
          "https://br.speedrite.com/sites/default/files/linha-mp-mp4000.png"
        ]
      },
      {
        id: 'mp-8000',
        name: 'MP 8000',
        price: 2626.00,
        images: [
          "https://br.speedrite.com/sites/default/files/linha-mp-mp8000.png",
          "https://br.speedrite.com/sites/default/files/linha-mp-mp8000.png"
        ]
      }
    ],
    stock: 15,
    rating: 4.8,
    sku: 'ELET-MP1000'
  },

  // Geradores Fotovoltaicos
  {
    id: 'gerador-25w',
    name: "Gerador Fotovoltaico 25 Watts",
    description: "Gerador solar para alimentação de cercas elétricas. Sistema completo e eficiente.",
    price: 1141.00,
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
    ],
    categoryId: 'geradores',
    specifications: [
      "Potência: 25 Watts",
      "Tensão de saída: 12V",
      "Eficiência: Alta performance mesmo em dias nublados",
      "Durabilidade: Painéis resistentes a intempéries"
    ],
    variants: [
      {
        id: 'gerador-25w',
        name: '25 Watts',
        price: 1141.00,
        images: [
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
        ]
      },
      {
        id: 'gerador-55w',
        name: '55 Watts',
        price: 1976.00,
        images: [
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
        ]
      },
      {
        id: 'gerador-95w',
        name: '95 Watts',
        price: 2615.00,
        images: [
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80"
        ]
      }
    ],
    stock: 10,
    rating: 4.7,
    sku: 'GER-25W'
  },

  // Cabos e Cordas
  {
    id: 'cabo-subterraneo-2.7',
    name: "Cabo Subterrâneo 2.7 mm",
    description: "Cabo subterrâneo de alta qualidade para instalações elétricas.",
    price: 500.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'cabos',
    specifications: [
      "Espessura: 2.7 mm",
      "Material: Cobre",
      "Isolamento: PVC"
    ],
    stock: 50,
    rating: 4.7,
    sku: 'CABO-27'
  },
  {
    id: 'cabo-subterraneo-1.6',
    name: "Cabo Subterrâneo 1.6 mm",
    description: "Cabo subterrâneo ideal para instalações menores.",
    price: 437.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'cabos',
    specifications: [
      "Espessura: 1.6 mm",
      "Material: Cobre",
      "Isolamento: PVC"
    ],
    stock: 40,
    rating: 4.5,
    sku: 'CABO-16'
  },
  {
    id: 'corda-eletroplastica',
    name: "Corda Eletroplástica 50m × 7mm",
    description: "Corda eletroplástica resistente e durável.",
    price: 687.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'cabos',
    specifications: [
      "Comprimento: 50m",
      "Espessura: 7mm",
      "Resistência: Alta"
    ],
    stock: 30,
    rating: 4.6,
    sku: 'CORD-50M'
  },
  {
    id: 'fio-eletroplastico',
    name: "Fio Eletroplástico 500m",
    description: "Fio eletroplástico para cercas elétricas.",
    price: 571.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'cabos',
    specifications: [
      "Comprimento: 500m",
      "Material: Polipropileno",
      "Condutividade: Alta"
    ],
    stock: 25,
    rating: 4.4,
    sku: 'FIO-500M'
  },
  {
    id: 'insultubo',
    name: "Insultubo 9/16 × 50m",
    description: "Insultubo para proteção de fios e cabos.",
    price: 226.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'cabos',
    specifications: [
      "Diâmetro: 9/16",
      "Comprimento: 50m",
      "Material: PVC"
    ],
    stock: 60,
    rating: 4.3,
    sku: 'INSUL-50M'
  },
  {
    id: 'fita-maxitape',
    name: "Fita Maxitape 50m 40mm",
    description: "Fita condutora de alta qualidade.",
    price: 141.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'cabos',
    specifications: [
      "Comprimento: 50m",
      "Espessura: 40mm",
      "Material: Condutor de alta qualidade"
    ],
    stock: 45,
    rating: 4.2,
    sku: 'FITA-50M'
  },
  {
    id: 'carretel-jumbo',
    name: "Carretel Jumbo",
    description: "Carretel jumbo para cercas elétricas.",
    price: 345.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 20,
    rating: 4.6,
    sku: 'CARRETEL-JUMBO'
  },
  {
    id: 'voltimetro-digital',
    name: "Voltímetro Digital 3 Dígitos",
    description: "Voltímetro digital de 3 dígitos para medição precisa.",
    price: 493.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 15,
    rating: 4.7,
    sku: 'VOLT-3DIG'
  },
  {
    id: 'voltimetro-falhas',
    name: "Voltímetro Indicador de Falhas",
    description: "Voltímetro com indicador de falhas, essencial para diagnóstico.",
    price: 1560.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 10,
    rating: 4.8,
    sku: 'VOLT-FALHAS'
  },
  {
    id: 'kit-para-raios',
    name: "Kit Para-Raios",
    description: "Kit completo para proteção contra raios.",
    price: 230.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 30,
    rating: 4.5,
    sku: 'KIT-PARA-RAIOS'
  },
  {
    id: 'dispositivo-para-raios',
    name: "Dispositivo Para-Raios",
    description: "Dispositivo de proteção contra raios.",
    price: 113.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 25,
    rating: 4.3,
    sku: 'DISPOSITIVO-RAIOS'
  },
  {
    id: 'chave-interruptora',
    name: "Chave Interruptora",
    description: "Chave interruptora para controle de circuitos.",
    price: 81.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 50,
    rating: 4.6,
    sku: 'CHAVE-INTERRUPTORA'
  },
  {
    id: 'hastes-de-aterramento',
    name: "Hastes de Aterramento",
    description: "Hastes para aterramento de cercas elétricas.",
    price: 81.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 40,
    rating: 4.5,
    sku: 'HASTES-ATERRAMENTO'
  },
  {
    id: 'vareta-plastica',
    name: "Vareta Plástica",
    description: "Vareta plástica para instalação de cercas elétricas.",
    price: 31.50,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 60,
    rating: 4.4,
    sku: 'VARETA-PLASTICA'
  },
  {
    id: 'conectores-galvanizado',
    name: "Conectores Galvanizado Para Hastes",
    description: "Conectores galvanizados para hastes de aterramento.",
    price: 18.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 100,
    rating: 4.3,
    sku: 'CONECTOR-GALVANIZADO'
  },
  {
    id: 'porteira-speed-pro',
    name: "Porteira Speed Pró",
    description: "Porteira Speed Pró para cercas elétricas.",
    price: 26.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 40,
    rating: 4.5,
    sku: 'PORTEIRA-SPEED-PRO'
  },
  {
    id: 'suporte-de-porteira',
    name: "Suporte de Porteira",
    description: "Suporte resistente para porteiras.",
    price: 22.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 50,
    rating: 4.4,
    sku: 'SUPORTE-PORTEIRA'
  },
  {
    id: 'isoladores-anel',
    name: "Isoladores Tipo Anel",
    description: "Isoladores do tipo anel para cercas elétricas.",
    price: 11.50,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 150,
    rating: 4.6,
    sku: 'ISOLADOR-ANEL'
  },
  {
    id: 'chave-para-isolador-anel',
    name: "Chave Para Isolador Tipo Anel",
    description: "Chave para instalação de isoladores tipo anel.",
    price: 16.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 50,
    rating: 4.3,
    sku: 'CHAVE-ISOLADOR-ANEL'
  },
  {
    id: 'chave-para-catraca-redonda',
    name: "Chave Para Catraca Redonda",
    description: "Chave para operação de catracas redondas.",
    price: 68.50,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 35,
    rating: 4.7,
    sku: 'CHAVE-CATRACA-REDONDA'
  },
  {
    id: 'isolador-canto',
    name: "Isolador de Canto",
    description: "Isolador de canto para cercas elétricas.",
    price: 3.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 250,
    rating: 4.5,
    sku: 'ISOLADOR-CANTO'
  },
  {
    id: 'isolador-linha-w',
    name: "Isolador de Linha W",
    description: "Isolador de linha W para cercas elétricas.",
    price: 3.00,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 200,
    rating: 4.4,
    sku: 'ISOLADOR-LINHA-W'
  },
  {
    id: 'catraca-redonda-aluminio',
    name: "Catraca Redonda de Alumínio",
    description: "Catraca redonda de alumínio para cercas elétricas.",
    price: 26.50,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 60,
    rating: 4.6,
    sku: 'CATRACA-REDONDA-ALUMINIO'
  },
  {
    id: 'grampo-conector',
    name: "Grampo Conector",
    description: "Grampo conector para fixação de fios.",
    price: 9.50,
    images: [
      "https://images.unsplash.com/photo-1601084881623-cdf9a8ea242c?auto=format&fit=crop&q=80"
    ],
    categoryId: 'acessorios',
    stock: 300,
    rating: 4.5,
    sku: 'GRAMPO-CONECTOR'
  }
>>>>>>> teste2
];
