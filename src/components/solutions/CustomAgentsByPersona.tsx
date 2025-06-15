
import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Cog, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomAgentsByPersona = () => {
  const customBenefits = [
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: 'Análise Personalizada',
      description: 'Estudamos seu processo comercial e identificamos oportunidades únicas de automação.'
    },
    {
      icon: <Cog className="h-6 w-6 text-blue-600" />,
      title: 'Desenvolvimento Sob Medida',
      description: 'Criamos agentes específicos para suas necessidades, não soluções genéricas.'
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: 'Integração Total',
      description: 'Conectamos perfeitamente com seus sistemas atuais sem interrupções.'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      title: 'Suporte Especializado',
      description: 'Acompanhamento completo desde o desenvolvimento até a implementação.'
    }
  ];

  const uniqueCases = [
    'Agente para controle de estoque automatizado via WhatsApp',
    'Validação de propostas comerciais com análise de margem',
    'Monitoramento de satisfação pós-venda em tempo real',
    'Automação de cobrança inteligente e humanizada'
  ];

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-50 rounded-full">
            <BrainCircuit className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Não encontrou o agente ideal para seu negócio?
        </h3>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Criamos agentes de IA <span className="font-semibold text-blue-600">completamente personalizados</span> para 
          resolver os desafios específicos do seu processo comercial. Se você tem uma necessidade única, 
          nós temos a solução sob medida.
        </p>

        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            Sua necessidade é única? Nossa solução também será.
          </h4>
          <p className="text-blue-700 text-lg">
            Desenvolvemos desde automações simples até sistemas complexos de IA que se adaptam 
            perfeitamente ao seu fluxo de trabalho atual.
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {customBenefits.map((benefit, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-50 rounded-full">
                {benefit.icon}
              </div>
            </div>
            <h5 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h5>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Examples Section */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h4 className="text-2xl font-bold text-center mb-6 text-gray-900">
          Exemplos de Agentes Únicos que já Desenvolvemos
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          {uniqueCases.map((caseExample, index) => (
            <div key={index} className="flex items-center bg-white rounded-lg p-4 shadow-sm">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{caseExample}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <h4 className="text-3xl font-bold mb-4">
          Vamos descobrir qual agente seu negócio precisa?
        </h4>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
          Em uma conversa de 30 minutos, analisamos seu processo comercial e apresentamos 
          as possibilidades de automação específicas para sua empresa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
            <Link to="/contact" className="flex items-center">
              Solicitar Análise Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <a 
            href="https://wa.me/5519994435313?text=Olá! Gostaria de uma análise gratuita para criar um agente personalizado para meu negócio." 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-100 hover:text-white font-medium flex items-center"
          >
            Ou fale conosco no WhatsApp
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomAgentsByPersona;
