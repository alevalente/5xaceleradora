
import React from 'react';
import { Zap, DollarSign, Clock, MessageCircle, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';

const CreditoCTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999";
    const message = encodeURIComponent("Olá! Tenho interesse no Agente de Cadastro e Análise de Crédito. Gostaria de saber mais sobre como automatizar nossas aprovações e reduzir o tempo de análise para minutos.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleFormClick = () => {
    window.location.href = '/#contact';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-green-500/20 filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-[30%] right-[15%] w-80 h-80 rounded-full bg-emerald-500/20 filter blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500/30 to-emerald-500/30 backdrop-blur-sm rounded-full mb-6 border-2 border-green-500/40 ring-2 ring-green-400/20 shadow-lg shadow-green-500/25">
              <Zap className="h-10 w-10 text-green-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Automatize suas análises e 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> aprove em minutos, não em dias</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Entre em contato agora e vamos mostrar como <strong className="text-white">implementar a análise automática de crédito</strong> na sua empresa e reduzir drasticamente o tempo de aprovação.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full mb-4 border-2 border-green-500/50 ring-1 ring-green-400/20 shadow-lg shadow-green-500/25">
                <Clock className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Aprovação Instantânea</h3>
              <p className="text-gray-400 text-sm">Análise completa em até 5 minutos</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/30 to-green-500/30 rounded-full mb-4 border-2 border-blue-500/50 ring-1 ring-blue-400/20 shadow-lg shadow-blue-500/25">
                <DollarSign className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Redução de Riscos</h3>
              <p className="text-gray-400 text-sm">Até 70% menos inadimplência</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/30 to-green-500/30 rounded-full mb-4 border-2 border-purple-500/50 ring-1 ring-purple-400/20 shadow-lg shadow-purple-500/25">
                <TrendingUp className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROI Garantido</h3>
              <p className="text-gray-400 text-sm">Retorno do investimento em 60 dias</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={handleFormClick}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 text-lg font-semibold shadow-xl border-2 border-green-500/30 ring-2 ring-green-400/20 hover:ring-green-400/40 transition-all duration-300"
            >
              <Zap className="h-6 w-6 mr-3" />
              Quero Automatizar Análises
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditoCTA;
