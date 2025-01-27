import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { products } from './productData';
import { MessageCircle, Search, X } from 'lucide-react';

const ProductsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filtra produtos baseado na categoria e busca
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.categoryId === selectedCategory : true;
    const matchesSearch = debouncedQuery.length >= 2 
      ? product.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        product.sku?.toLowerCase().includes(debouncedQuery.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 6);

  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-4">Nossos Produtos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Confira nossa seleção de produtos de alta qualidade para o campo
          </p>

          {/* Barra de Pesquisa */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar produtos..."
                className="w-full pl-12 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            {debouncedQuery.length === 1 && (
              <p className="text-sm text-gray-500 mt-2">
                Digite pelo menos 2 caracteres para buscar
              </p>
            )}
          </div>

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
            <p className="text-gray-600 mb-2">
              {debouncedQuery
                ? `Nenhum produto encontrado para "${debouncedQuery}"`
                : 'Nenhum produto encontrado nesta categoria.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="text-primary hover:text-secondary transition-colors"
            >
              Limpar filtros
            </button>
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