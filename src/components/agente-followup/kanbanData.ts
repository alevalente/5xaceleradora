
export interface Opportunity {
  name: string;
  value: string;
  message: string;
  status: string;
  icon: string;
}

export interface KanbanData {
  detectada: Opportunity[];
  execucao: Opportunity[];
  aguardando: Opportunity[];
  recuperada: Opportunity[];
}

export const kanbanData: KanbanData = {
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
