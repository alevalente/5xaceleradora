import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, MessageSquare, Users, PieChart, Zap, Repeat, BarChart } from 'lucide-react';

const PlatformDetail = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Centralização de Conversas',
      description: 'WhatsApp, Facebook, Instagram, Webchat, tudo em um único painel para facilitar o gerenciamento.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Distribuição Automática',
      description: 'Mensagens roteadas entre setores e equipes conforme regras personalizadas de atendimento.'
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: 'Acompanhamento em Tempo Real',
      description: 'Controle de SLA e monitoramento da qualidade de atendimento para garantir excelência.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Integrações Avançadas',
      description: 'Conexão perfeita com ERPs, automação financeira e recursos de inteligência artificial.'
    },
    {
      icon: <Repeat className="h-8 w-8" />,
      title: 'Múltiplos Números',
      description: 'Suporte a números oficiais e não-oficiais de WhatsApp para maior flexibilidade.'
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'Dashboards Analíticos',
      description: 'Relatórios detalhados de desempenho e análise de dados para tomada de decisões.'
    }
  ];

  const benefits = [
    'Aumento significativo na eficiência e controle dos atendimentos',
    'Redução drástica de oportunidades perdidas por falhas de comunicação',
    'Escalabilidade para adicionar mais canais e usuários conforme o crescimento',
    'Histórico completo de todas as interações com clientes',
    'Base para implementação dos Agentes de IA 5x',
    'Melhor experiência do cliente com respostas mais rápidas e consistentes'
  ];

  return (
    <div className="min-h-screen flex flex-col dark-gradient-bg">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container-wide">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="mb-6 text-white border-white/20 hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>

          <div className="glass-card p-8 mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">Plataforma de Atendimento</h1>
            <p className="text-xl text-white/80 mb-8">
              Nossa Plataforma de Atendimento proprietária substitui o WhatsApp Web tradicional, 
              permitindo centralizar e registrar todas as conversas dos vendedores com clientes. 
              Ela garante que todo o time comercial trabalhe em um ambiente único, com históricos 
              completos de atendimento e é a base para a implementação dos nossos Agentes de IA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-8 flex flex-col items-center text-center"
              >
                <div className="bg-blue-900/30 p-4 rounded-full mb-6 border border-blue-800/30">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gradient text-center">Benefícios da Nossa Plataforma</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Transforme seu Atendimento ao Cliente</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Nossa Plataforma de Atendimento pode ser implementada rapidamente e integrada 
              com seus sistemas existentes, garantindo uma transição suave e resultados imediatos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="button-primary">
                Solicitar Demonstração
              </a>
              <a href="#solutions" className="button-secondary">
                Ver Agentes de IA
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlatformDetail;
