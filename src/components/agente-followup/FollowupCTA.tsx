
import React from 'react';
import { Zap, DollarSign, Users, MessageCircle, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';

const FollowupCTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Número do WhatsApp da empresa
    const message = encodeURIComponent("Olá! Tenho interesse no Agente de Análise de Conversas e Follow-up. Gostaria de saber mais sobre como implementar na minha empresa e parar de perder vendas por falta de acompanhamento.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleFormClick = () => {
    // Scroll para o formulário de contato
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-red-500/20 filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-[30%] right-[15%] w-80 h-80 rounded-full bg-orange-500/20 filter blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500/30 to-orange-500/30 backdrop-blur-sm rounded-full mb-6 border-2 border-red-500/40 ring-2 ring-red-400/20 shadow-lg shadow-red-500/25">
              <Zap className="h-10 w-10 text-red-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pare de perder vendas e 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> transforme follow-ups em faturamento</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Entre em contato agora e vamos mostrar como <strong className="text-white">implementar o agente de follow-up na sua empresa</strong> e começar a recuperar todas as oportunidades perdidas imediatamente.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full mb-4 border-2 border-blue-500/50 ring-1 ring-blue-400/20 shadow-lg shadow-blue-500/25">
                <TrendingUp className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Implementação Rápida</h3>
              <p className="text-gray-400 text-sm">Agente funcionando na sua empresa em até 15 dias</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full mb-4 border-2 border-green-500/50 ring-1 ring-green-400/20 shadow-lg shadow-green-500/25">
                <DollarSign className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">ROI Comprovado</h3>
              <p className="text-gray-400 text-sm">Clientes recuperam o investimento em 60-90 dias</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full mb-4 border-2 border-orange-500/50 ring-1 ring-orange-400/20 shadow-lg shadow-orange-500/25">
                <Users className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Suporte Dedicado</h3>
              <p className="text-gray-400 text-sm">Acompanhamento completo durante toda implementação</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleFormClick}
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold shadow-xl border-2 border-red-500/30 ring-2 ring-red-400/20 hover:ring-red-400/40 transition-all duration-300"
            >
              <Zap className="h-6 w-6 mr-3" />
              Quero Implementar o Agente
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="border-2 border-green-500/60 text-green-400 hover:bg-green-500/10 hover:text-green-300 hover:border-green-400 px-10 py-4 text-lg font-semibold backdrop-blur-sm ring-1 ring-green-400/20 hover:ring-green-400/40 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Conversar no WhatsApp
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              ✅ Implementação em 15 dias • ✅ ROI em 60-90 dias • ✅ Suporte dedicado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowupCTA;
