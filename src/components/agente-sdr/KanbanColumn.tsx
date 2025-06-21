
import React from 'react';
import { Phone, Target, Calendar, PartyPopper } from 'lucide-react';
import KanbanCard from './KanbanCard';

interface Opportunity {
  name: string;
  value: string;
  message: string;
  status: string;
  icon: string;
}

interface KanbanColumnProps {
  columnType: 'lead' | 'qualificacao' | 'agendamento' | 'conversao';
  opportunities: Opportunity[];
  delay?: number;
}

const KanbanColumn = ({ columnType, opportunities, delay = 0 }: KanbanColumnProps) => {
  const getColumnConfig = () => {
    switch (columnType) {
      case 'lead':
        return {
          title: 'Lead Recebido',
          icon: <Phone className="h-5 w-5 mr-2" aria-label="Lead" />,
          headerClass: 'bg-blue-50 text-blue-700 border-blue-200'
        };
      case 'qualificacao':
        return {
          title: 'Qualificação IA',
          icon: <Target className="h-5 w-5 mr-2" aria-label="Qualificação" />,
          headerClass: 'bg-orange-50 text-orange-700 border-orange-200'
        };
      case 'agendamento':
        return {
          title: 'Reunião Agendada',
          icon: <Calendar className="h-5 w-5 mr-2" aria-label="Agendamento" />,
          headerClass: 'bg-purple-50 text-purple-700 border-purple-200'
        };
      case 'conversao':
        return {
          title: 'Lead Convertido',
          icon: <PartyPopper className="h-5 w-5 mr-2" aria-label="Conversão" />,
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
