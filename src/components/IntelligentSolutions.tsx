
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
  ChevronRight,
  Building2,
  Zap,
  Target
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
          <span className="font-bold text-blue-600">Treinamento em IA</span>: Desenvolva hoje a equipe que sua empresa precisará amanhã.
        </>
      ),
      description: 'Capacite seus colaboradores para adotarem uma cultura prática de Inteligência Artificial, impulsionando inovação e garantindo a competitividade futura da sua empresa.',
      image: '/lovable-uploads/2325cc10-7027-42bf-9748-64d0f104ff64.png',
      color: 'bg-blue-900/80 text-white border border-blue-800/50',
    }
  ];

  // Soluções para o terceiro carrossel - Agentes
  const agentSolutions = [
    {
      id: 'cobertura-carteira',
      title: 'Agente de Cobertura de Carteira',
      subtitle: 'Proteja sua carteira de clientes do "Ricardão".',
      description: 'Garanta que seus vendedores entrem em contato com todos os clientes, evitando inativações e protegendo seu faturamento.',
      image: '/lovable-uploads/f6aab51a-8e0d-479c-a816-84642f9f736a.png',
      ctaText: 'Quero proteger meus clientes'
    },
    {
      id: 'avaliacao-monitoramento',
      title: 'Agente de Monitoramento de Conversas',
      subtitle: 'Análise automática, sem intervenção humana.',
      description: 'Avalie automaticamente tudo o que sua equipe conversa com seus clientes, identificando melhorias e corrigindo falhas em tempo real.',
      image: '/lovable-uploads/a18fcce2-253f-4796-8790-2ac852b92b7b.png',
      ctaText: 'Quero acompanhar minha equipe'
    },
    {
      id: 'reativacao-automatica',
      title: 'Agente de Reativação de Clientes Inativos',
      subtitle: 'Reconquiste automaticamente quem já custou tanto para conquistar.',
      description: 'Não dependa da equipe. Reative clientes inativos automaticamente com Inteligência Artificial, de forma consistente.',
      image: '/lovable-uploads/378362fc-9594-4e2b-a359-e2c465bcdd16.png',
      ctaText: 'Quero meus clientes de volta'
    },
    {
      id: 'gestao-vendas',
      title: 'Agente de Gestão de Vendas',
      description: 'Integração total com sistemas internos, permitindo automação do processo comercial completo.',
      image: '/lovable-uploads/fc726cd1-b0ee-4ead-a507-41d5e8c1eb4e.png',
    },
    {
      id: 'cadastro-credito',
      title: 'Agente de Cadastro e Análise de Crédito',
      description: 'Automatiza até 80% do cadastro e análise, exigindo apenas validações pontuais.',
      image: '/lovable-uploads/fc726cd1-b0ee-4ead-a507-41d5e8c1eb4e.png',
    }
  ];

  // Nova seção: Agentes Personalizados por Persona/Setor
  const customAgentsByPersona = [
    {
      id: 'distribuidor-atacadista',
      title: 'Para Distribuidores e Atacadistas',
      description: 'Agentes especializados em cobertura de carteira, gestão de representantes e controle de inadimplência.',
      icon: <Building2 className="h-8 w-8 text-blue-600" />,
      benefits: ['Proteção da carteira', 'Controle de representantes', 'Redução de inadimplência'],
      color: 'bg-white border border-blue-200 hover:border-blue-400',
    },
    {
      id: 'ceo-saas',
      title: 'Para CEOs de SaaS em Escala',
      description: 'Agentes focados em redução de CAC, automação de follow-up e qualificação inteligente de leads.',
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      benefits: ['Redução de CAC', 'Automação de follow-up', 'Qualificação de leads'],
      color: 'bg-white border border-blue-200 hover:border-blue-400',
    },
    {
      id: 'gestor-comercial-b2b',
      title: 'Para Gestores Comerciais B2B',
      description: 'Agentes para previsibilidade de pipeline, integração com CRM e análise de performance comercial.',
      icon: <Target className="h-8 w-8 text-blue-600" />,
      benefits: ['Pipeline previsível', 'Integração com CRM', 'Análise de performance'],
      color: 'bg-white border border-blue-200 hover:border-blue-400',
    },
    {
      id: 'outros-setores',
      title: 'Outros Setores e Necessidades',
      description: 'Criamos agentes sob medida para qualquer processo comercial ou de atendimento específico do seu negócio.',
      icon: <BrainCircuit className="h-8 w-8 text-blue-600" />,
      benefits: ['Solução personalizada', 'Integração total', 'Suporte especializado'],
      color: 'bg-white border border-blue-200 hover:border-blue-400',
    }
  ];

  // Ref para controlar o carrossel
  const [api, setApi] = React.useState<any>();

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="heading-lg mb-4">Automações Inteligentes para Alavancar suas Vendas</h2>
          <p className="text-gray-600 text-lg">
            Conheça soluções práticas e inteligentes que aumentam a eficiência da sua equipe comercial, reduzem tarefas repetitivas e aceleram o crescimento das suas vendas.
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

        {/* Agentes de IA - Carrossel com botões laterais */}
        <div id="agents" className="mb-20 relative">
          {/* Botões de navegação posicionados nas laterais da seção */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous agent"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next agent"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>

          <h2 className="heading-lg mb-6 text-center">Conheça nossos Agentes Inteligentes</h2>
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full relative"
            setApi={setApi}
          >
            <CarouselContent>
              {agentSolutions.map((solution) => (
                <CarouselItem key={solution.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg" hoverEffect={true}>
                      {solution.image && (
                        <div className="overflow-hidden h-64">
                          <img 
                            src={solution.image} 
                            alt={`${solution.title} - Agente de IA`}
                            className="w-full h-full object-cover object-[center_20%] transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="bg-gray-50 p-8">
                        <CardTitle className="text-2xl font-bold text-blue-600 mb-3 leading-tight text-center">
                          {solution.title}
                        </CardTitle>
                        {solution.subtitle && (
                          <p className="text-xl font-bold text-gray-900 mb-6 leading-tight text-center">
                            {solution.subtitle}
                          </p>
                        )}
                        <CardDescription className="text-gray-600 mb-6 text-base">
                          {solution.description}
                        </CardDescription>
                        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          <a href={`/agent/${solution.id}`}>
                            {solution.ctaText || 'Saiba mais'}
                          </a>
                        </Button>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Nova seção: Agentes Personalizados para seu Negócio */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Agentes Personalizados para seu Negócio</h3>
            <p className="text-gray-600 text-lg">
              Criamos agentes de IA sob medida para as necessidades específicas do seu setor e processo comercial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {customAgentsByPersona.map((persona) => (
              <Card key={persona.id} className={cn("h-full transition-all duration-300 hover:shadow-lg", persona.color)} hoverEffect={true}>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {persona.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{persona.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-center">
                    {persona.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {persona.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckSquare className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Central */}
          <div className="text-center bg-blue-600 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">Vamos criar o agente ideal para o seu negócio?</h4>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Nossa equipe analisa seus processos comerciais e desenvolve agentes de IA personalizados que se integram perfeitamente ao seu sistema atual.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              <Link to="/contact">
                Solicitar Demonstração Personalizada
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentSolutions;
