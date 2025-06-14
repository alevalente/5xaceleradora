
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCheck, 
  BarChart2, 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardTitle, CardDescription } from './ui/card';

const IntelligentSolutions = () => {
  useEffect(() => {
    // Garantir que os cards apareçam mesmo se o observer falhar
    const timer = setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.animate-on-scroll.opacity-0');
      hiddenElements.forEach(element => {
        element.classList.remove('opacity-0');
        element.classList.add('opacity-100', 'animated');
      });
    }, 100);

    // Observer para animação quando elementos entram na tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100', 'animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => observer.observe(element));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const solutions = [
    {
      id: 'cobertura-carteira',
      title: 'Agente de Cobertura de Carteira',
      subtitle: 'Proteja sua carteira de clientes do "Ricardão".',
      description: 'Garanta contatos recorrentes e proativos com seus clientes, evitando inativações e protegendo seu faturamento contra concorrentes.',
      icon: <UserCheck className="h-10 w-10" />,
      color: 'bg-blue-50 text-blue-600',
      image: '/lovable-uploads/f6aab51a-8e0d-479c-a816-84642f9f736a.png',
      ctaText: 'Saiba como proteger sua carteira'
    },
    {
      id: 'avaliacao-monitoramento',
      title: 'Agente de Avaliação e Monitoramento de Conversas',
      subtitle: 'Acompanhe automaticamente tudo o que sua equipe fala com seus clientes pelo WhatsApp.',
      description: 'Acompanhe e analise em tempo real todas as conversas da sua equipe comercial via WhatsApp, identificando oportunidades de melhoria, prevenindo erros de comunicação e garantindo a qualidade no atendimento ao cliente.',
      icon: <BarChart2 className="h-10 w-10" />,
      color: 'bg-purple-50 text-purple-600',
      image: '/lovable-uploads/0c1c5292-08e5-4eba-b380-ee70f9456d36.png',
      ctaText: 'Quero acompanhar minha equipe'
    }
  ];

  return (
    <section id="intelligent-solutions" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-gradient">
            Aumente suas vendas com nossos agentes de IA
          </h2>
          <p className="text-gray-700 text-lg">
            Conheça nossos agentes de inteligência artificial que automatizam
            seus processos comerciais e aumentam sua receita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={cn(
                "animate-on-scroll opacity-0 transition-all duration-700 ease-out transform translate-y-8",
                `delay-${(index + 1) * 200}`
              )}
            >
              <div className="p-2">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1" hoverEffect={true}>
                  {solution.image && (
                    <div className="overflow-hidden h-64">
                      <img 
                        src={solution.image} 
                        alt={`${solution.title} - Agente de IA`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
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
                    <CardDescription className="text-gray-700 mb-8 text-lg leading-relaxed">
                      {solution.description}
                    </CardDescription>
                    <div className="text-center">
                      <Link 
                        to={`/agent/${solution.id}`}
                        className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
                      >
                        {solution.ctaText || 'Saiba mais'}
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg">
            Ainda não encontrou o agente ideal para sua necessidade?
          </p>
          <Link to="/contact" className="button-primary mt-4">
            Entre em contato e vamos criar juntos!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntelligentSolutions;
