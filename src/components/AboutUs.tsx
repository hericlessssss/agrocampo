import React from 'react';
import { Sprout, Tractor, Award, Users, Calendar, Target } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Calendar, value: '13+', label: 'Anos de Experiência' },
    { icon: Users, value: '5000+', label: 'Clientes Atendidos' },
    { icon: Target, value: '98%', label: 'Satisfação' },
  ];

  return (
    <section id="quem-somos" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80')] bg-fixed opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80"
                alt="Fazenda AGROCAMPO"
                className="rounded-lg shadow-2xl w-full h-[300px] md:h-[600px] object-cover transform hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-8 bg-white p-4 md:p-6 rounded-lg shadow-xl max-w-[250px] md:max-w-xs">
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                  <h3 className="font-semibold text-gray-800 text-sm md:text-base">Certificada</h3>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">
                  Empresa reconhecida e certificada pelos principais órgãos do setor agropecuário
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <Sprout className="text-secondary w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-secondary font-medium text-sm md:text-base">Nossa História</span>
                </div>
              </div>

              <h2 className="font-poppins text-2xl md:text-4xl font-bold text-gray-800">
                Tradição e Qualidade em Produtos Agropecuários
              </h2>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Há mais de 13 anos, a AGROCAMPO se destaca como referência em produtos e serviços agropecuários 
                na cidade de Corrente - PI. Nossa missão é fornecer soluções completas para produtores rurais, 
                pecuaristas e amantes do campo.
              </p>

              <div className="flex items-center gap-4 p-4 md:p-6 bg-primary/5 rounded-lg transform hover:scale-105 transition-all duration-300">
                <Tractor className="text-secondary w-10 h-10 md:w-12 md:h-12 flex-shrink-0" />
                <div>
                  <h3 className="font-poppins font-semibold text-gray-800 text-base md:text-lg">Nossa Missão</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Promover o desenvolvimento do agronegócio com qualidade e excelência, 
                    contribuindo para o crescimento sustentável da região.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 md:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-secondary mx-auto mb-2 md:mb-3" />
                    <div className="font-bold text-xl md:text-2xl text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;