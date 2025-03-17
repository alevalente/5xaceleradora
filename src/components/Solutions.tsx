
import { useEffect } from 'react';
import { Users, BarChart2, UserCheck, ShoppingCart, FileCheck, SendHorizonal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { createObserver, getDelayClass } from '../utils/animations';

const Solutions = () => {
  useEffect(() => {
    const observer = createObserver('animate-on-scroll', 0.1);
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const solutions = [
    {
      id: 1,
      title: 'Agente de Cobertura de Carteira',
      description: 'Garante contato regular com todos os clientes ativos, evitando perda de oportunidades e sinalizando riscos de evasão.',
      icon: <Users className="h-8 w-8" />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 2,
      title: 'Agente de Avaliação e Monitoramento',
      description: 'Mensura o desempenho dos vendedores e emite relatórios com indicadores de melhoria e pontos fortes.',
      icon: <BarChart2 className="h-8 w-8" />,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      id: 3,
      title: 'Agente de Reativação Automática',
      description: 'Resgata clientes inativos com campanhas específicas de reativação, identificando aqueles receptivos ao retorno.',
      icon: <UserCheck className="h-8 w-8" />,
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 4,
      title: 'Agente de Gestão de Vendas',
      description: 'Automatiza o fluxo de pedidos e cotações, reduzindo tarefas manuais dos vendedores e agilizando o processo comercial.',
      icon: <ShoppingCart className="h-8 w-8" />,
      color: 'bg-orange-50 text-orange-600'
    },
    {
      id: 5,
      title: 'Agente de Cadastro e Análise de Crédito',
      description: 'Agiliza cadastros e análises de crédito, consultando fontes oficiais automaticamente e minimizando a burocracia.',
      icon: <FileCheck className="h-8 w-8" />,
      color: 'bg-teal-50 text-teal-600'
    },
    {
      id: 6,
      title: 'Disparador de Promoções via WhatsApp',
      description: 'Automatiza o envio de ofertas e promoções segmentadas, mantendo relacionamento pessoal de forma escalável.',
      icon: <SendHorizonal className="h-8 w-8" />,
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Soluções Inteligentes para sua Empresa</h2>
          <p className="text-gray-600 text-lg">
            Nossa plataforma integra agentes de IA que automatizam processos comerciais, 
            reduzindo tarefas repetitivas e aumentando seu faturamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={cn(
                "animate-on-scroll opacity-0 bg-white rounded-xl p-8 shadow-subtle border border-gray-100 transition-all duration-300 hover:shadow-hover hover:-translate-y-1",
                getDelayClass(index, 100)
              )}
            >
              <div className={cn("p-4 rounded-lg inline-block mb-6", solution.color)}>
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <a 
                href="#contact" 
                className="text-blue-600 font-medium flex items-center hover:text-blue-700 link-underline"
              >
                Saiba mais
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#platform" className="button-primary">
            Conheça nossa Plataforma
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
