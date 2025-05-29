import { ProductCategory } from '../types/product';
import {
  Zap,
  Sun,
  Cable,
  Gauge,
  Shield,
  Wrench,
  ShoppingCart,
  Umbrella,
  Activity,
  Footprints
} from 'lucide-react';

export const categories: ProductCategory[] = [
  {
    id: 'eletrificadores',
    name: 'Eletrificadores',
    icon: Zap,
    description: 'Eletrificadores de alta qualidade'
  },
  {
    id: 'geradores',
    name: 'Geradores Fotovoltaicos',
    icon: Sun,
    description: 'Geradores solares para cerca elétrica'
  },
  {
    id: 'cabos',
    name: 'Cabos e Cordas',
    icon: Cable,
    description: 'Cabos e cordas para cerca elétrica'
  },
  {
    id: 'medidores',
    name: 'Medidores e Proteção',
    icon: Gauge,
    description: 'Voltímetros e equipamentos de proteção'
  },
  {
    id: 'isoladores',
    name: 'Isoladores',
    icon: Shield,
    description: 'Isoladores e acessórios'
  },
  {
    id: 'acessorios',
    name: 'Acessórios',
    icon: Wrench,
    description: 'Acessórios diversos para cerca elétrica'
  },

  // Categorias de vestuário com ícones 100% existentes
  {
    id: 'calcados',
    name: 'Calçados',
    icon: Footprints,
    description: 'Botas e calçados resistentes para o campo'
  },
  {
    id: 'chapeus',
    name: 'Chapéus',
    icon: Umbrella,
    description: 'Chapéus para proteção solar e estilo rural'
  },
  {
    id: 'vestuario',
    name: 'Vestuário',
    icon: Activity,
    description: 'Camisas, jaquetas e roupas para o campo'
  },
  {
    id: 'loja',
    name: 'Loja AgroCampo',
    icon: ShoppingCart,
    description: 'Produtos variados da loja física AgroCampo'
  }
];
