import { DivideIcon as LucideIcon } from 'lucide-react';

export type ProductCategory = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
};

export type ProductVariant = {
  id: string;
  name: string;
  price: number;
  images?: string[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  featured?: boolean;
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