
import React from 'react';
import { Badge } from '../ui/badge';

const ImprovementSuggestions = () => {
  const suggestions = [
    {
      salesperson: 'Maria Santos',
      priority: 'Alta',
      issue: 'Técnicas de questionamento',
      suggestion: 'Implementar método SPIN Selling para identificar necessidades do cliente',
      impact: 'Potencial aumento de 25% na conversão'
    },
    {
      salesperson: 'Ana Costa',
      priority: 'Crítica',
      issue: 'Escuta ativa',
      suggestion: 'Desenvolver habilidades de escuta e paciência durante objeções',
      impact: 'Redução de 40% nas perdas por objeções mal tratadas'
    },
    {
      salesperson: 'Pedro Lima',
      priority: 'Média',
      issue: 'Fechamento de vendas',
      suggestion: 'Aplicar técnicas de assumptive close e urgência saudável',
      impact: 'Melhoria de 15% na taxa de fechamento'
    }
  ];

  return (
    <div className="space-y-3">
      <div className="text-center mb-4">
        <div className="text-xl font-bold font-mono text-blue-400">89</div>
        <div className="text-xs text-gray-400">melhorias identificadas</div>
      </div>

      <div className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 rounded-md border border-gray-600/30 p-3"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-white">{suggestion.salesperson}</span>
              <Badge 
                variant="outline" 
                className={`text-xs ${
                  suggestion.priority === 'Crítica' ? 'border-red-400/40 text-red-300 bg-red-500/10' :
                  suggestion.priority === 'Alta' ? 'border-orange-400/40 text-orange-300 bg-orange-500/10' :
                  'border-yellow-400/40 text-yellow-300 bg-yellow-500/10'
                }`}
              >
                {suggestion.priority}
              </Badge>
            </div>
            
            <div className="space-y-1">
              <div className="text-xs text-gray-400">
                <span className="font-medium">Área:</span> {suggestion.issue}
              </div>
              <div className="text-xs text-gray-300">
                <span className="font-medium text-blue-400">Sugestão:</span> {suggestion.suggestion}
              </div>
              <div className="text-xs text-green-400">
                <span className="font-medium">Impacto:</span> {suggestion.impact}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImprovementSuggestions;
