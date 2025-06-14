
import { useEffect } from 'react';
import { Users, BarChart2, UserCheck, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createObserver, getDelayClass } from '../utils/animations';

const IntelligentSolutions = () => {
  useEffect(() => {
    const observer = createObserver('animate-on-scroll', 0.1);
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const solutions = [
    {
      id: 'cobertura-carteira',
      icon: <Users className="h-12 w-12" />,
      title: 'Agente de Cobertura de Carteira',
      subtitle: 'Varredura recorrente (por exemplo, semanal), evitando negligenciar qualquer cliente.',
      description: 'Seu agente pessoal garante que nenhum cliente seja esquecido. Automatiza o follow-up regular da carteira, mantendo relacionamentos ativos e identificando oportunidades.',
      ctaText: 'Quero proteger minha carteira de clientes',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      id: 'monitoramento-conversas',
      icon: <BarChart2 className="h-12 w-12" />,
      title: 'Agente de Monitoramento de Conversas',
      subtitle: 'Acompanhe automaticamente tudo o que sua equipe conversa com seus clientes.',
      description: 'Monitore e analise todas as conversas de vendas em tempo real. Identifica padrões, melhora a qualidade do atendimento e garante conformidade com suas diretrizes.',
      ctaText: 'Quero monitorar minha equipe',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      hoverColor: 'hover:bg-purple-100'
    },
    {
      id: 'reativacao-clientes',
      icon: <UserCheck className="h-12 w-12" />,
      title: 'Agente de Reativação de Clientes',
      subtitle: 'Recupere clientes inativos com campanhas inteligentes e personalizadas.',
      description: 'Identifica automaticamente clientes inativos e executa campanhas de reativação personalizadas. Recupera receita perdida sem sobrecarregar sua equipe comercial.',
      ctaText: 'Quero reativar meus clientes',
      color: 'bg-green-50 text-green-600 border-green-200',
      hoverColor: 'hover:bg-green-100'
    }
  ];

  return (
    <section id="intelligent-solutions" className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Agentes Inteligentes que Trabalham 24/7</h2>
          <p className="text-gray-600 text-lg">
            Nossa IA não substitui sua equipe, ela a potencializa. Cada agente cuida de tarefas específicas 
            para que seus vendedores foquem no que realmente importa: vender.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={cn(
                "animate-on-scroll opacity-0 bg-white rounded-xl p-8 border-2 transition-all duration-300 group cursor-pointer",
                solution.color,
                solution.hoverColor,
                getDelayClass(index, 200)
              )}
            >
              <div className="mb-6">
                {solution.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-gray-700 font-medium mb-4">{solution.subtitle}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
              
              <button className="group/btn flex items-center text-current font-semibold hover:gap-3 transition-all duration-200">
                {solution.ctaText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Pronto para ver como nossos agentes podem transformar seu processo comercial?
          </p>
          <button className="button-primary">
            Solicitar Demonstração Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntelligentSolutions;
