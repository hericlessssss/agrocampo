import React from 'react';
import { Sprout, Tractor, Users, Calendar, Target, Heart, Star, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Calendar, value: '13+', label: 'Anos de Experiência' },
    { icon: Users, value: '5000+', label: 'Clientes Atendidos' },
    { icon: Target, value: '98%', label: 'Satisfação' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compromisso',
      description: 'Dedicação total à satisfação dos nossos clientes e ao desenvolvimento do agronegócio.'
    },
    {
      icon: Star,
      title: 'Qualidade',
      description: 'Produtos selecionados das melhores marcas para garantir resultados excepcionais.'
    },
    {
      icon: ShieldCheck,
      title: 'Confiança',
      description: 'Construindo relacionamentos duradouros baseados em transparência e credibilidade.'
    }
  ];

  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80')] bg-fixed opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <div className="flex items-center gap-2">
              <Sprout className="text-secondary w-4 h-4 md:w-5 md:h-5" />
              <span className="text-secondary font-medium text-sm md:text-base">Nossa História</span>
            </div>
          </div>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Tradição e Qualidade em Produtos Agropecuários
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Desde 2011, construindo uma história de dedicação e excelência no setor agropecuário
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Coluna da Esquerda - Imagem e Estatísticas */}
          <div className="space-y-8">
            {/* Imagem Principal */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipM2ZgvApDidiCeTCTUvAK8UOIGTq-VwzhT1pKIa=s680-w680-h510"
                alt="Fazenda AGROCAMPO"
                className="w-full aspect-video object-cover transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Estatísticas em Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-center">
                    <div className="font-bold text-2xl text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna da Direita - História e Missão */}
          <div className="space-y-8">
            {/* História */}
            <div className="prose prose-lg">
              <p className="text-gray-600 leading-relaxed mb-6">
                A Agro Campo Corrente nasceu com um propósito claro: ser mais do que uma loja, ser um elo entre as pessoas e o universo Agro. Localizada em Corrente-PI, nossa trajetória é construída com dedicação, trabalho honesto e um profundo respeito pela vida rural.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Desde o início, entendemos que cada cliente é único, e cada desafio merece soluções de qualidade. Por isso, nos tornamos uma referência na revenda de produtos agropecuários, farmácia veterinária e insumos agrícolas.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Somos parceiros de quem trabalha com a terra e com os animais, apoiando a produção e fortalecendo os laços com a nossa comunidade.
              </p>
            </div>

            {/* Card de Missão */}
            <div className="bg-primary/5 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Tractor className="text-secondary w-12 h-12 flex-shrink-0" />
                <div>
                  <h3 className="font-poppins font-semibold text-gray-800 text-xl mb-2">Nossa Missão</h3>
                  <p className="text-gray-600">
                    Promover o desenvolvimento do agronegócio com qualidade e excelência, 
                    contribuindo para o crescimento sustentável da região.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Valores da Empresa */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Slogan Final */}
        <div className="text-center mt-16">
          <p className="text-2xl font-poppins text-primary italic">
            "Agro Campo - Mais saúde para o seu animal!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;