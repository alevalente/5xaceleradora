
import { useEffect } from 'react';
import { Target, Clock, Users, LineChart } from 'lucide-react';
import { createObserver } from '../utils/animations';

const Statistics = () => {
  useEffect(() => {
    const observer = createObserver('animate-slide-in', 0.1);
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const stats = [
    { 
      id: 1, 
      icon: <Users className="h-8 w-8 text-blue-500" />, 
      value: '+2K', 
      label: 'Empresas treinadas em IA',
      animation: 'animate-slide-left' 
    },
    { 
      id: 2, 
      icon: <Clock className="h-8 w-8 text-blue-500" />, 
      value: '+80', 
      label: 'Horas economizadas em tarefas repetitivas',
      animation: 'animate-slide-left delay-200' 
    },
    { 
      id: 3, 
      icon: <Target className="h-8 w-8 text-blue-500" />, 
      value: '35%', 
      label: 'Aumento médio em vendas',
      animation: 'animate-slide-right delay-300' 
    },
    { 
      id: 4, 
      icon: <LineChart className="h-8 w-8 text-blue-500" />, 
      value: '5x', 
      label: 'Aceleração na performance comercial',
      animation: 'animate-slide-right delay-400' 
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4">Impacto Comprovado</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossos clientes revolucionam seus processos comerciais com tecnologia de ponta e soluções personalizadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`relative overflow-hidden ${stat.animation} bg-white p-6 rounded-xl border border-gray-100 shadow-subtle transition-transform duration-300 hover:shadow-hover hover:-translate-y-1`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-blue-700 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
