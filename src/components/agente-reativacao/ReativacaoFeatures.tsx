
import React, { useEffect, useState } from 'react';
import { Search, RefreshCw, Sparkles, Users, BarChart3, CheckCircle2, Brain } from 'lucide-react';

const ReativacaoFeatures = () => {
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

  const reativacaoFeatures = [
    {
      icon: Search,
      title: "Identificação Automática dos Inativos",
      description: "Identifica automaticamente clientes que deixaram de comprar, diretamente do seu ERP ou CRM, através de integração via API.",
      benefit: "Detecta 100% dos clientes inativos sem trabalho manual.",
      color: "text-blue-400",
      borderColor: "border-blue-400/40 hover:border-blue-400/60"
    },
    {
      icon: RefreshCw,
      title: "Follow-up Automático Dual (WhatsApp + E-mail)",
      description: "Envia automaticamente mensagens personalizadas via WhatsApp e e-mail simultaneamente até obter resposta, garantindo constância perfeita.",
      benefit: "Multiplica as chances de contato e acelera as respostas.",
      color: "text-green-400",
      borderColor: "border-green-400/40 hover:border-green-400/60"
    },
    {
      icon: Sparkles,
      title: "Personalização via IA com Histórico Real",
      description: "Integração via API com seu ERP para personalizar automaticamente as mensagens usando últimas compras e histórico completo do cliente.",
      benefit: "Mensagens altamente relevantes aumentam drasticamente a conversão.",
      color: "text-purple-400",
      borderColor: "border-purple-400/40 hover:border-purple-400/60"
    },
    {
      icon: Users,
      title: "Transferência Inteligente para Equipe",
      description: "Assim que o cliente responde positivamente (WhatsApp ou e-mail), o agente encaminha imediatamente para seu vendedor dar continuidade.",
      benefit: "Otimiza o tempo da equipe focando apenas em leads qualificados.",
      color: "text-cyan-400",
      borderColor: "border-cyan-400/40 hover:border-cyan-400/60"
    },
    {
      icon: BarChart3,
      title: "Dashboard Visual e Kanban Completo",
      description: "Controle visual imediato dos clientes reativados, canais mais eficazes, faturamento recuperado e pipeline em tempo real.",
      benefit: "Visibilidade total dos resultados e ROI da reativação.",
      color: "text-orange-400",
      borderColor: "border-orange-400/40 hover:border-orange-400/60"
    }
  ];

  return (
    <section className="py-20 bg-gray-800 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Como funciona a Reativação Automática
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Cada funcionalidade foi desenvolvida para maximizar a taxa de reativação 
            e garantir que nenhum cliente seja esquecido.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-12 text-center leading-tight">
            Como exatamente o Agente de Reativação automatiza a recuperação dos seus clientes?
          </h3>
          
          <div className="max-w-6xl mx-auto">
            {/* Header Row */}
            <div className="hidden md:grid md:grid-cols-12 gap-6 pb-4 mb-8 border-b border-gray-600/30">
              <div className="col-span-4">
                <h4 className="text-lg font-semibold text-gray-300">Funcionalidade</h4>
              </div>
              <div className="col-span-5">
                <h4 className="text-lg font-semibold text-gray-300">Como Funciona</h4>
              </div>
              <div className="col-span-3">
                <h4 className="text-lg font-semibold text-gray-300">Benefício Direto</h4>
              </div>
            </div>

            {/* Features Items */}
            <div className="space-y-4">
              {reativacaoFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`
                    grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-xl
                    bg-gray-800/80 border-2 ${feature.borderColor}
                    hover:bg-gray-800/90 hover:shadow-xl hover:scale-[1.02]
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
                  {/* Feature Area */}
                  <div className="col-span-1 md:col-span-4 flex items-start space-x-4">
                    <div className={`
                      flex-shrink-0 w-12 h-12 rounded-xl 
                      bg-gray-700/50 border-2 ${feature.borderColor}
                      flex items-center justify-center
                      transition-all duration-300
                    `}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h5 className="text-xl font-semibold text-white mb-2 leading-tight">
                        {feature.title}
                      </h5>
                      <div className="md:hidden">
                        <p className="text-gray-300 text-base leading-relaxed mb-4">
                          {feature.description}
                        </p>
                        <div className="flex items-start space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <p className="text-green-300 text-base leading-relaxed">
                            <span className="font-medium">Resultado:</span> {feature.benefit}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description - Hidden on mobile */}
                  <div className="hidden md:block col-span-5">
                    <p className="text-gray-300 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Benefit - Hidden on mobile */}
                  <div className="hidden md:block col-span-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-green-300 text-base leading-relaxed">
                        <span className="font-medium">Resultado:</span> {feature.benefit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reactivation efficiency note */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-400/20 rounded-full">
              <RefreshCw className="h-5 w-5 mr-3 text-green-400" />
              <span className="text-green-300 text-base font-medium">
                Sistema testado com + de 10.000 clientes reativados com sucesso
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoFeatures;
