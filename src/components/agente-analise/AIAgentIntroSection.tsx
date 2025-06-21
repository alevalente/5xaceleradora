
import React from 'react';
import { Cpu } from 'lucide-react';
import DetailedAnalysisSection from './DetailedAnalysisSection';
import HowItWorksSection from './HowItWorksSection';

const AIAgentIntroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          
          {/* What is it */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-400/20 rounded-full backdrop-blur-sm mb-6">
              <Cpu className="h-5 w-5 mr-2 text-blue-400" />
              <span className="text-blue-300 font-mono">Agente Inteligente</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              O que é o Agente de Análise de Conversas?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              É uma solução inteligente baseada em <span className="text-blue-400 font-semibold">Inteligência Artificial</span>, 
              integrada diretamente à plataforma multiatendimento <span className="text-blue-400 font-semibold">IAgo Conversas</span>, 
              que monitora e avalia automaticamente todas as conversas comerciais realizadas pelos seus vendedores.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-4">
              O agente identifica rapidamente quais interações comerciais estão prejudicando suas vendas e quais delas são exemplares, 
              oferecendo uma visão clara e objetiva através de dashboards intuitivos e cards detalhados no formato Kanban. 
              Assim, você recebe insights estratégicos imediatos e toma ações rápidas para melhorar o desempenho da sua equipe comercial.
            </p>
          </div>

          {/* Detailed Analysis Section */}
          <DetailedAnalysisSection />

          {/* How it works - Enhanced Interactive Cards */}
          <HowItWorksSection />
        </div>
      </div>
    </section>
  );
};

export default AIAgentIntroSection;
