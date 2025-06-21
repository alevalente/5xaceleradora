
import React from 'react';
import { MessageSquare, Brain, Target, Zap, BarChart3, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const FollowupHowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Captura e Análise",
      description: "O agente monitora todas as conversas comerciais em tempo real via WhatsApp, e-mail e outros canais integrados.",
      icon: <MessageSquare className="h-8 w-8" />,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/60",
      details: [
        "Integração nativa com IAgo Conversas",
        "Análise de sentimento e intenção",
        "Detecção de palavras-chave comerciais",
        "Histórico completo de interações"
      ]
    },
    {
      step: 2,
      title: "Identificação Inteligente",
      description: "IA analisa cada conversa identificando oportunidades perdidas, nível de interesse e urgência do cliente.",
      icon: <Brain className="h-8 w-8" />,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/60",
      details: [
        "Score de interesse automático",
        "Classificação por potencial de venda",
        "Detecção de sinais de compra",
        "Análise de comportamento do cliente"
      ]
    },
    {
      step: 3,
      title: "Priorização Estratégica",
      description: "Sistema prioriza oportunidades por potencial de conversão e define timing ideal para cada follow-up.",
      icon: <Target className="h-8 w-8" />,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/60",
      details: [
        "Ranking por probabilidade de venda",
        "Timing otimizado por perfil",
        "Segmentação automática de leads",
        "Definição de prioridades críticas"
      ]
    },
    {
      step: 4,
      title: "Execução Automática",
      description: "Follow-ups personalizados são enviados automaticamente no momento perfeito com mensagens contextualizadas.",
      icon: <Zap className="h-8 w-8" />,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/60",
      details: [
        "Mensagens personalizadas por cliente",
        "Envio automático multicanal",
        "Sequências inteligentes de follow-up",
        "Adaptação baseada em resposta"
      ]
    },
    {
      step: 5,
      title: "Monitoramento e Otimização",
      description: "Dashboard em tempo real mostra resultados e otimiza continuamente a estratégia de follow-up.",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      borderColor: "border-cyan-500/60",
      details: [
        "Métricas de conversão em tempo real",
        "ROI detalhado por campanha",
        "Insights para otimização",
        "Relatórios gerenciais automáticos"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Agente Funciona</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Processo completamente automatizado que transforma conversas perdidas em vendas efetivas.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className={`hover:shadow-2xl transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-2 ${step.borderColor} shadow-xl hover:-translate-y-1 ring-1 ring-white/10`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center border-2 ${step.borderColor} ring-1 ring-white/20`}>
                    <div className={step.color}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center border-2 ${step.borderColor}`}>
                        <span className={`${step.color} font-bold text-sm`}>{step.step}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {step.details.map((detail, detailIndex) => (
                    <div 
                      key={detailIndex}
                      className={`${step.bgColor} rounded-lg p-4 border ${step.borderColor} backdrop-blur-sm`}
                    >
                      <div className="flex items-start space-x-3">
                        <CheckCircle2 className={`h-5 w-5 ${step.color} mt-0.5 flex-shrink-0`} />
                        <span className="text-white text-sm font-medium">{detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white px-8 py-4 rounded-full font-medium text-lg border-2 border-green-500/60 shadow-green-500/30 shadow-lg ring-1 ring-green-400/20 backdrop-blur-sm">
            <Brain className="h-6 w-6 mr-3 text-purple-400" />
            Implementação completa em 15 dias - Zero configuração manual
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowupHowItWorks;
