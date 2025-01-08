import React from 'react';
import { ChevronDown, ShoppingBag, Truck, Phone, Leaf, Sun, Wheat, Tractor, Bird, Dog, Trees, Sprout } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-20 relative overflow-hidden bg-gradient-to-br from-[#0F7606] to-[#0a5504]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Floating Icons Pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* Row 1 */}
          <div className="absolute top-[5%] left-[10%] animate-float">
            <Wheat className="w-12 h-12 text-white" />
          </div>
          <div className="absolute top-[15%] left-[30%] animate-float delay-200">
            <Tractor className="w-16 h-16 text-white" />
          </div>
          <div className="absolute top-[8%] right-[25%] animate-float delay-300">
            <Bird className="w-10 h-10 text-white" />
          </div>
          
          {/* Row 2 */}
          <div className="absolute top-[35%] left-[15%] animate-float delay-150">
            <Dog className="w-14 h-14 text-white" />
          </div>
          <div className="absolute top-[40%] right-[15%] animate-float delay-250">
            <Sprout className="w-16 h-16 text-white" />
          </div>
          
          {/* Row 3 */}
          <div className="absolute bottom-[20%] left-[20%] animate-float delay-100">
            <Trees className="w-14 h-14 text-white" />
          </div>
          <div className="absolute bottom-[30%] right-[20%] animate-float delay-200">
            <Leaf className="w-12 h-12 text-white" />
          </div>
          
          {/* Decorative Sun */}
          <div className="absolute top-[10%] right-[10%] animate-spin-slow">
            <Sun className="w-24 h-24 text-accent opacity-30" />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#0F7606]/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6 mb-8 md:mb-0">            
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
              <span className="font-['Impact'] italic font-normal">Agro Campo</span>
              <span className="text-2xl md:text-4xl lg:text-5xl block mt-4 text-accent font-bold">
                Mais saúde para o seu animal!
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white max-w-xl">
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
                className="group border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0F7606] transition-all duration-300 flex items-center justify-center gap-2 text-base relative overflow-hidden font-semibold"
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
                  <div className="bg-[#0F7606]/10 p-3 rounded-full">
                    <Truck className="w-6 h-6 text-[#0F7606]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-base">Entrega Grátis</h3>
                    <p className="text-gray-600 text-sm">Em toda cidade de Corrente</p>
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
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-[#0F7606]" />
      </button>
    </section>
  );
};

export default Hero;