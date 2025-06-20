
import React, { useEffect, useState } from 'react';
import { Target, Brain, Handshake, Award, Heart, CheckCircle2 } from 'lucide-react';

const DetailedAnalysisSection = () => {
  const [itemsAnimated, setItemsAnimated] = useState<boolean[]>([false, false, false, false, false]);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setItemsAnimated(prev => [true, prev[1], prev[2], prev[3], prev[4]]), 200),
      setTimeout(() => setItemsAnimated(prev => [prev[0], true, prev[2], prev[3], prev[4]]), 400),
      setTimeout(() => setItemsAnimated(prev => [prev[0], prev[1], true, prev[3], prev[4]]), 600),
      setTimeout(() => setItemsAnimated(prev => [prev[0], prev[1], prev[2], true, prev[4]]), 800),
      setTimeout(() => setItemsAnimated(prev => [prev[0], prev[1], prev[2], prev[3], true]), 1000),
    ];

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const analysisItems = [
    {
      icon: Target,
      title: "Abordagem",
      description: "Avalia se os vendedores iniciam conversas gerando confiança e interesse imediato nos clientes.",
      benefit: "Reduz perda de oportunidades logo na primeira interação.",
      color: "text-blue-400",
      bgGradient: "from-blue-500/20 via-blue-400/10 to-cyan-500/20",
      borderGradient: "from-blue-400 to-cyan-400",
      glowColor: "shadow-blue-500/20"
    },
    {
      icon: Brain,
      title: "Levantamento de Necessidades e Venda de Mix",
      description: "Avalia se o vendedor identifica corretamente as necessidades reais dos clientes e se oferece oportunidades complementares que aumentam o valor da venda.",
      benefit: "Aumenta constantemente o ticket médio.",
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 via-purple-400/10 to-pink-500/20",
      borderGradient: "from-purple-400 to-pink-400",
      glowColor: "shadow-purple-500/20"
    },
    {
      icon: Handshake,
      title: "Negociação",
      description: "Analisa diretamente como vendedores argumentam, superam objeções e negociam condições comerciais sem prejudicar margens.",
      benefit: "Reduz descontos desnecessários e melhora conversões.",
      color: "text-orange-400",
      bgGradient: "from-orange-500/20 via-orange-400/10 to-yellow-500/20",
      borderGradient: "from-orange-400 to-yellow-400",
      glowColor: "shadow-orange-500/20"
    },
    {
      icon: Award,
      title: "Fechamento",
      description: "Mede a objetividade e a proatividade dos vendedores ao fechar as vendas, evitando a perda de oportunidades na reta final.",
      benefit: "Garante resultados melhores na etapa crítica do fechamento.",
      color: "text-green-400",
      bgGradient: "from-green-500/20 via-green-400/10 to-emerald-500/20",
      borderGradient: "from-green-400 to-emerald-400",
      glowColor: "shadow-green-500/20"
    },
    {
      icon: Heart,
      title: "Conexão Real com Cliente",
      description: "Avalia a habilidade real dos vendedores em criar conexões consistentes e vínculos duradouros com clientes.",
      benefit: "Aumenta significativamente a fidelização e retenção de clientes.",
      color: "text-red-400",
      bgGradient: "from-red-500/20 via-red-400/10 to-rose-500/20",
      borderGradient: "from-red-400 to-rose-400",
      glowColor: "shadow-red-500/20"
    }
  ];

  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-white mb-12 text-center leading-tight">
        Como exatamente o Agente de Análise de Conversas avalia suas interações comerciais?
      </h3>
      
      <div className="max-w-6xl mx-auto">
        {/* Header Row */}
        <div className="hidden md:grid md:grid-cols-12 gap-6 pb-4 mb-8 border-b border-gray-600/30">
          <div className="col-span-4">
            <h4 className="text-lg font-semibold text-gray-300">Área de Análise</h4>
          </div>
          <div className="col-span-5">
            <h4 className="text-lg font-semibold text-gray-300">Como Funciona</h4>
          </div>
          <div className="col-span-3">
            <h4 className="text-lg font-semibold text-gray-300">Benefício Direto</h4>
          </div>
        </div>

        {/* Analysis Items */}
        <div className="space-y-6">
          {analysisItems.map((item, index) => (
            <div
              key={index}
              className={`
                grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-xl
                bg-gradient-to-br ${item.bgGradient}
                border border-transparent bg-clip-padding
                backdrop-blur-sm relative overflow-hidden group
                transition-all duration-700 ease-out
                hover:scale-[1.02] hover:shadow-2xl hover:${item.glowColor}
                ${itemsAnimated[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
                }
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
                background: `linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.6) 100%), 
                           linear-gradient(45deg, var(--tw-gradient-stops))`
              }}
            >
              {/* Animated border gradient */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${item.borderGradient} p-[1px]`}>
                <div className="w-full h-full rounded-xl bg-gray-800/90 backdrop-blur-sm" />
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110" />
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform group-hover:scale-110" />

              {/* Content */}
              <div className="relative z-10">
                {/* Analysis Area */}
                <div className="col-span-1 md:col-span-4 flex items-start space-x-4">
                  <div className={`
                    flex-shrink-0 w-12 h-12 rounded-xl 
                    bg-gradient-to-br from-gray-700/80 to-gray-800/80 
                    border border-gray-600/50
                    flex items-center justify-center
                    transition-all duration-300 
                    group-hover:scale-110 group-hover:rotate-3
                    group-hover:shadow-lg group-hover:${item.glowColor}
                    animate-pulse-soft
                  `}>
                    <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-gray-100 transition-colors duration-300">
                      {item.title}
                    </h5>
                    <div className="md:hidden">
                      <p className="text-gray-300 text-base leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                        {item.description}
                      </p>
                      <div className="flex items-start space-x-2 transform group-hover:translate-x-1 transition-transform duration-300">
                        <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <p className="text-green-300 text-base leading-relaxed group-hover:text-green-200 transition-colors duration-300">
                          <span className="font-semibold">Resultado:</span> {item.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description - Hidden on mobile */}
                <div className="hidden md:block col-span-5">
                  <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Benefit - Hidden on mobile */}
                <div className="hidden md:block col-span-3">
                  <div className="flex items-start space-x-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-green-300 text-base leading-relaxed group-hover:text-green-200 transition-colors duration-300">
                      <span className="font-semibold">Resultado:</span> {item.benefit}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analysis accuracy note */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-green-500/20">
          <Brain className="h-5 w-5 mr-3 text-green-400 animate-pulse-soft" />
          <span className="text-green-300 text-base font-medium">
            IA treinada com + de 50.000 conversas comerciais reais
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailedAnalysisSection;
