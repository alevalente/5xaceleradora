
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const AgentDetail = () => {
  const { agentId } = useParams();
  const navigate = useNavigate();
  
  // Data for different agent types
  const agents = {
    'cobertura-carteira': {
      title: 'Agente de Cobertura de Carteira',
      description: 'Garante contato regular com todos os clientes ativos, evitando perda de oportunidades e sinalizando riscos de evasão.',
      detailedDescription: 'Nosso Agente de Cobertura de Carteira automatiza o monitoramento de contatos com clientes ativos, garantindo que nenhum cliente seja esquecido. O sistema sinaliza quando clientes ficam muito tempo sem contato, prevenindo a perda de oportunidades de venda e reduzindo o risco de evasão de clientes.',
      benefits: [
        'Redução significativa na perda de clientes por falta de contato',
        'Dashboard completo de monitoramento da frequência de contatos',
        'Alertas automáticos para clientes em risco de evasão',
        'Aumento da retenção e satisfação dos clientes',
        'Contatos regulares e consistentes com toda a base'
      ],
      features: [
        'Dashboards de acompanhamento de frequência e qualidade dos contatos',
        'Alertas automáticos para clientes sem contato recente',
        'Envio automático de mensagens via WhatsApp para clientes negligenciados',
        'Análise de padrões de contato e recomendações personalizadas',
        'Integração com CRM e plataformas de atendimento'
      ]
    },
    'avaliacao-monitoramento': {
      title: 'Agente de Avaliação e Monitoramento',
      description: 'Mensura o desempenho dos vendedores e emite relatórios com indicadores de melhoria e pontos fortes.',
      detailedDescription: 'O Agente de Avaliação e Monitoramento analisa o desempenho dos vendedores durante as interações com clientes, verificando a qualidade da abordagem, técnicas de vendas utilizadas e pontos de melhoria. Através de análises detalhadas, nosso agente fornece insights valiosos para aprimorar as estratégias de vendas.',
      benefits: [
        'Diagnóstico objetivo do desempenho individual de cada vendedor',
        'Base sólida para treinamentos e ações corretivas personalizadas',
        'Identificação de padrões de sucesso que podem ser replicados',
        'Melhoria contínua no processo de vendas',
        'Aumento na taxa de conversão de leads'
      ],
      features: [
        'Análise qualitativa das conversas e interações com clientes',
        'Verificação de uso de upsell/cross-sell durante o atendimento',
        'Relatórios individuais com pontos fortes e oportunidades de melhoria',
        'Métricas comparativas de desempenho entre vendedores',
        'Sugestões automatizadas para aprimoramento de técnicas de venda'
      ]
    },
    'reativacao-automatica': {
      title: 'Agente de Reativação Automática',
      description: 'Resgata clientes inativos com campanhas específicas de reativação, identificando aqueles receptivos ao retorno.',
      detailedDescription: 'O Agente de Reativação Automática realiza ações estratégicas para reconquistar clientes que deixaram de comprar. Através de campanhas personalizadas via WhatsApp, o agente identifica quais clientes inativos estão receptivos a retomar o relacionamento comercial, direcionando leads qualificados para sua equipe de vendas.',
      benefits: [
        'Recuperação de receita com clientes inativos sem sobrecarregar a equipe',
        'Abordagem em larga escala de clientes simultaneamente',
        'Métricas claras de taxa de reativação e ROI da campanha',
        'Direcionamento automático apenas de leads qualificados para vendedores',
        'Personalização das ofertas baseada no histórico do cliente'
      ],
      features: [
        'Campanhas específicas para diferentes perfis de clientes inativos',
        'Análise de receptividade via IA para identificar potencial de reativação',
        'Direcionamento automático para vendedores quando há interesse',
        'Relatórios detalhados de desempenho das campanhas',
        'Integração com CRM para atualização da jornada do cliente'
      ]
    },
    'gestao-vendas': {
      title: 'Agente de Gestão de Vendas',
      description: 'Automatiza o fluxo de pedidos e cotações, reduzindo tarefas manuais dos vendedores e agilizando o processo comercial.',
      detailedDescription: 'O Agente de Gestão de Vendas automatiza todo o fluxo operacional de pedidos e cotações, permitindo que seus vendedores dediquem mais tempo ao relacionamento com clientes e menos tempo em tarefas administrativas. Nossa solução extrai informações de pedidos diretamente das conversas e as integra com seus sistemas internos.',
      benefits: [
        'Redução significativa do tempo gasto com tarefas administrativas',
        'Aumento da precisão no processamento de pedidos e cotações',
        'Maior transparência no acompanhamento do funil de vendas',
        'Vendedores mais focados em relacionamento e negociação',
        'Ciclo de vendas mais ágil e eficiente'
      ],
      features: [
        'Extração automática de informações de pedidos via WhatsApp',
        'Geração de cotações diretamente no ERP ou CRM',
        'Painel Kanban para visualização das etapas do funil',
        'Dashboards de performance comercial em tempo real',
        'Integrações com sistemas internos para fluxo contínuo'
      ]
    },
    'cadastro-credito': {
      title: 'Agente de Cadastro e Análise de Crédito',
      description: 'Agiliza cadastros e análises de crédito, consultando fontes oficiais automaticamente e minimizando a burocracia.',
      detailedDescription: 'O Agente de Cadastro e Análise de Crédito simplifica e agiliza o processo de onboarding de novos clientes. Através da automação da coleta de dados, consultas a fontes oficiais e análise de crédito, reduzimos drasticamente o tempo de aprovação e a burocracia envolvida no processo comercial.',
      benefits: [
        'Redução significativa no tempo de aprovação de cadastros',
        'Otimização da equipe de análise de crédito',
        'Maior confiabilidade nos dados coletados',
        'Aceleração do ciclo de vendas',
        'Melhoria na experiência do cliente durante o onboarding'
      ],
      features: [
        'Captura de dados básicos via WhatsApp ou formulários',
        'Consulta automática a fontes oficiais (Receita Federal, bureaus de crédito)',
        'Preenchimento automático de cadastros no sistema interno',
        'Cálculo de score de crédito baseado em múltiplas variáveis',
        'Aprovações automáticas para casos de baixo risco'
      ]
    },
    'disparador-promocoes': {
      title: 'Disparador de Promoções via WhatsApp',
      description: 'Automatiza o envio de ofertas e promoções segmentadas, mantendo relacionamento pessoal de forma escalável.',
      detailedDescription: 'O Disparador de Promoções via WhatsApp permite a criação e envio de campanhas promocionais segmentadas usando os números dos próprios vendedores. Esta solução mantém o caráter pessoal do relacionamento, porém de forma automatizada e escalável, aumentando a efetividade das promoções.',
      benefits: [
        'Aumento na taxa de conversão de promoções',
        'Redução do esforço manual da equipe comercial',
        'Maior consistência e frequência nas campanhas',
        'Manutenção do relacionamento pessoal com o cliente',
        'Escalabilidade no envio de promoções personalizadas'
      ],
      features: [
        'Segmentação avançada baseada no histórico e perfil do cliente',
        'Envio de mensagens personalizadas por segmento',
        'Monitoramento automático das respostas',
        'Encaminhamento de leads interessados para vendedores',
        'Uso do número do próprio vendedor, mantendo o relacionamento'
      ]
    },
  };

  // Find the agent based on the URL parameter
  const agent = agents[agentId as keyof typeof agents];

  // Redirect to 404 if agent doesn't exist
  useEffect(() => {
    if (!agent && agentId) {
      navigate('/not-found');
    }
  }, [agent, agentId, navigate]);

  if (!agent) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col dark-gradient-bg">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container-wide">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>

          <div className="glass-card p-8 mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">{agent.title}</h1>
            <p className="text-xl text-white/80 mb-8">{agent.detailedDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Benefícios</h2>
              <ul className="space-y-4">
                {agent.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Funcionalidades</h2>
              <ul className="space-y-4">
                {agent.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Pronto para transformar seu processo comercial?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Nosso Agente de {agent.title.replace('Agente de ', '')} pode ser implementado em aproximadamente 15 dias úteis, 
              com resultados mensuráveis em poucas semanas após a implantação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="button-primary">
                Solicitar Demonstração
              </a>
              <a href="/#solutions" className="button-secondary">
                Ver Outras Soluções
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgentDetail;
