import React from 'react';
import GoogleReviews from './GoogleReviews';

const TestimonialsSection = () => {
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
        
        <GoogleReviews />
      </div>
    </section>
  );
};

export default TestimonialsSection;