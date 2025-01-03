import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = ({ name, description, price, image }: ProductProps) => {
  const navigate = useNavigate();
  const discountPrice = price * 0.95;

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o produto: ${name}`);
    window.open(`https://wa.me/5589999731221?text=${message}`, '_blank');
  };

  return (
    <div 
      onClick={() => navigate(`/product/${encodeURIComponent(name)}`)}
      className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-2 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="mb-4">
          <p className="text-gray-500 line-through">R$ {price.toFixed(2)}</p>
          <p className="text-secondary font-semibold group-hover:text-accent transition-colors">
            R$ {discountPrice.toFixed(2)} <span className="text-sm text-gray-500">(5% de desconto à vista)</span>
          </p>
        </div>
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
  );
};

export default ProductCard;