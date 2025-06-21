
import React from 'react';
import { Brain, AlertTriangle, TrendingDown, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';

const FollowupHero = () => {
  const handleScrollToContact = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-red-500/20 filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-orange-500/20 filter blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Problem Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-red-500/20 border border-red-400/30 rounded-full backdrop-blur-sm mb-8">
            <AlertTriangle className="h-5 w-5 mr-2 text-red-400" />
            <span className="text-red-300 font-mono text-sm">Problema Crítico Identificado</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            <span className="text-red-400">Quantos negócios você perde</span>
            <br />
            <span className="text-white">porque seus vendedores esquecem</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              de fazer follow-up?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            <span className="text-red-400 font-bold">73% das vendas são perdidas</span> por falta de follow-up adequado. 
            Seus vendedores conversam com clientes interessados, mas <span className="text-orange-400 font-bold">esquecem de acompanhar</span> as oportunidades.
            <br /><br />
            Sem acompanhamento sistemático, você deixa <span className="text-yellow-400 font-bold">dinheiro na mesa todos os dias</span>.
          </p>

          {/* Problem Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-3">
                <TrendingDown className="h-8 w-8 text-red-400" />
              </div>
              <div className="text-3xl font-bold text-red-400 mb-2">73%</div>
              <div className="text-gray-300 text-sm">das vendas perdidas por falta de follow-up</div>
            </div>
            
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-3">
                <MessageSquare className="h-8 w-8 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-orange-400 mb-2">85%</div>
              <div className="text-gray-300 text-sm">das conversas não têm acompanhamento</div>
            </div>
            
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-3">
                <Brain className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">R$ 180k</div>
              <div className="text-gray-300 text-sm">perda média mensal por empresa</div>
            </div>
          </div>

          <Button 
            onClick={handleScrollToContact}
            size="lg" 
            className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-6 text-xl font-bold shadow-2xl border-2 border-red-500/30 ring-2 ring-red-400/20 hover:ring-red-400/40 transition-all duration-300 transform hover:scale-105"
          >
            <AlertTriangle className="h-6 w-6 mr-3" />
            Parar de Perder Vendas Agora
          </Button>

          <p className="mt-6 text-gray-400 text-sm">
            ⚡ Solução implementada em 15 dias • 🎯 ROI garantido em 60 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default FollowupHero;
