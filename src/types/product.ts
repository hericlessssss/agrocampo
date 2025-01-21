export type ProductCategory = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type ProductVersion = {
  version: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;  // Preço principal (pode ser o preço de uma versão padrão)
  image: string;
  categoryId: string;
  versions?: ProductVersion[];  // Versões do produto, agora um array opcional
  featured?: boolean;
};
