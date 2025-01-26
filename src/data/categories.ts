import { ProductCategory } from '../types/product';
import { 
  Zap,
  Sun,
  Cable,
  Gauge,
  Shield,
  Wrench
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
  }
];