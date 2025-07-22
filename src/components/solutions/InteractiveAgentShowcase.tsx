import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const InteractiveAgentShowcase = () => {
  const agentSolutions = [
    {
      id: 'cobertura-carteira',
      name: 'Cobertura',
      title: 'Agente de Cobertura de Carteira',
      subtitle: 'Proteja sua carteira de clientes do "Ricardão".',
      description: 'Garante que seus vendedores entrem em contato com todos os clientes, evitando inativações e protegendo seu faturamento.',
      image: '/lovable-uploads/f6aab51a-8e0d-479c-a816-84642f9f736a.png',
      avatar: '/lovable-uploads/f6aab51a-8e0d-479c-a816-84642f9f736a.png',
      role: 'Cobertura de Carteira',
      tags: ['Retenção de Clientes', 'Varredura Automática', 'Proteção de Receita'],
      ctaText: 'Quero proteger meus clientes',
      customLink: '/agente-cobertura-carteira'
    },
    {
      id: 'avaliacao-monitoramento',
      name: 'Monitoramento',
      title: 'Agente de Monitoramento de Conversas',
      subtitle: 'Análise automática, sem intervenção humana.',
      description: 'Avalie automaticamente tudo o que sua equipe conversa com seus clientes, identificando melhorias e corrigindo falhas em tempo real.',
      image: '/lovable-uploads/a18fcce2-253f-4796-8790-2ac852b92b7b.png',
      avatar: '/lovable-uploads/a18fcce2-253f-4796-8790-2ac852b92b7b.png',
      role: 'Análise de Conversas',
      tags: ['Monitoramento 24/7', 'Análise de Performance', 'Feedback Automático'],
      ctaText: 'Quero acompanhar minha equipe',
      customLink: '/agente-analise-conversas'
    },
    {
      id: 'reativacao-automatica',
      name: 'Reativação',
      title: 'Agente de Reativação de Clientes Inativos',
      subtitle: 'Reconquiste quem já custou tanto para conquistar.',
      description: 'Não dependa da equipe. Reative clientes inativos automaticamente com Inteligência Artificial, de forma consistente.',
      image: '/lovable-uploads/378362fc-9594-4e2b-a359-e2c465bcdd16.png',
      avatar: '/lovable-uploads/378362fc-9594-4e2b-a359-e2c465bcdd16.png',
      role: 'Reativação Automática',
      tags: ['Recuperação de Receita', 'Campanhas Inteligentes', 'Automação de Escala'],
      ctaText: 'Quero meus clientes de volta',
      customLink: '/agente-reativacao-clientes'
    },
    {
      id: 'analise-conversa-followup',
      name: 'Follow-up',
      title: 'Agente de Análise de Conversa e Follow-Up',
      subtitle: 'Chega de esquecer clientes e atrasar follow-ups',
      description: 'Analise automaticamente as conversas dos seus vendedores no WhatsApp e dispare follow-ups automáticos, evitando perdas.',
      image: '/lovable-uploads/bff71ba3-fe2b-4979-adc6-a9366ee9c19f.png',
      avatar: '/lovable-uploads/bff71ba3-fe2b-4979-adc6-a9366ee9c19f.png',
      role: 'Follow-up Inteligente',
      tags: ['Follow-up Automático', 'Análise de Contexto', 'Recuperação de Leads'],
      ctaText: 'Quero agilizar meu follow-up',
      customLink: '/agente-analise-conversas-followup'
    },
    {
      id: 'cadastro-credito',
      name: 'Crédito',
      title: 'Agente de Cadastro e Análise de Crédito',
      subtitle: 'Análise automática, rápida e segura.',
      description: 'Reduza o tempo e custos da análise com aprovação instantânea e automática de crédito integrada ao comercial.',
      image: '/lovable-uploads/0ab82369-42d6-40c1-bc2e-95902bc715e6.png',
      avatar: '/lovable-uploads/0ab82369-42d6-40c1-bc2e-95902bc715e6.png',
      role: 'Análise de Crédito',
      tags: ['Aprovação Instantânea', 'Análise de Risco', 'Automação 80%'],
      ctaText: 'Quero reduzir meu tempo de análise',
      customLink: '/agente-cadastro-credito'
    },
    {
      id: 'sdr-atendimento',
      name: 'SDR',
      title: 'Agente SDR – Atendimento e Qualificação',
      subtitle: 'Atendimento imediato e qualificação automática',
      description: 'Melhore a satisfação e fidelize clientes com atendimento ágil, qualificação inteligente e integração direta ao CRM.',
      image: '/lovable-uploads/9f08124a-ba80-40a9-8b80-a201c4915bb3.png',
      avatar: '/lovable-uploads/9f08124a-ba80-40a9-8b80-a201c4915bb3.png',
      role: 'SDR Automático',
      tags: ['Qualificação de Leads', 'Atendimento 24/7', 'Integração CRM'],
      ctaText: 'Quero fidelizar meus clientes',
      customLink: '/agente-sdr-atendimento'
    }
  ];

  const [selectedAgent, setSelectedAgent] = useState(agentSolutions[0]);

  return (
    <section id="agents" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Conheça Nossa Equipe IA
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Agentes IA Especializados
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              para Cada Função
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa seleção de agentes IA projetados para otimizar suas tarefas e potencializar seus resultados.
          </p>
        </div>

        <div className="relative">
          <div className="grid lg:grid-cols-5 gap-8 min-h-0 items-stretch">
            {/* Card Principal do Agente Selecionado */}
            <div className="order-2 lg:order-1 lg:col-span-3 flex">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl border-0 h-full w-full" hoverEffect={false}>
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="mb-6">
                      <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                        <img 
                          src={selectedAgent.image} 
                          alt={`${selectedAgent.title} - Agente de IA`}
                          className="w-full h-full object-contain object-center"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-1">
                          {selectedAgent.name}
                        </CardTitle>
                        <p className="text-blue-600 font-semibold">
                          {selectedAgent.role}
                        </p>
                      </div>
                    </div>
                    
                    <CardDescription className="text-gray-700 text-lg leading-relaxed mb-8">
                      {selectedAgent.description}
                    </CardDescription>
                  </div>

                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link to={selectedAgent.customLink}>
                      {selectedAgent.ctaText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Grid de Thumbnails dos Agentes */}
            <div className="order-1 lg:order-2 lg:col-span-2 flex">
              <div className="grid grid-cols-2 gap-6 w-full h-full">
                {agentSolutions.map((agent) => (
                  <div
                    key={agent.id}
                    className={cn(
                      "agent-card cursor-pointer transform hover:scale-105 transition-all duration-200 p-5 rounded-2xl border-2 h-full flex flex-col justify-center",
                      selectedAgent.id === agent.id
                        ? "border-blue-400 bg-blue-50 selected"
                        : "border-transparent hover:border-blue-200 hover:bg-blue-50"
                    )}
                    tabIndex={0}
                    onClick={() => setSelectedAgent(agent)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedAgent(agent);
                      }
                    }}
                  >
                    <div className="text-center">
                      <img 
                        src={agent.avatar} 
                        alt={agent.name}
                        className="rounded-full object-cover w-20 h-20 mx-auto mb-4 shadow-md"
                        loading="lazy"
                      />
                      <h4 className="font-semibold text-gray-900 text-base">
                        {agent.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {agent.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAgentShowcase;
