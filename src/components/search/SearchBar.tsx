import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../products/productData';
import { categories } from '../../data/categories';
import { Product } from '../../types/product';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = products.filter(product => {
        const searchTerm = query.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.sku?.toLowerCase().includes(searchTerm) ||
          categories.find(cat => cat.id === product.categoryId)?.name.toLowerCase().includes(searchTerm)
        );
      }).slice(0, 5); // Limita a 5 resultados
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearchClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleProductClick = (product: Product) => {
    navigate(`/product/${encodeURIComponent(product.name)}`);
    setIsOpen(false);
    setQuery('');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Botão de Busca */}
      <button
        onClick={handleSearchClick}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        aria-label="Buscar produtos"
      >
        <Search className="w-5 h-5 text-gray-600" />
      </button>

      {/* Modal de Busca */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-screen max-w-lg bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="p-4">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar produtos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Resultados da Busca */}
            {results.length > 0 ? (
              <div className="mt-4 divide-y divide-gray-100">
                {results.map((product) => {
                  const category = categories.find(cat => cat.id === product.categoryId);
                  return (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="flex items-center gap-4 p-3 hover:bg-gray-50 cursor-pointer rounded-lg group"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate group-hover:text-primary transition-colors">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          {category && (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                              <category.icon className="w-3 h-3" />
                              {category.name}
                            </span>
                          )}
                          {product.sku && (
                            <span className="text-xs text-gray-500">
                              SKU: {product.sku}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-secondary">
                          {formatPrice(product.price)}
                        </p>
                        {product.stock && (
                          <p className="text-xs text-gray-500">
                            {product.stock} em estoque
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : query.length >= 2 ? (
              <div className="mt-4 text-center py-8 text-gray-500">
                Nenhum produto encontrado para "{query}"
              </div>
            ) : query.length === 1 ? (
              <div className="mt-4 text-center py-8 text-gray-500">
                Digite pelo menos 2 caracteres para buscar
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;