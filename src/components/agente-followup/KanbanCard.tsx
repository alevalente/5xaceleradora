
import React from 'react';
import { MessageSquare, Bot, Hourglass, CheckCircle2, User, DollarSign } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface KanbanCardProps {
  opportunity: {
    name: string;
    value: string;
    message: string;
    status: string;
    icon: string;
  };
  columnType: 'detectada' | 'execucao' | 'aguardando' | 'recuperada';
}

const KanbanCard = ({ opportunity, columnType }: KanbanCardProps) => {
  const getStatusColor = () => {
    switch (columnType) {
      case 'detectada': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'execucao': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'aguardando': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'recuperada': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getBorderColor = () => {
    switch (columnType) {
      case 'detectada': return 'border-blue-500/30';
      case 'execucao': return 'border-orange-500/30';
      case 'aguardando': return 'border-purple-500/30';
      case 'recuperada': return 'border-green-500/30';
      default: return 'border-gray-500/30';
    }
  };

  const getIconColor = () => {
    switch (columnType) {
      case 'detectada': return 'text-blue-400';
      case 'execucao': return 'text-orange-400';
      case 'aguardando': return 'text-purple-400';
      case 'recuperada': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getColumnIcon = () => {
    switch (columnType) {
      case 'detectada': return <MessageSquare className="h-4 w-4" aria-label="Última interação" />;
      case 'execucao': return <Bot className="h-4 w-4" aria-label="Bot executando" />;
      case 'aguardando': return <Hourglass className="h-4 w-4" aria-label="Aguardando" />;
      case 'recuperada': return <CheckCircle2 className="h-4 w-4" aria-label="Recuperada" />;
    }
  };

  const getColumnLabel = () => {
    switch (columnType) {
      case 'detectada': return 'Última interação';
      case 'execucao': return 'Status';
      case 'aguardando': return 'Aguardando retorno';
      case 'recuperada': return 'Status';
    }
  };

  return (
    <Card 
      className={`bg-white/5 ${getBorderColor()} shadow-md dark:shadow-none hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer w-full`}
    >
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className={`h-4 w-4 ${getIconColor()}`} aria-label="Usuário" />
            <span className="text-white font-semibold text-sm">{opportunity.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-green-400" aria-label="Valor" />
            <span className="text-green-400 font-medium text-sm">{opportunity.value}</span>
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
