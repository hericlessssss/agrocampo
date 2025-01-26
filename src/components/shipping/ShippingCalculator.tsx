import React, { useState } from 'react';
import { Truck, Loader2, Info } from 'lucide-react';

interface ShippingOption {
  service: string;
  price: number;
  deadline: number;
}

interface ShippingCalculatorProps {
  weight?: number; // peso em kg
  length?: number; // comprimento em cm
  width?: number; // largura em cm
  height?: number; // altura em cm
  onCepChange?: (cep: string) => void;
  onShippingCalculated?: (options: ShippingOption[]) => void;
}

const ShippingCalculator = ({ 
  weight = 1, 
  length = 20, 
  width = 20, 
  height = 20,
  onCepChange,
  onShippingCalculated 
}: ShippingCalculatorProps) => {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([]);
  const [error, setError] = useState('');

  const formatCEP = (value: string) => {
    return value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2').substr(0, 9);
  };

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCEP = formatCEP(e.target.value);
    setCep(formattedCEP);
    if (onCepChange) {
      onCepChange(formattedCEP);
    }
    if (error) setError('');
  };

  const calculateShipping = async () => {
    if (cep.length !== 9) {
      setError('CEP inválido');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Simulação de cálculo de frete
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const originCEP = '64980000'; // CEP de Corrente-PI
      const destinationCEP = cep.replace('-', '');
      
      // Cálculo baseado nas primeiras 3 dígitos do CEP para determinar a região
      const originRegion = originCEP.substring(0, 3);
      const destinationRegion = destinationCEP.substring(0, 3);
      
      // Mapeamento de regiões para calcular distância aproximada
      const regions: { [key: string]: { lat: number; lon: number } } = {
        '649': { lat: -10.4406, lon: -43.3401 }, // Corrente-PI
        // Outras regiões do Brasil
        '010': { lat: -23.5505, lon: -46.6333 }, // São Paulo
        '200': { lat: -22.9068, lon: -43.1729 }, // Rio de Janeiro
        '300': { lat: -19.9167, lon: -43.9345 }, // Belo Horizonte
        '400': { lat: -12.9714, lon: -38.5014 }, // Salvador
        '500': { lat: -8.0539, lon: -34.8811 },  // Recife
        '600': { lat: -3.7172, lon: -38.5433 },  // Fortaleza
        '700': { lat: -15.7975, lon: -47.8919 }, // Brasília
        '800': { lat: -25.4195, lon: -49.2646 }, // Curitiba
        '900': { lat: -30.0346, lon: -51.2177 }  // Porto Alegre
      };

      // Calcula a distância aproximada usando a fórmula de Haversine
      const origin = regions[originRegion] || regions['649'];
      const destination = regions[destinationRegion.substring(0, 1) + '00'] || origin;

      const R = 6371; // Raio da Terra em km
      const dLat = (destination.lat - origin.lat) * Math.PI / 180;
      const dLon = (destination.lon - origin.lon) * Math.PI / 180;
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(origin.lat * Math.PI / 180) * Math.cos(destination.lat * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const distance = R * c;

      // Cálculo do preço base considerando distância e peso
      const basePrice = (distance * 0.15) + (weight * 2);
      
      // Ajuste para volume
      const volume = (length * width * height) / 1000000; // em m³
      const volumeMultiplier = 1 + (volume * 0.5);

      // Preços finais
      const pacPrice = basePrice * volumeMultiplier;
      const sedexPrice = pacPrice * 1.8;

      // Prazos de entrega baseados na distância real
      const pacDeadline = Math.max(3, Math.ceil(distance / 150)); // Mínimo 3 dias
      const sedexDeadline = Math.max(1, Math.ceil(distance / 300)); // Mínimo 1 dia
      
      const options = [
        {
          service: 'PAC',
          price: pacPrice,
          deadline: pacDeadline
        },
        {
          service: 'SEDEX',
          price: sedexPrice,
          deadline: sedexDeadline
        }
      ];
      
      setShippingOptions(options);
      if (onShippingCalculated) {
        onShippingCalculated(options);
      }
    } catch (err) {
      setError('Erro ao calcular o frete. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      {/* Aviso sobre variação de frete */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-700">
            <p className="font-medium mb-1">Informação sobre o frete:</p>
            <ul className="list-disc list-inside space-y-1 text-blue-600">
              <li>O valor do frete pode variar de acordo com:</li>
              <ul className="ml-6 list-disc space-y-1">
                <li>Peso total do pedido</li>
                <li>Dimensões das embalagens</li>
                <li>Quantidade de itens</li>
                <li>Região de entrega</li>
              </ul>
              <li>Para pedidos com múltiplos itens, consulte-nos via WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <Truck className="w-5 h-5 text-secondary" />
        <h3 className="font-semibold text-gray-800">Calcular Frete</h3>
      </div>

      <div className="flex gap-2 mb-4">
        <div className="flex-grow">
          <input
            type="text"
            value={cep}
            onChange={handleCEPChange}
            placeholder="Digite seu CEP"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            maxLength={9}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <button
          onClick={calculateShipping}
          disabled={loading || cep.length !== 9}
          className="px-6 py-2 bg-secondary hover:bg-accent text-white rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Calculando...
            </>
          ) : (
            'Calcular'
          )}
        </button>
      </div>

      {shippingOptions.length > 0 && (
        <div className="space-y-3">
          {shippingOptions.map((option) => (
            <div
              key={option.service}
              className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm"
            >
              <div>
                <p className="font-medium text-gray-800">{option.service}</p>
                <p className="text-sm text-gray-600">
                  Entrega em até {option.deadline} dias úteis
                </p>
              </div>
              <p className="font-semibold text-secondary">
                R$ {option.price.toFixed(2)}
              </p>
            </div>
          ))}
          <p className="text-xs text-gray-500 mt-2">
            * Prazo de entrega inicia-se após a confirmação do pagamento
          </p>
        </div>
      )}

      <div className="mt-4">
        <a
          href="https://buscacepinter.correios.com.br/app/endereco/index.php"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-secondary transition-colors"
        >
          Não sei meu CEP
        </a>
      </div>
    </div>
  );
};

export default ShippingCalculator;