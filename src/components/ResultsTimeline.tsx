
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, TrendingUp, Target, Zap } from 'lucide-react';

interface TimelineStep {
  period: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface ResultsTimelineProps {
  agentName: string;
}

const ResultsTimeline = ({ agentName }: ResultsTimelineProps) => {
  const timelineSteps: TimelineStep[] = [
    {
      period: "Semana 1-2",
      title: "Implementação Rápida",
      description: "Setup completo do agente e integração com seus sistemas existentes. Treinamento da equipe.",
      icon: <Zap className="h-6 w-6" />,
      color: "blue"
    },
    {
      period: "Semana 3-4", 
      title: "Primeiros Insights",
      description: "Dados iniciais começam a ser coletados. Identificação dos primeiros padrões e oportunidades.",
      icon: <Target className="h-6 w-6" />,
      color: "yellow"
    },
    {
      period: "Mês 2",
      title: "Resultados Mensuráveis",
      description: "Indicadores claros de melhoria. Redução de tarefas manuais e aumento da eficiência.",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "orange"
    },
    {
      period: "Mês 3+",
      title: "ROI Comprovado",
      description: "Retorno do investimento evidente. Processos otimizados e equipe focada em atividades estratégicas.",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "green"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600 border-blue-200",
    yellow: "bg-yellow-100 text-yellow-600 border-yellow-200", 
    orange: "bg-orange-100 text-orange-600 border-orange-200",
    green: "bg-green-100 text-green-600 border-green-200"
  };

  return (
    <Card>
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Timeline de Resultados com o {agentName}
          </h3>
          <p className="text-lg text-gray-600">
            Veja como sua empresa evoluirá após implementar nossa solução
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`hidden md:flex w-16 h-16 rounded-full border-4 ${colorClasses[step.color as keyof typeof colorClasses]} items-center justify-center relative z-10 bg-white`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <div className="md:ml-8 flex-1">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      <span className={`md:hidden mr-3 p-2 rounded-full ${colorClasses[step.color as keyof typeof colorClasses]}`}>
                        {step.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {step.period}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
          <p className="text-lg text-blue-800 font-medium">
            ⚡ <strong>Implementação em aproximadamente 15 dias úteis</strong>
          </p>
          <p className="text-blue-600 mt-2">
            Resultados mensuráveis já nas primeiras semanas
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsTimeline;
