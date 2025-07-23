import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Cog, Zap, Target, ArrowRight, Sparkles, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomAgentsByPersona = () => {
  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const customBenefits = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: 'Análise Personalizada',
      description: 'Analisamos seu negócio e identificamos oportunidades específicas de automação.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Cog className="h-8 w-8 text-white" />,
      title: 'Desenvolvimento Sob Medida',
      description: 'Desenvolvemos agentes personalizados exatamente para o seu processo comercial.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Integração Total',
      description: 'Integramos nossas soluções diretamente aos seus sistemas atuais sem interromper sua rotina.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const processSteps = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: 'Reunião de Descoberta',
      description: 'Analisamos seu processo e identificamos oportunidades'
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-blue-600" />,
      title: 'Desenvolvimento Personalizado',
      description: 'Criamos seu agente único com IA avançada'
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: 'Implementação e Treinamento',
      description: 'Integramos e treinamos sua equipe'
    }
  ];

  return (
    <section className="w-full bg-blue-50 py-20">
      <div className="px-4 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
        <div className="relative">
          {/* Elementos decorativos sutis ajustados para o fundo azul */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-white/40 rounded-full opacity-50"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-blue-200/60 rounded-full opacity-50"></div>
          
          <div className="relative z-10">
            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Solução Personalizada</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Seu negócio precisa de um 
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> agente sob medida</span>?
                </h3>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  Criamos agentes de IA <span className="font-semibold text-blue-700">completamente personalizados</span> para 
                  resolver os desafios específicos do seu processo comercial.
                </p>
              </div>

              {/* Right Visual */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse-soft">
                    <BrainCircuit className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-white">
                      Agentes construídos 100% para sua realidade
                    </h4>
                    <p className="text-blue-100 text-lg leading-relaxed">
                      Desenvolvemos soluções adaptadas especificamente ao seu processo.
                    </p>
                    
                    <div className="flex items-center gap-3 text-blue-100">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">100% adaptado ao seu fluxo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="mb-16">
              <h4 className="text-2xl font-bold text-center mb-12 text-gray-900">
                Como Criamos Seu Agente Personalizado
              </h4>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="text-center group">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                          {step.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                          {index + 1}
                        </div>
                      </div>
                      
                      <h5 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h5>
                      <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                    </div>
                    
                    {/* Connector Line */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-x-1/2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
              {customBenefits.map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-200/50">
                    <div className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {benefit.icon}
                      </div>
                      
                      <h5 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h5>
                      <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden">
                {/* Background Pattern sutil */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_60%)]"></div>
                
                <div className="relative z-10 text-center">
                  <h4 className="text-3xl md:text-4xl font-bold mb-6">
                    Vamos descobrir qual agente seu negócio precisa?
                  </h4>
                  
                  <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                    Em uma conversa de 30 minutos, analisamos seu processo comercial e apresentamos 
                    as possibilidades de automação específicas para sua empresa.
                  </p>
                  
                  <div className="flex justify-center">
                    <button 
                      onClick={handleCTAClick}
                      className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Descobrir Meu Potencial de Automação
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center gap-8 mt-10 text-blue-200 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Sem compromisso</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Análise detalhada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>30 minutos</span>
                    </div>
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

export default CustomAgentsByPersona;
