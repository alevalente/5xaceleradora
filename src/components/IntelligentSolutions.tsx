
import React from 'react';
import { 
  MonitorSmartphone, 
  BrainCircuit, 
  Lightbulb,
  MessageSquare, 
  Users, 
  Clock,
  ShoppingBag,
  CheckSquare,
  Headphones
} from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const IntelligentSolutions = () => {
  // Soluções para o primeiro carrossel - Categorias
  const solutionCategories = [
    {
      id: 'platform',
      title: 'Plataforma de Atendimento via WhatsApp',
      description: 'Nossa plataforma integra agentes de IA que automatizam processos comerciais, reduzindo tarefas repetitivas e aumentando seu faturamento.',
      icon: <MonitorSmartphone className="h-12 w-12 text-white" />,
      color: 'bg-blue-900/80 text-white border border-blue-800/50',
    },
    {
      id: 'agents',
      title: 'Agentes de IA',
      description: 'Automatize processos comerciais com nossa suite de agentes inteligentes que reduzem tarefas repetitivas e aumentam a eficiência.',
      icon: <BrainCircuit className="h-12 w-12 text-white" />,
      color: 'bg-blue-900/80 text-white border border-blue-800/50',
    },
    {
      id: 'consulting',
      title: 'Consultoria e Treinamentos',
      description: 'Transforme sua equipe comercial com nossa metodologia comprovada de consultoria, mentorias e treinamentos especializados.',
      icon: <Lightbulb className="h-12 w-12 text-white" />,
      color: 'bg-blue-900/80 text-white border border-blue-800/50',
    },
    {
      id: 'platform-extra',
      title: 'Análise de Dados em Tempo Real',
      description: 'Dashboards inteligentes que mostram o desempenho da sua equipe comercial em tempo real, com insights acionáveis.',
      icon: <Clock className="h-12 w-12 text-white" />,
      color: 'bg-blue-900/80 text-white border border-blue-800/50',
    },
    {
      id: 'strategy',
      title: 'Estratégia Comercial Personalizada',
      description: 'Desenvolvemos estratégias personalizadas para o seu negócio, considerando seu mercado e objetivos específicos.',
      icon: <CheckSquare className="h-12 w-12 text-white" />,
      color: 'bg-blue-900/80 text-white border border-blue-800/50',
    }
  ];

  // Soluções para o segundo carrossel - Plataforma
  const platformFeatures = [
    {
      title: 'Centralização de Conversas',
      description: 'WhatsApp, Facebook, Instagram, Webchat, tudo num único painel.',
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      title: 'Distribuição Automática',
      description: 'Mensagens roteadas entre setores e equipes conforme regras definidas.',
      icon: <Users className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      title: 'Acompanhamento em Tempo Real',
      description: 'Controle de SLA e monitoramento da qualidade do atendimento.',
      icon: <Clock className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      title: 'Integrações Avançadas',
      description: 'Conexão com ERPs, automação financeira e automações de IA.',
      icon: <ShoppingBag className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
    },
    {
      title: 'Análise de Satisfação',
      description: 'Monitoramento do sentimento do cliente e feedbacks automáticos.',
      icon: <Headphones className="h-8 w-8 text-white" />,
      color: 'bg-blue-900/80 text-white',
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

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">Soluções Inteligentes para sua Empresa</h2>
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
                    <Card className="h-full bg-blue-900 text-white" hoverEffect={true}>
                      <CardHeader>
                        <div className={cn("p-4 rounded-lg inline-block mb-4", category.color)}>
                          {category.icon}
                        </div>
                        <CardTitle className="text-xl font-semibold text-white">{category.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/80">{category.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <a href={`#${category.id}`} className="text-white/90 font-medium hover:text-white">
                          Saiba mais
                        </a>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mx-2" />
              <CarouselNext className="relative static mx-2" />
            </div>
          </Carousel>
        </div>

        {/* Segundo Carrossel - Recursos da Plataforma */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Plataforma de Atendimento</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {platformFeatures.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full bg-blue-900 text-white" hoverEffect={true}>
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          <div className={cn("p-3 rounded-lg mr-4", feature.color)}>
                            {feature.icon}
                          </div>
                          <CardTitle className="text-lg font-semibold text-white">{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/80">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mx-2" />
              <CarouselNext className="relative static mx-2" />
            </div>
          </Carousel>
        </div>

        {/* Terceiro Carrossel - Agentes de IA */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Agentes de IA</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
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
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mx-2" />
              <CarouselNext className="relative static mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default IntelligentSolutions;
