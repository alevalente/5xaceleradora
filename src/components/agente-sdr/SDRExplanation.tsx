
import React from 'react';
import { Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const SDRExplanation = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-800 to-gray-900 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-orange-500/20 border border-orange-400/30 rounded-full backdrop-blur-sm mb-8">
            <Headphones className="h-5 w-5 mr-2 text-orange-400" />
            <span className="text-orange-300 font-mono text-sm">Agente Inteligente</span>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">
            O que é o Agente SDR – Atendimento e Qualificação?
          </h2>

          {/* Texto explicativo principal */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
            É uma solução inteligente que funciona como seu SDR pessoal 24/7, integrada à plataforma{' '}
            <Link 
              to="/iago-conversas" 
              target="_blank"
              className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-bold hover:from-orange-300 hover:to-red-300 transition-all duration-300"
            >
              IAgo Conversas
            </Link>
            . Atende instantaneamente todos os leads, qualifica automaticamente usando critérios personalizados, agenda reuniões e encaminha apenas oportunidades reais para sua equipe comercial.
          </p>

          {/* Complemento de reforço */}
          <p className="text-base text-gray-400 max-w-4xl mx-auto mb-8">
            Você aumenta a taxa de conversão, melhora a experiência do cliente com atendimento imediato e otimiza o tempo da sua equipe comercial focando apenas em leads qualificados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SDRExplanation;
