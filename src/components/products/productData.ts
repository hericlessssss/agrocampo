// src/components/products/productData.ts
import { Product } from '../../types/product';

export const products: Product[] = [
  // Eletrificadores
  {
    id: 'mp-1000',
    name: "Eletrificador MP 1000",
    description: "Eletrificador profissional para cercas elétricas.",
    price: 794.00,
    images: [
      "https://br.speedrite.com/sites/default/files/linha-mp-mp1000.png",
      "https://br.speedrite.com/sites/default/files/linha-mp-mp2000.png",
      "https://br.speedrite.com/sites/default/files/linha-mp-mp4000.png",
      "https://br.speedrite.com/sites/default/files/linha-mp-mp8000.png",
      "https://cdn.awsli.com.br/2500x2500/1811/1811650/produto/84391061/bdf823feff.jpg"

    ],
    categoryId: 'eletrificadores',
    specifications: [
      "Alcance: 15km de cerca",
      "Tensão máxima: 9.000V",
      "Consumo: 0.15Ah/dia",
      "Proteção contra raios"
    ],
    variants: [
      {
        id: 'mp-1000',
        name: 'MP 1000',
        price: 794.00,
        images: [
          "https://br.speedrite.com/sites/default/files/linha-mp-mp1000.png",
          "https://br.speedrite.com/sites/default/files/linha-mp-mp1000.png"
        ]
      },
      {
        id: 'mp-2000',
        name: 'MP 2000',
        price: 1050.00,
        images: [
          "https://br.speedrite.com/sites/default/files/linha-mp-mp2000.png",
          "https://br.speedrite.com/sites/default/files/linha-mp-mp2000.png"
        ]
      },
      {
        id: 'mp-4000',
        name: 'MP 4000',
        price: 1439.00,
        images: [
          "https://br.speedrite.com/sites/default/files/linha-mp-mp4000.png",
          "https://br.speedrite.com/sites/default/files/linha-mp-mp4000.png"
        ]
      },
      {
        id: 'mp-8000',
        name: 'MP 8000',
        price: 2626.00,
        images: [
          "https://br.speedrite.com/sites/default/files/linha-mp-mp8000.png",
          "https://br.speedrite.com/sites/default/files/linha-mp-mp8000.png"
        ]
      },
      {
        id: 'mp-12000',
        name: 'MP 12000',
        price: 7568.00,
        images: [
          "https://cdn.awsli.com.br/2500x2500/1811/1811650/produto/84391061/bdf823feff.jpg",
          "https://cdn.awsli.com.br/2500x2500/1811/1811650/produto/84391061/bdf823feff.jpg"
        ]
      }
    ],
    stock: 15,
    rating: 4.8,
    sku: 'ELET-MP1000'
  },

  // Geradores Fotovoltaicos
  {
    id: 'gerador-25w',
    name: "Gerador Fotovoltaico 25 Watts",
    description: "Gerador solar para alimentação de cercas elétricas. Sistema completo e eficiente.",
    price: 1141.00,
    images: [
      "https://images.tcdn.com.br/img/img_prod/1055475/gerador_fotovoltaico_speedrite_25_watts_9542_1_07d3639d5001f7330aaf5cf414865745.jpg",
      "https://images.tcdn.com.br/img/img_prod/1055475/gerador_fotovoltaico_speedrite_25_watts_9542_1_07d3639d5001f7330aaf5cf414865745.jpg",
      "https://images.tcdn.com.br/img/img_prod/1055475/gerador_fotovoltaico_speedrite_25_watts_9542_1_07d3639d5001f7330aaf5cf414865745.jpg"
    ],
    categoryId: 'geradores',
    specifications: [
      "Potência: 25 Watts",
      "Tensão de saída: 12V",
      "Eficiência: Alta performance mesmo em dias nublados",
      "Durabilidade: Painéis resistentes a intempéries"
    ],
    variants: [
      {
        id: 'gerador-25w',
        name: '25 Watts',
        price: 1141.00,
        images: [
          "https://images.tcdn.com.br/img/img_prod/1055475/gerador_fotovoltaico_speedrite_25_watts_9542_1_07d3639d5001f7330aaf5cf414865745.jpg",
          "https://images.tcdn.com.br/img/img_prod/1055475/gerador_fotovoltaico_speedrite_25_watts_9542_1_07d3639d5001f7330aaf5cf414865745.jpg"
        ]
      },
      {
        id: 'gerador-55w',
        name: '55 Watts',
        price: 1581.00,
        images: [
          "https://images.tcdn.com.br/img/img_prod/1055475/gerador_fotovoltaico_speedrite_25_watts_9542_1_07d3639d5001f7330aaf5cf414865745.jpg",
          "https://images.tcdn.com.br/img/img_prod/1055475/gerador_fotovoltaico_speedrite_25_watts_9542_1_07d3639d5001f7330aaf5cf414865745.jpg"
        ]
      },
      {
        id: 'gerador-95w',
        name: '95 Watts',
        price: 2043.00,
        images: [
          "https://images.tcdn.com.br/img/img_prod/1055475/gerador_fotovoltaico_speedrite_25_watts_9542_1_07d3639d5001f7330aaf5cf414865745.jpg",
          "https://images.tcdn.com.br/img/img_prod/1055475/gerador_fotovoltaico_speedrite_25_watts_9542_1_07d3639d5001f7330aaf5cf414865745.jpg"
        ]
      }
    ],
    stock: 10,
    rating: 4.7,
    sku: 'GER-25W'
  },

  // Cabos e Cordas
  {
    id: 'cabo-subterraneo-2.7',
    name: "Cabo Subterrâneo 2.7 mm",
    description: "Cabo subterrâneo de alta qualidade para instalações elétricas.",
    price: 438.00,
    images: [
      "https://cdn.awsli.com.br/600x450/1811/1811650/produto/90003712/b4e6641e5b.jpg"
    ],
    categoryId: 'cabos',
    specifications: [
      "Espessura: 2.7 mm",
      "Material: Cobre",
      "Isolamento: PVC"
    ],
    stock: 50,
    rating: 4.7,
    sku: 'CABO-27'
  },
  {
    id: 'cabo-subterraneo-1.6',
    name: "Cabo Subterrâneo 1.6 mm",
    description: "Cabo subterrâneo ideal para instalações menores.",
    price: 382.00,
    images: [
      "https://cdn.awsli.com.br/2500x2500/1811/1811650/produto/90004096/d1e6b7bf60.jpg"
    ],
    categoryId: 'cabos',
    specifications: [
      "Espessura: 1.6 mm",
      "Material: Cobre",
      "Isolamento: PVC"
    ],
    stock: 40,
    rating: 4.5,
    sku: 'CABO-16'
  },
  {
    id: 'corda-eletroplastica',
    name: "Corda Eletroplástica 50m × 7mm",
    description: "Corda eletroplástica resistente e durável.",
    price: 687.00,
    images: [
      "https://agroline.fbitsstatic.net/img/p/corda-elastica-speedrite-%E2%80%93-50-metros-tru-test-107160/282648.jpg"
    ],
    categoryId: 'cabos',
    specifications: [
      "Comprimento: 50m",
      "Espessura: 7mm",
      "Resistência: Alta"
    ],
    stock: 30,
    rating: 4.6,
    sku: 'CORD-50M'
  },
  {
    id: 'fio-eletroplastico',
    name: "Fio Eletroplástico 500m",
    description: "Fio eletroplástico para cercas elétricas.",
    price: 571.00,
    images: [
      "https://agroline.fbitsstatic.net/img/p/tru-test-fio-eletroplastico-patriot-500m-99040/274456.jpg"
    ],
    categoryId: 'cabos',
    specifications: [
      "Comprimento: 500m",
      "Material: Polipropileno",
      "Condutividade: Alta"
    ],
    stock: 25,
    rating: 4.4,
    sku: 'FIO-500M'
  },
  {
    id: 'insultubo',
    name: "Insultubo 9/16 × 50m",
    description: "Insultubo para proteção de fios e cabos.",
    price: 226.00,
    images: [
      "https://agroline.fbitsstatic.net/img/p/tru-test-insultube-7-16-com-50m-104078/279492.jpg"
    ],
    categoryId: 'cabos',
    specifications: [
      "Diâmetro: 9/16",
      "Comprimento: 50m",
      "Material: PVC"
    ],
    stock: 60,
    rating: 4.3,
    sku: 'INSUL-50M'
  },
  {
    id: 'fita-maxitape',
    name: "Fita Maxitape 50m 40mm",
    description: "Fita condutora de alta qualidade.",
    price: 141.00,
    images: [
      "https://agroline.fbitsstatic.net/img/p/tru-test-fita-eletroplastica-maxitape-50-m-99120/274536.jpg"
    ],
    categoryId: 'cabos',
    specifications: [
      "Comprimento: 50m",
      "Espessura: 40mm",
      "Material: Condutor de alta qualidade"
    ],
    stock: 45,
    rating: 4.2,
    sku: 'FITA-50M'
  },
  {
    id: 'carretel-jumbo',
    name: "Carretel Jumbo",
    description: "Carretel jumbo para cercas elétricas.",
    price: 345.00,
    images: [
      "https://agroline.fbitsstatic.net/img/p/carretel-jumbo-%E2%80%93-speedrite-107397/282903.jpg"
    ],
    categoryId: 'acessorios',
    stock: 20,
    rating: 4.6,
    sku: 'CARRETEL-JUMBO'
  },
  {
    id: 'voltimetro-digital',
    name: "Voltímetro Digital 3 Dígitos",
    description: "Voltimetro digital de 3 dígitos para medição precisa.",
    price: 540.00,
    images: [
      "https://cdn.awsli.com.br/600x450/1811/1811650/produto/92717402/9027ec0cd4.jpg"
    ],
    categoryId: 'acessorios',
    stock: 15,
    rating: 4.7,
    sku: 'VOLT-3DIG'
  },
  {
    id: 'voltimetro-falhas',
    name: "Voltímetro Indicador de Falhas",
    description: "Voltimetro com indicador de falhas, essencial para diagnóstico.",
    price: 1560.00,
    images: [
      "https://agroline.fbitsstatic.net/img/p/tru-test-controle-remoto-p-eletrificador-104062/279476.jpg"
    ],
    categoryId: 'acessorios',
    stock: 10,
    rating: 4.8,
    sku: 'VOLT-FALHAS'
  },
  {
    id: 'kit-para-raios',
    name: "Kit Para-Raios",
    description: "Kit completo para proteção contra raios.",
    price: 230.00,
    images: [
      "https://cdn.awsli.com.br/600x450/1811/1811650/produto/90005086/7e96e700f6.jpg"
    ],
    categoryId: 'acessorios',
    stock: 30,
    rating: 4.5,
    sku: 'KIT-PARA-RAIOS'
  },
  {
    id: 'dispositivo-para-raios',
    name: "Dispositivo Para-Raios",
    description: "Dispositivo de proteção contra raios.",
    price: 113.00,
    images: [
      "https://cdn.awsli.com.br/2500x2500/1811/1811650/produto/90010601/0f094f727c.jpg"
    ],
    categoryId: 'acessorios',
    stock: 25,
    rating: 4.3,
    sku: 'DISPOSITIVO-RAIOS'
  },
  {
    id: 'chave-interruptora',
    name: "Chave Interruptora",
    description: "Chave interruptora para controle de circuitos.",
    price: 81.00,
    images: [
      "https://br.speedrite.com/sites/default/files/chave-interruptora.png"
    ],
    categoryId: 'acessorios',
    stock: 50,
    rating: 4.6,
    sku: 'CHAVE-INTERRUPTORA'
  },
  {
    id: 'hastes-de-aterramento',
    name: "Hastes de Aterramento",
    description: "Hastes para aterramento de cercas elétricas.",
    price: 82.00,
    images: [
      "https://images.tcdn.com.br/img/img_prod/1055475/haste_aterramento_galvanizada_2m_speedrite_8702_1_1ccf481cb44c341f3aecce0931173b88.png"
    ],
    categoryId: 'acessorios',
    stock: 40,
    rating: 4.5,
    sku: 'HASTES-ATERRAMENTO'
  },
  {
    id: 'vareta-plastica',
    name: "Vareta Plástica",
    description: "Vareta plástica para instalação de cercas elétricas.",
    price: 31.50,
    images: [
      "https://images.tcdn.com.br/img/img_prod/554605/kit_50_vareta_de_fibra_de_vidro_para_cerca_120cmx10mm_amarela_zebu_129735_1_4dbb7340307278e2ec8afd376a029ed5.jpg"
    ],
    categoryId: 'acessorios',
    stock: 60,
    rating: 4.4,
    sku: 'VARETA-PLASTICA'
  },
  {
    id: 'conectores-galvanizado',
    name: "Conectores Galvanizado Para Hastes",
    description: "Conectores galvanizados para hastes de aterramento.",
    price: 20.00,
    images: [
      "https://agroline.fbitsstatic.net/img/p/conector-galvanizado-para-haste-de-aterramento-tru-test-107200/282700.jpg"
    ],
    categoryId: 'acessorios',
    stock: 100,
    rating: 4.3,
    sku: 'CONECTOR-GALVANIZADO'
  },
  {
    id: 'porteira-speed-pro',
    name: "Porteira Isolada Speed Pró",
    description: "Porteira Isolada Speed Pró para cercas elétricas.",
    price: 26.00,
    images: [
      "https://images.tcdn.com.br/img/img_prod/1055475/porteira_speedrite_pro_9578_1_71999c0dab81903e7cb34f460c263fa3.jpg"
    ],
    categoryId: 'acessorios',
    stock: 40,
    rating: 4.5,
    sku: 'PORTEIRA-SPEED-PRO'
  },
  {
    id: 'suporte-de-porteira',
    name: "Suporte de Porteira",
    description: "Suporte resistente para porteiras.",
    price: 20.00,
    images: [
      "https://br.speedrite.com/sites/default/files/suporte-de-porteria.png"
    ],
    categoryId: 'acessorios',
    stock: 50,
    rating: 4.4,
    sku: 'SUPORTE-PORTEIRA'
  },
  {
    id: 'isoladores-anel',
    name: "Isoladores Tipo Anel",
    description: "Isoladores do tipo anel para cercas elétricas.",
    price: 175.00,
    images: [
      "https://agromania.cdn.magazord.com.br/img/2022/02/produto/11010/isolador-anel-zebu.jpg"
    ],
    categoryId: 'acessorios',
    stock: 150,
    rating: 4.6,
    sku: 'ISOLADOR-ANEL'
  },
  {
    id: 'chave-para-isolador-anel',
    name: "Chave Para Isolador Tipo Anel",
    description: "Chave para instalação de isoladores tipo anel.",
    price: 16.00,
    images: [
      "https://images.tcdn.com.br/img/img_prod/1055475/chave_aplicacao_isolador_anel_speedrite_9570_1_917f8add43c233a54599288ccfbf68c9.png"
    ],
    categoryId: 'acessorios',
    stock: 50,
    rating: 4.3,
    sku: 'CHAVE-ISOLADOR-ANEL'
  },
  {
    id: 'isolador-ajustável-para-haste-speedrite',
    name: "Isolador Ajustável para Haste Speedrite",
    description: "Isolador Ajustável para Haste Speedrite.",
    price: 175.00,
    images: [
      "https://br.speedrite.com/sites/default/files/isolador-ajustavel.png"
    ],
    categoryId: 'acessorios',
    stock: 50,
    rating: 4.3,
    sku: 'CHAVE-ISOLADOR-ANEL'
  },
  {
    id: 'chave-para-catraca-redonda',
    name: "Chave Para Catraca Redonda",
    description: "Chave para operação de catracas redondas.",
    price: 68.50,
    images: [
      "https://cdn.awsli.com.br/2500x2500/1845/1845490/produto/149758666b476dc12c9.jpg"
    ],
    categoryId: 'acessorios',
    stock: 35,
    rating: 4.7,
    sku: 'CHAVE-CATRACA-REDONDA'
  },
  {
    id: 'isolador-canto',
    name: "Isolador de Canto",
    description: "Isolador de canto para cercas elétricas.",
    price: 3.00,
    images: [
      "https://cdn.awsli.com.br/2500x2500/2045/2045823/produto/118836235/33-b1gzdm1atm.jpg"
    ],
    categoryId: 'acessorios',
    stock: 250,
    rating: 4.5,
    sku: 'ISOLADOR-CANTO'
  },
  {
    id: 'isolador-linha-w',
    name: "Isolador de Linha W",
    description: "Isolador de linha W para cercas elétricas.",
    price: 3.00,
    images: [
      "https://cdn.awsli.com.br/600x450/1811/1811650/produto/90021787/b2d4bf403c.jpg"
    ],
    categoryId: 'acessorios',
    stock: 200,
    rating: 4.4,
    sku: 'ISOLADOR-LINHA-W'
  },
  {
    id: 'catraca-redonda-aluminio',
    name: "Catraca Redonda de Alumínio",
    description: "Catraca redonda de alumínio para cercas elétricas.",
    price: 26.50,
    images: [
      "https://images.tcdn.com.br/img/img_prod/1055475/catraca_de_aluminio_redonda_speedrite_8157_1_8a9aebb70231f5bfb38e1a6a20c35c8c.png"
    ],
    categoryId: 'acessorios',
    stock: 60,
    rating: 4.6,
    sku: 'CATRACA-REDONDA-ALUMINIO'
  },
  {
    id: 'grampo-conector',
    name: "Grampo Conector",
    description: "Grampo conector para fixação de fios.",
    price: 10.90,
    images: [
      "https://cdn.awsli.com.br/600x450/1811/1811650/produto/90089435/085975ae66.jpg"
    ],
    categoryId: 'acessorios',
    stock: 300,
    rating: 4.5,
    sku: 'GRAMPO-CONECTOR'
  },
  {
    id: "seringa-accurus-12ml-tubo",
    name: "Seringa Accurus 12ml com Tubo",
    description: "Seringa Accurus de 12ml com tubo para aplicações veterinárias.",
    price: 510.00,
    images: [
      "https://cdn.awsli.com.br/600x450/1811/1811650/produto/92796350/de8fb39ad0.jpg"
    ],
    categoryId: "seringas",
    stock: 50,
    rating: 4.8,
    sku: "SERINGA-ACCURUS-12ML-TUBO"
  },
  {
    id: "extensor-injecao-intramuscular",
    name: "Extensor de Injeção Intramuscular",
    description: "Extensor para injeção intramuscular, garantindo maior alcance e precisão.",
    price: 95.00,
    images: [
      "https://agbagroprodutos.com.br/wp-content/uploads/2024/11/15308810044-design-sem-nome-2024-11-04t181705-396.jpg"
    ],
    categoryId: "acessorios",
    stock: 75,
    rating: 4.7,
    sku: "EXTENSOR-INTRAMUSCULAR"
  },
  {
    id: "seringa-premium-12ml-tubo-conectores",
    name: "Seringa Premium 12ml com Tubo e 3x Conectores para Frascos",
    description: "Seringa Premium de 12ml com tubo e três conectores para frascos.",
    price: 400.00,
    images: [
      "https://cdn.awsli.com.br/2500x2500/1811/1811650/produto/92796350/de8fb39ad0.jpg"
    ],
    categoryId: "seringas",
    stock: 40,
    rating: 4.9,
    sku: "SERINGA-PREMIUM-12ML-CON"
  },
  {
    id: "mola-reposicao-aco-inox",
    name: "Mola de Reposição em Aço Inox para Porteira Isolada",
    description: "Mola de reposição feita em aço inoxidável para porteiras isoladas.",
    price: 14.50,
    images: [
      "https://agroline.fbitsstatic.net/img/p/mola-de-reposicao-para-porteira-isolada-%E2%80%93-speedrite-107408/282914.jpg"
    ],
    categoryId: "acessorios",
    stock: 100,
    rating: 4.5,
    sku: "MOLA-REPOSICAO-ACO-INOX"
  },
  {
    id: "protetor-agulha-seringa-accurus-5ml-12ml",
    name: "Protetor de Agulha para Seringa Accurus 5ml e 12ml",
    description: "Protetor de agulha compatível com seringas Accurus de 5ml e 12ml.",
    price: 51.00,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_962155-MLB74803540377_022024-F.webp"
    ],
    categoryId: "acessorios",
    stock: 60,
    rating: 4.6,
    sku: "PROTETOR-AGULHA-ACCURUS"
  },
  {
    id: "protetor-agulha-seringa-accurus-6ml",
    name: "Protetor de Agulha para Seringa Accurus 6ml",
    description: "Protetor de agulha compatível com seringas Accurus de 6ml.",
    price: 51.00,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_846262-MLB74803324151_022024-F.webp"
    ],
    categoryId: "acessorios",
    stock: 60,
    rating: 4.6,
    sku: "PROTETOR-AGULHA-6ML"
  },
  {
    id: "protetor-frasco-seringas-frasco-acoplado",
    name: "Protetor de Frasco para Seringas Frasco Acoplado",
    description: "Protetor de frasco para seringas de frasco acoplado.",
    price: 66.00,
    images: [
      "https://agbagroprodutos.com.br/wp-content/uploads/2024/11/15308472580-design-sem-nome-2024-11-01t151437-379.jpg"
    ],
    categoryId: "acessorios",
    stock: 55,
    rating: 4.6,
    sku: "PROTETOR-FRASCO-SERINGA"
  },
  {
    id: "barril-seringa-accurus-12ml",
    name: "Barril para Seringa Accurus 12ml",
    description: "Barril de reposição para seringas Accurus de 12ml.",
    price: 94.00,
    images: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_834218-MLB72552510219_102023-F.webp"
    ],
    categoryId: "acessorios",
    stock: 70,
    rating: 4.7,
    sku: "BARRIL-SERINGA-ACCURUS"
  },
  {
    id: "barril-seringa-premium-12ml",
    name: "Barril para Seringa Premium 12ml",
    description: "Barril de reposição para seringas Premium de 12ml.",
    price: 94.00,
    images: [
      "https://cdn.awsli.com.br/600x700/987/987576/produto/219625553/barril-seringa-1-lriu0266wu.jpg"
    ],
    categoryId: "acessorios",
    stock: 70,
    rating: 4.7,
    sku: "BARRIL-SERINGA-PREMIUM"
  },
  {
    id: "tubo-pvc-seringa-fluxo-continuo",
    name: "Tubo de PVC 6.4x1500mm para Seringas de Fluxo Contínuo",
    description: "Tubo de PVC de 6.4x1500mm para seringas de fluxo contínuo.",
    price: 30.00,
    images: [
      "https://images.tcdn.com.br/img/img_prod/1055475/180_tubo_pvc_6_4x1500mm_seringa_fluxo_continuo_simcro_9389_1_0c27a440b15922acb264e018a647be90.jpg"
    ],
    categoryId: "acessorios",
    stock: 90,
    rating: 4.6,
    sku: "TUBO-PVC-FLUXO-CONTINUO"
  }
];