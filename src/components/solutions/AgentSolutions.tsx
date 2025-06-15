import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AgentSolutionsProps {
  setApi: (api: any) => void;
}

const AgentSolutions: React.FC<AgentSolutionsProps> = ({ setApi }) => {
  const [api, setLocalApi] = React.useState<any>();

  React.useEffect(() => {
    setApi(api);
  }, [api, setApi]);

  const agentSolutions = [
    {
      id: 'cobertura-carteira',
      title: 'Agente de Cobertura de Carteira',
      subtitle: 'Proteja sua carteira de clientes do "Ricardão".',
      description: 'Garante que seus vendedores entrem em contato com todos os clientes, evitando inativações e protegendo seu faturamento.',
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
      subtitle: 'Reconquiste quem já custou tanto para conquistar.',
      description: 'Não dependa da equipe. Reative clientes inativos automaticamente com Inteligência Artificial, de forma consistente.',
      image: '/lovable-uploads/378362fc-9594-4e2b-a359-e2c465bcdd16.png',
      ctaText: 'Quero meus clientes de volta'
    },
    {
      id: 'analise-conversa-followup',
      title: 'Agente de Análise de Conversa e Follow-Up',
      subtitle: 'Chega de esquecer clientes e atrasar follow-ups',
      description: 'Analise automaticamente as conversas dos seus vendedores no WhatsApp e dispare follow-ups automáticos, evitando perdas.',
      image: '/lovable-uploads/bff71ba3-fe2b-4979-adc6-a9366ee9c19f.png',
      ctaText: 'Quero agilizar meu follow-up'
    },
    {
      id: 'cadastro-credito',
      title: 'Agente de Cadastro e Análise de Crédito',
      subtitle: 'Análise automática, rápida e segura.',
      description: 'Reduza o tempo e custos da análise com aprovação instantânea e automática de crédito integrada ao comercial.',
      image: '/lovable-uploads/0ab82369-42d6-40c1-bc2e-95902bc715e6.png',
      ctaText: 'Quero reduzir meu tempo de análise'
    },
    {
      id: 'sdr-atendimento',
      title: 'Agente SDR – Atendimento e Qualificação',
      subtitle: 'Atendimento imediato e qualificação automática',
      description: 'Melhore a satisfação e fidelize clientes com atendimento ágil, qualificação inteligente e integração direta ao CRM.',
      image: '/lovable-uploads/9f08124a-ba80-40a9-8b80-a201c4915bb3.png',
      ctaText: 'Quero fidelizar meus clientes'
    }
  ];

  return (
    <div id="agents" className="mb-20 relative">
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
        setApi={setLocalApi}
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
  );
};

export default AgentSolutions;
