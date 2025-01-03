import React, { useState, useEffect, useCallback } from 'react';
import PartnerCard from './PartnerCard';
import { partners } from './partnerData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => 
      current === partners.length - 1 ? 0 : current + 1
    );
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentIndex((current) => 
      current === 0 ? partners.length - 1 : current - 1
    );
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="fornecedores" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-4">
            Nossos Fornecedores
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado agropecuário
          </p>
        </div>

        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {partners.map((partner) => (
                <div 
                  key={partner.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <PartnerCard {...partner} />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={previousSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-secondary" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-secondary" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-secondary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;