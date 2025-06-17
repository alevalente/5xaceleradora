
import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const LeadLossTimeline = () => {
  const timelineSteps = [
    {
      time: "09:15",
      action: "Cliente manda mensagem no WhatsApp",
      icon: "💬",
      status: "neutral",
      description: "Lead quente chegando"
    },
    {
      time: "09:47", 
      action: "Você vê a mensagem",
      icon: "👀",
      status: "warning",
      description: "32 minutos depois..."
    },
    {
      time: "10:23",
      action: "Cliente já comprou do concorrente",
      icon: "🏃‍♂️💨",
      status: "danger",
      description: "Lead perdido para sempre"
    }
  ];

  return (
    <div className="mb-16 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border-2 border-red-100">
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <AlertTriangle className="h-4 w-4 mr-2" />
          73% dos leads são perdidos assim
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          A cronologia de um lead perdido
        </h3>
        <p className="text-gray-600">
          Uma manhã típica na sua empresa
        </p>
      </div>

      {/* Timeline Horizontal */}
      <div className="relative">
        {/* Linha conectora */}
        <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {timelineSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Ponto na linha */}
              <div className={cn(
                "absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white z-10",
                step.status === "neutral" && "bg-green-500",
                step.status === "warning" && "bg-yellow-500", 
                step.status === "danger" && "bg-red-500"
              )}></div>
              
              {/* Card do passo */}
              <div className={cn(
                "mt-16 p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105",
                step.status === "neutral" && "bg-green-50 border-green-200",
                step.status === "warning" && "bg-yellow-50 border-yellow-200",
                step.status === "danger" && "bg-red-50 border-red-200"
              )}>
                <div className="text-center">
                  {/* Horário destacado */}
                  <div className={cn(
                    "inline-flex items-center px-3 py-1 rounded-full text-sm font-bold mb-3",
                    step.status === "neutral" && "bg-green-600 text-white",
                    step.status === "warning" && "bg-yellow-600 text-white",
                    step.status === "danger" && "bg-red-600 text-white"
                  )}>
                    <Clock className="h-4 w-4 mr-1" />
                    {step.time}
                  </div>
                  
                  {/* Emoji grande */}
                  <div className="text-4xl mb-3">{step.icon}</div>
                  
                  {/* Ação */}
                  <div className="font-semibold text-gray-900 mb-2">
                    {step.action}
                  </div>
                  
                  {/* Descrição */}
                  <div className={cn(
                    "text-sm font-medium",
                    step.status === "neutral" && "text-green-700",
                    step.status === "warning" && "text-yellow-700",
                    step.status === "danger" && "text-red-700"
                  )}>
                    {step.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resultado final */}
      <div className="mt-8 text-center p-6 bg-red-100 rounded-xl border-2 border-red-200">
        <div className="text-2xl font-bold text-red-700 mb-2">
          💸 R$ 15.000 perdidos ontem
        </div>
        <p className="text-red-600">
          E isso vai acontecer de novo hoje, amanhã e depois de amanhã...
        </p>
      </div>
    </div>
  );
};

export default LeadLossTimeline;
