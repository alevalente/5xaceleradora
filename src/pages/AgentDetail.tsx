
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
      description: 'Proteja sua carteira de clientes do "Ricardão".',
      detailedDescription: 'Nosso Agente de Cobertura de Carteira automatiza o monitoramento de contatos com clientes ativos, garantindo que nenhum cliente seja esquecido. O sistema sinaliza quando clientes ficam muito tempo sem contato, prevenindo a perda de oportunidades de venda e reduzindo o risco de evasão de clientes para a concorrência.',
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
      title: 'Agente de Monitoramento de Conversas',
      description: 'Análise automática, sem intervenção humana.',
      detailedDescription: 'O Agente de Monitoramento de Conversas analisa automaticamente todas as interações entre vendedores e clientes, identificando pontos de melhoria, oportunidades perdidas e padrões de sucesso. Nossa solução oferece insights valiosos sobre a qualidade do atendimento e performance da equipe comercial.',
      benefits: [
        'Diagnóstico objetivo do desempenho individual de cada vendedor',
        'Identificação de oportunidades de upsell e cross-sell perdidas',
        'Base sólida para treinamentos e ações corretivas personalizadas',
        'Melhoria contínua no processo de vendas',
        'Aumento na taxa de conversão através de insights acionáveis'
      ],
      features: [
        'Análise qualitativa das conversas em tempo real',
        'Detecção automática de sinais de compra e objeções',
        'Verificação de uso de técnicas de vendas durante o atendimento',
        'Relatórios detalhados com pontos fortes e oportunidades',
        'Alertas para situações que requerem intervenção imediata'
      ]
    },
    'reativacao-automatica': {
      title: 'Agente de Reativação de Clientes Inativos',
      description: 'Reconquiste quem já custou tanto para conquistar.',
      detailedDescription: 'O Agente de Reativação Automática implementa estratégias inteligentes para reconquistar clientes que deixaram de comprar. Através de campanhas personalizadas e análise de receptividade, nossa solução identifica o momento ideal e a abordagem mais eficaz para cada cliente inativo.',
      benefits: [
        'Recuperação de receita sem sobrecarregar a equipe comercial',
        'Abordagem em larga escala de clientes simultaneamente',
        'Personalização baseada no histórico e perfil do cliente',
        'Métricas claras de taxa de reativação e ROI',
        'Direcionamento automático de leads qualificados para vendedores'
      ],
      features: [
        'Campanhas segmentadas por tempo de inatividade e perfil',
        'Análise de receptividade via IA para timing otimizado',
        'Múltiplos canais de contato (WhatsApp, email, SMS)',
        'Escalação automática para vendedores quando há interesse',
        'Relatórios detalhados de performance e conversão'
      ]
    },
    'analise-conversa-followup': {
      title: 'Agente de Análise de Conversa e Follow-Up',
      description: 'Chega de esquecer clientes e atrasar follow-ups.',
      detailedDescription: 'O Agente de Análise de Conversa e Follow-Up monitora automaticamente todas as conversas de vendas, identifica quando follow-ups são necessários e executa ações automáticas para manter o momentum comercial. Nossa solução garante que nenhuma oportunidade seja perdida por falta de acompanhamento.',
      benefits: [
        'Eliminação de follow-ups esquecidos ou atrasados',
        'Aumento significativo na taxa de conversão',
        'Liberação da equipe para focar em atividades estratégicas',
        'Padronização do processo de acompanhamento',
        'Melhoria na experiência do cliente com respostas ágeis'
      ],
      features: [
        'Análise em tempo real de conversas no WhatsApp e outros canais',
        'Identificação automática de sinais de interesse e próximos passos',
        'Agendamento inteligente de follow-ups baseado no contexto',
        'Lembretes automáticos para vendedores sobre ações pendentes',
        'Escalação de oportunidades quentes para gestores'
      ]
    },
    'cadastro-credito': {
      title: 'Agente de Cadastro e Análise de Crédito',
      description: 'Automatiza até 80% do cadastro e análise.',
      detailedDescription: 'O Agente de Cadastro e Análise de Crédito revoluciona o processo de onboarding de clientes, automatizando a coleta de dados, consultas a órgãos oficiais e análise de risco. Nossa solução reduz drasticamente o tempo de aprovação e elimina a burocracia desnecessária.',
      benefits: [
        'Redução de até 80% no tempo de aprovação de cadastros',
        'Diminuição significativa de erros manuais',
        'Otimização da equipe de análise de crédito',
        'Melhoria na experiência do cliente durante onboarding',
        'Decisões de crédito mais assertivas e baseadas em dados'
      ],
      features: [
        'Coleta automática de dados via WhatsApp e formulários inteligentes',
        'Consulta automática à Receita Federal e bureaus de crédito',
        'Preenchimento automático de cadastros no sistema interno',
        'Algoritmo de scoring baseado em múltiplas variáveis',
        'Aprovações automáticas para perfis de baixo risco'
      ]
    }
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
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0 mt-0.5" />
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
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Pronto para transformar seu processo comercial?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Nosso {agent.title} pode ser implementado em aproximadamente 15 dias úteis, 
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
