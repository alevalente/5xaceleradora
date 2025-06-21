
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const KanbanStats = () => {
  return (
    <div className="text-center space-y-4">
      <div className="inline-flex items-center text-base font-semibold px-6 py-3 rounded-full border border-orange-500/50 bg-orange-500/10 text-orange-400">
        <CheckCircle2 className="h-5 w-5 mr-2" aria-label="Sucesso" />
        15 leads ativos no funil
      </div>
      <div className="text-gray-400 text-sm">
        Taxa de conversão: <span className="text-orange-400 font-semibold">34%</span>
      </div>
    </div>
  );
};

export default KanbanStats;
