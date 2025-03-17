
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
  Lightbulb,
  MessageSquare,
  Clock,
  ShoppingBag,
  CheckSquare,
  Headphones,
  AlertTriangle,
  UserPlus,
  Briefcase,
  Palette,
  Truck
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

  // Aligning with menu structure and comprehensive agent listings
  const agentSolutions = [
    {
      id: 'cobertura-carteira',
      title: 'Agente de Cobertura de Carteira',
      description: 'Garante contato regular com todos os clientes ativos, evitando perda de oportunidades e sinalizando riscos de evasão.',
      icon: <Users className="h-8 w-8" />,
      color: 'bg-blue-50 text-blue-600',
      benefits: [
        'Redução da perda de clientes por esquecimento ou falta de contato',
        'Visão clara de quais clientes estão sendo contatados e com que frequência',
        'Aumento da retenção e da satisfação do cliente'
      ]
    },
    {
      id: 'avaliacao-monitoramento',
      title: 'Agente de Avaliação e Monitoramento',
      description: 'Mensura o desempenho dos vendedores e emite relatórios com indicadores de melhoria e pontos fortes.',
      icon: <BarChart2 className="h-8 w-8" />,
      color: 'bg-purple-50 text-purple-600',
      benefits: [
        'Diagnóstico objetivo da performance de cada vendedor',
        'Embasamento para treinamentos, reciclagens ou ações corretivas',
        'Melhoria contínua do processo de vendas'
      ]
    },
    {
      id: 'reativacao-automatica',
      title: 'Agente de Reativação Automática',
      description: 'Resgata clientes inativos com campanhas específicas de reativação, identificando aqueles receptivos ao retorno.',
      icon: <UserCheck className="h-8 w-8" />,
      color: 'bg-green-50 text-green-600',
      benefits: [
        'Recuperação de receita com menor esforço da equipe',
        'Automação de escala: abordagem de grande volume de clientes inativos',
        'Mensuração precisa da taxa de reativação'
      ]
    },
    {
      id: 'gestao-vendas',
      title: 'Agente de Gestão de Vendas',
      description: 'Automatiza o fluxo de pedidos e cotações, reduzindo tarefas manuais dos vendedores e agilizando o processo comercial.',
      icon: <ShoppingCart className="h-8 w-8" />,
      color: 'bg-orange-50 text-orange-600',
      benefits: [
        'Menos retrabalho e mais tempo para relacionamento e negociação',
        'Velocidade e precisão ao enviar cotações e registrar pedidos',
        'Transparência gerencial com acompanhamento em tempo real'
      ]
    },
    {
      id: 'cadastro-credito',
      title: 'Agente de Cadastro e Análise de Crédito',
      description: 'Agiliza cadastros e análises de crédito, consultando fontes oficiais automaticamente e minimizando a burocracia.',
      icon: <FileCheck className="h-8 w-8" />,
      color: 'bg-teal-50 text-teal-600',
      benefits: [
        'Redução do tempo de aprovação de cadastro',
        'Otimização da equipe de análise de crédito',
        'Maior confiabilidade nos dados com redução de riscos'
      ]
    },
    {
      id: 'disparador-promocoes',
      title: 'Disparador de Promoções via WhatsApp',
      description: 'Automatiza o envio de ofertas e promoções segmentadas, mantendo relacionamento pessoal de forma escalável.',
      icon: <SendHorizonal className="h-8 w-8" />,
      color: 'bg-indigo-50 text-indigo-600',
      benefits: [
        'Maior taxa de conversão com promoções direcionadas',
        'Menos esforço do time comercial em disparos manuais',
        'Maior frequência e consistência de campanhas promocionais'
      ]
    }
  ];

  // Agentes futuros/em desenvolvimento
  const futureSolutions = [
    {
      id: 'followup-automatico',
      title: 'Agente de Follow-up Automático',
      description: 'Automatiza o acompanhamento após cotações, garantindo que oportunidades não sejam esquecidas.',
      icon: <Clock className="h-8 w-8" />,
      color: 'bg-rose-50 text-rose-600',
      status: 'Em breve'
    },
    {
      id: 'sugestao-produtos',
      title: 'Agente de Sugestão de Produtos',
      description: 'Amplia o ticket médio sugerindo produtos complementares baseados no histórico e perfil do cliente.',
      icon: <ShoppingBag className="h-8 w-8" />,
      color: 'bg-emerald-50 text-emerald-600',
      status: 'Em breve'
    },
    {
      id: 'validacao-ofertas',
      title: 'Agente de Validação de Ofertas',
      description: 'Assegura que os vendedores ofereçam corretamente as promoções e condições planejadas pela empresa.',
      icon: <CheckSquare className="h-8 w-8" />,
      color: 'bg-amber-50 text-amber-600',
      status: 'Em desenvolvimento'
    },
    {
      id: 'qualidade-atendimento',
      title: 'Agente de Validação da Qualidade',
      description: 'Analisa o desempenho em cordialidade, empatia e uso correto de técnicas de venda e relacionamento.',
      icon: <Headphones className="h-8 w-8" />,
      color: 'bg-sky-50 text-sky-600',
      status: 'Em desenvolvimento'
    },
    {
      id: 'monitoramento-cotacoes',
      title: 'Agente de Monitoramento de Cotações',
      description: 'Monitora cotações que entram, garantindo agilidade na resposta e identificando atrasos.',
      icon: <AlertTriangle className="h-8 w-8" />,
      color: 'bg-red-50 text-red-600',
      status: 'Roadmap'
    },
    {
      id: 'assistente-pessoal',
      title: 'Assistente Pessoal para Vendedores',
      description: 'Agiliza tarefas de registro e acompanhamento usando mensagens de áudio no WhatsApp.',
      icon: <UserPlus className="h-8 w-8" />,
      color: 'bg-violet-50 text-violet-600',
      status: 'Roadmap'
    },
    {
      id: 'gestao-carteira',
      title: 'Gestão Avançada de Carteira',
      description: 'Monitora padrões de compra e gera alertas para retenção e aumento de vendas.',
      icon: <Briefcase className="h-8 w-8" />,
      color: 'bg-cyan-50 text-cyan-600',
      status: 'Roadmap'
    },
    {
      id: 'materiais-promocionais',
      title: 'Gama IA para Materiais Promocionais',
      description: 'Automatiza a criação de campanhas e artes usando IA geradora de imagens e textos.',
      icon: <Palette className="h-8 w-8" />,
      color: 'bg-pink-50 text-pink-600',
      status: 'Roadmap'
    },
    {
      id: 'gestao-logistica',
      title: 'IA em Gestão Logística',
      description: 'Otimiza processos logísticos como roteirização e rastreamento de entregas.',
      icon: <Truck className="h-8 w-8" />,
      color: 'bg-lime-50 text-lime-600',
      status: 'Roadmap'
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
                <ul className="mb-6 space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-white/60 text-sm">
                      <span className="text-blue-400 mr-2">•</span> {benefit}
                    </li>
                  ))}
                </ul>
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

        {/* Future Solutions Section */}
        <div className="pt-16 mb-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">Roadmap e Futuras Soluções</h3>
            <p className="text-white/80">
              Estamos constantemente inovando e desenvolvendo novos agentes para otimizar 
              ainda mais seus processos comerciais. Conheça o que está por vir:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureSolutions.slice(0, 6).map((solution, index) => (
              <div
                key={solution.id}
                className={cn(
                  "animate-on-scroll opacity-0 glass-card p-6 transition-all duration-300",
                  getDelayClass(index, 100)
                )}
              >
                <div className="flex items-center mb-4">
                  <div className={cn("p-3 rounded-lg mr-4", solution.color)}>
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{solution.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/30">
                      {solution.status}
                    </span>
                  </div>
                </div>
                <p className="text-white/70 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/platform" className="button-primary mr-4">
            Conheça nossa Plataforma
          </Link>
          <Link to="/consulting" className="button-secondary">
            Soluções de Consultoria
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
