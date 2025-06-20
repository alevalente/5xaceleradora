
import React, { useEffect, useState } from 'react';
import { Target, Brain, Handshake, Award, Heart, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';

const DetailedAnalysisSection = () => {
  const [analysisCardsAnimated, setAnalysisCardsAnimated] = useState<boolean[]>([false, false, false, false, false]);

  useEffect(() => {
    const analysisTimeouts = [
      setTimeout(() => setAnalysisCardsAnimated(prev => [true, prev[1], prev[2], prev[3], prev[4]]), 200),
      setTimeout(() => setAnalysisCardsAnimated(prev => [prev[0], true, prev[2], prev[3], prev[4]]), 400),
      setTimeout(() => setAnalysisCardsAnimated(prev => [prev[0], prev[1], true, prev[3], prev[4]]), 600),
      setTimeout(() => setAnalysisCardsAnimated(prev => [prev[0], prev[1], prev[2], true, prev[4]]), 800),
      setTimeout(() => setAnalysisCardsAnimated(prev => [prev[0], prev[1], prev[2], prev[3], true]), 1000),
    ];

    return () => {
      analysisTimeouts.forEach(clearTimeout);
    };
  }, []);

  const analysisCards = [
    {
      icon: Target,
      title: "Abordagem",
      description: "Avalia se os vendedores iniciam conversas gerando confiança e interesse imediato nos clientes.",
      benefit: "Reduz perda de oportunidades logo na primeira interação.",
      color: "blue",
      progress: 94,
      badge: "Primeira Impressão",
      particles: ["bg-blue-400", "bg-cyan-300", "bg-blue-500"]
    },
    {
      icon: Brain,
      title: "Levantamento de Necessidades e Venda de Mix",
      description: "Avalia se o vendedor identifica corretamente as necessidades reais dos clientes e se oferece oportunidades complementares que aumentam o valor da venda.",
      benefit: "Aumenta constantemente o ticket médio.",
      color: "purple",
      progress: 96,
      badge: "Upsell & Cross-sell",
      particles: ["bg-purple-400", "bg-pink-300", "bg-purple-500"]
    },
    {
      icon: Handshake,
      title: "Negociação",
      description: "Analisa diretamente como vendedores argumentam, superam objeções e negociam condições comerciais sem prejudicar margens.",
      benefit: "Reduz descontos desnecessários e melhora conversões.",
      color: "orange",
      progress: 92,
      badge: "Margem Protegida",
      particles: ["bg-orange-400", "bg-yellow-300", "bg-orange-500"]
    },
    {
      icon: Award,
      title: "Fechamento",
      description: "Mede a objetividade e a proatividade dos vendedores ao fechar as vendas, evitando a perda de oportunidades na reta final.",
      benefit: "Garante resultados melhores na etapa crítica do fechamento.",
      color: "green",
      progress: 98,
      badge: "Conversão Final",
      particles: ["bg-green-400", "bg-emerald-300", "bg-green-500"]
    },
    {
      icon: Heart,
      title: "Conexão Real com Cliente",
      description: "Avalia a habilidade real dos vendedores em criar conexões consistentes e vínculos duradouros com clientes.",
      benefit: "Aumenta significativamente a fidelização e retenção de clientes.",
      color: "red",
      progress: 95,
      badge: "Relacionamento",
      particles: ["bg-red-400", "bg-pink-300", "bg-red-500"]
    }
  ];

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">
        Como exatamente o Agente de Análise de Conversas avalia suas interações comerciais?
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {analysisCards.map((analysis, index) => (
          <div
            key={index}
            className={`group relative transition-all duration-700 ${
              analysisCardsAnimated[index] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            } ${index === 1 || index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            style={{
              transitionDelay: `${index * 150}ms`
            }}
          >
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {analysis.particles.map((color, particleIndex) => (
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
              hover:scale-105 hover:shadow-2xl hover:shadow-${analysis.color}-500/20
              hover:border-${analysis.color}-400/50
              group-hover:bg-gradient-to-br group-hover:from-${analysis.color}-900/20 group-hover:via-gray-800/50 group-hover:to-gray-900/70
              h-full min-h-80
            `}>
              {/* Glow effect on hover */}
              <div className={`
                absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                bg-gradient-to-r from-${analysis.color}-400 to-${analysis.color}-600 blur-xl
              `} />
              
              <CardContent className="pt-8 text-center relative z-10 h-full flex flex-col justify-between p-6">
                <div>
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant="outline" 
                      className={`text-xs border-${analysis.color}-400/40 text-${analysis.color}-300 bg-${analysis.color}-500/10`}
                    >
                      {analysis.badge}
                    </Badge>
                  </div>

                  {/* Icon with enhanced animation */}
                  <div className={`
                    h-16 w-16 mx-auto mb-4 rounded-full 
                    bg-gradient-to-br from-${analysis.color}-500/30 to-${analysis.color}-600/30 
                    flex items-center justify-center 
                    border border-${analysis.color}-400/30
                    transition-all duration-500 ease-out
                    group-hover:scale-110 group-hover:rotate-3
                    group-hover:shadow-lg group-hover:shadow-${analysis.color}-500/50
                  `}>
                    <analysis.icon className={`
                      h-8 w-8 text-${analysis.color}-400 
                      transition-all duration-300
                      group-hover:scale-110
                      animate-pulse-soft
                    `} />
                  </div>
                  
                  {/* Title with hover effect */}
                  <h4 className={`
                    text-white font-bold mb-3 text-lg
                    transition-colors duration-300
                    group-hover:text-${analysis.color}-300
                  `}>
                    {analysis.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {analysis.description}
                  </p>

                  {/* Benefit */}
                  <div className="mb-4">
                    <div className="flex items-start justify-center">
                      <CheckCircle2 className={`h-4 w-4 text-${analysis.color}-400 mr-2 mt-0.5 flex-shrink-0`} />
                      <p className={`text-xs text-${analysis.color}-300 leading-relaxed font-medium`}>
                        <span className="font-bold">Benefício:</span> {analysis.benefit}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="space-y-2 mt-auto">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Precisão da Análise</span>
                    <span className={`text-${analysis.color}-400 font-mono font-bold`}>
                      {analysis.progress}%
                    </span>
                  </div>
                  <Progress 
                    value={analysisCardsAnimated[index] ? analysis.progress : 0} 
                    className="h-2"
                  />
                </div>
              </CardContent>

              {/* Bottom glow line */}
              <div className={`
                absolute bottom-0 left-0 w-full h-1 
                bg-gradient-to-r from-transparent via-${analysis.color}-500 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
              `} />
            </Card>
          </div>
        ))}
      </div>

      {/* Analysis accuracy note */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-400/20 rounded-full backdrop-blur-sm">
          <Brain className="h-4 w-4 mr-2 text-green-400" />
          <span className="text-green-300 text-sm font-mono">
            IA treinada com + de 50.000 conversas comerciais reais
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailedAnalysisSection;
