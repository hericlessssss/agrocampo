import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MessageCircle, ArrowLeft, Star } from 'lucide-react';
import { products } from '../components/products/productData';
import RelatedProducts from '../components/products/RelatedProducts';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.name === decodeURIComponent(id || ''));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Produto não encontrado</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 inline-flex items-center text-primary hover:text-secondary"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para a página inicial
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center text-primary hover:text-secondary mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar para a página inicial
      </button>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg" />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-gray-600">(4.8/5 - 24 avaliações)</span>
          </div>

          <p className="text-xl text-gray-600">{product.description}</p>

          <div className="space-y-2">
            <p className="text-gray-500 line-through text-xl">
              R$ {product.price.toFixed(2)}
            </p>
            <p className="text-3xl font-bold text-secondary">
              R$ {(product.price * 0.95).toFixed(2)}
              <span className="text-sm font-normal text-gray-500 ml-2">
                (5% de desconto à vista)
              </span>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Características:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Produto de alta qualidade</li>
              <li>Garantia de 12 meses</li>
              <li>Entrega em toda região</li>
              <li>Suporte técnico especializado</li>
            </ul>
          </div>

          <button
            onClick={() => {
              const message = encodeURIComponent(
                `Olá! Gostaria de saber mais sobre o produto: ${product.name}`
              );
              window.open(`https://wa.me/5589999731221?text=${message}`, '_blank');
            }}
            className="w-full bg-secondary hover:bg-accent text-white py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 hover:shadow-lg"
          >
            <MessageCircle size={24} />
            Comprar via WhatsApp
          </button>
        </div>
      </div>

      <RelatedProducts currentProduct={product} />
    </div>
  );
};

export default ProductDetailsPage;