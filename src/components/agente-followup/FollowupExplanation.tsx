
import React from 'react';
import { Bot, Zap, Target, BarChart3 } from 'lucide-react';

const FollowupExplanation = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          {/* Solution Introduction */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm mb-8">
              <Bot className="h-5 w-5 mr-2 text-blue-400" />
              <span className="text-blue-300 font-mono text-sm">Solução Inteligente</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Agente de Análise de Conversas
              </span>
              <br />
              <span className="text-white">e Follow-up Automático</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Nossa Inteligência Artificial <span className="text-blue-400 font-bold">monitora automaticamente</span> todas as conversas comerciais, 
              <span className="text-purple-400 font-bold"> identifica oportunidades perdidas</span> e 
              <span className="text-green-400 font-bold"> executa follow-ups personalizados</span> no momento certo.
            </p>
          </div>

          {/* What it does */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">O que o agente faz por você:</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                    <span className="text-blue-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Analisa Cada Conversa Automaticamente</h4>
                    <p className="text-gray-400">Monitora 100% das interações comerciais via WhatsApp, e-mail e outros canais em tempo real.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                    <span className="text-purple-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Detecta Oportunidades Esquecidas</h4>
                    <p className="text-gray-400">Identifica clientes interessados que não receberam follow-up e prioriza por potencial de conversão.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                    <span className="text-green-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Executa Follow-ups Inteligentes</h4>
                    <p className="text-gray-400">Envia mensagens personalizadas no timing perfeito, aumentando a taxa de conversão.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-400/30">
                    <span className="text-orange-400 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Gera Relatórios de Performance</h4>
                    <p className="text-gray-400">Dashboard completo com métricas de conversão, ROI e oportunidades recuperadas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Resultados Garantidos:</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                    <Target className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">+47%</div>
                    <div className="text-gray-300 text-sm">aumento na taxa de conversão</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">-65%</div>
                    <div className="text-gray-300 text-sm">redução no tempo de ciclo de vendas</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">300%</div>
                    <div className="text-gray-300 text-sm">ROI médio em 90 dias</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowupExplanation;
