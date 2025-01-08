import React from 'react';
import { categories } from '../../data/categories';
import { LucideIcon } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
            selectedCategory === null
              ? 'bg-secondary text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Todos
        </button>
        {categories.map((category) => {
          const Icon = category.icon as LucideIcon;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;