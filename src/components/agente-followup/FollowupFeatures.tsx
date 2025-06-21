
import React from 'react';
import { Target, MessageSquare, Bell, BarChart3, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const FollowupFeatures = () => {
  const benefits = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Recuperação Automática de Vendas Perdidas",
      description: "O agente identifica clientes sem resposta e realiza automaticamente o follow-up, recuperando vendas que seriam perdidas.",
      color: "text-red-400",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/60",
      shadowColor: "shadow-red-500/30"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Mensagens Personalizadas no Momento Ideal",
      description: "Cada mensagem é enviada com personalização e timing perfeito, aumentando a chance de resposta positiva.",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/60",
      shadowColor: "shadow-green-500/30"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Alertas Instantâneos para Gestores",
      description: "Quando necessário, gestores são notificados imediatamente para tomar decisões rápidas sobre oportunidades críticas.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/60",
      shadowColor: "shadow-yellow-500/30"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Relatórios Claros e Resultados Comprovados",
      description: "Você acompanha facilmente os resultados e benefícios concretos entregues pelo agente através de dashboards simples e intuitivos.",
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
            Como o nosso Agente resolve o problema de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">follow-ups esquecidos</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja os benefícios claros que você terá desde o primeiro dia de uso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-2xl transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-2 ${benefit.borderColor} ${benefit.shadowColor} hover:shadow-xl hover:-translate-y-2 ring-1 ring-white/10`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-4 border-2 ${benefit.borderColor} ring-1 ring-white/20`}>
                  <div className={benefit.color}>
                    {benefit.icon}
                  </div>
                </div>
                <CardTitle className="text-white text-xl font-bold">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 text-base leading-relaxed">
                  {benefit.description}
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
