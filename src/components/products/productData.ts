// src/components/products/productData.ts
import { Product } from '../../types/product';

export const products: Product[] = [
  {
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
];
