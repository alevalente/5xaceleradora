
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, Target, BookOpen, Users, Award, Sparkles } from 'lucide-react';

const ConsultingDetail = () => {
  const navigate = useNavigate();
  
  const consultingServices = [
    {
      title: 'Consultoria "Máquina de Vendas 5x"',
      icon: <Target className="h-10 w-10 text-white" />,
      description: 'Construa uma máquina comercial previsível, híbrida (presencial + inside sales), com foco em prospecção outbound e na estruturação de um processo de vendas robusto.',
      duration: '90 a 120 dias',
      deliverables: [
        'Diagnóstico Comercial Profundo',
        'Planejamento e Inteligência Comercial',
        'Implantação Prática com configuração de CRM e scripts',
        'Melhoria Contínua e ajustes de processo',
        'Playbook comercial detalhado e documentado',
        'Time comercial estruturado e capacitado'
      ]
    },
    {
      title: 'Mentoria Comercial Estratégica',
      icon: <BookOpen className="h-10 w-10 text-white" />,
      description: 'Acompanhamento de perto para líderes e gestores comerciais, auxiliando em tomadas de decisão estratégicas e ajustes rápidos no dia a dia.',
      duration: 'Recorrente ou pacotes de 3 a 6 meses',
      deliverables: [
        'Reuniões frequentes de acompanhamento',
        'Validação de ideias e planos de ação',
        'Orientação para soluções de problemas práticos',
        'Visão externa especializada',
        'Ajustes contínuos no processo comercial',
        'Velocidade na implementação de melhorias'
      ]
    },
    {
      title: 'Workshops e Treinamentos Presenciais',
      icon: <Users className="h-10 w-10 text-white" />,
      description: 'Capacitação intensiva para vendedores, gestores comerciais e equipes correlatas, com aplicação imediata de técnicas e metodologias.',
      duration: '1 a 2 dias (workshops) ou formações mais intensivas',
      deliverables: [
        'Prospecção outbound (técnicas e ferramentas)',
        'Vendas híbridas (presencial + inside sales)',
        'Negociação e fechamento estratégico',
        'Gestão Comercial (KPIs, processos, rotinas)',
        'Estruturação de times comerciais',
        'Aprendizado intensivo e prático'
      ]
    },
    {
      title: 'Implementação Estratégica de IA em Vendas',
      icon: <Sparkles className="h-10 w-10 text-white" />,
      description: 'Auxílio para empresas incorporarem IA em diversos pontos do processo comercial, desde a qualificação de leads até follow-up automatizado e análise de dados avançada.',
      duration: 'Personalizada conforme projeto',
      deliverables: [
        'Mapeamento das rotinas atuais e identificação de gargalos',
        'Desenho de soluções de automação com IA',
        'Integração de CRM e sistemas de análise',
        'Treinamento da equipe para uso das novas soluções',
        'Escalabilidade no atendimento e acompanhamento',
        'Decisões mais rápidas baseadas em dados'
      ]
    }
  ];

  const benefits = [
    'Aumento significativo de faturamento e produtividade',
    'Visão estratégica mais clara do mercado e clientes',
    'Melhoria contínua dos processos comerciais',
    'Evolução cultural para uso de IA e automação',
    'Processos comerciais padronizados e escaláveis',
    'Equipe mais motivada e alinhada aos objetivos'
  ];

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">Consultoria e Treinamentos</h1>
            <p className="text-xl text-white/80 mb-8">
              Além da tecnologia, oferecemos serviços de consultoria e treinamentos para transformar 
              sua equipe comercial. Nossa metodologia comprovada ajuda empresas a estabelecerem 
              processos de vendas previsíveis e escaláveis, combinando estratégia, treinamento e 
              implementação prática.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {consultingServices.map((service, index) => (
              <div key={index} className="glass-card p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-900/30 p-4 rounded-full mr-4 border border-blue-800/30">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/80 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-blue-400 font-medium">Duração:</span>
                  <span className="text-white/80 ml-2">{service.duration}</span>
                </div>
                <h4 className="text-white font-medium mb-3">O que incluímos:</h4>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-white mr-2 flex-shrink-0 mt-1" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 mb-12">
            <div className="flex items-center justify-center mb-8">
              <Award className="h-12 w-12 text-white mr-4" />
              <h2 className="text-2xl font-bold text-gradient">Benefícios dos Nossos Serviços</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Eleve sua Equipe Comercial ao Próximo Nível</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Combinando nossa consultoria especializada com nossa tecnologia de IA, 
              sua empresa pode atingir um crescimento exponencial nas vendas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="button-primary">
                Solicitar Proposta
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

export default ConsultingDetail;
