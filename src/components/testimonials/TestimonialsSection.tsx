import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './testimonialData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section id="depoimentos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl font-bold text-gray-800 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira os depoimentos de quem já confia em nossos produtos e serviços
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0"
                  >
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-secondary" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-secondary" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
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

export default TestimonialsSection;