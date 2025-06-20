
import React from 'react';
import { TrendingUp, TrendingDown, Users, Target } from 'lucide-react';

const PerformanceMetrics = () => {
  const metrics = [
    {
      title: 'Conversas Analisadas',
      value: '247',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Score Médio',
      value: '72',
      change: '+8%',
      trend: 'up',
      icon: Target,
      color: 'green'
    },
    {
      title: 'Conversões',
      value: '68%',
      change: '+15%',
      trend: 'up',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Críticas',
      value: '12',
      change: '-5%',
      trend: 'down',
      icon: TrendingDown,
      color: 'red'
    }
  ];

  return (
    <div className="space-y-3">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div 
            key={index}
            className="bg-white rounded-lg border-2 border-gray-200 p-3 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center mr-3 ${
                  metric.color === 'blue' ? 'bg-blue-100 border border-blue-300' :
                  metric.color === 'green' ? 'bg-green-100 border border-green-300' :
                  metric.color === 'purple' ? 'bg-purple-100 border border-purple-300' :
                  'bg-red-100 border border-red-300'
                }`}>
                  <Icon className={`h-4 w-4 ${
                    metric.color === 'blue' ? 'text-blue-600' :
                    metric.color === 'green' ? 'text-green-600' :
                    metric.color === 'purple' ? 'text-purple-600' :
                    'text-red-600'
                  }`} />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                  <div className="text-xs text-gray-600 font-medium leading-tight">{metric.title}</div>
                </div>
              </div>
              
              <div className={`text-xs font-semibold ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PerformanceMetrics;
