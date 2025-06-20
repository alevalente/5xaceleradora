
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {conversations.map((conv, index) => (
        <Card 
          key={conv.id} 
          className={`
            relative overflow-hidden bg-white border-2 border-gray-300
            transition-all duration-700 ease-out
            hover:scale-105 hover:shadow-2xl hover:border-blue-400
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
              <div className={`w-3 h-3 rounded-full ${
                conv.statusColor === 'green' ? 'bg-green-500' : 
                conv.statusColor === 'orange' ? 'bg-orange-500' : 'bg-red-500'
              }`}></div>
              <span className={`text-sm font-semibold ${
                conv.statusColor === 'green' ? 'text-green-700' : 
                conv.statusColor === 'orange' ? 'text-orange-700' : 'text-red-700'
              }`}>
                {conv.status}
              </span>
            </div>
          </div>

          <CardHeader className="relative z-10 pb-3 pt-4 px-4">
            <CardTitle className="text-gray-900 flex items-center justify-between text-base mb-2">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-lg flex items-center justify-center mr-3 bg-blue-100 border-2 border-blue-300">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">{conv.id}</div>
                  <div className="text-sm text-gray-600">{conv.date}</div>
                </div>
              </div>
              
              {/* Score display */}
              <div className="flex flex-col items-center">
                <div className={`text-2xl font-bold ${
                  conv.score >= 80 ? 'text-green-600' : 
                  conv.score >= 60 ? 'text-orange-600' : 'text-red-600'
                }`}>
                  {conv.score}
                </div>
                <div className="text-sm text-gray-600">pontos</div>
              </div>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="relative z-10 pt-0 pb-4 px-4">
            {/* Salesperson and Client */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 font-medium">Vendedor:</span>
                <span className="text-gray-900 font-semibold text-right">{conv.salesperson}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 font-medium">Cliente:</span>
                <span className="text-gray-900 font-semibold text-right">{conv.client}</span>
              </div>
            </div>

            {/* Rating stars */}
            <div className="flex items-center mb-4">
              <span className="text-sm text-gray-600 font-medium mr-2">Avaliação:</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className={`h-4 w-4 ${
                      star <= conv.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Feedback */}
            <div className="space-y-3">
              <div className="flex items-start">
                <ThumbsUp className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  {conv.feedback}
                </p>
              </div>
              
              <div className="flex items-start">
                <TrendingUp className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-800 leading-relaxed">
                  <span className="text-blue-600 font-semibold">Melhoria:</span> {conv.improvement}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <Progress 
                value={conv.score} 
                className="h-2"
              />
            </div>
          </CardContent>

          {/* Bottom accent line */}
          <div className={`
            absolute bottom-0 left-0 w-full h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500
            ${conv.statusColor === 'green' ? 'bg-green-500' : 
              conv.statusColor === 'orange' ? 'bg-orange-500' : 'bg-red-500'}
          `} />
        </Card>
      ))}
    </div>
  );
};

export default ConversationAnalysisCards;
