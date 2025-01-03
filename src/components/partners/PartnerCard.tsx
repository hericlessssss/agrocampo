import React from 'react';

interface PartnerProps {
  name: string;
  subtitle: string;
  logo: string;
  description: string;
}

const PartnerCard = ({ name, subtitle, logo, description }: PartnerProps) => {
  return (
    <div className="relative h-[400px] group overflow-hidden rounded-lg">
      {/* Background Image */}
      <img 
        src={logo} 
        alt={`${name}`} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="font-poppins font-semibold text-white text-xl mb-1">
          {name}
        </h3>
        <p className="text-primary/90 text-sm font-medium mb-2">
          {subtitle}
        </p>
        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PartnerCard;