
import React from 'react';
import { Rocket, DollarSign, Users, MessageCircle, Phone } from 'lucide-react';
import { Button } from '../ui/button';

const ReativacaoCTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Número do WhatsApp da empresa
    const message = encodeURIComponent("Olá! Tenho interesse no Agente de Reativação de Clientes. Gostaria de saber mais sobre como implementar na minha empresa.");
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
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-blue-500/20 filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-[30%] right-[15%] w-80 h-80 rounded-full bg-purple-500/20 filter blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full mb-6 border-2 border-blue-500/40 ring-2 ring-blue-400/20 shadow-lg shadow-blue-500/25">
              <Rocket className="h-10 w-10 text-blue-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pronto para recuperar clientes inativos e 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> aumentar seu faturamento?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Entre em contato agora e vamos mostrar como <strong className="text-white">implementar o agente de reativação na sua empresa</strong> e começar a recuperar clientes perdidos imediatamente.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full mb-4 border-2 border-green-500/50 ring-1 ring-green-400/20 shadow-lg shadow-green-500/25">
                <Rocket className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Implementação Rápida</h3>
              <p className="text-gray-400 text-sm">Agente funcionando na sua empresa em até 15 dias</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-full mb-4 border-2 border-yellow-500/50 ring-1 ring-yellow-400/20 shadow-lg shadow-yellow-500/25">
                <DollarSign className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROI Comprovado</h3>
              <p className="text-gray-400 text-sm">Clientes recuperam o investimento em 60-90 dias</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full mb-4 border-2 border-cyan-500/50 ring-1 ring-cyan-400/20 shadow-lg shadow-cyan-500/25">
                <Users className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Suporte Dedicado</h3>
              <p className="text-gray-400 text-sm">Acompanhamento completo durante toda implementação</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              onClick={handleFormClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold shadow-xl border-2 border-blue-500/30 ring-2 ring-blue-400/20 hover:ring-blue-400/40 transition-all duration-300"
            >
              <Rocket className="h-6 w-6 mr-3" />
              Quero Implementar o Agente
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoCTA;
