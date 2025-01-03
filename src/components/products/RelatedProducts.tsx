import React from 'react';
import { products } from './productData';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  currentProduct: {
    name: string;
    description: string;
    price: number;
    image: string;
  };
}

const RelatedProducts = ({ currentProduct }: RelatedProductsProps) => {
  const relatedProducts = products
    .filter((product) => product.name !== currentProduct.name)
    .slice(0, 3);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Produtos Relacionados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;