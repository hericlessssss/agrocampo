import React from 'react';
import { ChevronDown, ShoppingBag, Truck, Phone, Leaf, Sun } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-20 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-white" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80')] bg-fixed opacity-20" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80')] bg-fixed opacity-10" />
      
      {/* Animated Decorative Elements */}
      <div className="absolute top-20 right-10 animate-spin-slow hidden lg:block">
        <Sun className="w-24 h-24 text-accent opacity-30" />
      </div>
      <div className="absolute bottom-20 left-10 animate-bounce-slow hidden lg:block">
        <Leaf className="w-16 h-16 text-accent opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6 mb-8 md:mb-0">            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              AGROCAMPO
              <span className="text-2xl md:text-4xl lg:text-5xl block mt-4 text-white/90">
                Sua parceira completa em
              </span>
              <span className="text-accent block mt-2">
                produtos agropecuários
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              Oferecemos uma ampla variedade de produtos e serviços para atender todas as necessidades do seu negócio rural.
            </p>

            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
              <span className="text-white font-medium text-sm md:text-base flex items-center gap-2">
                <Leaf className="w-4 h-4" />
                Desde 2010 no mercado
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#produtos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToProducts();
                }}
                className="group bg-accent text-primary px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base relative overflow-hidden font-semibold"
              >
                <span className="relative flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Ver Produtos
                </span>
              </a>
              <a
                href="https://wa.me/5589999731221"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center gap-2 text-base relative overflow-hidden font-semibold"
              >
                <span className="relative flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Fale Conosco
                </span>
              </a>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="md:w-1/2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-white rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80"
                  alt="Fazenda"
                  className="relative rounded-lg shadow-2xl w-full h-[300px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 md:-bottom-10 -left-4 md:-left-10 bg-white p-6 rounded-lg shadow-xl hidden sm:block hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base">Entrega Grátis</h3>
                    <p className="text-gray-600 text-sm">Em Corrente e região</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;