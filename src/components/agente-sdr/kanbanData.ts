
export interface Opportunity {
  name: string;
  value: string;
  message: string;
  status: string;
  icon: string;
}

export interface KanbanData {
  lead: Opportunity[];
  qualificacao: Opportunity[];
  agendamento: Opportunity[];
  conversao: Opportunity[];
}

export const kanbanData: KanbanData = {
  lead: [
    {
      name: "Ana Silva",
      value: "Lead Inbound",
      message: "Interessada em soluções de automação para sua distribuidora",
      status: "Recebido há 1h",
      icon: "📞"
    },
    {
      name: "Roberto Santos", 
      value: "Lead WhatsApp",
      message: "Perguntou sobre preços via WhatsApp Business",
      status: "Recebido há 3h",
      icon: "📞"
    },
    {
      name: "Carla Mendes",
      value: "Lead Site",
      message: "Preencheu formulário pedindo demonstração",
      status: "Recebido há 30min",
      icon: "📞"
    }
  ],
  qualificacao: [
    {
      name: "Paulo Lima",
      value: "Atacadista - SP",
      message: "Qualificado: 200 funcionários, faturamento R$ 2M/mês",
      status: "Em qualificação",
      icon: "🎯"
    },
    {
      name: "Marina Costa",
      value: "Distribuidora - RJ",
      message: "Perfil ideal: B2B, 50+ funcionários, interesse confirmado",
      status: "Qualificado",
      icon: "🎯"
    },
    {
      name: "Carlos Rocha", 
      value: "Varejo - MG",
      message: "Validando orçamento e autoridade de decisão",
      status: "Aguardando info",
      icon: "🎯"
    }
  ],
  agendamento: [
    {
      name: "Fernanda Oliveira",
      value: "Demo Agendada",
      message: "Reunião marcada para hoje às 15h via Google Meet",
      status: "Hoje - 15h",
      icon: "📅"
    },
    {
      name: "Lucas Pereira",
      value: "Apresentação", 
      message: "Agendado apresentação executiva para diretoria",
      status: "Amanhã - 10h",
      icon: "📅"
    },
    {
      name: "Juliana Santos",
      value: "Follow-up",
      message: "Reunião de esclarecimentos técnicos agendada",
      status: "Sexta - 14h",
      icon: "📅"
    }
  ],
  conversao: [
    {
      name: "Pedro Alves",
      value: "R$ 28.900",
      message: "Proposta aprovada - assinatura de contrato realizada",
      status: "Convertido",
      icon: "🎉"
    },
    {
      name: "Sofia Martins",
      value: "R$ 45.000",
      message: "Fechamento após 3 reuniões - implementação iniciada",
      status: "Cliente ativo",
      icon: "🎉"
    },
    {
      name: "Ricardo Gomes",
      value: "R$ 16.700", 
      message: "Conversão rápida - cliente referência no setor",
      status: "Sucesso",
      icon: "🎉"
    }
  ]
};
