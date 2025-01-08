import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { products } from './productData';
import { MessageCircle } from 'lucide-react';

const ProductsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.categoryId === selectedCategory)
    : products;

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 6);

  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-4">Nossos Produtos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Confira nossa seleção de produtos de alta qualidade para o campo
          </p>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}

        <div className="text-center mt-8 space-y-6">
          {!showAll && filteredProducts.length > 6 && (
            <button
              onClick={() => setShowAll(true)}
              className="bg-secondary hover:bg-accent text-white py-2 px-8 rounded-md transition-colors duration-300"
            >
              Ver mais produtos
            </button>
          )}
          
          <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 flex items-center gap-2 justify-center">
              <MessageCircle className="w-5 h-5 text-secondary" />
              <span>
                Não encontrou o que procura? Entre em contato via WhatsApp ou visite nossa loja física - 
                temos muito mais opções disponíveis em nosso estabelecimento!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;