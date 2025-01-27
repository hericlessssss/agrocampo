import React, { useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProductVariant } from '../../types/product';

interface ProductProps {
  name: string;
  description: string;
  price: number;
  images: string[];
  variants?: ProductVariant[];
}

const ProductCard = ({ name, description, price, images, variants }: ProductProps) => {
  const navigate = useNavigate();
  const [selectedVariant] = useState<ProductVariant | null>(variants ? variants[0] : null);

  const currentPrice = selectedVariant ? selectedVariant.price : price;
  const displayPrice = currentPrice * 1.05; // Aumenta o preço em 5%
  const finalPrice = currentPrice;

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    const productUrl = `${window.location.origin}/product/${encodeURIComponent(name)}`;
    const variantInfo = selectedVariant ? ` (${selectedVariant.name})` : '';
    const priceInfo = `\nValor: R$ ${finalPrice.toFixed(2)}`;
    const message = `Olá! Gostaria de saber mais sobre o produto:\n\n*${name}${variantInfo}*${priceInfo}\n\nLink do produto: ${productUrl}`;

    window.open(`https://wa.me/5589999731221?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      onClick={() => navigate(`/product/${encodeURIComponent(name)}`)}
      className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-[520px] flex flex-col"
    >
      {/* Imagem do Produto */}
      <div className="relative w-full h-48 flex-shrink-0">
        <img
          src={images[0]} // Exibe a primeira imagem do array
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>

      {/* Conteúdo do Card */}
      <div className="flex flex-col flex-grow p-4">
        <div className="flex-grow">
          {/* Nome do Produto */}
          <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          {/* Descrição do Produto */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

          {/* Preços */}
          <div className="mb-4">
            <p className="text-gray-500 line-through">R$ {displayPrice.toFixed(2)}</p>
            <p className="text-secondary font-semibold group-hover:text-accent transition-colors">
              R$ {finalPrice.toFixed(2)}
              <span className="text-sm text-gray-500 ml-1">(5% de desconto à vista)</span>
            </p>
          </div>
        </div>

        {/* Área de Ações (Fixada na parte inferior) */}
        <div className="mt-auto">
          <div className="flex items-center justify-center gap-1 text-primary group-hover:text-secondary transition-colors mb-3">
            <span className="text-sm font-medium">Ver mais detalhes</span>
            <ArrowRight size={16} />
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-secondary hover:bg-accent text-white py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 hover:shadow-lg"
          >
            <MessageCircle size={20} />
            Comprar via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;