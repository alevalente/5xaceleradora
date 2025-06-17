
import React from 'react';
import { Clock, AlertTriangle, MessageCircle, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const OtherScenarios = () => {
  const otherScenarios = [
    {
      title: "Cliente reclama no Instagram",
      scenario: "Equipe responde no WhatsApp. Cliente posta: 'Vocês nem leem as mensagens!'",
      frequency: "5x por semana em média",
      visual: "📱 → 💬 → 🤦‍♂️",
      impact: "Reputação no chão",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      icon: MessageCircle
    },
    {
      title: "Reunião de vendas",
      scenario: "'Quantos leads convertemos?' Silêncio. Ninguém sabe porque cada um usa uma planilha diferente.",
      frequency: "Toda segunda-feira",
      visual: "🤷‍♂️ → 📊❓ → 😬",
      impact: "Decisões no escuro",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      icon: BarChart3
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {otherScenarios.map((scenario, index) => (
        <div 
          key={index} 
          className={cn(
            "group relative p-8 rounded-2xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-xl bg-gradient-to-br",
            scenario.bgColor,
            scenario.borderColor
          )}
        >
          {/* Ícone Principal */}
          <div className="text-center mb-6">
            <div className={cn(
              "w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110",
              scenario.iconBg
            )}>
              <scenario.icon className={cn("h-10 w-10", scenario.iconColor)} />
            </div>
            
            {/* Visual Emoji */}
            <div className="text-3xl mb-4 group-hover:animate-pulse">
              {scenario.visual}
            </div>
          </div>
          
          {/* Título e Cenário */}
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {scenario.title}
            </h4>
            <p className="text-gray-700 leading-relaxed text-base">
              {scenario.scenario}
            </p>
          </div>
          
          {/* Métricas */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-orange-600 bg-white/50 rounded-lg p-3">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{scenario.frequency}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-red-600 bg-white/50 rounded-lg p-3">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-bold">{scenario.impact}</span>
            </div>
          </div>

          {/* Efeito de borda animado no hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
};

export default OtherScenarios;
