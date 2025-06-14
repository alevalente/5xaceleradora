import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createObserver, getDelayClass } from '../utils/animations';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

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
      title: 'Agente de Cobertura de Carteira',
      subtitle: 'Nunca mais deixe um cliente sem contato. Varredura automática e inteligente da sua carteira.',
      description: 'Varredura recorrente (por exemplo, semanal), evitando negligenciar qualquer cliente.',
      image: '/lovable-uploads/72d2476b-beea-49f9-8c6f-510357e683c5.png',
      ctaText: 'Quero proteger minha carteira de clientes'
    },
    {
      id: 'analise-sentimento',
      title: 'Agente de Análise de Sentimento',
      subtitle: 'Entenda a fundo a satisfação dos seus clientes. Análise automática de cada interação.',
      description: 'Identifica o sentimento predominante nas mensagens dos clientes, permitindo priorizar os casos mais urgentes e melhorar a qualidade do atendimento.',
      image: '/lovable-uploads/c8999981-695d-4949-b989-9ff55c99099a.png',
      ctaText: 'Otimizar a satisfação dos clientes'
    },
    {
      id: 'lead-scoring',
      title: 'Agente de Lead Scoring',
      subtitle: 'Priorize os leads com maior potencial de conversão. Pontuação inteligente com base em dados e interações.',
      description: 'Atribui uma pontuação a cada lead com base em seu perfil e comportamento, permitindo que a equipe comercial concentre seus esforços nos leads mais promissores.',
      image: '/lovable-uploads/56999959-7967-49f3-a95b-5c4c1114a19d.png',
      ctaText: 'Aumentar minhas conversões'
    },
  ];

  return (
    <section id="intelligent-solutions" className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">
            Potencialize sua Estratégia Comercial com Inteligência Artificial
          </h2>
          <p className="text-gray-600 text-lg">
            Descubra como nossa plataforma de Agentes de IA pode transformar sua abordagem de vendas,
            otimizar processos e impulsionar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={solution.id}
              className={cn(
                "animate-on-scroll opacity-0",
                getDelayClass(index, 100)
              )}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold mb-2">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-gray-500">
                  {solution.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700">
                <div className="relative rounded-md overflow-hidden mb-4">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <p className="text-sm">{solution.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link to={`/agent/${solution.id}`}>{solution.ctaText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligentSolutions;
