
import React from 'react';
import { RefreshCw, MessageCircle, Phone } from 'lucide-react';
import { Button } from '../ui/button';

const ReativacaoCTA = () => {
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
              <RefreshCw className="h-10 w-10 text-blue-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Quer saber quantos clientes você pode 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> recuperar imediatamente?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Solicite agora o <strong className="text-white">Diagnóstico Gratuito da sua Carteira de Inativos</strong> e descubra o potencial de recuperação de faturamento da sua empresa.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4 border border-green-500/30">
                <MessageCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Análise Gratuita</h3>
              <p className="text-gray-400 text-sm">Identificação dos clientes com maior potencial de reativação</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
                <RefreshCw className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Estimativa de Recuperação</h3>
              <p className="text-gray-400 text-sm">Projeção de faturamento que pode ser recuperado mensalmente</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full mb-4 border border-cyan-500/30">
                <Phone className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Consultoria Personalizada</h3>
              <p className="text-gray-400 text-sm">Estratégia específica para seu perfil de clientes e negócio</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold shadow-xl border border-green-500/20"
            >
              <RefreshCw className="h-6 w-6 mr-3" />
              Solicitar Diagnóstico Gratuito
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-10 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              <Phone className="h-5 w-5 mr-2" />
              Falar via WhatsApp
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              ✅ Sem compromisso • ✅ Análise em 24h • ✅ 100% gratuito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoCTA;
