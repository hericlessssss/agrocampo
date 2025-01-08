import React from 'react';
import { TrendingUp, DollarSign, AlertCircle } from 'lucide-react';
import { quotations } from '../../data/quotations';

const CepeaWidget = () => {
  const hoje = new Date().toISOString().split('T')[0];
  const isDesatualizado = quotations.some(q => q.ultimaAtualizacao !== hoje);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-poppins text-lg font-semibold text-footer-text flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-accent" />
          Cotações do Dia
        </h3>
        {isDesatualizado && (
          <div className="flex items-center gap-1 text-yellow-400 text-xs">
            <AlertCircle className="w-4 h-4" />
            <span>Atualizar cotações</span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {quotations.map((cotacao) => (
          <div 
            key={cotacao.id}
            className="bg-footer-hover/5 p-3 rounded-lg hover:bg-footer-hover/10 transition-colors"
          >
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-4 h-4 text-accent" />
              <span className="text-footer-text/90 text-sm">{cotacao.nome}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-footer-text font-semibold">{cotacao.valor}</span>
              <span className={`text-xs ${
                cotacao.variacao.startsWith('+') 
                  ? 'text-green-400' 
                  : 'text-red-400'
              }`}>
                {cotacao.variacao}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center space-y-1">
        <p className="text-footer-text/60 text-xs">
          Fonte: CEPEA/ESALQ
        </p>
        <p className="text-footer-text/40 text-xs">
          Última atualização: {quotations[0].ultimaAtualizacao}
        </p>
      </div>
    </div>
  );
};

export default CepeaWidget;