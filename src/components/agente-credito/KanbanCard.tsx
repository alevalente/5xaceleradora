
import React from 'react';
import { FileText, Search, CheckCircle2, PartyPopper, User, DollarSign } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

interface KanbanCardProps {
  opportunity: {
    name: string;
    value: string;
    message: string;
    status: string;
    icon: string;
  };
  columnType: 'solicitacao' | 'analise' | 'aprovacao' | 'liberacao';
}

const KanbanCard = ({ opportunity, columnType }: KanbanCardProps) => {
  const getStatusColor = () => {
    switch (columnType) {
      case 'solicitacao': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'analise': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'aprovacao': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'liberacao': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getBorderColor = () => {
    switch (columnType) {
      case 'solicitacao': return 'border-blue-500/30';
      case 'analise': return 'border-orange-500/30';
      case 'aprovacao': return 'border-green-500/30';
      case 'liberacao': return 'border-emerald-500/30';
      default: return 'border-gray-500/30';
    }
  };

  const getIconColor = () => {
    switch (columnType) {
      case 'solicitacao': return 'text-blue-400';
      case 'analise': return 'text-orange-400';
      case 'aprovacao': return 'text-green-400';
      case 'liberacao': return 'text-emerald-400';
      default: return 'text-gray-400';
    }
  };

  const getColumnIcon = () => {
    switch (columnType) {
      case 'solicitacao': return <FileText className="h-4 w-4" aria-label="Solicitação" />;
      case 'analise': return <Search className="h-4 w-4" aria-label="Análise" />;
      case 'aprovacao': return <CheckCircle2 className="h-4 w-4" aria-label="Aprovação" />;
      case 'liberacao': return <PartyPopper className="h-4 w-4" aria-label="Liberado" />;
    }
  };

  const getColumnLabel = () => {
    switch (columnType) {
      case 'solicitacao': return 'Solicitação';
      case 'analise': return 'Em análise';
      case 'aprovacao': return 'Aprovação';
      case 'liberacao': return 'Liberado';
    }
  };

  return (
    <Card 
      className={`bg-white/5 ${getBorderColor()} shadow-md dark:shadow-none hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer w-full`}
    >
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className={`h-4 w-4 ${getIconColor()}`} aria-label="Cliente" />
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
