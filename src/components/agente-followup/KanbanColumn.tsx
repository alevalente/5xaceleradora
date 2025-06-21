
import React from 'react';
import { MessageSquare, Bot, Hourglass, CheckCircle2 } from 'lucide-react';
import KanbanCard from './KanbanCard';

interface Opportunity {
  name: string;
  value: string;
  message: string;
  status: string;
  icon: string;
}

interface KanbanColumnProps {
  columnType: 'detectada' | 'execucao' | 'aguardando' | 'recuperada';
  opportunities: Opportunity[];
  delay?: number;
}

const KanbanColumn = ({ columnType, opportunities, delay = 0 }: KanbanColumnProps) => {
  const getColumnConfig = () => {
    switch (columnType) {
      case 'detectada':
        return {
          title: 'Oportunidade Detectada',
          icon: <MessageSquare className="h-5 w-5 mr-2" aria-label="Mensagem" />,
          headerClass: 'bg-blue-50 text-blue-700 border-blue-200'
        };
      case 'execucao':
        return {
          title: 'Follow-up em Execução',
          icon: <Bot className="h-5 w-5 mr-2" aria-label="Bot" />,
          headerClass: 'bg-orange-50 text-orange-700 border-orange-200'
        };
      case 'aguardando':
        return {
          title: 'Aguardando Cliente',
          icon: <Hourglass className="h-5 w-5 mr-2" aria-label="Aguardando" />,
          headerClass: '',
          customStyle: {
            backgroundColor: '#5B4BFF20',
            borderColor: '#5B4BFF40',
            color: '#5B4BFF',
            border: '1px solid'
          }
        };
      case 'recuperada':
        return {
          title: 'Oportunidade Recuperada',
          icon: <CheckCircle2 className="h-5 w-5 mr-2" aria-label="Sucesso" />,
          headerClass: 'bg-green-500/20 text-green-400 border-green-500/40'
        };
    }
  };

  const config = getColumnConfig();

  return (
    <div className="space-y-4" data-aos="fade-up" data-aos-delay={delay}>
      <div className="text-center">
        <div 
          className={`inline-flex items-center px-4 py-3 rounded-lg font-semibold text-sm mb-4 min-w-full justify-center ${config.headerClass}`}
          style={config.customStyle}
        >
          {config.icon}
          {config.title} ({opportunities.length})
        </div>
      </div>
      
      <div className="space-y-4 min-h-[600px]">
        {opportunities.map(opportunity => (
          <KanbanCard 
            key={opportunity.name}
            opportunity={opportunity} 
            columnType={columnType} 
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
