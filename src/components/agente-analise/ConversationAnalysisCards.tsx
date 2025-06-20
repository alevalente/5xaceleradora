
import React from 'react';
import { MessageSquare, Star, ThumbsUp, TrendingUp, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';

const ConversationAnalysisCards = () => {
  const conversations = [
    {
      id: 'CONV-001',
      salesperson: 'João Silva',
      client: 'Distribuidora ABC',
      score: 85,
      status: 'Excelente',
      statusColor: 'green',
      feedback: 'Ótima abordagem consultiva, identificou necessidades reais',
      improvement: 'Poderia aprofundar mais questões sobre orçamento',
      date: '20/06/2025',
      rating: 5,
      conversationLink: 'https://chat.5xaceleradora.com.br/a001-joao-distribuidora'
    },
    {
      id: 'CONV-002',
      salesperson: 'Maria Santos',
      client: 'Comercial XYZ',
      score: 45,
      status: 'Precisa Melhorar',
      statusColor: 'orange',
      feedback: 'Foco excessivo no produto, pouca escuta do cliente',
      improvement: 'Desenvolver técnicas de questionamento e escuta ativa',
      date: '20/06/2025',
      rating: 2,
      conversationLink: 'https://chat.5xaceleradora.com.br/a002-maria-comercial'
    },
    {
      id: 'CONV-003',
      salesperson: 'Carlos Mendes',
      client: 'Atacadista Premium',
      score: 92,
      status: 'Excepcional',
      statusColor: 'green',
      feedback: 'Conduziu perfeitamente objeções e fechou com assertividade',
      improvement: 'Manter o padrão de excelência atual',
      date: '19/06/2025',
      rating: 5,
      conversationLink: 'https://chat.5xaceleradora.com.br/a003-carlos-atacadista'
    },
    {
      id: 'CONV-004',
      salesperson: 'Ana Costa',
      client: 'Varejo Express',
      score: 35,
      status: 'Crítico',
      statusColor: 'red',
      feedback: 'Não identificou necessidades, apresentação genérica',
      improvement: 'Treinamento urgente em técnicas de vendas consultivas',
      date: '19/06/2025',
      rating: 1,
      conversationLink: 'https://chat.5xaceleradora.com.br/a004-ana-varejo'
    }
  ];

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {conversations.map((conv, index) => (
        <Card 
          key={conv.id} 
          className={`
            relative overflow-hidden bg-white border-2 border-gray-400
            transition-all duration-700 ease-out
            hover:scale-105 hover:shadow-2xl hover:border-blue-500
            group
          `}
          style={{
            transitionDelay: `${index * 150}ms`
          }}
        >
          <CardHeader className="relative z-10 pb-3 pt-4 px-4">
            <CardTitle className="text-gray-900 text-base mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center mr-3 bg-blue-100 border-2 border-blue-400">
                    <MessageSquare className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900">{conv.id}</div>
                    <div className="text-sm text-gray-700 font-medium">{conv.date}</div>
                  </div>
                </div>
                
                {/* Score display - moved to separate column */}
                <div className="flex flex-col items-center">
                  <div className={`text-3xl font-bold ${
                    conv.score >= 80 ? 'text-green-700' : 
                    conv.score >= 60 ? 'text-orange-700' : 'text-red-700'
                  }`}>
                    {conv.score}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">pontos</div>
                </div>
              </div>

              {/* Status and Link - now in separate row */}
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${
                    conv.statusColor === 'green' ? 'bg-green-600' : 
                    conv.statusColor === 'orange' ? 'bg-orange-600' : 'bg-red-600'
                  }`}></div>
                  <span className={`text-sm font-bold ${
                    conv.statusColor === 'green' ? 'text-green-800' : 
                    conv.statusColor === 'orange' ? 'text-orange-800' : 'text-red-800'
                  }`}>
                    {conv.status}
                  </span>
                </div>
                
                {/* Conversation Link */}
                <a 
                  href={conv.conversationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Link da Conversa
                </a>
              </div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="relative z-10 pt-0 pb-4 px-4">
            {/* Salesperson and Client */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 font-semibold">Vendedor:</span>
                <span className="text-gray-900 font-bold text-right">{conv.salesperson}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 font-semibold">Cliente:</span>
                <span className="text-gray-900 font-bold text-right">{conv.client}</span>
              </div>
            </div>

            {/* Rating stars */}
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-700 font-semibold mr-2">Avaliação:</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className={`h-4 w-4 ${
                      star <= conv.rating ? 'text-yellow-600 fill-yellow-600' : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Feedback */}
            <div className="space-y-3">
              <div className="flex items-start">
                <ThumbsUp className="h-4 w-4 text-green-700 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  {conv.feedback}
                </p>
              </div>
              
              <div className="flex items-start">
                <TrendingUp className="h-4 w-4 text-blue-700 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-800 leading-relaxed">
                  <span className="text-blue-700 font-bold">Melhoria:</span> {conv.improvement}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <Progress 
                value={conv.score} 
                className="h-3"
              />
            </div>
          </CardContent>

          {/* Bottom accent line */}
          <div className={`
            absolute bottom-0 left-0 w-full h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500
            ${conv.statusColor === 'green' ? 'bg-green-600' : 
              conv.statusColor === 'orange' ? 'bg-orange-600' : 'bg-red-600'}
          `} />
        </Card>
      ))}
    </div>
  );
};

export default ConversationAnalysisCards;
