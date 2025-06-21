
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
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Aguardando":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Reativado":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Kanban Visual - Etapas Práticas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Acompanhe cada cliente em tempo real: canal ativo, tentativas realizadas e próximas ações sugeridas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kanbanCards.map((card, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {card.cliente}
                  </CardTitle>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(card.status)}`}>
                    {card.status}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Informações básicas */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Última Compra:</span>
                    <span className="font-semibold text-gray-900">{card.ultimaCompra}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Valor:</span>
                    <span className="font-bold text-green-600">{card.valor}</span>
                  </div>
                </div>

                {/* Status dos canais */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">WhatsApp</div>
                      <div className="text-xs text-gray-600">{card.tentativa}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">E-mail</div>
                      <div className="text-xs text-gray-600">{card.emailStatus}</div>
                    </div>
                  </div>
                </div>

                {/* Sugestão */}
                <div className="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <div className="text-xs font-medium text-blue-800 mb-1">Próxima Ação:</div>
                      <div className="text-xs text-blue-700">{card.sugestao}</div>
                    </div>
                  </div>
                </div>

                {/* Link da conversa */}
                <div className="pt-2 border-t border-gray-200">
                  <a 
                    href={card.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
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
          <div className="inline-flex items-center bg-blue-50 text-blue-800 px-8 py-4 rounded-full font-medium text-lg">
            <Clock className="h-6 w-6 mr-3" />
            Atualizações em tempo real com integração direta ao CRM/ERP
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoKanban;
