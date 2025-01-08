export type ProductCategory = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  featured?: boolean;
};