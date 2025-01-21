import React from 'react';
import { ChevronDown, ShoppingBag, Phone, Star, TrendingUp } from 'lucide-react';
import { quotations } from '../data/quotations';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Pega a cotação mais recente com variação positiva
  const highlightedQuotation = quotations.find(q => q.variacao.startsWith('+'));

  return (
    <section className="min-h-[calc(100vh-0px)] pt-28 relative overflow-hidden">
      {/* Background com gradiente e padrão */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F7606] via-[#0a5504] to-[#083e03]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80')] bg-fixed bg-cover bg-center" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMjBMMCAwaDQwdjQwSDB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 relative min-h-[calc(100vh-112px)] flex flex-col">
        {/* Conteúdo Principal - Agora com padding-bottom para evitar sobreposição */}
        <div className="flex-grow grid lg:grid-cols-2 gap-12 items-center pb-20 sm:pb-24">
          {/* Conteúdo Principal */}
          <div className="space-y-8 mt-8">
            {/* Destaque de Cotação */}
            {highlightedQuotation && (
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-sm">
                  {highlightedQuotation.nome}: {highlightedQuotation.valor} ({highlightedQuotation.variacao})
                </span>
              </div>
            )}

            {/* Título Principal */}
            <div>
              <h1 className="text-5xl md:text-7xl text-white font-['Impact'] italic leading-tight mb-4">
                Agro Campo
              </h1>
              <p className="text-2xl md:text-4xl text-accent font-bold">
                Mais saúde para o seu animal
              </p>
            </div>
            
            {/* Destaques */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: '13+ Anos', desc: 'de Experiência' },
                { title: '5000+', desc: 'Clientes Atendidos' },
                { title: '98%', desc: 'Satisfação' },
                { title: '24/7', desc: 'Suporte' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <p className="text-accent font-bold text-2xl">{stat.title}</p>
                  <p className="text-white/80 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="group bg-accent hover:bg-white text-primary px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base relative overflow-hidden font-semibold"
              >
                <ShoppingBag className="w-5 h-5" />
                Ver Produtos
                <span className="absolute right-0 w-12 h-full transform translate-x-full group-hover:-translate-x-0 transition-transform duration-300 bg-gradient-to-r from-transparent to-white/20 skew-x-12" />
              </button>
              
              <a
                href="https://wa.me/5589999731221"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0F7606] transition-all duration-300 flex items-center justify-center gap-2 text-base relative overflow-hidden font-semibold"
              >
                <Phone className="w-5 h-5" />
                Fale Conosco
                <span className="absolute right-0 w-12 h-full transform translate-x-full group-hover:-translate-x-0 transition-transform duration-300 bg-gradient-to-r from-transparent to-accent/20 skew-x-12" />
              </a>
            </div>
          </div>

          {/* Card Flutuante */}
          <div className="hidden lg:block relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
              <div className="absolute -top-6 -right-6">
                <div className="bg-accent text-primary text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  Destaque do Dia
                </div>
              </div>
              
              <img
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80"
                alt="Produto em Destaque"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <h3 className="text-white text-xl font-semibold">
                  Produtos de Qualidade
                </h3>
                
                <p className="text-white/80">
                  Oferecemos uma seleção premium de produtos para o seu negócio rural
                </p>
                
                <button
                  onClick={scrollToProducts}
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg transition-all duration-300"
                >
                  Conheça Nosso Catálogo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Button - Agora com posição fixa na parte inferior */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <button
            onClick={scrollToProducts}
            className="animate-bounce bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronDown className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;