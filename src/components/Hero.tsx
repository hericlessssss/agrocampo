import React from 'react';
import { ChevronDown, ShoppingBag, Truck, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-b from-[#88b376]/10 to-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
          <div className="md:w-1/2 text-center md:text-left space-y-6 mb-8 md:mb-0">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-secondary font-medium text-sm md:text-base">Desde 2010 no mercado</span>
            </div>
            
            <h1 className="text-3xl md:text-6xl font-bold text-gray-800 leading-tight">
              Sua parceira completa em
              <span className="text-primary block mt-2">produtos agropecuários</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Oferecemos uma ampla variedade de produtos e serviços para atender todas as necessidades do seu negócio rural.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#produtos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToProducts();
                }}
                className="bg-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <ShoppingBag className="w-5 h-5" />
                Ver Produtos
              </a>
              <a
                href="https://wa.me/5589999731221"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-secondary text-secondary px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Phone className="w-5 h-5" />
                Fale Conosco
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80"
                alt="Fazenda"
                className="rounded-lg shadow-2xl w-full h-[300px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 md:-bottom-10 -left-4 md:-left-10 bg-white p-4 md:p-6 rounded-lg shadow-xl hidden sm:block hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                    <Truck className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">Entrega Grátis</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Em Corrente e região</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
      </button>
    </section>
  );
};

export default Hero;