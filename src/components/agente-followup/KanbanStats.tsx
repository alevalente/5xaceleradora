
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const KanbanStats = () => {
  return (
    <div className="text-center space-y-4">
      <div className="inline-flex items-center text-base font-semibold px-6 py-3 rounded-full border border-green-500/50 bg-green-500/10 text-green-400">
        <CheckCircle2 className="h-5 w-5 mr-2" aria-label="Sucesso" />
        12 oportunidades ativas no pipeline
      </div>
      <div className="text-gray-400 text-sm">
        Taxa de recuperação média: <span className="text-green-400 font-semibold">47%</span>
      </div>
    </div>
  );
};

export default KanbanStats;
