
import React from 'react';
import { Phone, Target, Calendar, PartyPopper, User, Tag } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface KanbanCardProps {
  opportunity: {
    name: string;
    value: string;
    message: string;
    status: string;
    icon: string;
  };
  columnType: 'lead' | 'qualificacao' | 'agendamento' | 'conversao';
}

const KanbanCard = ({ opportunity, columnType }: KanbanCardProps) => {
  const getStatusColor = () => {
    switch (columnType) {
      case 'lead': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'qualificacao': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'agendamento': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'conversao': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getBorderColor = () => {
    switch (columnType) {
      case 'lead': return 'border-blue-500/30';
      case 'qualificacao': return 'border-orange-500/30';
      case 'agendamento': return 'border-purple-500/30';
      case 'conversao': return 'border-green-500/30';
      default: return 'border-gray-500/30';
    }
  };

  const getIconColor = () => {
    switch (columnType) {
      case 'lead': return 'text-blue-400';
      case 'qualificacao': return 'text-orange-400';
      case 'agendamento': return 'text-purple-400';
      case 'conversao': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getColumnIcon = () => {
    switch (columnType) {
      case 'lead': return <Phone className="h-4 w-4" aria-label="Lead" />;
      case 'qualificacao': return <Target className="h-4 w-4" aria-label="Qualificação" />;
      case 'agendamento': return <Calendar className="h-4 w-4" aria-label="Agendamento" />;
      case 'conversao': return <PartyPopper className="h-4 w-4" aria-label="Conversão" />;
    }
  };

  const getColumnLabel = () => {
    switch (columnType) {
      case 'lead': return 'Novo lead';
      case 'qualificacao': return 'Qualificação';
      case 'agendamento': return 'Agendado';
      case 'conversao': return 'Convertido';
    }
  };

  const getValueIcon = () => {
    return columnType === 'conversao' ? <Tag className="h-4 w-4 text-green-400" aria-label="Valor" /> : <Tag className={`h-4 w-4 ${getIconColor()}`} aria-label="Tipo" />;
  };

  return (
    <Card 
      className={`bg-white/5 ${getBorderColor()} shadow-md dark:shadow-none hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer w-full`}
    >
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className={`h-4 w-4 ${getIconColor()}`} aria-label="Lead" />
            <span className="text-white font-semibold text-sm">{opportunity.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            {getValueIcon()}
            <span className={`${columnType === 'conversao' ? 'text-green-400' : 'text-gray-300'} font-medium text-sm`}>
              {opportunity.value}
            </span>
          </div>
        </div>
        
        <div className="bg-gray-800/50 rounded-md p-3 border border-gray-700">
          <p className="text-gray-300 text-xs break-words">
            {opportunity.message}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-400">
            {getColumnIcon()}
            <span className="text-xs font-medium">
              {getColumnLabel()}
            </span>
          </div>
          <div className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor()}`}>
            {opportunity.status}
          </div>
        </div>
        
        <div className="flex justify-end">
          <span className="text-xs text-gray-400">{opportunity.icon}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default KanbanCard;
