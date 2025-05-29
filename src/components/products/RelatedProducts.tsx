import React from 'react';
import { products } from './productData';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  currentProduct: {
    name: string;
    categoryId: string;
  };
}

const RelatedProducts = ({ currentProduct }: RelatedProductsProps) => {
  // Filtra produtos com a mesma categoria, excluindo o atual
  const relatedProducts = products
    .filter(
      (product) =>
        product.name !== currentProduct.name &&
        product.categoryId === currentProduct.categoryId
    )
    .slice(0, 3); // Limita a 3 produtos

  // Se não houver relacionados na mesma categoria, pega qualquer um (menos o atual)
  const fallbackProducts = products
    .filter((product) => product.name !== currentProduct.name)
    .slice(0, 3);

  const productsToShow = relatedProducts.length > 0 ? relatedProducts : fallbackProducts;

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Produtos Relacionados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productsToShow.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
