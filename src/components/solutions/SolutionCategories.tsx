
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SolutionCategories = () => {
  const [api, setApi] = React.useState<any>();

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

  return (
    <div className="relative">
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Previous solution"
        onClick={() => api?.scrollPrev()}
      >
        <ChevronLeft className="h-6 w-6 text-blue-600" />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Next solution"
        onClick={() => api?.scrollNext()}
      >
        <ChevronRight className="h-6 w-6 text-blue-600" />
      </button>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {solutionCategories.map((category) => (
            <CarouselItem key={category.id} className="md:basis-1/3 lg:basis-1/3">
              <div className="p-4 lg:p-6">
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
                        loading="lazy"
                        width="400"
                        height="144"
                      />
                    </div>
                  )}
                  <div className="bg-gray-50 p-8 lg:p-10">
                    <CardTitle className="text-lg font-medium text-gray-900 mb-6 leading-tight">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-8 text-base leading-relaxed">
                      {category.description}
                    </CardDescription>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      {category.id === 'platform' ? (
                        <Link to="/iago-conversas">
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
  );
};

export default SolutionCategories;
