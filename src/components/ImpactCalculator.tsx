
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingDown, DollarSign, Clock, Users } from 'lucide-react';

interface ImpactData {
  score: number;
  totalQuestions: number;
  costPerIssue: number;
  timeWastedPerIssue: string;
  clientsAtRisk: number;
}

interface ImpactCalculatorProps {
  data: ImpactData;
  agentName: string;
}

const ImpactCalculator = ({ data, agentName }: ImpactCalculatorProps) => {
  const { score, costPerIssue, timeWastedPerIssue, clientsAtRisk } = data;
  const totalCost = score * costPerIssue;
  const annualCost = totalCost * 12;

  if (score === 0) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Parabéns!</h3>
          <p className="text-green-700 text-lg">
            Sua empresa parece estar bem estruturada nesta área. 
            Mesmo assim, o {agentName} pode otimizar ainda mais seus processos.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-red-800 mb-4">
            O Que Isso Significa Para Seu Negócio
          </h3>
          <p className="text-lg text-gray-700">
            Com base nas suas respostas, identificamos o impacto financeiro desses problemas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <DollarSign className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Custo Mensal Estimado</p>
            <p className="text-2xl font-bold text-red-600">R$ {totalCost.toLocaleString()}</p>
          </div>

          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <TrendingDown className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Perda Anual</p>
            <p className="text-2xl font-bold text-orange-600">R$ {annualCost.toLocaleString()}</p>
          </div>

          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <Clock className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Tempo Perdido</p>
            <p className="text-2xl font-bold text-yellow-600">{timeWastedPerIssue}</p>
          </div>

          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">Clientes em Risco</p>
            <p className="text-2xl font-bold text-purple-600">{clientsAtRisk * score}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border-l-4 border-red-400">
          <p className="text-lg text-gray-800 font-medium mb-3">
            💡 <strong>Insight Importante:</strong>
          </p>
          <p className="text-gray-700">
            Estes números representam apenas o que é facilmente mensurável. 
            O impacto real inclui também: perda de reputação, oportunidades perdidas, 
            desmotivação da equipe e crescimento limitado do negócio.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImpactCalculator;
