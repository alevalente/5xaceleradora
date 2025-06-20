
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
    <div className="space-y-4">
      <div className="text-center mb-4 bg-white rounded-lg border-2 border-gray-200 p-3">
        <div className="text-2xl font-bold text-blue-600">89</div>
        <div className="text-sm text-gray-600 font-medium">melhorias identificadas</div>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg border-2 border-gray-200 p-4 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-base font-semibold text-gray-900">{suggestion.salesperson}</span>
              <Badge 
                variant="outline" 
                className={`text-sm font-medium ${
                  suggestion.priority === 'Crítica' ? 'border-red-500 text-red-700 bg-red-50' :
                  suggestion.priority === 'Alta' ? 'border-orange-500 text-orange-700 bg-orange-50' :
                  'border-yellow-500 text-yellow-700 bg-yellow-50'
                }`}
              >
                {suggestion.priority}
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">Área:</span> {suggestion.issue}
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-semibold text-blue-600">Sugestão:</span> {suggestion.suggestion}
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-semibold text-green-600">Impacto:</span> {suggestion.impact}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImprovementSuggestions;
