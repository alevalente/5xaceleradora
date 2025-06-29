
import React from 'react';
import { Clock, TrendingUp, Headset, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BenefitItem } from './ContactFormTypes';

const ContactFormBenefits = () => {
  const benefits: BenefitItem[] = [
    {
      icon: Clock,
      title: "21 dias",
      description: "Implementação rápida com resultados imediatos",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "+35%",
      description: "Aumento médio nas vendas dos nossos clientes",
      color: "green"
    },
    {
      icon: Headset,
      title: "Suporte contínuo",
      description: "Acompanhamento dedicado para máximo desempenho",
      color: "purple"
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Compact spacer to align with form content */}
      <div className="mb-3 lg:mb-4">
        <div className="h-12 lg:h-16"></div>
      </div>

      <div className="text-center lg:text-left mb-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
          Por que escolher nossos agentes?
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          Resultados comprovados e implementação rápida.
        </p>
      </div>
      
      {/* Compact Benefits Grid */}
      <div className="grid grid-cols-1 gap-4 mb-4 flex-1">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="w-full bg-white/80 backdrop-blur-sm p-4 lg:p-5 rounded-xl border border-white/30 hover:bg-white/90 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start space-x-3 lg:space-x-4">
              <div className={cn(
                "flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center",
                benefit.color === 'blue' && "bg-blue-100 text-blue-600",
                benefit.color === 'green' && "bg-green-100 text-green-600",
                benefit.color === 'purple' && "bg-purple-100 text-purple-600"
              )}>
                <benefit.icon className="h-5 w-5 lg:h-6 lg:w-6" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-1">
                  {benefit.title}
                </h4>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Compact Trust Indicators */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 lg:p-5 text-white mt-auto">
        <div className="flex items-center justify-between text-center">
          <div className="flex-1">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current" />
              <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current" />
              <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current" />
              <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current" />
              <Star className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current" />
            </div>
            <p className="text-xs lg:text-sm font-semibold">4.9/5 estrelas</p>
            <p className="text-xs text-blue-200">50+ clientes</p>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="flex-1">
            <div className="flex items-center justify-center mb-2">
              <Zap className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400" />
            </div>
            <p className="text-xs lg:text-sm font-semibold">Resposta rápida</p>
            <p className="text-xs text-blue-200">Em até 30 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormBenefits;
