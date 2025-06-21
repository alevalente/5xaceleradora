
import React from 'react';
import { Target, MessageSquare, Bell, BarChart3, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const FollowupFeatures = () => {
  const benefits = [
    {
      icon: <Target className="h-12 w-12" />,
      title: "Conexão Automática com IAgo Conversas",
      description: "Todas as conversas da sua equipe de vendas são automaticamente monitoradas em tempo real, garantindo visibilidade total sobre cada oportunidade discutida.",
      color: "text-red-300",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/80",
      shadowColor: "shadow-red-500/40"
    },
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: "Análise Automática e Extração de Dados",
      description: "Nossa IA analisa automaticamente cada interação, identificando oportunidades reais e extraindo dados essenciais como nome do cliente, valor orçado e resumo da negociação.",
      color: "text-green-300",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/80",
      shadowColor: "shadow-green-500/40"
    },
    {
      icon: <Bell className="h-12 w-12" />,
      title: "Contato Automático com o Cliente",
      description: "O agente realiza automaticamente contatos personalizados por WhatsApp ou e-mail. Você define quantos follow-ups serão feitos, qual o intervalo entre eles, e até quando insistir com cada cliente.",
      color: "text-yellow-300",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/80",
      shadowColor: "shadow-yellow-500/40"
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: "Dashboard, Kanban e Integração com CRM",
      description: "Cada oportunidade é organizada em dashboards claros e cartões Kanban intuitivos. Clientes interessados são encaminhados automaticamente ao vendedor responsável. Podemos também integrar diretamente as oportunidades no CRM da sua empresa, desde que exista uma API disponível.",
      color: "text-indigo-300",
      bgColor: "bg-indigo-500/20",
      borderColor: "border-indigo-500/80",
      shadowColor: "shadow-indigo-500/40"
    }
  ];

  return (
    <section className="py-20 bg-gray-800 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-24">
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
              className={`hover:shadow-2xl transition-all duration-300 bg-gray-700 border-3 ${benefit.borderColor} ${benefit.shadowColor} shadow-lg hover:shadow-xl hover:-translate-y-3 ring-1 ring-white/10`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-20 h-20 ${benefit.bgColor} rounded-2xl flex items-center justify-center mb-4 border-3 ${benefit.borderColor} ring-1 ring-white/20`}>
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
          <div className="inline-flex items-center bg-blue-600/30 text-white px-6 py-3 rounded-full font-medium text-base border-2 border-blue-500/60 shadow-md ring-1 ring-blue-400/20">
            <Zap className="h-5 w-5 mr-3 text-yellow-400" />
            Integração nativa com IAgo Conversas - Plataforma Omnichannel
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowupFeatures;
