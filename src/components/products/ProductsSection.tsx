import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from './productData';

const ProductsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? products : products.slice(0, 6);

  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-4">Nossos Produtos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira nossa seleção de produtos de alta qualidade para o campo
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
        {!showAll && products.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-secondary hover:bg-accent text-white py-2 px-8 rounded-md transition-colors duration-300"
            >
              Ver mais produtos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;