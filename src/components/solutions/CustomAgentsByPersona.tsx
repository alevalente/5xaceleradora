
import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Cog, Zap, Target, ArrowRight, Sparkles, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomAgentsByPersona = () => {
  const customBenefits = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: 'Análise Personalizada',
      description: 'Estudamos seu processo comercial e identificamos oportunidades únicas de automação.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Cog className="h-8 w-8 text-white" />,
      title: 'Desenvolvimento Sob Medida',
      description: 'Criamos agentes específicos para suas necessidades, não soluções genéricas.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Integração Total',
      description: 'Conectamos perfeitamente com seus sistemas atuais sem interrupções.',
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
    <div className="mt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Solução Personalizada</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Não encontrou o 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> agente ideal</span> para seu negócio?
            </h3>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Criamos agentes de IA <span className="font-semibold text-blue-600">completamente personalizados</span> para 
              resolver os desafios específicos do seu processo comercial.
            </p>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Entrega em 15 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Suporte dedicado</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-pulse-soft">
                <BrainCircuit className="h-8 w-8 text-white" />
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-white">
                  Sua necessidade é única?
                </h4>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Nossa solução também será. Desenvolvemos desde automações simples até sistemas complexos de IA.
                </p>
                
                <div className="flex items-center gap-3 text-blue-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">100% adaptado ao seu fluxo</span>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-float animation-delay-300"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full animate-float animation-delay-700"></div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h4 className="text-2xl font-bold text-center mb-12 text-gray-900">
            Como Criamos Seu Agente Personalizado
          </h4>
          
          <div className="grid md:grid-cols-3 gap-8">
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
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {customBenefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  
                  <h5 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h5>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_40%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_40%)]"></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h4 className="text-3xl md:text-4xl font-bold mb-6">
                Vamos descobrir qual agente seu negócio precisa?
              </h4>
              
              <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Em uma conversa de 30 minutos, analisamos seu processo comercial e apresentamos 
                as possibilidades de automação específicas para sua empresa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Link to="/contact" className="flex items-center">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Solicitar Análise Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <a 
                  href="https://wa.me/5519994435313?text=Olá! Gostaria de uma análise gratuita para criar um agente personalizado para meu negócio." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center text-blue-100 hover:text-white font-medium transition-colors duration-300"
                >
                  <span className="border-b border-blue-200 group-hover:border-white transition-colors">
                    Ou fale conosco no WhatsApp
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
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
  );
};

export default CustomAgentsByPersona;
