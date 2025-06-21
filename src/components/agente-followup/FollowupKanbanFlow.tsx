
import React from 'react';
import { MessageSquare, Bot, Hourglass, CheckCircle2, User, DollarSign } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const FollowupKanbanFlow = () => {
  // Dados das oportunidades para cada coluna
  const kanbanData = {
    detectada: [
      {
        name: "Maria Santos",
        value: "R$ 12.800",
        message: "Preciso avaliar com a diretoria, mas gostei muito da proposta apresentada...",
        status: "3 d sem resposta",
        icon: "⚡"
      },
      {
        name: "João Silva", 
        value: "R$ 25.400",
        message: "Interessante a solução, vou discutir com a equipe na próxima reunião...",
        status: "5 d sem resposta",
        icon: "⚡"
      },
      {
        name: "Ana Costa",
        value: "R$ 8.500", 
        message: "Achei o preço um pouco alto, mas a funcionalidade é exatamente o que precisamos...",
        status: "2 d sem resposta",
        icon: "⚡"
      }
    ],
    execucao: [
      {
        name: "Roberto Lima",
        value: "R$ 18.200",
        message: "Roberto, nossa proposta está alinhada com suas necessidades. Posso esclarecer alguma dúvida?",
        status: "Executando agora", 
        icon: "⏳"
      },
      {
        name: "Carla Mendes",
        value: "R$ 33.700",
        message: "Carla, preparei uma apresentação personalizada baseada no nosso último contato...",
        status: "Agendado para hoje",
        icon: "⏳"
      },
      {
        name: "Paulo Santos", 
        value: "R$ 15.900",
        message: "Paulo, vi que você demonstrou interesse na automação. Que tal uma demo rápida?",
        status: "Enviando em 2h",
        icon: "⏳"
      }
    ],
    aguardando: [
      {
        name: "Fernanda Oliveira",
        value: "R$ 22.300",
        message: "Follow-up personalizado enviado às 14:30h",
        status: "2 h aguardando",
        icon: "⏳"
      },
      {
        name: "Lucas Pereira",
        value: "R$ 41.200", 
        message: "Proposta detalhada enviada via WhatsApp às 09:15h",
        status: "6 h aguardando",
        icon: "⏳"
      },
      {
        name: "Juliana Rocha",
        value: "R$ 19.800",
        message: "Esclarecimentos sobre implementação enviados às 16:45h",
        status: "1 h aguardando", 
        icon: "⏳"
      }
    ],
    recuperada: [
      {
        name: "Pedro Alves",
        value: "R$ 28.900",
        message: "Obrigado pelo follow-up! Vamos prosseguir com a proposta.",
        status: "Recuperada",
        icon: "✅"
      },
      {
        name: "Sofia Martins",
        value: "R$ 45.000",
        message: "Perfeito! Já aprovei internamente, podemos agendar a implementação.",
        status: "Respondeu em 20 min",
        icon: "✅"
      },
      {
        name: "Ricardo Gomes",
        value: "R$ 16.700", 
        message: "Excelente timing! Acabamos de liberar o orçamento para este projeto.",
        status: "Respondeu em 1h",
        icon: "✅"
      }
    ]
  };

  const renderCard = (opportunity: any, columnType: string) => {
    const getStatusColor = () => {
      switch (columnType) {
        case 'detectada': return 'bg-red-500/20 text-red-400 border-red-500/30';
        case 'execucao': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
        case 'aguardando': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
        case 'recuperada': return 'bg-green-500/20 text-green-400 border-green-500/30';
        default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      }
    };

    const getBorderColor = () => {
      switch (columnType) {
        case 'detectada': return 'border-blue-500/30';
        case 'execucao': return 'border-orange-500/30';
        case 'aguardando': return 'border-purple-500/30';
        case 'recuperada': return 'border-green-500/30';
        default: return 'border-gray-500/30';
      }
    };

    const getIconColor = () => {
      switch (columnType) {
        case 'detectada': return 'text-blue-400';
        case 'execucao': return 'text-orange-400';
        case 'aguardando': return 'text-purple-400';
        case 'recuperada': return 'text-green-400';
        default: return 'text-gray-400';
      }
    };

    return (
      <Card 
        key={opportunity.name}
        className={`bg-white/5 ${getBorderColor()} shadow-md dark:shadow-none hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer w-full`}
      >
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className={`h-4 w-4 ${getIconColor()}`} aria-label="Usuário" />
              <span className="text-white font-semibold text-sm">{opportunity.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-green-400" aria-label="Valor" />
              <span className="text-green-400 font-medium text-sm">{opportunity.value}</span>
            </div>
          </div>
          
          <div className="bg-gray-800/50 rounded-md p-3 border border-gray-700">
            <p className="text-gray-300 text-xs break-words">
              {opportunity.message}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400">
              {columnType === 'detectada' && <MessageSquare className="h-4 w-4" aria-label="Última interação" />}
              {columnType === 'execucao' && <Bot className="h-4 w-4" aria-label="Bot executando" />}
              {columnType === 'aguardando' && <Hourglass className="h-4 w-4" aria-label="Aguardando" />}
              {columnType === 'recuperada' && <CheckCircle2 className="h-4 w-4" aria-label="Recuperada" />}
              <span className="text-xs font-medium">
                {columnType === 'detectada' && 'Última interação'}
                {columnType === 'execucao' && 'Status'}
                {columnType === 'aguardando' && 'Aguardando retorno'}
                {columnType === 'recuperada' && 'Status'}
              </span>
            </div>
            <div className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor()}`}>
              {opportunity.status}
            </div>
          </div>
          
          <div className="flex justify-end">
            <span className="text-xs text-gray-400">{opportunity.icon}</span>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-20 bg-[#0F172A] relative">
      <div className="container max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-4xl font-bold text-white mb-6">
            Kanban de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Follow-up Inteligente</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Acompanhe em tempo real o pipeline completo de recuperação de oportunidades
          </p>
        </div>

        {/* Kanban Board */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-6 lg:items-start gap-8 max-w-7xl mx-auto mb-12">
          
          {/* Coluna 1: Oportunidade Detectada */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="0">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-3 rounded-lg font-semibold text-sm border border-blue-200 mb-4 min-w-full justify-center">
                <MessageSquare className="h-5 w-5 mr-2" aria-label="Mensagem" />
                Oportunidade Detectada (3)
              </div>
            </div>
            
            <div className="space-y-4 min-h-[600px]">
              {kanbanData.detectada.map(opportunity => renderCard(opportunity, 'detectada'))}
            </div>
          </div>

          {/* Coluna 2: Follow-up em Execução */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center">
              <div className="inline-flex items-center bg-orange-50 text-orange-700 px-4 py-3 rounded-lg font-semibold text-sm border border-orange-200 mb-4 min-w-full justify-center">
                <Bot className="h-5 w-5 mr-2" aria-label="Bot" />
                Follow-up em Execução (3)
              </div>
            </div>
            
            <div className="space-y-4 min-h-[600px]">
              {kanbanData.execucao.map(opportunity => renderCard(opportunity, 'execucao'))}
            </div>
          </div>

          {/* Coluna 3: Aguardando Cliente */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-3 rounded-lg font-semibold text-sm mb-4 min-w-full justify-center" style={{backgroundColor: '#5B4BFF20', borderColor: '#5B4BFF40', color: '#5B4BFF', border: '1px solid'}}>
                <Hourglass className="h-5 w-5 mr-2" aria-label="Aguardando" />
                Aguardando Cliente (3)
              </div>
            </div>
            
            <div className="space-y-4 min-h-[600px]">
              {kanbanData.aguardando.map(opportunity => renderCard(opportunity, 'aguardando'))}
            </div>
          </div>

          {/* Coluna 4: Oportunidade Recuperada */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center">
              <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-3 rounded-lg font-semibold text-sm border border-green-500/40 mb-4 min-w-full justify-center">
                <CheckCircle2 className="h-5 w-5 mr-2" aria-label="Sucesso" />
                Oportunidade Recuperada (3)
              </div>
            </div>
            
            <div className="space-y-4 min-h-[600px]">
              {kanbanData.recuperada.map(opportunity => renderCard(opportunity, 'recuperada'))}
            </div>
          </div>
        </div>

        {/* Desktop arrows - SVG único e centralizado */}
        <div className="hidden lg:flex justify-center items-center mb-8 opacity-70 hover:opacity-100 transition-opacity">
          <svg width="800" height="40" viewBox="0 0 800 40" className="text-gray-400">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
              </marker>
            </defs>
            {/* Seta 1 → 2 */}
            <line x1="150" y1="20" x2="250" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
            {/* Seta 2 → 3 */}
            <line x1="350" y1="20" x2="450" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
            {/* Seta 3 → 4 */}
            <line x1="550" y1="20" x2="650" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
          </svg>
        </div>

        {/* Estatísticas do Pipeline */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center text-base font-semibold px-6 py-3 rounded-full border border-green-500/50 bg-green-500/10 text-green-400">
            <CheckCircle2 className="h-5 w-5 mr-2" aria-label="Sucesso" />
            12 oportunidades ativas no pipeline
          </div>
          <div className="text-gray-400 text-sm">
            Taxa de recuperação média: <span className="text-green-400 font-semibold">47%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowupKanbanFlow;
