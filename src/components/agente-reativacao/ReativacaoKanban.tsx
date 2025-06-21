
import React from 'react';
import { MessageCircle, Mail, Clock, ExternalLink, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const ReativacaoKanban = () => {
  const kanbanCards = [
    {
      cliente: "Carla Mendes",
      ultimaCompra: "23/01/2025",
      valor: "R$ 4.200", 
      canalAtual: "WhatsApp",
      tentativa: "2ª tentativa",
      emailStatus: "1ª tentativa enviada",
      sugestao: "Próxima mensagem oferece combo promocional X+Y",
      link: "https://chat.5xaceleradora.com.br/conversa-carla-mendes",
      status: "Em andamento"
    },
    {
      cliente: "Roberto Silva",
      ultimaCompra: "15/12/2024",
      valor: "R$ 8.700",
      canalAtual: "E-mail",
      tentativa: "1ª tentativa",
      emailStatus: "Aguardando resposta",
      sugestao: "Aguardar 3 dias para próximo contato WhatsApp",
      link: "https://chat.5xaceleradora.com.br/conversa-roberto-silva",
      status: "Aguardando"
    },
    {
      cliente: "Ana Costa",
      ultimaCompra: "05/11/2024",
      valor: "R$ 2.100",
      canalAtual: "WhatsApp",
      tentativa: "Respondeu positivamente",
      emailStatus: "Não necessário",
      sugestao: "Transferido para vendedor João Santos",
      link: "https://chat.5xaceleradora.com.br/conversa-ana-costa",
      status: "Reativado"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Em andamento":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Aguardando":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Reativado":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section className="py-20 bg-gray-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Kanban Visual - Etapas Práticas
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Acompanhe cada cliente em tempo real: canal ativo, tentativas realizadas e próximas ações sugeridas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kanbanCards.map((card, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 border-gray-700/50 bg-gray-800/50 backdrop-blur-sm hover:border-blue-500/30">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold text-white">
                    {card.cliente}
                  </CardTitle>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(card.status)}`}>
                    {card.status}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Informações básicas */}
                <div className="bg-gray-700/50 rounded-lg p-4 space-y-2 border border-gray-600/30">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Última Compra:</span>
                    <span className="font-semibold text-white">{card.ultimaCompra}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Valor:</span>
                    <span className="font-bold text-green-400">{card.valor}</span>
                  </div>
                </div>

                {/* Status dos canais */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-green-400" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">WhatsApp</div>
                      <div className="text-xs text-gray-400">{card.tentativa}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">E-mail</div>
                      <div className="text-xs text-gray-400">{card.emailStatus}</div>
                    </div>
                  </div>
                </div>

                {/* Sugestão */}
                <div className="bg-blue-500/20 rounded-lg p-3 border-l-4 border-blue-400">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-400 mt-0.5" />
                    <div>
                      <div className="text-xs font-medium text-blue-400 mb-1">Próxima Ação:</div>
                      <div className="text-xs text-gray-300">{card.sugestao}</div>
                    </div>
                  </div>
                </div>

                {/* Link da conversa */}
                <div className="pt-2 border-t border-gray-700/50">
                  <a 
                    href={card.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Link da Conversa
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-blue-500/20 text-blue-400 px-8 py-4 rounded-full font-medium text-lg border border-blue-500/30">
            <Clock className="h-6 w-6 mr-3" />
            Atualizações em tempo real com integração direta ao CRM/ERP
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoKanban;
