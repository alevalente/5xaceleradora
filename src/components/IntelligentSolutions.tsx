import React from 'react';
import { Users, MessageSquare, Clock, Shield } from 'lucide-react';

const IntelligentSolutions = () => {
  const solutions = [
    {
      id: 1,
      title: 'Agente de Cobertura de Carteira',
      subtitle: 'Reativação automática de clientes inativos',
      description: 'Identifica clientes sem pedidos há 30+ dias e dispara sequências personalizadas de reativação via WhatsApp.',
      icon: Users,
      features: [
        'Identificação automática de clientes inativos',
        'Sequências de mensagens personalizadas',
        'Integração com CRM/ERP existente',
        'Relatórios de performance em tempo real'
      ],
      metrics: {
        improvement: '35%',
        description: 'aumento na reativação de clientes'
      }
    },
    {
      id: 2,
      title: 'Agente SDR WhatsApp',
      subtitle: 'Qualificação automática de leads',
      description: 'Qualifica leads automaticamente via WhatsApp, agenda reuniões e passa apenas oportunidades qualificadas para o time comercial.',
      icon: MessageSquare,
      features: [
        'Qualificação automática via WhatsApp',
        'Agendamento inteligente de reuniões',
        'Integração com calendários',
        'Score de qualificação personalizado'
      ],
      metrics: {
        improvement: '60%',
        description: 'redução no tempo de qualificação'
      }
    },
    {
      id: 3,
      title: 'Agente de Follow-Up',
      subtitle: 'Acompanhamento automatizado de propostas',
      description: 'Monitora propostas enviadas e executa follow-ups automáticos personalizados até o fechamento ou descarte definitivo.',
      icon: Clock,
      features: [
        'Follow-up automático de propostas',
        'Sequências personalizadas por tipo de cliente',
        'Alertas para vendedores em momento crítico',
        'Dashboard de acompanhamento'
      ],
      metrics: {
        improvement: '45%',
        description: 'aumento na taxa de conversão'
      }
    },
    {
      id: 4,
      title: 'Agente de Monitoramento de Conversas',
      subtitle: 'Análise automática, sem intervenção humana.',
      description: 'Analise automaticamente, sem intervenção humana, conversas da equipe via WhatsApp, garantindo qualidade no atendimento.',
      icon: Shield,
      features: [
        'Monitoramento em tempo real',
        'Análise de sentimento das conversas',
        'Alertas de qualidade automáticos',
        'Relatórios de performance da equipe'
      ],
      metrics: {
        improvement: '25%',
        description: 'melhoria na qualidade do atendimento'
      }
    }
  ];

  return (
    <section id="intelligent-solutions" className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Soluções Inteligentes</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Nossa plataforma de agentes inteligentes oferece soluções completas para otimizar suas operações e impulsionar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <div key={solution.id} className="bg-white rounded-2xl shadow-glass p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <solution.icon className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold">{solution.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{solution.subtitle}</p>
              <p className="text-gray-800">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligentSolutions;
