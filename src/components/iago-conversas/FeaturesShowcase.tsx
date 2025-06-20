
import React from 'react';
import { CheckCircle, MessageCircle, Zap, Target, Monitor, Calendar, PenTool } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeaturesShowcase = () => {
  const features = [
    {
      step: "01",
      title: "Centralize suas conversas",
      description: "Centralize WhatsApp, Instagram, Facebook, e-mail, SMS, Telegram e Chat do seu site em uma única plataforma segura, privada e totalmente controlada por você.",
      icon: <MessageCircle className="h-12 w-12" />,
      benefit: "Elimina a necessidade de alternar entre múltiplos aplicativos",
      image: "/lovable-uploads/34c98d0f-9bb0-49e8-9e60-a92f6d489b89.png"
    },
    {
      step: "02", 
      title: "Automatize seu atendimento",
      description: "Simplifique e acelere seus atendimentos criando respostas automáticas rápidas, regras práticas para direcionar as conversas para as pessoas certas, além de modelos prontos que tornam tudo mais ágil e fácil.",
      icon: <Zap className="h-12 w-12" />,
      benefit: "Atendimento mais rápido e eficiente automaticamente",
      image: "/lovable-uploads/a568ab5e-339a-4984-b59a-4cff14880f09.png"
    },
    {
      step: "03",
      title: "Distribua conversas automaticamente",
      description: "Quando um cliente escolhe uma opção ou inicia uma conversa, o IAgo envia automaticamente para o atendente ou equipe certa. Ninguém precisa esperar nem direcionar manualmente.",
      icon: <Target className="h-12 w-12" />,
      benefit: "Zero leads perdidos por distribuição manual",
      image: "/lovable-uploads/cf519303-fd86-4936-83d8-68c45b60dd54.png",
      hasTransparentBg: true,
      largeImage: true
    },
    {
      step: "04",
      title: "Monitore sua equipe em tempo real",
      description: "Acompanhe facilmente o desempenho da sua equipe através de gráficos e relatórios simples, claros e objetivos. Veja rapidamente tempo de resposta médio, satisfação dos seus clientes e a qualidade geral do atendimento prestado.",
      icon: <Monitor className="h-12 w-12" />,
      benefit: "Gestão baseada em dados claros e objetivos",
      image: "/lovable-uploads/6335dbfb-bd9a-433a-b412-4a668d962d94.png"
    },
    {
      step: "05",
      title: "Agende mensagens facilmente",
      description: "Nunca mais perca um follow-up importante! Agende mensagens diretamente no chat para garantir contatos assertivos e pontuais com seus clientes.",
      icon: <Calendar className="h-12 w-12" />,
      benefit: "Zero follow-ups perdidos por esquecimento",
      image: "/lovable-uploads/40bafc31-b467-4f2a-ba97-243d60153bc9.png",
      largeImage: true
    },
    {
      step: "06",
      title: "Melhore sua comunicação com Escrita Mágica",
      description: "Com o recurso integrado de Escrita Mágica (powered by OpenAI), deixe suas mensagens mais claras, profissionais e persuasivas com apenas um clique.",
      icon: <PenTool className="h-12 w-12" />,
      benefit: "Comunicação profissional sem esforço extra",
      image: "/lovable-uploads/1c97b0a6-2f96-4c4b-a6cc-75a890a0749b.png",
      hasTransparentBg: true,
      largeImage: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como IAgo Conversas transforma seu atendimento em 6 passos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada funcionalidade foi pensada para resolver problemas reais do dia a dia comercial, 
              seguindo uma lógica de implementação progressiva e resultados imediatos.
            </p>
          </div>

          <div className="space-y-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-8 animate-fade-in transition-all duration-700 hover:scale-[1.02] group",
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-1 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded-lg mr-4 transition-all duration-300 group-hover:bg-blue-700 group-hover:scale-110">
                      {feature.step}
                    </div>
                    <div className="text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-700">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-blue-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {feature.description}
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded transition-all duration-300 group-hover:bg-green-100 group-hover:shadow-md">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-green-800 font-medium">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 lg:max-w-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                  {feature.image ? (
                    feature.hasTransparentBg ? (
                      <div className={cn(
                        "rounded-2xl overflow-hidden transition-all duration-500 flex items-center justify-center",
                        feature.largeImage ? "h-[500px]" : "h-[400px]"
                      )}>
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className={cn(
                            "object-contain transition-transform duration-700 group-hover:scale-110",
                            feature.largeImage ? "w-full h-full scale-125" : "w-full h-full"
                          )}
                        />
                      </div>
                    ) : (
                      <div className={cn(
                        "bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl",
                        feature.largeImage ? "h-[500px]" : "h-[400px]"
                      )}>
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className={cn(
                            "w-full h-full object-contain transition-transform duration-700 group-hover:scale-110",
                            feature.largeImage ? "scale-125" : ""
                          )}
                        />
                      </div>
                    )
                  ) : (
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 transition-all duration-500 group-hover:shadow-2xl group-hover:border-blue-200">
                      <div className="text-center">
                        <div className="text-blue-600 mb-4 flex justify-center transition-all duration-300 group-hover:scale-110">
                          {feature.icon}
                        </div>
                        <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gray-50">
                          <span className="text-gray-500 text-sm">
                            Preview: {feature.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
