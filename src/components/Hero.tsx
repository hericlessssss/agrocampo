import React from 'react';
import { ChevronDown, ShoppingBag, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen pt-20 relative overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F7606] to-[#0a5504]">
        {/* Imagem de fundo opaca */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80')"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative h-full">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl md:text-7xl text-white leading-tight">
              <span className="font-['Impact'] italic font-normal">Agro Campo</span>
              <span className="text-2xl md:text-5xl block mt-4 text-accent font-extrabold">
                Mais saúde para o seu animal
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/90">
              Oferecemos uma ampla variedade de produtos e serviços para atender todas as necessidades do seu negócio rural.
            </p>

            <div className="inline-block bg-white/10 backdrop-blur-md px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300">
              <span className="text-white font-medium text-base md:text-lg">
                Desde 2011 no mercado
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>

        {/* Scroll Button */}
        <button
          onClick={scrollToProducts}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-[#0F7606]" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
