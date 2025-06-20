
import React, { useEffect, useState } from 'react';
import { MessageSquare, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

const HowItWorksSection = () => {
  const [animatedCards, setAnimatedCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setAnimatedCards(prev => [true, prev[1], prev[2]]), 200),
      setTimeout(() => setAnimatedCards(prev => [prev[0], true, prev[2]]), 400),
      setTimeout(() => setAnimatedCards(prev => [prev[0], prev[1], true]), 600),
    ];

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const workflowCards = [
    {
      icon: MessageSquare,
      title: "Análise Automática e Objetiva",
      description: "Avaliação inteligente e detalhada das conversas dos vendedores com clientes, identificando claramente falhas e pontos fortes em tempo real.",
      color: "blue",
      progress: 96,
      badge: "Tempo Real",
      particles: ["bg-blue-400", "bg-cyan-300", "bg-blue-500"]
    },
    {
      icon: Users,
      title: "Conexão Real com Clientes",
      description: "Identifica automaticamente quais vendedores conseguem criar relações reais e quais precisam de ajuda urgente na conexão com seus clientes.",
      color: "purple",
      progress: 94,
      badge: "IA Avançada",
      particles: ["bg-purple-400", "bg-pink-300", "bg-purple-500"]
    },
    {
      icon: TrendingUp,
      title: "Insights Personalizados e Práticos",
      description: "Cada conversa analisada gera sugestões específicas e detalhadas para melhorar imediatamente o desempenho dos vendedores.",
      color: "green",
      progress: 98,
      badge: "Personalizado",
      particles: ["bg-green-400", "bg-emerald-300", "bg-green-500"]
    }
  ];

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">
        Como o Agente melhora cada conversa dos seus vendedores?
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {workflowCards.map((item, index) => (
          <div
            key={index}
            className={`group relative transition-all duration-700 ${
              animatedCards[index] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {item.particles.map((color, particleIndex) => (
                <div
                  key={particleIndex}
                  className={`absolute w-1 h-1 ${color} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 animate-pulse-soft`}
                  style={{
                    top: `${20 + particleIndex * 25}%`,
                    left: `${10 + particleIndex * 30}%`,
                    animationDelay: `${particleIndex * 500}ms`,
                  }}
                />
              ))}
            </div>

            <Card className={`
              relative overflow-hidden bg-gradient-to-br from-gray-800/70 via-gray-800/50 to-gray-900/70 
              border border-gray-600/50 backdrop-blur-sm 
              transition-all duration-500 ease-out
              hover:scale-105 hover:shadow-2xl hover:shadow-${item.color}-500/20
              hover:border-${item.color}-400/50
              group-hover:bg-gradient-to-br group-hover:from-${item.color}-900/20 group-hover:via-gray-800/50 group-hover:to-gray-900/70
              h-80
            `}>
              {/* Glow effect on hover */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 blur-xl
              `} />
              
              <CardContent className="pt-8 text-center relative z-10 h-full flex flex-col justify-between">
                <div>
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="outline" 
                      className={`text-xs border-${item.color}-400/40 text-${item.color}-300 bg-${item.color}-500/10`}
                    >
                      {item.badge}
                    </Badge>
                  </div>

                  {/* Icon with enhanced animation */}
                  <div className={`
                    h-16 w-16 mx-auto mb-4 rounded-full 
                    bg-gradient-to-br from-${item.color}-500/30 to-${item.color}-600/30 
                    flex items-center justify-center 
                    border border-${item.color}-400/30
                    transition-all duration-500 ease-out
                    group-hover:scale-110 group-hover:rotate-3
                    group-hover:shadow-lg group-hover:shadow-${item.color}-500/50
                  `}>
                    <item.icon className={`
                      h-8 w-8 text-${item.color}-400 
                      transition-all duration-300
                      group-hover:scale-110
                      animate-pulse-soft
                    `} />
                  </div>
                  
                  {/* Title with hover effect */}
                  <h4 className={`
                    text-white font-bold mb-3 text-lg
                    transition-colors duration-300
                    group-hover:text-${item.color}-300
                  `}>
                    {item.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                    {item.description}
                  </p>
                </div>

                {/* Animated Progress Bar */}
                <div className="space-y-2 mt-auto">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Precisão</span>
                    <span className={`text-${item.color}-400 font-mono font-bold`}>
                      {item.progress}%
                    </span>
                  </div>
                  <Progress 
                    value={animatedCards[index] ? item.progress : 0} 
                    className="h-2"
                  />
                </div>
              </CardContent>

              {/* Bottom glow line */}
              <div className={`
                absolute bottom-0 left-0 w-full h-1 
                bg-gradient-to-r from-transparent via-${item.color}-500 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
              `} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;
