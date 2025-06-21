
import React from 'react';
import { Brain, Clock, MessageSquare, Target, Zap, BarChart3, Users, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const FollowupFeatures = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Análise Inteligente de Conversas",
      description: "IA avalia cada interação comercial identificando interesse, urgência e próximos passos necessários.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/60",
      shadowColor: "shadow-blue-500/30"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Detecção de Oportunidades Perdidas",
      description: "Identifica automaticamente clientes interessados que não receberam acompanhamento adequado.",
      color: "text-red-400",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/60",
      shadowColor: "shadow-red-500/30"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timing Inteligente",
      description: "Determina o momento perfeito para cada follow-up baseado no comportamento e perfil do cliente.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/60",
      shadowColor: "shadow-purple-500/30"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Follow-ups Personalizados",
      description: "Cria mensagens únicas para cada cliente baseadas no histórico de conversas e preferências.",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/60",
      shadowColor: "shadow-green-500/30"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Priorização de Leads",
      description: "Scoring automático identifica quais oportunidades têm maior potencial de conversão.",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/60",
      shadowColor: "shadow-orange-500/30"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Alertas em Tempo Real",
      description: "Notificações instantâneas para gestores sobre oportunidades críticas e follow-ups urgentes.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/60",
      shadowColor: "shadow-yellow-500/30"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automação Completa",
      description: "Executa toda a sequência de follow-up sem intervenção manual, mantendo personalização.",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      borderColor: "border-cyan-500/60",
      shadowColor: "shadow-cyan-500/30"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Avançado",
      description: "Dashboard completo com métricas de performance, ROI e insights para otimização contínua.",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/20",
      borderColor: "border-indigo-500/60",
      shadowColor: "shadow-indigo-500/30"
    }
  ];

  return (
    <section className="py-20 bg-gray-800 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Funcionalidades que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">garantem resultados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada funcionalidade foi desenvolvida para resolver um problema específico na gestão de follow-ups comerciais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-2xl transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-2 ${feature.borderColor} ${feature.shadowColor} hover:shadow-xl hover:-translate-y-2 ring-1 ring-white/10`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 border-2 ${feature.borderColor} ring-1 ring-white/20`}>
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-white text-lg font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white px-8 py-4 rounded-full font-medium text-lg border-2 border-blue-500/60 shadow-blue-500/30 shadow-lg ring-1 ring-blue-400/20 backdrop-blur-sm">
            <Zap className="h-6 w-6 mr-3 text-yellow-400" />
            Integração nativa com IAgo Conversas - Plataforma Omnichannel
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowupFeatures;
