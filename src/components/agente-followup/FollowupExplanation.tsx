
import React from 'react';
import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const FollowupExplanation = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-800 to-gray-900 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm mb-8">
            <Bot className="h-5 w-5 mr-2 text-blue-400" />
            <span className="text-blue-300 font-mono text-sm">Agente Inteligente</span>
          </div>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 leading-tight">
            O que é o Agente de Análise de Conversa e Follow-up?
          </h2>

          {/* Texto explicativo principal */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
            É uma solução inteligente baseada em Inteligência Artificial, integrada diretamente à plataforma multiatendimento{' '}
            <Link 
              to="/iago-conversas" 
              target="_blank"
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
            >
              IAgo Conversas
            </Link>
            , que monitora automaticamente todas as interações comerciais dos seus vendedores, identificando oportunidades que ficaram sem resposta e realizando follow-ups certeiros, no momento exato, sem que você precise intervir manualmente.
          </p>

          {/* Complemento de reforço */}
          <p className="text-base text-gray-400 max-w-4xl mx-auto mb-8">
            Você recebe insights claros, recupera vendas perdidas e ganha controle total sobre oportunidades que você nunca conseguiria monitorar sozinho.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FollowupExplanation;
