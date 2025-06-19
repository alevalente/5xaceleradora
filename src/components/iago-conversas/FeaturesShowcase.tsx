import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Zap, Target, Monitor, Calendar, Plug, PenTool, BarChart3, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
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
      image: "/lovable-uploads/49f90fce-c665-4498-8a74-1bf467bfcbc2.png"
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
      benefit: "Zero follow-ups perdidos por esquecimento"
    },
    {
      step: "06",
      title: "Integre facilmente com seus sistemas atuais", 
      description: "Conecte a plataforma rapidamente com outros sistemas que você já usa na sua empresa, como CRM, sistemas financeiros, planilhas ou qualquer ferramenta que você já tenha. Tudo fica integrado em um só lugar.",
      icon: <Plug className="h-12 w-12" />,
      benefit: "Implementação sem quebrar processos atuais"
    },
    {
      step: "07",
      title: "Melhore sua comunicação com Escrita Mágica",
      description: "Com o recurso integrado de Escrita Mágica (powered by OpenAI), deixe suas mensagens mais claras, profissionais e persuasivas com apenas um clique.",
      icon: <PenTool className="h-12 w-12" />,
      benefit: "Comunicação profissional sem esforço extra"
    },
    {
      step: "08",
      title: "Meça resultados com alta precisão",
      description: "Visualize relatórios detalhados e em tempo real com métricas claras: ROI, taxas de conversão por canal, produtividade da equipe, além de acompanhamento contínuo da qualidade do atendimento.",
      icon: <BarChart3 className="h-12 w-12" />,
      benefit: "Visibilidade total para otimização contínua"
    },
    {
      step: "09",
      title: "Escale sem aumentar headcount",
      description: "Atenda mais clientes com a mesma equipe através de automação e eficiência operacional.",
      icon: <TrendingUp className="h-12 w-12" />,
      benefit: "Crescimento sustentável com margem preservada"
    }
  ];

  const agentIntegrations = [
    {
      name: "Cobertura de Carteira",
      description: "Varredura automática e recorrente de toda sua base de clientes",
      link: "/agente-cobertura-carteira"
    },
    {
      name: "Avaliação e Monitoramento", 
      description: "Análise contínua da qualidade das conversas comerciais",
      link: "/agent/avaliacao-monitoramento"
    },
    {
      name: "Reativação Automática",
      description: "Campanhas inteligentes para recuperar clientes inativos", 
      link: "/agent/reativacao-automatica"
    },
    {
      name: "Gestão de Vendas",
      description: "Automação completa do processo comercial integrado",
      link: "/agent/gestao-vendas"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como IAgo Conversas transforma seu atendimento em 9 passos
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
                    <div className="rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-auto max-w-full object-contain transition-transform duration-700 group-hover:scale-110"
                        style={{ maxHeight: '400px' }}
                      />
                    </div>
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

          {/* Seção de Agentes IA Integrados */}
          <div className="mt-20 p-8 bg-blue-900 rounded-2xl text-white">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                + Agentes de IA que trabalham 24/7 na sua plataforma
              </h3>
              <p className="text-blue-100 text-lg">
                IAgo Conversas é mais que uma plataforma de atendimento. É a base para uma suite 
                completa de agentes inteligentes que automatizam seu processo comercial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agentIntegrations.map((agent, index) => (
                <Card key={index} className="bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-2">{agent.name}</h4>
                    <p className="text-blue-100 mb-4">{agent.description}</p>
                    <Link 
                      to={agent.link}
                      className="inline-flex items-center text-blue-300 hover:text-white font-medium"
                    >
                      Saiba mais <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900"
                asChild
              >
                <Link to="/#solutions">Ver Todos os Agentes Disponíveis</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
