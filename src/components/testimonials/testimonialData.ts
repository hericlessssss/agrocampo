interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "João Silva",
    rating: 5,
    comment: "Excelente atendimento e produtos de qualidade. A entrega foi rápida e os preços são justos.",
    date: "15/03/2024"
  },
  {
    id: 2,
    name: "Maria Oliveira",
    rating: 5,
    comment: "Sempre encontro tudo o que preciso para minha fazenda. A equipe é muito prestativa!",
    date: "10/03/2024"
  },
  {
    id: 3,
    name: "Pedro Santos",
    rating: 4,
    comment: "Ótima variedade de produtos veterinários. Recomendo fortemente!",
    date: "05/03/2024"
  },
  {
    id: 4,
    name: "Ana Costa",
    rating: 5,
    comment: "O serviço de entrega é muito eficiente. Facilita muito nossa vida!",
    date: "01/03/2024"
  }
];