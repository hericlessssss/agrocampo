interface Partner {
  id: number;
  name: string;
  subtitle: string;
  logo: string;
  description: string;
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "Matsuda Sementes",
    subtitle: "Parceiro Premium",
    logo: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&q=80",
    description: "Líder em sementes de alta qualidade para pastagens"
  },
  {
    id: 2,
    name: "Ourofino Saúde Animal",
    subtitle: "Parceiro Platinum",
    logo: "https://images.unsplash.com/photo-1516382799247-87df95d790b7?auto=format&fit=crop&q=80",
    description: "Soluções inovadoras em saúde animal"
  },
  {
    id: 3,
    name: "Bayer Agro",
    subtitle: "Parceiro Gold",
    logo: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80",
    description: "Tecnologia e inovação para o campo"
  },
  {
    id: 4,
    name: "MSD Saúde Animal",
    subtitle: "Parceiro Diamond",
    logo: "https://images.unsplash.com/photo-1495570689269-d883b1224443?auto=format&fit=crop&q=80",
    description: "Produtos veterinários de excelência"
  }
];