
export interface Opportunity {
  name: string;
  value: string;
  message: string;
  status: string;
  icon: string;
}

export interface KanbanData {
  solicitacao: Opportunity[];
  analise: Opportunity[];
  aprovacao: Opportunity[];
  liberacao: Opportunity[];
}

export const kanbanData: KanbanData = {
  solicitacao: [
    {
      name: "Distribuidora Santos",
      value: "R$ 50.000",
      message: "Solicitação de aumento de limite para expansão de estoque",
      status: "Recebida há 2h",
      icon: "📋"
    },
    {
      name: "Atacado Silva", 
      value: "R$ 35.000",
      message: "Primeira análise de crédito para novo cliente",
      status: "Recebida há 4h",
      icon: "📋"
    },
    {
      name: "Comércio Lima",
      value: "R$ 15.000",
      message: "Renovação de limite com histórico positivo",
      status: "Recebida há 1h",
      icon: "📋"
    }
  ],
  analise: [
    {
      name: "Mercado Central",
      value: "R$ 25.000",
      message: "Analisando CPF/CNPJ, Serasa, SPC e referências bancárias",
      status: "Em análise",
      icon: "🔍"
    },
    {
      name: "Distribuidora Norte",
      value: "R$ 80.000",
      message: "Validando documentação e capacidade de pagamento",
      status: "Aguardando docs",
      icon: "🔍"
    },
    {
      name: "Atacado Rocha", 
      value: "R$ 12.000",
      message: "Análise de score e histórico comercial em andamento",
      status: "Processando",
      icon: "🔍"
    }
  ],
  aprovacao: [
    {
      name: "Comércio Oliveira",
      value: "R$ 20.000",
      message: "Análise completa - aguardando aprovação gerencial",
      status: "Pré-aprovado",
      icon: "✅"
    },
    {
      name: "Distribuidora Sul",
      value: "R$ 45.000", 
      message: "Score aprovado - validando condições comerciais",
      status: "Em aprovação",
      icon: "✅"
    },
    {
      name: "Atacado Ferreira",
      value: "R$ 18.000",
      message: "Documentação validada - definindo prazo de pagamento",
      status: "Finalizando",
      icon: "✅"
    }
  ],
  liberacao: [
    {
      name: "Mercado São Paulo",
      value: "R$ 30.000",
      message: "Limite aprovado e liberado - cliente notificado",
      status: "Liberado",
      icon: "🎉"
    },
    {
      name: "Distribuidora Leste",
      value: "R$ 60.000",
      message: "Crédito aprovado em 4 horas - processo concluído",
      status: "Concluído",
      icon: "🎉"
    },
    {
      name: "Atacado Pereira",
      value: "R$ 22.000", 
      message: "Limite liberado - primeira compra já processada",
      status: "Ativo",
      icon: "🎉"
    }
  ]
};
