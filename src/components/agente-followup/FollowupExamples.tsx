
import React from 'react';
import { MessageSquare, Clock, CheckCircle2, AlertTriangle, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const FollowupExamples = () => {
  const examples = [
    {
      title: "Cliente Interessado - Sem Resposta há 3 dias",
      client: "Maria Santos - Premium Confecções",
      lastMessage: "Gostei muito da proposta, vou analisar com minha equipe e te retorno...",
      aiAnalysis: "Cliente demonstrou interesse alto (95% score). Mencionou análise em equipe. Timing ideal para follow-up: AGORA",
      suggestedAction: "Follow-up personalizado focando em benefícios para equipe e oferta limitada",
      status: "urgent",
      icon: <AlertTriangle className="h-5 w-5" />,
      timeAgo: "3 dias atrás"
    },
    {
      title: "Oportunidade Quente - Pronto para Fechar",
      client: "João Carlos - Distribuidora ABC",
      lastMessage: "Preciso de mais detalhes sobre prazo de implementação e valores de mensalidade...",
      aiAnalysis: "Cliente em fase final de decisão (88% score). Perguntas específicas sobre implementação indicam intenção de compra",
      suggestedAction: "Enviar proposta detalhada com cronograma e agenda para apresentação",
      status: "hot",
      icon: <TrendingUp className="h-5 w-5" />,
      timeAgo: "1 dia atrás"
    },
    {
      title: "Cliente Reativado com Sucesso",
      client: "Pedro Lima - Atacado do Norte",
      lastMessage: "Perfeito! Vamos agendar a demonstração para próxima semana então.",
      aiAnalysis: "Follow-up automático foi efetivo. Cliente respondeu positivamente após 3 tentativas de contato",
      suggestedAction: "Agendar demonstração e preparar proposta comercial personalizada",
      status: "success",
      icon: <CheckCircle2 className="h-5 w-5" />,
      timeAgo: "2 horas atrás"
    }
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'urgent':
        return {
          bg: 'bg-red-500/10',
          border: 'border-red-500/60',
          text: 'text-red-400',
          shadow: 'shadow-red-500/30'
        };
      case 'hot':
        return {
          bg: 'bg-orange-500/10',
          border: 'border-orange-500/60',
          text: 'text-orange-400',
          shadow: 'shadow-orange-500/30'
        };
      case 'success':
        return {
          bg: 'bg-green-500/10',
          border: 'border-green-500/60',
          text: 'text-green-400',
          shadow: 'shadow-green-500/30'
        };
      default:
        return {
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/60',
          text: 'text-blue-400',
          shadow: 'shadow-blue-500/30'
        };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Exemplos Reais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Oportunidades Recuperadas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja como o agente identifica e recupera vendas que seriam perdidas sem acompanhamento adequado.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {examples.map((example, index) => {
            const styles = getStatusStyles(example.status);
            
            return (
              <Card 
                key={index}
                className={`${styles.bg} border-2 ${styles.border} ${styles.shadow} hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 ring-1 ring-white/10`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${styles.bg} rounded-full flex items-center justify-center border-2 ${styles.border}`}>
                        <div className={styles.text}>
                          {example.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{example.title}</h3>
                        <p className="text-gray-400 text-sm font-normal">{example.client}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{example.timeAgo}</span>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Last Message */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-2">Última mensagem do cliente:</h4>
                        <p className="text-gray-300 italic">"{example.lastMessage}"</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Analysis */}
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-400 font-bold text-xs">IA</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-2">Análise da IA:</h4>
                        <p className="text-blue-300 text-sm">{example.aiAnalysis}</p>
                      </div>
                    </div>
                  </div>

                  {/* Suggested Action */}
                  <div className={`${styles.bg} rounded-lg p-4 border-2 ${styles.border}`}>
                    <div className="flex items-start space-x-3">
                      <Users className={`h-5 w-5 ${styles.text} mt-1 flex-shrink-0`} />
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-2">Ação Sugerida:</h4>
                        <p className={`${styles.text} text-sm font-medium`}>{example.suggestedAction}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white px-8 py-4 rounded-full font-medium text-lg border-2 border-green-500/60 shadow-green-500/30 shadow-lg ring-1 ring-green-400/20 backdrop-blur-sm">
            <CheckCircle2 className="h-6 w-6 mr-3 text-green-400" />
            Média de 47% das oportunidades perdidas são recuperadas com sucesso
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowupExamples;
