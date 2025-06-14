import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BrainCircuit, 
  Lightbulb,
  Users, 
  Clock,
  ShoppingBag,
  CheckSquare,
  Headphones,
  AlertTriangle,
  UserPlus,
  Briefcase,
  Palette,
  Truck,
  UserCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const IntelligentSolutions = () => {
  // Soluções para o primeiro carrossel - Categorias
  const solutionCategories = [
    {
      id: 'platform',
      title: (
        <>
          <span className="font-bold text-blue-600">IAgo Conversas</span>: Controle total das conversas da sua equipe, sem risco de perder informações.
        </>
      ),
      description: 'Gerencie em tempo real todas as conversas da sua equipe no WhatsApp, Instagram, Facebook e outros canais, em uma única plataforma multi-atendimento integrada.',
      image: '/lovable-uploads/72d2476b-beea-49f9-8c6f-510357e683c5.png',
      color: 'bg-blue-900/80 text-white border border-blue-800/50',
    },
    {
      id: 'agents',
      title: (
        <>
          <span className="font-bold text-blue-600">Agentes de IA</span>: Aumente a eficiência comercial do seu negócio com inteligência artificial.
        </>
      ),
      description: 'Automatize processos comerciais, melhore o desempenho do seu time e foque no crescimento da sua empresa com nossos agentes inteligentes sob medida.',
      image: '/lovable-uploads/fc726cd1-b0ee-4ead-a507-41d5e8c1eb4e.png',
      color: 'bg-blue-900/80 text-white border border-blue-800/50',
    },
    {
      id: 'consulting',
      title: (
        <>
          <span className="font-bold text-blue-600">Consultoria em IA</span>: Prepare sua empresa para resultados exponenciais com Inteligência Artificial.
        </>
      ),
      description: 'Diagnóstico estratégico, implementação de soluções personalizadas e workshops práticos para difundir a cultura de IA em toda a equipe.',
      image: '/lovable-uploads/2325cc10-7027-42bf-9748-64d0f104ff64.png',
      color: 'bg-blue-900/80 text-white border border-blue-800/50',
    }
  ];

  // Soluções para o terceiro carrossel - Agentes
  const agentSolutions = [
    {
      id: 'cobertura-carteira',
      title: 'Agente de Cobertura de Carteira',
      description: 'Varredura recorrente (por exemplo, semanal), evitando negligenciar qualquer cliente.',
      icon: <Users className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      id: 'avaliacao-monitoramento',
      title: 'Agente de Avaliação e Monitoramento',
      description: 'Monitoramento sistemático das conversas para avaliações detalhadas e contínuas.',
      icon: <BrainCircuit className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      id: 'reativacao-automatica',
      title: 'Agente de Reativação Automática',
      description: 'Campanhas pontuais de reativação, sem sobrecarregar a equipe comercial.',
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      id: 'gestao-vendas',
      title: 'Agente de Gestão de Vendas',
      description: 'Integração total com sistemas internos, permitindo automação do processo comercial completo.',
      icon: <ShoppingBag className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      id: 'cadastro-credito',
      title: 'Agente de Cadastro e Análise de Crédito',
      description: 'Automatiza até 80% do cadastro e análise, exigindo apenas validações pontuais.',
      icon: <CheckSquare className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    }
  ];

  // Novos Agentes em Desenvolvimento - Adicionando a nova seção
  const upcomingAgents = [
    {
      id: 'followup-automatico',
      title: 'Agente de Follow-up Automático',
      description: 'Priorização inteligente de leads para maior conversão.',
      icon: <Clock className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      id: 'sugestao-produtos',
      title: 'Agente de Sugestão de Produtos',
      description: 'Recomendações personalizadas para aumentar vendas através de upselling e cross-selling.',
      icon: <ShoppingBag className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      id: 'validacao-ofertas',
      title: 'Agente de Validação de Ofertas',
      description: 'Análise semântica profunda das propostas comerciais.',
      icon: <CheckSquare className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      id: 'qualidade-atendimento',
      title: 'Agente de Validação da Qualidade do Atendimento',
      description: 'Análise de sentimento das conversas para insights sobre a satisfação do cliente.',
      icon: <Headphones className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      id: 'monitoramento-cotacoes',
      title: 'Agente de Monitoramento de Cotações',
      description: 'Alertas automáticos sobre cotações pendentes.',
      icon: <AlertTriangle className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      id: 'assistente-pessoal',
      title: 'Assistente Pessoal para Vendedores',
      description: 'Interação simplificada e intuitiva por voz diretamente via WhatsApp.',
      icon: <UserPlus className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      id: 'gestao-carteira',
      title: 'Gestão Avançada de Carteira',
      description: 'Utiliza análise preditiva baseada em histórico e indicadores econômicos.',
      icon: <Briefcase className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      id: 'materiais-promocionais',
      title: 'Gama IA para Promoções',
      description: 'Automação para criação e envio de materiais promocionais.',
      icon: <Palette className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      id: 'gestao-logistica',
      title: 'IA em Gestão Logística',
      description: 'Rastreamento e informações logísticas em tempo real para um atendimento proativo.',
      icon: <Truck className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="heading-lg mb-4">Soluções Inteligentes para sua Empresa</h2>
          <p className="text-gray-600 text-lg">
            Tudo que você precisa para automatizar sua empresa e lucrar mais
          </p>
        </div>

        {/* Primeiro Carrossel - Categorias de Soluções */}
        <div className="mb-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {solutionCategories.map((category) => (
                <CarouselItem key={category.id} className="md:basis-1/3 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg" hoverEffect={true}>
                      {category.image && (
                        <div className="overflow-hidden h-36">
                          <img 
                            src={category.image} 
                            alt={
                              category.id === 'platform' 
                                ? "Plataforma de Atendimento" 
                                : category.id === 'agents'
                                ? "Agentes de IA"
                                : "Consultor apresentando ferramentas de IA (ChatGPT, OpenAI, Gemini, etc.) para equipe em treinamento."
                            } 
                            className="w-full h-full object-cover object-[center_20%] transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="bg-gray-50 p-6">
                        <CardTitle className="text-lg font-medium text-gray-900 mb-3 leading-tight">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 mb-4">
                          {category.description}
                        </CardDescription>
                        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          {category.id === 'platform' ? (
                            <Link to="/platform">
                              Saiba mais
                            </Link>
                          ) : category.id === 'agents' ? (
                            <a href="#agents">
                              Conheça nossos Agentes
                            </a>
                          ) : (
                            <Link to="/consulting">
                              Saiba mais
                            </Link>
                          )}
                        </Button>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Agentes de IA - Carrossel */}
        <div id="agents">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Agentes de IA</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {agentSolutions.map((solution) => (
                <CarouselItem key={solution.id} className="md:basis-1/3 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full bg-blue-900 text-white border border-blue-800/50" hoverEffect={true}>
                      <CardHeader>
                        <div className={cn("p-4 rounded-lg inline-block mb-4", solution.color)}>
                          {solution.icon}
                        </div>
                        <CardTitle className="text-xl font-semibold text-white">{solution.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/80">{solution.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <a href={`/agent/${solution.id}`} className="text-white/90 font-medium hover:text-white">
                          Saiba mais
                        </a>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 space-x-4">
              <CarouselPrevious className="static translate-y-0 bg-white/10 text-blue-900 hover:bg-blue-100 hover:text-blue-900 border border-blue-200" />
              <CarouselNext className="static translate-y-0 bg-white/10 text-blue-900 hover:bg-blue-100 hover:text-blue-900 border border-blue-200" />
            </div>
          </Carousel>
        </div>

        {/* Nova seção: Novos Agentes em Desenvolvimento */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Novos Agentes em Desenvolvimento</h3>
            <p className="text-gray-600">
              Estamos constantemente inovando para otimizar ainda mais os processos comerciais da sua empresa.
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {upcomingAgents.map((agent) => (
                <CarouselItem key={agent.id} className="md:basis-1/3 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full bg-blue-900 text-white border border-blue-800/50" hoverEffect={true}>
                      <CardHeader>
                        <div className={cn("p-4 rounded-lg inline-block mb-4", agent.color)}>
                          {agent.icon}
                        </div>
                        <CardTitle className="text-xl font-semibold text-white">{agent.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/80">{agent.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <span className="text-white/70 text-sm">Em breve</span>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 space-x-4">
              <CarouselPrevious className="static translate-y-0 bg-white/10 text-blue-900 hover:bg-blue-100 hover:text-blue-900 border border-blue-200" />
              <CarouselNext className="static translate-y-0 bg-white/10 text-blue-900 hover:bg-blue-100 hover:text-blue-900 border border-blue-200" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default IntelligentSolutions;
