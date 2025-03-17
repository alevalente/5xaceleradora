
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BarChart2, 
  UserCheck, 
  ShoppingCart, 
  FileCheck, 
  SendHorizonal,
  MonitorSmartphone,
  BrainCircuit,
  Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { createObserver, getDelayClass } from '../utils/animations';

const Solutions = () => {
  useEffect(() => {
    const observer = createObserver('animate-on-scroll', 0.1);
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const agentSolutions = [
    {
      id: 'cobertura-carteira',
      title: 'Agente de Cobertura de Carteira',
      description: 'Garante contato regular com todos os clientes ativos, evitando perda de oportunidades e sinalizando riscos de evasão.',
      icon: <Users className="h-8 w-8" />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'avaliacao-monitoramento',
      title: 'Agente de Avaliação e Monitoramento',
      description: 'Mensura o desempenho dos vendedores e emite relatórios com indicadores de melhoria e pontos fortes.',
      icon: <BarChart2 className="h-8 w-8" />,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'reativacao-automatica',
      title: 'Agente de Reativação Automática',
      description: 'Resgata clientes inativos com campanhas específicas de reativação, identificando aqueles receptivos ao retorno.',
      icon: <UserCheck className="h-8 w-8" />,
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 'gestao-vendas',
      title: 'Agente de Gestão de Vendas',
      description: 'Automatiza o fluxo de pedidos e cotações, reduzindo tarefas manuais dos vendedores e agilizando o processo comercial.',
      icon: <ShoppingCart className="h-8 w-8" />,
      color: 'bg-orange-50 text-orange-600'
    },
    {
      id: 'cadastro-credito',
      title: 'Agente de Cadastro e Análise de Crédito',
      description: 'Agiliza cadastros e análises de crédito, consultando fontes oficiais automaticamente e minimizando a burocracia.',
      icon: <FileCheck className="h-8 w-8" />,
      color: 'bg-teal-50 text-teal-600'
    },
    {
      id: 'disparador-promocoes',
      title: 'Disparador de Promoções via WhatsApp',
      description: 'Automatiza o envio de ofertas e promoções segmentadas, mantendo relacionamento pessoal de forma escalável.',
      icon: <SendHorizonal className="h-8 w-8" />,
      color: 'bg-indigo-50 text-indigo-600'
    }
  ];

  const solutionCategories = [
    {
      id: 'platform',
      title: 'Plataforma de Atendimento',
      description: 'Centralize todas as conversas de vendas em um único painel, substitua o WhatsApp Web e ganhe controle total sobre o atendimento ao cliente.',
      icon: <MonitorSmartphone className="h-12 w-12" />,
      color: 'bg-blue-900/20 text-blue-400 border border-blue-800/30',
      link: '/platform'
    },
    {
      id: 'agents',
      title: 'Agentes de IA',
      description: 'Automatize processos comerciais com nossa suite de agentes inteligentes que reduzem tarefas repetitivas e aumentam a eficiência.',
      icon: <BrainCircuit className="h-12 w-12" />,
      color: 'bg-purple-900/20 text-purple-400 border border-purple-800/30',
      link: '#agents-section'
    },
    {
      id: 'consulting',
      title: 'Consultoria e Treinamentos',
      description: 'Transforme sua equipe comercial com nossa metodologia comprovada de consultoria, mentorias e treinamentos especializados.',
      icon: <Lightbulb className="h-12 w-12" />,
      color: 'bg-amber-900/20 text-amber-400 border border-amber-800/30',
      link: '/consulting'
    }
  ];

  return (
    <section id="solutions" className="py-20 translucent-dark">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6 text-gradient">Soluções Inteligentes para sua Empresa</h2>
          <p className="text-white/80 text-lg">
            Nossa plataforma integra agentes de IA que automatizam processos comerciais, 
            reduzindo tarefas repetitivas e aumentando seu faturamento.
          </p>
        </div>

        {/* Solution Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutionCategories.map((category, index) => (
            <div
              key={category.id}
              className={cn(
                "animate-on-scroll opacity-0 glass-card p-8 transition-all duration-300 hover:-translate-y-1",
                getDelayClass(index, 100)
              )}
            >
              <div className={cn("p-4 rounded-lg inline-block mb-6", category.color)}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{category.title}</h3>
              <p className="text-white/70 mb-6">{category.description}</p>
              {category.id === 'agents' ? (
                <a 
                  href={category.link} 
                  className="text-blue-400 font-medium flex items-center hover:text-blue-300 link-underline"
                >
                  Ver todos os agentes
                </a>
              ) : (
                <Link 
                  to={category.link} 
                  className="text-blue-400 font-medium flex items-center hover:text-blue-300 link-underline"
                >
                  Saiba mais
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* AI Agents Section */}
        <div id="agents-section" className="pt-8 mb-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Nossos Agentes de IA</h3>
            <p className="text-white/80">
              Conheça nossa suite completa de agentes inteligentes, cada um projetado para 
              resolver desafios específicos do seu processo comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agentSolutions.map((solution, index) => (
              <div
                key={solution.id}
                className={cn(
                  "animate-on-scroll opacity-0 glass-card p-8 transition-all duration-300 hover:-translate-y-1",
                  getDelayClass(index, 100)
                )}
              >
                <div className={cn("p-4 rounded-lg inline-block mb-6", solution.color)}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{solution.title}</h3>
                <p className="text-white/70 mb-6">{solution.description}</p>
                <Link 
                  to={`/agent/${solution.id}`} 
                  className="text-blue-400 font-medium flex items-center hover:text-blue-300 link-underline"
                >
                  Saiba mais
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/platform" className="button-primary">
            Conheça nossa Plataforma
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
