
import React from 'react';
import { MessageSquare, Star, ThumbsUp, TrendingUp } from 'lucide-react';
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
      rating: 5
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
      rating: 2
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
      rating: 5
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
      rating: 1
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {conversations.map((conv, index) => (
        <Card 
          key={conv.id} 
          className={`
            relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-800/60 to-gray-900/90 
            border border-gray-600/50 backdrop-blur-sm 
            transition-all duration-700 ease-out
            hover:scale-105 hover:shadow-2xl hover:border-gray-500/50
            group
            opacity-100 translate-y-0
          `}
          style={{
            transitionDelay: `${index * 150}ms`
          }}
        >
          {/* Status indicator */}
          <div className="absolute top-3 right-3">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${
                conv.statusColor === 'green' ? 'bg-green-400' : 
                conv.statusColor === 'orange' ? 'bg-orange-400' : 'bg-red-400'
              } animate-pulse`}></div>
              <span className={`text-xs font-mono ${
                conv.statusColor === 'green' ? 'text-green-400' : 
                conv.statusColor === 'orange' ? 'text-orange-400' : 'text-red-400'
              }`}>
                {conv.status}
              </span>
            </div>
          </div>

          <CardHeader className="relative z-10 pb-2">
            <CardTitle className="text-white flex items-center justify-between text-sm mb-2">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-lg flex items-center justify-center mr-3 border bg-blue-500/20 border-blue-400/40">
                  <MessageSquare className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-bold">{conv.id}</div>
                  <div className="text-xs text-gray-400 font-mono">{conv.date}</div>
                </div>
              </div>
              
              {/* Score display */}
              <div className="flex flex-col items-center">
                <div className={`text-2xl font-bold font-mono ${
                  conv.score >= 80 ? 'text-green-400' : 
                  conv.score >= 60 ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {conv.score}
                </div>
                <div className="text-xs text-gray-400">pontos</div>
              </div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="relative z-10 pt-0 pb-4">
            {/* Salesperson and Client */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Vendedor:</span>
                <span className="text-white font-medium">{conv.salesperson}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Cliente:</span>
                <span className="text-white font-medium">{conv.client}</span>
              </div>
            </div>

            {/* Rating stars */}
            <div className="flex items-center mb-3">
              <span className="text-xs text-gray-400 mr-2">Avaliação:</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className={`h-3 w-3 ${
                      star <= conv.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Feedback */}
            <div className="space-y-2">
              <div className="flex items-start">
                <ThumbsUp className="h-3 w-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-300 leading-relaxed">
                  {conv.feedback}
                </p>
              </div>
              
              <div className="flex items-start">
                <TrendingUp className="h-3 w-3 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-gray-300 leading-relaxed">
                  <span className="text-blue-400 font-medium">Melhoria:</span> {conv.improvement}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3">
              <Progress 
                value={conv.score} 
                className="h-2"
              />
            </div>
          </CardContent>

          {/* Bottom accent line */}
          <div className={`
            absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500
            ${conv.statusColor === 'green' ? 'bg-green-400' : 
              conv.statusColor === 'orange' ? 'bg-orange-400' : 'bg-red-400'}
          `} />
        </Card>
      ))}
    </div>
  );
};

export default ConversationAnalysisCards;
