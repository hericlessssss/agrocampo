interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    name: "Ração Premium para Bovinos",
    description: "Ração balanceada com alto teor proteico para engorda de bovinos",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1665641659436-a52471e63240?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Kit Veterinário Básico",
    description: "Kit completo com instrumentos essenciais para cuidados veterinários",
    price: 299.90,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80"
  },
  {
    name: "Sementes de Capim Brachiaria",
    description: "Sementes certificadas para formação de pastagem",
    price: 45.90,
    image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&q=80"
  },
  {
    name: "Cerca Elétrica Solar 1000m",
    description: "Kit completo de cerca elétrica com painel solar",
    price: 799.90,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
  },
  {
    name: "Chapéu Country Premium",
    description: "Chapéu de couro legítimo para trabalho no campo",
    price: 189.90,
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80"
  },
  {
    name: "Kit Jardinagem Profissional",
    description: "Conjunto completo de ferramentas para jardinagem",
    price: 249.90,
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80"
  },
  {
    name: "Suplemento Mineral Premium",
    description: "Suplemento mineral completo para bovinos",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1560893788-e932737f218b?auto=format&fit=crop&q=80"
  },
  {
    name: "Botina de Segurança",
    description: "Botina em couro com biqueira de aço",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&q=80"
  }
];