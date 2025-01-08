import { ProductCategory } from '../types/product';
import { 
  Stethoscope, 
  Leaf, 
  Wrench, 
  HardHat, 
  Sprout, 
  Package,
  Dog,
  Wheat,
  Tractor
} from 'lucide-react';

export const categories: ProductCategory[] = [
  {
    id: 'veterinary',
    name: 'Produtos Veterinários',
    icon: Stethoscope,
    description: 'Medicamentos e produtos para saúde animal'
  },
  {
    id: 'seeds',
    name: 'Sementes e Mudas',
    icon: Leaf,
    description: 'Sementes certificadas e mudas de qualidade'
  },
  {
    id: 'tools',
    name: 'Ferramentas',
    icon: Wrench,
    description: 'Equipamentos e ferramentas para o campo'
  },
  {
    id: 'country',
    name: 'Moda Country',
    icon: HardHat,
    description: 'Vestuário e acessórios country'
  },
  {
    id: 'garden',
    name: 'Jardinagem',
    icon: Sprout,
    description: 'Produtos para jardinagem e paisagismo'
  },
  {
    id: 'feed',
    name: 'Rações',
    icon: Dog,
    description: 'Alimentação animal de qualidade'
  },
  {
    id: 'agriculture',
    name: 'Agricultura',
    icon: Wheat,
    description: 'Produtos para agricultura'
  },
  {
    id: 'equipment',
    name: 'Equipamentos',
    icon: Tractor,
    description: 'Máquinas e equipamentos'
  },
  {
    id: 'others',
    name: 'Outros',
    icon: Package,
    description: 'Outros produtos agropecuários'
  }
];