
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
    <div className="h-full flex flex-col justify-start">
      <div className="text-center lg:text-left mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
          Por que escolher nossos agentes?
        </h3>
        <p className="text-base text-gray-600 mb-6">
          Resultados comprovados e implementação rápida.
        </p>
      </div>
      
      {/* Benefits Grid - Wider cards with better spacing */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="w-full max-w-none bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-white/30 hover:bg-white/90 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start space-x-6">
              <div className={cn(
                "flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center",
                benefit.color === 'blue' && "bg-blue-100 text-blue-600",
                benefit.color === 'green' && "bg-green-100 text-green-600",
                benefit.color === 'purple' && "bg-purple-100 text-purple-600"
              )}>
                <benefit.icon className="h-8 w-8" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators - Enhanced */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mt-auto">
        <div className="flex items-center justify-between text-center">
          <div className="flex-1">
            <div className="flex items-center justify-center mb-3">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
            </div>
            <p className="text-base font-semibold">4.9/5 estrelas</p>
            <p className="text-sm text-blue-200">50+ clientes</p>
          </div>
          <div className="w-px h-12 bg-white/20"></div>
          <div className="flex-1">
            <div className="flex items-center justify-center mb-3">
              <Zap className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-base font-semibold">Resposta rápida</p>
            <p className="text-sm text-blue-200">Em até 30 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormBenefits;
