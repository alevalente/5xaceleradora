
import React from 'react';
import { RefreshCw, MessageCircle, Phone } from 'lucide-react';
import { Button } from '../ui/button';

const ReativacaoCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-blue-400/10 filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-[30%] right-[15%] w-80 h-80 rounded-full bg-purple-400/10 filter blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <RefreshCw className="h-10 w-10 text-blue-300" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Quer saber quantos clientes você pode 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300"> recuperar imediatamente?</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Solicite agora o <strong>Diagnóstico Gratuito da sua Carteira de Inativos</strong> e descubra o potencial de recuperação de faturamento da sua empresa.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-400/20 rounded-full mb-4">
                <MessageCircle className="h-6 w-6 text-green-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Análise Gratuita</h3>
              <p className="text-blue-200 text-sm">Identificação dos clientes com maior potencial de reativação</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-400/20 rounded-full mb-4">
                <RefreshCw className="h-6 w-6 text-purple-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Estimativa de Recuperação</h3>
              <p className="text-blue-200 text-sm">Projeção de faturamento que pode ser recuperado mensalmente</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400/20 rounded-full mb-4">
                <Phone className="h-6 w-6 text-yellow-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Consultoria Personalizada</h3>
              <p className="text-blue-200 text-sm">Estratégia específica para seu perfil de clientes e negócio</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold shadow-xl"
            >
              <RefreshCw className="h-6 w-6 mr-3" />
              Solicitar Diagnóstico Gratuito
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              <Phone className="h-5 w-5 mr-2" />
              Falar via WhatsApp
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-blue-300 text-sm">
              ✅ Sem compromisso • ✅ Análise em 24h • ✅ 100% gratuito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoCTA;
