
import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CreditoExplanation = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-800 to-gray-900 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-400/30 rounded-full backdrop-blur-sm mb-8">
            <Shield className="h-5 w-5 mr-2 text-green-400" />
            <span className="text-green-300 font-mono text-sm">Agente Inteligente</span>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">
            O que é o Agente de Cadastro e Análise de Crédito?
          </h2>

          {/* Texto explicativo principal */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
            É uma solução inteligente que automatiza completamente o processo de análise de crédito, integrada à plataforma{' '}
            <Link 
              to="/iago-conversas" 
              target="_blank"
              className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-bold hover:from-green-300 hover:to-emerald-300 transition-all duration-300"
            >
              IAgo Conversas
            </Link>
            . Consulta automaticamente CPF/CNPJ, Serasa, SPC, referências bancárias e aplica algoritmos de análise de risco para aprovar ou rejeitar solicitações em minutos, sem intervenção humana.
          </p>

          {/* Complemento de reforço */}
          <p className="text-base text-gray-400 max-w-4xl mx-auto mb-8">
            Você reduz tempo de aprovação de dias para minutos, diminui riscos de inadimplência e aumenta a satisfação dos clientes com respostas instantâneas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreditoExplanation;
