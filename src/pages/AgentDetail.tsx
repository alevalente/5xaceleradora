
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DiagnosticTest from '../components/DiagnosticTest';
import ImpactCalculator from '../components/ImpactCalculator';
import ResultsTimeline from '../components/ResultsTimeline';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';

const AgentDetail = () => {
  const { agentId } = useParams();
  const navigate = useNavigate();
  const [diagnosticScore, setDiagnosticScore] = useState<number | null>(null);
  const [showImpact, setShowImpact] = useState(false);

  // Data for different agent types with guided discovery structure
  const agents = {
    'cobertura-carteira': {
      title: 'Agente de Cobertura de Carteira',
      heroQuestion: 'Você sabe quantos clientes pararam de comprar no último mês sem você perceber?',
      description: 'Proteja sua carteira de clientes do "Ricardão".',
      painPoint: 'A maioria dos empresários perde clientes silenciosamente, sem perceber que a falta de contato regular está custando vendas.',
      diagnosticQuestions: [
        {
          id: 'q1',
          question: 'Seus vendedores às vezes "esquecem" de entrar em contato com clientes importantes?',
          painPoint: 'Perda de vendas por falta de acompanhamento'
        },
        {
          id: 'q2', 
          question: 'Você já descobriu que um cliente parou de comprar há meses e ninguém notou?',
          painPoint: 'Detecção tardia de problemas com clientes'
        },
        {
          id: 'q3',
          question: 'Alguns clientes reclamam que vocês só aparecem quando querem vender algo?',
          painPoint: 'Relacionamento apenas transacional'
        },
        {
          id: 'q4',
          question: 'Você não tem visibilidade clara de quando foi o último contato com cada cliente?',
          painPoint: 'Falta de controle sobre a frequência de contatos'
        }
      ],
      impactData: {
        costPerIssue: 15000,
        timeWastedPerIssue: '20h/mês',
        clientsAtRisk: 25
      },
      solution: {
        title: 'Como o Agente de Cobertura de Carteira Resolve Isso',
        features: [
          'Monitora automaticamente a frequência de contatos com cada cliente',
          'Alerta quando clientes ficam muito tempo sem contato',
          'Envia mensagens automáticas para manter o relacionamento ativo',
          'Gera relatórios de clientes em risco de evasão',
          'Sugere ações personalizadas para cada situação'
        ]
      }
    },
    'avaliacao-monitoramento': {
      title: 'Agente de Monitoramento de Conversas',
      heroQuestion: 'Quantas vendas sua equipe está perdendo por não seguir o processo ideal?',
      description: 'Análise automática, sem intervenção humana.',
      painPoint: 'Gestores não conseguem acompanhar todas as conversas de vendas e identificar onde estão as falhas que custam negócios.',
      diagnosticQuestions: [
        {
          id: 'q1',
          question: 'Você suspeita que alguns vendedores não seguem o script ou processo de vendas?',
          painPoint: 'Falta de padronização no atendimento'
        },
        {
          id: 'q2',
          question: 'É difícil identificar por que alguns leads não convertem?',
          painPoint: 'Perda de oportunidades sem diagnóstico'
        },
        {
          id: 'q3',
          question: 'Você não consegue dar feedback específico para melhorar as vendas da equipe?',
          painPoint: 'Desenvolvimento limitado da equipe'
        },
        {
          id: 'q4',
          question: 'Suspeita que oportunidades de upsell/cross-sell estão sendo perdidas?',
          painPoint: 'Receita deixada na mesa'
        }
      ],
      impactData: {
        costPerIssue: 25000,
        timeWastedPerIssue: '15h/semana',
        clientsAtRisk: 40
      },
      solution: {
        title: 'Como o Agente de Monitoramento Resolve Isso',
        features: [
          'Analisa automaticamente 100% das conversas de vendas',
          'Identifica quando técnicas de vendas não são aplicadas',
          'Detecta sinais de compra que foram ignorados',
          'Gera relatórios individuais de performance',
          'Sugere ações corretivas específicas para cada vendedor'
        ]
      }
    },
    'reativacao-automatica': {
      title: 'Agente de Reativação de Clientes Inativos',
      heroQuestion: 'Quanto você gastou para conquistar os clientes que pararam de comprar?',
      description: 'Reconquiste quem já custou tanto para conquistar.',
      painPoint: 'Empresas investem pesado em captação mas deixam clientes inativos "abandonados", perdendo receita que já estava na mão.',
      diagnosticQuestions: [
        {
          id: 'q1',
          question: 'Você tem clientes que compravam regularmente e simplesmente pararam?',
          painPoint: 'Perda de receita recorrente'
        },
        {
          id: 'q2',
          question: 'Sua equipe não tem tempo para tentar reativar todos os clientes inativos?',
          painPoint: 'Capacidade limitada de reativação'
        },
        {
          id: 'q3',
          question: 'Quando tentam reativar, não sabem qual é a melhor abordagem para cada cliente?',
          painPoint: 'Abordagem genérica e pouco efetiva'
        },
        {
          id: 'q4',
          question: 'Você não sabe exatamente quando é o melhor momento para tentar reativar?',
          painPoint: 'Timing inadequado para reativação'
        }
      ],
      impactData: {
        costPerIssue: 35000,
        timeWastedPerIssue: '30h/mês',
        clientsAtRisk: 60
      },
      solution: {
        title: 'Como o Agente de Reativação Resolve Isso',
        features: [
          'Identifica automaticamente clientes inativos e segmenta por perfil',
          'Cria campanhas personalizadas baseadas no histórico do cliente',
          'Determina o timing ideal para cada tentativa de reativação',
          'Executa abordagens em múltiplos canais (WhatsApp, email, SMS)',
          'Escala automaticamente para vendedores quando há interesse'
        ]
      }
    },
    'analise-conversa-followup': {
      title: 'Agente de Análise de Conversa e Follow-Up',
      heroQuestion: 'Quantos negócios vocês perderam por esquecer de fazer o follow-up?',
      description: 'Chega de esquecer clientes e atrasar follow-ups.',
      painPoint: 'A maioria das vendas acontece após o 5º contato, mas vendedores costumam desistir no 2º ou 3º follow-up.',
      diagnosticQuestions: [
        {
          id: 'q1',
          question: 'Seus vendedores às vezes esquecem de fazer follow-up de propostas enviadas?',
          painPoint: 'Propostas perdidas por falta de acompanhamento'
        },
        {
          id: 'q2',
          question: 'É difícil saber quando um cliente está realmente interessado ou só "enrolando"?',
          painPoint: 'Tempo perdido com leads frios'
        },
        {
          id: 'q3',
          question: 'Vocês perdem o timing certo para fazer ofertas ou acelerar o fechamento?',
          painPoint: 'Oportunidades perdidas por timing'
        },
        {
          id: 'q4',
          question: 'Clientes reclamam que demoram para responder ou ficam sem retorno?',
          painPoint: 'Experiência ruim do cliente'
        }
      ],
      impactData: {
        costPerIssue: 20000,
        timeWastedPerIssue: '25h/mês',
        clientsAtRisk: 30
      },
      solution: {
        title: 'Como o Agente de Follow-Up Resolve Isso',
        features: [
          'Analisa conversas em tempo real e identifica sinais de interesse',
          'Agenda automaticamente follow-ups baseados no contexto',
          'Lembra vendedores sobre ações pendentes no momento certo',
          'Prioriza leads quentes e identifica quando acelerar o processo',
          'Escala oportunidades importantes para gestores'
        ]
      }
    },
    'cadastro-credito': {
      title: 'Agente de Cadastro e Análise de Crédito',
      heroQuestion: 'Quantos clientes você perde porque seu processo de aprovação é lento e burocrático?',
      description: 'Automatiza até 80% do cadastro e análise.',
      painPoint: 'Processos manuais de cadastro e análise demoram dias, fazendo clientes desistirem ou irem para a concorrência.',
      diagnosticQuestions: [
        {
          id: 'q1',
          question: 'Seu processo de aprovação de cadastro demora mais de 24 horas?',
          painPoint: 'Perda de vendas por demora na aprovação'
        },
        {
          id: 'q2',
          question: 'Clientes reclamam da quantidade de documentos e burocracia?',
          painPoint: 'Experiência frustrante no onboarding'
        },
        {
          id: 'q3',
          question: 'Sua equipe perde muito tempo preenchendo cadastros manualmente?',
          painPoint: 'Baixa produtividade da equipe'
        },
        {
          id: 'q4',
          question: 'Vocês já aprovaram clientes que depois deram calote?',
          painPoint: 'Análise de risco inadequada'
        }
      ],
      impactData: {
        costPerIssue: 18000,
        timeWastedPerIssue: '40h/mês',
        clientsAtRisk: 20
      },
      solution: {
        title: 'Como o Agente de Cadastro Resolve Isso',
        features: [
          'Coleta dados automaticamente via WhatsApp e formulários inteligentes',
          'Consulta automaticamente Receita Federal e bureaus de crédito',
          'Preenche cadastros no sistema interno sem intervenção manual',
          'Aplica algoritmo de scoring baseado em múltiplas variáveis',
          'Aprova automaticamente perfis de baixo risco'
        ]
      }
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

  const handleDiagnosticComplete = (score: number) => {
    setDiagnosticScore(score);
    setShowImpact(true);
    // Scroll to impact section
    setTimeout(() => {
      document.getElementById('impact-section')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  if (!agent) {
    return null;
  }

  const impactData = {
    score: diagnosticScore || 0,
    totalQuestions: agent.diagnosticQuestions.length,
    ...agent.impactData
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-blue-700">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container-wide">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>

          {/* Hero with Provocative Question */}
          <div className="glass-card p-8 mb-12 text-center">
            <div className="mb-6">
              <AlertTriangle className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              {agent.heroQuestion}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {agent.painPoint}
            </p>
            <p className="text-lg text-white/80">
              Faça um teste rápido abaixo para descobrir o impacto real desses problemas no seu negócio.
            </p>
          </div>

          {/* Diagnostic Test */}
          <div className="mb-12">
            <DiagnosticTest
              questions={agent.diagnosticQuestions}
              onComplete={handleDiagnosticComplete}
              title="Diagnóstico Rápido: Identifique os Problemas"
            />
          </div>

          {/* Impact Calculator - Only shown after diagnostic */}
          {showImpact && (
            <div id="impact-section" className="mb-12">
              <ImpactCalculator
                data={impactData}
                agentName={agent.title}
              />
            </div>
          )}

          {/* Solution Section - Only shown after diagnostic */}
          {showImpact && (
            <div className="mb-12">
              <Card>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <Lightbulb className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      {agent.solution.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                      Agora que você viu o impacto desses problemas, veja como nossa solução resolve cada um deles:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {agent.solution.features.map((feature, index) => (
                      <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-gray-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Results Timeline - Only shown after diagnostic */}
          {showImpact && (
            <div className="mb-12">
              <ResultsTimeline agentName={agent.title} />
            </div>
          )}

          {/* Discovery-focused CTA */}
          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-6 text-white">
              {diagnosticScore === null 
                ? "Pronto para descobrir o potencial de otimização do seu negócio?"
                : "Quer saber exatamente quanto pode economizar?"
              }
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              {diagnosticScore === null
                ? "Faça o teste acima para entender o impacto real desses problemas na sua empresa."
                : "Agende uma conversa de 15 minutos para um diagnóstico detalhado e personalizado do seu processo atual."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="button-primary inline-flex items-center justify-center px-8 py-3 text-lg font-semibold"
              >
                {diagnosticScore === null 
                  ? "Fazer Diagnóstico Completo"
                  : "Agendar Diagnóstico Personalizado"
                }
              </a>
              <a 
                href="/#solutions" 
                className="button-secondary inline-flex items-center justify-center px-8 py-3 text-lg font-semibold"
              >
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
