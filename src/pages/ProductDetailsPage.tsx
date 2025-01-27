import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MessageCircle, ArrowLeft, Star } from 'lucide-react';
import { products } from '../components/products/productData';
import { categories } from '../data/categories';
import RelatedProducts from '../components/products/RelatedProducts';
import ShippingCalculator from '../components/shipping/ShippingCalculator';
import ImageGallery from '../components/products/ImageGallery';

// Importação dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface ShippingOption {
  service: string;
  price: number;
  deadline: number;
}

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cep, setCep] = useState('');
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([]);
  
  const product = products.find((p) => p.name === decodeURIComponent(id || ''));
  const category = product 
    ? categories.find(cat => cat.id === product.categoryId)
    : null;

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants ? product.variants[0] : null
  );

  const currentPrice = selectedVariant ? selectedVariant.price : product?.price || 0;
  const displayPrice = currentPrice * 1.05; // Preço original (5% maior)
  const finalPrice = currentPrice; // Preço com desconto

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShippingCalculated = (options: ShippingOption[]) => {
    setShippingOptions(options);
  };

  const handleWhatsAppClick = () => {
    let message = `Olá! Gostaria de saber mais sobre o produto:\n\n`;
    message += `*${product?.name}*\n`;
    
    if (selectedVariant) {
      message += `Modelo: ${selectedVariant.name}\n`;
    }
    
    message += `Valor: R$ ${finalPrice.toFixed(2)}\n`;
    
    if (cep && shippingOptions.length > 0) {
      message += `\nCotação de frete para o CEP ${cep}:\n`;
      shippingOptions.forEach(option => {
        message += `${option.service}: R$ ${option.price.toFixed(2)} (${option.deadline} dias úteis)\n`;
      });
    }

    message += `\nPor favor, gostaria de mais informações.`;

    window.open(
      `https://wa.me/5589999731221?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

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
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center text-primary hover:text-secondary"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para a página inicial
        </button>
        
        {category && (
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-600"
            onClick={() => navigate('/', { state: { category: category.id } })}
          >
            <category.icon className="w-4 h-4" />
            {category.name}
          </span>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
<<<<<<< Updated upstream
        <div className="relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg" />
        </div>
=======
        {/* Galeria de Imagens */}
        <ImageGallery images={product.images} />
>>>>>>> Stashed changes

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          
          {/* Seletor de Variantes */}
          {product.variants && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Selecione o modelo:
              </label>
              <select
                value={selectedVariant?.id}
                onChange={(e) => {
                  const variant = product.variants?.find(v => v.id === e.target.value);
                  setSelectedVariant(variant || null);
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary bg-white shadow-sm"
              >
                {product.variants.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {variant.name} - R$ {variant.price.toFixed(2)}
                  </option>
                ))}
              </select>
            </div>
          )}

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
              R$ {displayPrice.toFixed(2)}
            </p>
            <p className="text-3xl font-bold text-secondary">
              R$ {finalPrice.toFixed(2)}
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

          <ShippingCalculator
            weight={1}
            length={20}
            width={20}
            height={20}
            onCepChange={setCep}
            onShippingCalculated={handleShippingCalculated}
          />

          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-secondary hover:bg-accent text-white py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 hover:shadow-lg"
          >
            <MessageCircle size={24} />
            {shippingOptions.length > 0 
              ? 'Comprar com frete calculado via WhatsApp'
              : 'Comprar via WhatsApp'
            }
          </button>
        </div>
      </div>

      <RelatedProducts currentProduct={product} />
    </div>
  );
};

export default ProductDetailsPage;