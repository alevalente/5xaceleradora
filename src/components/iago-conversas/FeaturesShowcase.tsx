
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Eye, Monitor, Target, Bell, Zap, Star, BarChart3, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const FeaturesShowcase = () => {
  const features = [
    {
      step: "01",
      title: "Centralize todas as conversas em um só lugar",
      description: "WhatsApp, Instagram, Facebook, chat do site e e-mail integrados em uma única interface.",
      icon: <MessageCircle className="h-12 w-12" />,
      benefit: "Elimina a necessidade de alternar entre 5+ aplicativos diferentes"
    },
    {
      step: "02", 
      title: "Visualize o histórico completo do cliente",
      description: "Acesso instantâneo a todas as interações anteriores, independente do canal usado.",
      icon: <Eye className="h-12 w-12" />,
      benefit: "Atendimento personalizado e consistente em qualquer momento"
    },
    {
      step: "03",
      title: "Monitore sua equipe em tempo real",
      description: "Dashboard com métricas de atendimento, tempo de resposta e performance individual.",
      icon: <Monitor className="h-12 w-12" />,
      benefit: "Gestão baseada em dados, não em suposições"
    },
    {
      step: "04",
      title: "Distribua conversas automaticamente",
      description: "Sistema inteligente que direciona cada lead para o vendedor certo, na hora certa.",
      icon: <Target className="h-12 w-12" />,
      benefit: "Reduz tempo de espera e aumenta taxa de conversão"
    },
    {
      step: "05",
      title: "Acione alertas inteligentes",
      description: "Notificações automáticas para leads quentes, follow-ups pendentes e oportunidades.",
      icon: <Bell className="h-12 w-12" />,
      benefit: "Zero oportunidades perdidas por esquecimento"
    },
    {
      step: "06",
      title: "Conecte com seus sistemas existentes", 
      description: "Integração nativa com CRMs, ERPs e outras ferramentas que você já usa.",
      icon: <Zap className="h-12 w-12" />,
      benefit: "Implementação sem quebrar processos atuais"
    },
    {
      step: "07",
      title: "Ative Agentes de IA especializados",
      description: "Suite completa de agentes que automatizam tarefas específicas do seu processo comercial.",
      icon: <Star className="h-12 w-12" />,
      benefit: "Automação inteligente que potencializa sua equipe"
    },
    {
      step: "08",
      title: "Meça resultados com precisão",
      description: "Relatórios detalhados de performance, ROI e métricas de conversão por canal.",
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
          
          <div className="text-center mb-16">
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
                  "flex flex-col lg:flex-row items-center gap-8",
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded-lg mr-4">
                      {feature.step}
                    </div>
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-medium">{feature.benefit}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 lg:max-w-lg">
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                    <div className="text-center">
                      <div className="text-blue-600 mb-4 flex justify-center">
                        {feature.icon}
                      </div>
                      <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">
                          Preview: {feature.title}
                        </span>
                      </div>
                    </div>
                  </div>
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
