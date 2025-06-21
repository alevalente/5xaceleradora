
import React from 'react';
import { FileText, Search, CheckCircle2, PartyPopper } from 'lucide-react';
import KanbanCard from './KanbanCard';

interface Opportunity {
  name: string;
  value: string;
  message: string;
  status: string;
  icon: string;
}

interface KanbanColumnProps {
  columnType: 'solicitacao' | 'analise' | 'aprovacao' | 'liberacao';
  opportunities: Opportunity[];
  delay?: number;
}

const KanbanColumn = ({ columnType, opportunities, delay = 0 }: KanbanColumnProps) => {
  const getColumnConfig = () => {
    switch (columnType) {
      case 'solicitacao':
        return {
          title: 'Solicitação Recebida',
          icon: <FileText className="h-5 w-5 mr-2" aria-label="Solicitação" />,
          headerClass: 'bg-blue-50 text-blue-700 border-blue-200'
        };
      case 'analise':
        return {
          title: 'Análise Automática',
          icon: <Search className="h-5 w-5 mr-2" aria-label="Análise" />,
          headerClass: 'bg-orange-50 text-orange-700 border-orange-200'
        };
      case 'aprovacao':
        return {
          title: 'Aprovação Gerencial',
          icon: <CheckCircle2 className="h-5 w-5 mr-2" aria-label="Aprovação" />,
          headerClass: 'bg-green-50 text-green-700 border-green-200'
        };
      case 'liberacao':
        return {
          title: 'Crédito Liberado',
          icon: <PartyPopper className="h-5 w-5 mr-2" aria-label="Liberado" />,
          headerClass: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
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
