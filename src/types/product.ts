import { DivideIcon as LucideIcon } from 'lucide-react';

export type ProductCategory = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
};

<<<<<<< HEAD
export type ProductVersion = {
  version: string;
  price: number;
=======
export type ProductVariant = {
  id: string;
  name: string;
  price: number;
  images?: string[];
>>>>>>> teste2
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
<<<<<<< HEAD
};
=======
  variants?: ProductVariant[];
};

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  categoryId: string;
  variants?: ProductVariant[];
  thumbnail?: string;
}
>>>>>>> teste2
