
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Zap, Target, BrainCircuit, CheckSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CustomAgentsByPersona = () => {
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

  return (
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
  );
};

export default CustomAgentsByPersona;
