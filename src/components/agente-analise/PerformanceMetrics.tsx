
import React from 'react';

const PerformanceMetrics = () => {
  const metrics = [
    { label: 'Conversas', value: '1.247', color: '#3b82f6' },
    { label: 'Vendedores', value: '23', color: '#10b981' },
    { label: 'Score Médio', value: '67', color: '#f59e0b' },
    { label: 'Melhorias', value: '89', color: '#ef4444' }
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {metrics.map((metric, index) => (
        <div 
          key={index}
          className={`
            text-center p-3 bg-gray-800/50 rounded-lg border border-gray-600/30
            transition-all duration-700
            opacity-100 translate-y-0
          `}
          style={{
            transitionDelay: `${index * 100}ms`
          }}
        >
          <div 
            className="text-xl font-bold font-mono mb-1"
            style={{ color: metric.color }}
          >
            {metric.value}
          </div>
          <div className="text-xs text-gray-400 leading-tight">{metric.label}</div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMetrics;
