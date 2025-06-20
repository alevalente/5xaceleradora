
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
      accent: "bg-blue-500/10 border-blue-500/20"
    },
    {
      icon: Brain,
      title: "Levantamento de Necessidades e Venda de Mix",
      description: "Avalia se o vendedor identifica corretamente as necessidades reais dos clientes e se oferece oportunidades complementares que aumentam o valor da venda.",
      benefit: "Aumenta constantemente o ticket médio.",
      color: "text-purple-400",
      accent: "bg-purple-500/10 border-purple-500/20"
    },
    {
      icon: Handshake,
      title: "Negociação",
      description: "Analisa diretamente como vendedores argumentam, superam objeções e negociam condições comerciais sem prejudicar margens.",
      benefit: "Reduz descontos desnecessários e melhora conversões.",
      color: "text-orange-400",
      accent: "bg-orange-500/10 border-orange-500/20"
    },
    {
      icon: Award,
      title: "Fechamento",
      description: "Mede a objetividade e a proatividade dos vendedores ao fechar as vendas, evitando a perda de oportunidades na reta final.",
      benefit: "Garante resultados melhores na etapa crítica do fechamento.",
      color: "text-green-400",
      accent: "bg-green-500/10 border-green-500/20"
    },
    {
      icon: Heart,
      title: "Conexão Real com Cliente",
      description: "Avalia a habilidade real dos vendedores em criar conexões consistentes e vínculos duradouros com clientes.",
      benefit: "Aumenta significativamente a fidelização e retenção de clientes.",
      color: "text-red-400",
      accent: "bg-red-500/10 border-red-500/20"
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
        <div className="space-y-4">
          {analysisItems.map((item, index) => (
            <div
              key={index}
              className={`
                grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-lg
                bg-gray-800/60 border border-gray-700/50
                hover:bg-gray-800/80 hover:border-gray-600/50 hover:shadow-lg
                transition-all duration-300 ease-out
                ${itemsAnimated[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
                }
              `}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Analysis Area */}
              <div className="col-span-1 md:col-span-4 flex items-start space-x-4">
                <div className={`
                  flex-shrink-0 w-12 h-12 rounded-lg 
                  ${item.accent}
                  border flex items-center justify-center
                  transition-all duration-300
                `}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h5 className="text-xl font-semibold text-white mb-2 leading-tight">
                    {item.title}
                  </h5>
                  <div className="md:hidden">
                    <p className="text-gray-300 text-base leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-green-300 text-base leading-relaxed">
                        <span className="font-medium">Resultado:</span> {item.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description - Hidden on mobile */}
              <div className="hidden md:block col-span-5">
                <p className="text-gray-300 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Benefit - Hidden on mobile */}
              <div className="hidden md:block col-span-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-green-300 text-base leading-relaxed">
                    <span className="font-medium">Resultado:</span> {item.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analysis accuracy note */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-400/20 rounded-full">
          <Brain className="h-5 w-5 mr-3 text-green-400" />
          <span className="text-green-300 text-base font-medium">
            IA treinada com + de 50.000 conversas comerciais reais
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailedAnalysisSection;
