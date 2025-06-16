
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, BarChart3, AlertTriangle, TrendingUp, Calculator, Shield, CheckCircle, MessageCircle, Monitor, Smartphone, Zap, Bell, Target, Eye, PlayCircle, ArrowRight, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { createObserver, getDelayClass } from '../utils/animations';
import { cn } from '@/lib/utils';

const IagoConversas = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [attendants, setAttendants] = useState('');
  const [estimatedSavings, setEstimatedSavings] = useState(0);

  useEffect(() => {
    const observer = createObserver('animate-on-scroll', 0.1);
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // Cálculo ROI simples
  useEffect(() => {
    if (monthlyRevenue && attendants) {
      const revenue = parseFloat(monthlyRevenue.replace(/\D/g, ''));
      const attendantCount = parseInt(attendants);
      
      if (revenue > 0 && attendantCount > 0) {
        // Fórmula simplificada: economia baseada em eficiência de atendimento
        const monthlySavings = (revenue * 0.08) + (attendantCount * 2000);
        const annualSavings = monthlySavings * 12;
        setEstimatedSavings(annualSavings);
      }
    }
  }, [monthlyRevenue, attendants]);

  const painPoints = [
    {
      title: "Atrasos de minutos viram milhares de reais perdidos.",
      description: "Cada segundo conta quando um lead está quente. Perder tempo alternando entre apps significa perder vendas para a concorrência.",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      title: "Cada canal conta só parte da história; decidir fica no escuro.",
      description: "Sem visão unificada do cliente, sua equipe toma decisões baseadas em informações incompletas.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "5 apps abertos ≠ produtividade; é caos disfarçado de trabalho.",
      description: "Sua equipe gasta mais tempo navegando entre ferramentas do que realmente vendendo.",
      icon: <BarChart3 className="h-8 w-8" />,
    },
    {
      title: "Sem métricas, você gerencia pelo sentimento – e erra.",
      description: "Decisões comerciais baseadas em intuição, não em dados reais, levam a oportunidades perdidas.",
      icon: <AlertTriangle className="h-8 w-8" />,
    }
  ];

  const features = [
    {
      step: "01",
      title: "Centralize todas as conversas em um só lugar",
      description: "WhatsApp, Instagram, Facebook, chat do site e e-mail integrados em uma única interface.",
      icon: <MessageCircle className="h-12 w-12" />,
      benefit: "Elimina a necessidade de alternar entre 5+ aplicativos diferentes"
    },
    {
      step: "02", 
      title: "Visualize o histórico completo do cliente",
      description: "Acesso instantâneo a todas as interações anteriores, independente do canal usado.",
      icon: <Eye className="h-12 w-12" />,
      benefit: "Atendimento personalizado e consistente em qualquer momento"
    },
    {
      step: "03",
      title: "Monitore sua equipe em tempo real",
      description: "Dashboard com métricas de atendimento, tempo de resposta e performance individual.",
      icon: <Monitor className="h-12 w-12" />,
      benefit: "Gestão baseada em dados, não em suposições"
    },
    {
      step: "04",
      title: "Distribua conversas automaticamente",
      description: "Sistema inteligente que direciona cada lead para o vendedor certo, na hora certa.",
      icon: <Target className="h-12 w-12" />,
      benefit: "Reduz tempo de espera e aumenta taxa de conversão"
    },
    {
      step: "05",
      title: "Acione alertas inteligentes",
      description: "Notificações automáticas para leads quentes, follow-ups pendentes e oportunidades.",
      icon: <Bell className="h-12 w-12" />,
      benefit: "Zero oportunidades perdidas por esquecimento"
    },
    {
      step: "06",
      title: "Conecte com seus sistemas existentes", 
      description: "Integração nativa com CRMs, ERPs e outras ferramentas que você já usa.",
      icon: <Zap className="h-12 w-12" />,
      benefit: "Implementação sem quebrar processos atuais"
    },
    {
      step: "07",
      title: "Ative Agentes de IA especializados",
      description: "Suite completa de agentes que automatizam tarefas específicas do seu processo comercial.",
      icon: <Star className="h-12 w-12" />,
      benefit: "Automação inteligente que potencializa sua equipe"
    },
    {
      step: "08",
      title: "Meça resultados com precisão",
      description: "Relatórios detalhados de performance, ROI e métricas de conversão por canal.",
      icon: <BarChart3 className="h-12 w-12" />,
      benefit: "Visibilidade total para otimização contínua"
    },
    {
      step: "09",
      title: "Escale sem aumentar headcount",
      description: "Atenda mais clientes com a mesma equipe através de automação e eficiência operacional.",
      icon: <TrendingUp className="h-12 w-12" />,
      benefit: "Crescimento sustentável com margem preservada"
    }
  ];

  const demoFeatures = [
    {
      title: "Interface Unificada em Ação",
      description: "Veja como todas as conversas aparecem em um só painel, com contexto completo do cliente.",
      mockup: "💬 WhatsApp + 📱 Instagram + 💻 Site = 🎯 Uma única tela"
    },
    {
      title: "Distribuição Automática de Leads",
      description: "Observe um lead chegando e sendo direcionado automaticamente para o vendedor especializado.",
      mockup: "🆕 Lead → ⚙️ Regras → 👨‍💼 Vendedor Certo → ⚡ 2 min"
    },
    {
      title: "Dashboard de Performance ao Vivo",
      description: "Métricas em tempo real que mostram exatamente o que está acontecendo no seu atendimento.",
      mockup: "📊 TMA: 3:24min | 🎯 Taxa Conversão: 18% | 🔥 Leads Ativos: 47"
    },
    {
      title: "Agentes IA Trabalhando 24/7",
      description: "Veja agentes inteligentes fazendo follow-up, qualificando leads e registrando informações automaticamente.",
      mockup: "🤖 Cobertura de Carteira → ✅ 340 clientes contactados esta semana"
    }
  ];

  const agentIntegrations = [
    {
      name: "Cobertura de Carteira",
      description: "Varredura automática e recorrente de toda sua base de clientes",
      link: "/agente-cobertura-carteira"
    },
    {
      name: "Avaliação e Monitoramento", 
      description: "Análise contínua da qualidade das conversas comerciais",
      link: "/agent/avaliacao-monitoramento"
    },
    {
      name: "Reativação Automática",
      description: "Campanhas inteligentes para recuperar clientes inativos", 
      link: "/agent/reativacao-automatica"
    },
    {
      name: "Gestão de Vendas",
      description: "Automação completa do processo comercial integrado",
      link: "/agent/gestao-vendas"
    }
  ];

  const impactMetrics = [
    {
      percentage: "58%",
      description: "de redução no Tempo Médio de Atendimento (TMA) após 30 dias de uso",
      icon: <Clock className="h-12 w-12" />
    },
    {
      percentage: "2,4×",
      description: "mais oportunidades registradas no CRM quando o cadastro é automático",
      icon: <TrendingUp className="h-12 w-12" />
    },
    {
      percentage: "+34%",
      description: "de taxa de conversão em leads respondidos em < 2 min",
      icon: <CheckCircle className="h-12 w-12" />
    }
  ];

  const partners = [
    { name: "OpenAI", logo: "🤖" },
    { name: "WhatsApp Business", logo: "💬" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Zapier", logo: "⚡" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <span className="text-gray-900">IAgo Conversas</span>
            </div>
          </div>
        </div>

        {/* Seção 1 - Título Inicial Provocativo */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Link 
                  to="/#solutions" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium mb-8"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar para Soluções
                </Link>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Pare de perder vendas por falta de resposta: centralize tudo no IAgo Conversas.
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Centralize WhatsApp, Instagram, Facebook, e-mail e chat do site em uma única plataforma. 
                Sua equipe atende mais rápido, você vende mais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Solicitar Demonstração Gratuita
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Ver Funcionalidades
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 2 - Identificação Clara e Visual da Dor/Desafio */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-5xl mx-auto">
              
              {/* Texto-âncora */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Gerenciar múltiplos canais de atendimento não deveria ser tão confuso.
                </h2>
                
                <div className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  <p className="mb-4">
                    Hoje, gestores comerciais gastam horas saltando entre WhatsApp Web, Instagram, 
                    chat do site, e-mails e planilhas só para descobrir que um lead esfriou ou uma 
                    venda escapou para o concorrente.
                  </p>
                  <p>
                    A sobrecarga de abas, falta de histórico unificado e ausência de métricas em 
                    tempo real transformam o simples ato de responder clientes em um labirinto sem fim.
                  </p>
                </div>
              </div>

              {/* Grid de Dores Específicas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {painPoints.map((pain, index) => (
                  <Card 
                    key={index}
                    className="p-8 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300"
                    hoverEffect={true}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start mb-4">
                        <div className="p-3 bg-red-50 text-red-600 rounded-lg mr-4 flex-shrink-0">
                          {pain.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                            {pain.title}
                          </h3>
                          <p className="text-gray-600">
                            {pain.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to Action de Transição */}
              <div className="text-center mt-16 p-8 bg-blue-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  E se existisse uma forma simples de resolver tudo isso?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  O IAgo Conversas elimina cada uma dessas dores com uma solução integrada e intuitiva.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Descobrir Como Funciona
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* Seção 3 - Funcionalidades & Benefícios */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Como IAgo Conversas transforma seu atendimento em 9 passos
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Cada funcionalidade foi pensada para resolver problemas reais do dia a dia comercial, 
                  seguindo uma lógica de implementação progressiva e resultados imediatos.
                </p>
              </div>

              <div className="space-y-12">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "flex flex-col lg:flex-row items-center gap-8",
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    )}
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded-lg mr-4">
                          {feature.step}
                        </div>
                        <div className="text-blue-600">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-green-800 font-medium">{feature.benefit}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 lg:max-w-lg">
                      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                        <div className="text-center">
                          <div className="text-blue-600 mb-4 flex justify-center">
                            {feature.icon}
                          </div>
                          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-sm">
                              Preview: {feature.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Seção de Agentes IA Integrados */}
              <div className="mt-20 p-8 bg-blue-900 rounded-2xl text-white">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    + Agentes de IA que trabalham 24/7 na sua plataforma
                  </h3>
                  <p className="text-blue-100 text-lg">
                    IAgo Conversas é mais que uma plataforma de atendimento. É a base para uma suite 
                    completa de agentes inteligentes que automatizam seu processo comercial.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {agentIntegrations.map((agent, index) => (
                    <Card key={index} className="bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold text-white mb-2">{agent.name}</h4>
                        <p className="text-blue-100 mb-4">{agent.description}</p>
                        <Link 
                          to={agent.link}
                          className="inline-flex items-center text-blue-300 hover:text-white font-medium"
                        >
                          Saiba mais <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-900"
                    asChild
                  >
                    <Link to="/#solutions">Ver Todos os Agentes Disponíveis</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Seção 4 - Exemplificação Visual Prática */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Veja IAgo Conversas em ação
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Demonstrações práticas que mostram exatamente como a plataforma funciona 
                  no dia a dia da sua operação comercial.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {demoFeatures.map((demo, index) => (
                  <Card key={index} className="p-8 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300" hoverEffect={true}>
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        <PlayCircle className="h-8 w-8 text-blue-600 mr-3" />
                        <h3 className="text-xl font-bold text-gray-900">{demo.title}</h3>
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg p-6 mb-6">
                        <div className="text-green-400 font-mono text-lg text-center">
                          {demo.mockup}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{demo.description}</p>
                      
                      <Button variant="outline" className="w-full">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Ver Demonstração
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Quer ver tudo funcionando na prática?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Agende uma demonstração ao vivo e veja como IAgo Conversas pode transformar 
                    seu processo comercial em apenas 15 minutos.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Agendar Demonstração Ao Vivo
                    </Button>
                    <Button variant="outline" size="lg">
                      Download do Caso de Uso
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Seção 5 - Resultados Concretos */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-6xl mx-auto">

              {/* Bloco Indicadores de Impacto */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Resultados que você pode esperar
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Dados consolidados de projetos implementados em 2024-2025 mostram o impacto real 
                  do IAgo Conversas no desempenho comercial.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {impactMetrics.map((metric, index) => (
                  <Card key={index} className="text-center p-8 bg-white border-2 border-blue-100 hover:border-blue-300 transition-all duration-300" hoverEffect={true}>
                    <CardContent className="p-0">
                      <div className="text-blue-600 mb-4 flex justify-center">
                        {metric.icon}
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                        {metric.percentage}
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {metric.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Bloco ROI Simples */}
              <div className="bg-white rounded-2xl p-8 mb-16 border border-gray-200">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-8">
                    <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Descubra em 10 segundos quanto IAgo Conversas pode adicionar ao seu faturamento
                    </h3>
                    <p className="text-gray-600">
                      Cálculo baseado em eficiência de atendimento e conversão de leads
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <Label htmlFor="revenue" className="text-sm font-medium text-gray-700 mb-2 block">
                        Faturamento mensal aproximado (R$)
                      </Label>
                      <Input
                        id="revenue"
                        type="text"
                        placeholder="Ex: 500.000"
                        value={monthlyRevenue}
                        onChange={(e) => setMonthlyRevenue(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="attendants" className="text-sm font-medium text-gray-700 mb-2 block">
                        Número de atendentes
                      </Label>
                      <Input
                        id="attendants"
                        type="number"
                        placeholder="Ex: 5"
                        value={attendants}
                        onChange={(e) => setAttendants(e.target.value)}
                        className="text-lg"
                      />
                    </div>
                  </div>

                  {estimatedSavings > 0 && (
                    <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        Economia estimada de R$ {estimatedSavings.toLocaleString('pt-BR')} / ano
                      </div>
                      <p className="text-green-700">
                        Baseado na otimização do tempo de atendimento e aumento na conversão de leads
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Bloco Reconhecimento & Confiabilidade */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Tecnologia confiável, resultados garantidos
                </h3>
                
                <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                  {partners.map((partner, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="text-2xl">{partner.logo}</span>
                      <span className="font-medium">{partner.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-green-600">
                    <Shield className="h-5 w-5" />
                    <span className="font-medium">LGPD Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">ISO 27001</span>
                  </div>
                </div>

                <p className="text-gray-600 max-w-2xl mx-auto">
                  Por trás do IAgo Conversas há a expertise de <strong>5X Aceleradora</strong>, 
                  reconhecida por acelerar +50 empresas com IA em 2024-2025.
                </p>

                <p className="text-sm text-gray-500 mt-4">
                  * Média consolidada em 12 projetos-piloto de 2025; resultados podem variar conforme estrutura interna.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Seção 6 - CTA Final */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solicitar demonstração gratuita agora
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Sem cartão de crédito. Resposta em até 30 min.
              </p>

              <div className="bg-white rounded-2xl p-8 text-gray-900 max-w-2xl mx-auto">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                        Nome completo
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                        E-mail corporativo
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu.email@empresa.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700 mb-2 block">
                      WhatsApp
                    </Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
                  >
                    Solicitar Demonstração Gratuita
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 mb-4">Ou se preferir:</p>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    asChild
                  >
                    <a 
                      href="https://wa.me/5511999999999?text=Olá! Gostaria de conhecer o IAgo Conversas" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Falar pelo WhatsApp agora
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default IagoConversas;
