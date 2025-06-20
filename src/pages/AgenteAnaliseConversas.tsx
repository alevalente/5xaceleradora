import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, MessageSquare, BarChart3, AlertTriangle, CheckCircle2, TrendingUp, Cpu, Zap, Terminal, Brain, Activity, Clock, ExternalLink, Users, Calendar, Star, ThumbsUp, ThumbsDown, Target, Handshake, DollarSign, Award, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';

const AgenteAnaliseConversas = () => {
  const [animatedCards, setAnimatedCards] = useState<boolean[]>([false, false, false]);
  const [dashboardAnimated, setDashboardAnimated] = useState<boolean[]>([false, false, false, false]);
  const [analysisCardsAnimated, setAnalysisCardsAnimated] = useState<boolean[]>([false, false, false, false, false]);

  useEffect(() => {
    // Staggered animation for cards
    const timeouts = [
      setTimeout(() => setAnimatedCards(prev => [true, prev[1], prev[2]]), 200),
      setTimeout(() => setAnimatedCards(prev => [prev[0], true, prev[2]]), 400),
      setTimeout(() => setAnimatedCards(prev => [prev[0], prev[1], true]), 600),
    ];

    // Dashboard cards animation
    const dashboardTimeouts = [
      setTimeout(() => setDashboardAnimated(prev => [true, prev[1], prev[2], prev[3]]), 800),
      setTimeout(() => setDashboardAnimated(prev => [prev[0], true, prev[2], prev[3]]), 1000),
      setTimeout(() => setDashboardAnimated(prev => [prev[0], prev[1], true, prev[3]]), 1200),
      setTimeout(() => setDashboardAnimated(prev => [prev[0], prev[1], prev[2], true]), 1400),
    ];

    // Analysis cards animation
    const analysisTimeouts = [
      setTimeout(() => setAnalysisCardsAnimated(prev => [true, prev[1], prev[2], prev[3], prev[4]]), 1600),
      setTimeout(() => setAnalysisCardsAnimated(prev => [prev[0], true, prev[2], prev[3], prev[4]]), 1800),
      setTimeout(() => setAnalysisCardsAnimated(prev => [prev[0], prev[1], true, prev[3], prev[4]]), 2000),
      setTimeout(() => setAnalysisCardsAnimated(prev => [prev[0], prev[1], prev[2], true, prev[4]]), 2200),
      setTimeout(() => setAnalysisCardsAnimated(prev => [prev[0], prev[1], prev[2], prev[3], true]), 2400),
    ];

    return () => {
      timeouts.forEach(clearTimeout);
      dashboardTimeouts.forEach(clearTimeout);
      analysisTimeouts.forEach(clearTimeout);
    };
  }, []);

  // Conversation Analysis Cards Component
  const ConversationAnalysisCards = () => {
    const conversations = [
      {
        id: 'CONV-001',
        salesperson: 'João Silva',
        client: 'Distribuidora ABC',
        score: 85,
        status: 'Excelente',
        statusColor: 'green',
        feedback: 'Ótima abordagem consultiva, identificou necessidades reais',
        improvement: 'Poderia aprofundar mais questões sobre orçamento',
        date: '20/06/2025',
        rating: 5
      },
      {
        id: 'CONV-002',
        salesperson: 'Maria Santos',
        client: 'Comercial XYZ',
        score: 45,
        status: 'Precisa Melhorar',
        statusColor: 'orange',
        feedback: 'Foco excessivo no produto, pouca escuta do cliente',
        improvement: 'Desenvolver técnicas de questionamento e escuta ativa',
        date: '20/06/2025',
        rating: 2
      },
      {
        id: 'CONV-003',
        salesperson: 'Carlos Mendes',
        client: 'Atacadista Premium',
        score: 92,
        status: 'Excepcional',
        statusColor: 'green',
        feedback: 'Conduziu perfeitamente objeções e fechou com assertividade',
        improvement: 'Manter o padrão de excelência atual',
        date: '19/06/2025',
        rating: 5
      },
      {
        id: 'CONV-004',
        salesperson: 'Ana Costa',
        client: 'Varejo Express',
        score: 35,
        status: 'Crítico',
        statusColor: 'red',
        feedback: 'Não identificou necessidades, apresentação genérica',
        improvement: 'Treinamento urgente em técnicas de vendas consultivas',
        date: '19/06/2025',
        rating: 1
      }
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {conversations.map((conv, index) => (
          <Card 
            key={conv.id} 
            className={`
              relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-800/60 to-gray-900/90 
              border border-gray-600/50 backdrop-blur-sm 
              transition-all duration-700 ease-out
              hover:scale-105 hover:shadow-2xl hover:border-gray-500/50
              group
              ${dashboardAnimated[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{
              transitionDelay: `${index * 150}ms`
            }}
          >
            {/* Status indicator */}
            <div className="absolute top-3 right-3">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  conv.statusColor === 'green' ? 'bg-green-400' : 
                  conv.statusColor === 'orange' ? 'bg-orange-400' : 'bg-red-400'
                } animate-pulse`}></div>
                <span className={`text-xs font-mono ${
                  conv.statusColor === 'green' ? 'text-green-400' : 
                  conv.statusColor === 'orange' ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {conv.status}
                </span>
              </div>
            </div>

            <CardHeader className="relative z-10 pb-2">
              <CardTitle className="text-white flex items-center justify-between text-sm mb-2">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center mr-3 border bg-blue-500/20 border-blue-400/40">
                    <MessageSquare className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">{conv.id}</div>
                    <div className="text-xs text-gray-400 font-mono">{conv.date}</div>
                  </div>
                </div>
                
                {/* Score display */}
                <div className="flex flex-col items-center">
                  <div className={`text-2xl font-bold font-mono ${
                    conv.score >= 80 ? 'text-green-400' : 
                    conv.score >= 60 ? 'text-orange-400' : 'text-red-400'
                  }`}>
                    {conv.score}
                  </div>
                  <div className="text-xs text-gray-400">pontos</div>
                </div>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="relative z-10 pt-0 pb-4">
              {/* Salesperson and Client */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Vendedor:</span>
                  <span className="text-white font-medium">{conv.salesperson}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Cliente:</span>
                  <span className="text-white font-medium">{conv.client}</span>
                </div>
              </div>

              {/* Rating stars */}
              <div className="flex items-center mb-3">
                <span className="text-xs text-gray-400 mr-2">Avaliação:</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`h-3 w-3 ${
                        star <= conv.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Feedback */}
              <div className="space-y-2">
                <div className="flex items-start">
                  <ThumbsUp className="h-3 w-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {conv.feedback}
                  </p>
                </div>
                
                <div className="flex items-start">
                  <TrendingUp className="h-3 w-3 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-300 leading-relaxed">
                    <span className="text-blue-400 font-medium">Melhoria:</span> {conv.improvement}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-3">
                <Progress 
                  value={conv.score} 
                  className="h-2"
                />
              </div>
            </CardContent>

            {/* Bottom accent line */}
            <div className={`
              absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500
              ${conv.statusColor === 'green' ? 'bg-green-400' : 
                conv.statusColor === 'orange' ? 'bg-orange-400' : 'bg-red-400'}
            `} />
          </Card>
        ))}
      </div>
    );
  };

  // Performance Metrics Component
  const PerformanceMetrics = () => {
    const metrics = [
      { label: 'Conversas Analisadas', value: '1.247', color: '#3b82f6' },
      { label: 'Vendedores Monitorados', value: '23', color: '#10b981' },
      { label: 'Score Médio Atual', value: '67', color: '#f59e0b' },
      { label: 'Melhorias Identificadas', value: '89', color: '#ef4444' }
    ];

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className={`
              text-center p-4 bg-gray-800/50 rounded-lg border border-gray-600/30
              transition-all duration-700
              ${dashboardAnimated[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{
              transitionDelay: `${index * 100}ms`
            }}
          >
            <div 
              className="text-2xl font-bold font-mono mb-1"
              style={{ color: metric.color }}
            >
              {metric.value}
            </div>
            <div className="text-xs text-gray-400">{metric.label}</div>
          </div>
        ))}
      </div>
    );
  };

  // Improvement Suggestions Component
  const ImprovementSuggestions = () => {
    const suggestions = [
      {
        salesperson: 'Maria Santos',
        priority: 'Alta',
        issue: 'Técnicas de questionamento',
        suggestion: 'Implementar método SPIN Selling para identificar necessidades do cliente',
        impact: 'Potencial aumento de 25% na conversão'
      },
      {
        salesperson: 'Ana Costa',
        priority: 'Crítica',
        issue: 'Escuta ativa',
        suggestion: 'Desenvolver habilidades de escuta e paciência durante objeções',
        impact: 'Redução de 40% nas perdas por objeções mal tratadas'
      },
      {
        salesperson: 'Pedro Lima',
        priority: 'Média',
        issue: 'Fechamento de vendas',
        suggestion: 'Aplicar técnicas de assumptive close e urgência saudável',
        impact: 'Melhoria de 15% na taxa de fechamento'
      }
    ];

    return (
      <div className="space-y-3">
        <div className="text-center mb-4">
          <div className="text-xl font-bold font-mono text-blue-400">89</div>
          <div className="text-xs text-gray-400">melhorias identificadas</div>
        </div>

        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 rounded-md border border-gray-600/30 p-3"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">{suggestion.salesperson}</span>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${
                    suggestion.priority === 'Crítica' ? 'border-red-400/40 text-red-300 bg-red-500/10' :
                    suggestion.priority === 'Alta' ? 'border-orange-400/40 text-orange-300 bg-orange-500/10' :
                    'border-yellow-400/40 text-yellow-300 bg-yellow-500/10'
                  }`}
                >
                  {suggestion.priority}
                </Badge>
              </div>
              
              <div className="space-y-1">
                <div className="text-xs text-gray-400">
                  <span className="font-medium">Área:</span> {suggestion.issue}
                </div>
                <div className="text-xs text-gray-300">
                  <span className="font-medium text-blue-400">Sugestão:</span> {suggestion.suggestion}
                </div>
                <div className="text-xs text-green-400">
                  <span className="font-medium">Impacto:</span> {suggestion.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <div className="container-wide py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para página inicial
          </Link>
        </div>

        {/* Hero Section - Tech Style */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'float 10s ease-in-out infinite'
            }}></div>
          </div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse-soft"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse-soft animation-delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse-soft animation-delay-500"></div>
          </div>

          <div className="container-wide text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Quantas vendas você perde
              </span>
              <br />
              <span className="text-white drop-shadow-lg">
                todos os dias sem saber o motivo exato?
              </span>
            </h1>
            
            {/* Tech Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm mb-8">
              <Brain className="h-4 w-4 mr-2 text-blue-400" />
              <span className="text-blue-300 font-mono text-sm">AI-Powered Conversation Analysis</span>
            </div>
          </div>
        </section>

        {/* Pain Identification */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white mb-6 font-bold leading-tight">
                <span className="text-red-400">Sem acompanhar o que seus vendedores realmente falam nas conversas,</span>
                <br />
                <span className="text-gray-300">você deixa dinheiro escapar todos os dias sem perceber.</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
                Cada conversa mal conduzida é uma oportunidade desperdiçada. Nosso <span className="text-blue-400 font-bold">Agente de Análise de Conversas</span> usa Inteligência Artificial para monitorar automaticamente cada interação comercial, identificando exatamente onde estão os erros que fazem você perder vendas.
                <br /><br />
                <span className="text-cyan-400 font-bold">Assim, você recebe insights imediatos e práticos para corrigir rapidamente o desempenho dos seus vendedores e parar de perder oportunidades.</span>
              </p>
            </div>
          </div>
        </section>

        {/* AI Agent Introduction */}
        <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              
              {/* What is it */}
              <div className="mb-16 text-center">
                <div className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-400/20 rounded-full backdrop-blur-sm mb-6">
                  <Cpu className="h-5 w-5 mr-2 text-blue-400" />
                  <span className="text-blue-300 font-mono">Agente Inteligente</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  O que é o Agente de Análise de Conversas?
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  É uma solução inteligente baseada em <span className="text-blue-400 font-semibold">Inteligência Artificial</span>, 
                  integrada diretamente à plataforma multiatendimento <span className="text-blue-400 font-semibold">IAgo Conversas</span>, 
                  que monitora e avalia automaticamente todas as conversas comerciais realizadas pelos seus vendedores.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-4">
                  O agente identifica rapidamente quais interações comerciais estão prejudicando suas vendas e quais delas são exemplares, 
                  oferecendo uma visão clara e objetiva através de dashboards intuitivos e cards detalhados no formato Kanban. 
                  Assim, você recebe insights estratégicos imediatos e toma ações rápidas para melhorar o desempenho da sua equipe comercial.
                </p>
              </div>

              {/* Detailed Analysis Section */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  Como exatamente o Agente de Análise de Conversas avalia suas interações comerciais?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Target,
                      title: "Abordagem",
                      description: "Avalia se os vendedores iniciam conversas gerando confiança e interesse imediato nos clientes.",
                      benefit: "Reduz perda de oportunidades logo na primeira interação.",
                      color: "blue",
                      progress: 94,
                      badge: "Primeira Impressão",
                      particles: ["bg-blue-400", "bg-cyan-300", "bg-blue-500"]
                    },
                    {
                      icon: Brain,
                      title: "Levantamento de Necessidades e Venda de Mix",
                      description: "Avalia se o vendedor identifica corretamente as necessidades reais dos clientes e se oferece oportunidades complementares que aumentam o valor da venda.",
                      benefit: "Aumenta constantemente o ticket médio.",
                      color: "purple",
                      progress: 96,
                      badge: "Upsell & Cross-sell",
                      particles: ["bg-purple-400", "bg-pink-300", "bg-purple-500"]
                    },
                    {
                      icon: Handshake,
                      title: "Negociação",
                      description: "Analisa diretamente como vendedores argumentam, superam objeções e negociam condições comerciais sem prejudicar margens.",
                      benefit: "Reduz descontos desnecessários e melhora conversões.",
                      color: "orange",
                      progress: 92,
                      badge: "Margem Protegida",
                      particles: ["bg-orange-400", "bg-yellow-300", "bg-orange-500"]
                    },
                    {
                      icon: Award,
                      title: "Fechamento",
                      description: "Mede a objetividade e a proatividade dos vendedores ao fechar as vendas, evitando a perda de oportunidades na reta final.",
                      benefit: "Garante resultados melhores na etapa crítica do fechamento.",
                      color: "green",
                      progress: 98,
                      badge: "Conversão Final",
                      particles: ["bg-green-400", "bg-emerald-300", "bg-green-500"]
                    },
                    {
                      icon: Heart,
                      title: "Conexão Real com Cliente",
                      description: "Avalia a habilidade real dos vendedores em criar conexões consistentes e vínculos duradouros com clientes.",
                      benefit: "Aumenta significativamente a fidelização e retenção de clientes.",
                      color: "red",
                      progress: 95,
                      badge: "Relacionamento",
                      particles: ["bg-red-400", "bg-pink-300", "bg-red-500"]
                    }
                  ].map((analysis, index) => (
                    <div
                      key={index}
                      className={`group relative transition-all duration-700 ${
                        analysisCardsAnimated[index] 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8'
                      } ${index === 1 || index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                      style={{
                        transitionDelay: `${index * 150}ms`
                      }}
                    >
                      {/* Floating particles */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {analysis.particles.map((color, particleIndex) => (
                          <div
                            key={particleIndex}
                            className={`absolute w-1 h-1 ${color} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 animate-pulse-soft`}
                            style={{
                              top: `${20 + particleIndex * 25}%`,
                              left: `${10 + particleIndex * 30}%`,
                              animationDelay: `${particleIndex * 500}ms`,
                            }}
                          />
                        ))}
                      </div>

                      <Card className={`
                        relative overflow-hidden bg-gradient-to-br from-gray-800/70 via-gray-800/50 to-gray-900/70 
                        border border-gray-600/50 backdrop-blur-sm 
                        transition-all duration-500 ease-out
                        hover:scale-105 hover:shadow-2xl hover:shadow-${analysis.color}-500/20
                        hover:border-${analysis.color}-400/50
                        group-hover:bg-gradient-to-br group-hover:from-${analysis.color}-900/20 group-hover:via-gray-800/50 group-hover:to-gray-900/70
                        h-full min-h-80
                      `}>
                        {/* Glow effect on hover */}
                        <div className={`
                          absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                          bg-gradient-to-r from-${analysis.color}-400 to-${analysis.color}-600 blur-xl
                        `} />
                        
                        <CardContent className="pt-8 text-center relative z-10 h-full flex flex-col justify-between p-6">
                          <div>
                            {/* Badge */}
                            <div className="absolute top-4 right-4">
                              <Badge 
                                variant="outline" 
                                className={`text-xs border-${analysis.color}-400/40 text-${analysis.color}-300 bg-${analysis.color}-500/10`}
                              >
                                {analysis.badge}
                              </Badge>
                            </div>

                            {/* Icon with enhanced animation */}
                            <div className={`
                              h-16 w-16 mx-auto mb-4 rounded-full 
                              bg-gradient-to-br from-${analysis.color}-500/30 to-${analysis.color}-600/30 
                              flex items-center justify-center 
                              border border-${analysis.color}-400/30
                              transition-all duration-500 ease-out
                              group-hover:scale-110 group-hover:rotate-3
                              group-hover:shadow-lg group-hover:shadow-${analysis.color}-500/50
                            `}>
                              <analysis.icon className={`
                                h-8 w-8 text-${analysis.color}-400 
                                transition-all duration-300
                                group-hover:scale-110
                                animate-pulse-soft
                              `} />
                            </div>
                            
                            {/* Title with hover effect */}
                            <h4 className={`
                              text-white font-bold mb-3 text-lg
                              transition-colors duration-300
                              group-hover:text-${analysis.color}-300
                            `}>
                              {analysis.title}
                            </h4>
                            
                            {/* Description */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                              {analysis.description}
                            </p>

                            {/* Benefit */}
                            <div className="mb-4">
                              <div className="flex items-start justify-center">
                                <CheckCircle2 className={`h-4 w-4 text-${analysis.color}-400 mr-2 mt-0.5 flex-shrink-0`} />
                                <p className={`text-xs text-${analysis.color}-300 leading-relaxed font-medium`}>
                                  <span className="font-bold">Benefício:</span> {analysis.benefit}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Animated Progress Bar */}
                          <div className="space-y-2 mt-auto">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-gray-400">Precisão da Análise</span>
                              <span className={`text-${analysis.color}-400 font-mono font-bold`}>
                                {analysis.progress}%
                              </span>
                            </div>
                            <Progress 
                              value={analysisCardsAnimated[index] ? analysis.progress : 0} 
                              className="h-2"
                            />
                          </div>
                        </CardContent>

                        {/* Bottom glow line */}
                        <div className={`
                          absolute bottom-0 left-0 w-full h-1 
                          bg-gradient-to-r from-transparent via-${analysis.color}-500 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        `} />
                      </Card>
                    </div>
                  ))}
                </div>

                {/* Analysis accuracy note */}
                <div className="text-center mt-8">
                  <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-400/20 rounded-full backdrop-blur-sm">
                    <Brain className="h-4 w-4 mr-2 text-green-400" />
                    <span className="text-green-300 text-sm font-mono">
                      IA treinada com + de 50.000 conversas comerciais reais
                    </span>
                  </div>
                </div>
              </div>

              {/* How it works - Enhanced Interactive Cards */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  Como o Agente melhora cada conversa dos seus vendedores?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: MessageSquare,
                      title: "Análise Automática e Objetiva",
                      description: "Avaliação inteligente e detalhada das conversas dos vendedores com clientes, identificando claramente falhas e pontos fortes em tempo real.",
                      color: "blue",
                      progress: 96,
                      badge: "Tempo Real",
                      particles: ["bg-blue-400", "bg-cyan-300", "bg-blue-500"]
                    },
                    {
                      icon: Users,
                      title: "Conexão Real com Clientes",
                      description: "Identifica automaticamente quais vendedores conseguem criar relações reais e quais precisam de ajuda urgente na conexão com seus clientes.",
                      color: "purple",
                      progress: 94,
                      badge: "IA Avançada",
                      particles: ["bg-purple-400", "bg-pink-300", "bg-purple-500"]
                    },
                    {
                      icon: TrendingUp,
                      title: "Insights Personalizados e Práticos",
                      description: "Cada conversa analisada gera sugestões específicas e detalhadas para melhorar imediatamente o desempenho dos vendedores.",
                      color: "green",
                      progress: 98,
                      badge: "Personalizado",
                      particles: ["bg-green-400", "bg-emerald-300", "bg-green-500"]
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`group relative transition-all duration-700 ${
                        animatedCards[index] 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8'
                      }`}
                    >
                      {/* Floating particles */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {item.particles.map((color, particleIndex) => (
                          <div
                            key={particleIndex}
                            className={`absolute w-1 h-1 ${color} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000 animate-pulse-soft`}
                            style={{
                              top: `${20 + particleIndex * 25}%`,
                              left: `${10 + particleIndex * 30}%`,
                              animationDelay: `${particleIndex * 500}ms`,
                            }}
                          />
                        ))}
                      </div>

                      <Card className={`
                        relative overflow-hidden bg-gradient-to-br from-gray-800/70 via-gray-800/50 to-gray-900/70 
                        border border-gray-600/50 backdrop-blur-sm 
                        transition-all duration-500 ease-out
                        hover:scale-105 hover:shadow-2xl hover:shadow-${item.color}-500/20
                        hover:border-${item.color}-400/50
                        group-hover:bg-gradient-to-br group-hover:from-${item.color}-900/20 group-hover:via-gray-800/50 group-hover:to-gray-900/70
                        h-80
                      `}>
                        {/* Glow effect on hover */}
                        <div className={`
                          absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                          bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 blur-xl
                        `} />
                        
                        <CardContent className="pt-8 text-center relative z-10 h-full flex flex-col justify-between">
                          <div>
                            {/* Badge */}
                            <div className="absolute top-4 right-4">
                              <Badge 
                                variant="outline" 
                                className={`text-xs border-${item.color}-400/40 text-${item.color}-300 bg-${item.color}-500/10`}
                              >
                                {item.badge}
                              </Badge>
                            </div>

                            {/* Icon with enhanced animation */}
                            <div className={`
                              h-16 w-16 mx-auto mb-4 rounded-full 
                              bg-gradient-to-br from-${item.color}-500/30 to-${item.color}-600/30 
                              flex items-center justify-center 
                              border border-${item.color}-400/30
                              transition-all duration-500 ease-out
                              group-hover:scale-110 group-hover:rotate-3
                              group-hover:shadow-lg group-hover:shadow-${item.color}-500/50
                            `}>
                              <item.icon className={`
                                h-8 w-8 text-${item.color}-400 
                                transition-all duration-300
                                group-hover:scale-110
                                animate-pulse-soft
                              `} />
                            </div>
                            
                            {/* Title with hover effect */}
                            <h4 className={`
                              text-white font-bold mb-3 text-lg
                              transition-colors duration-300
                              group-hover:text-${item.color}-300
                            `}>
                              {item.title}
                            </h4>
                            
                            {/* Description */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                              {item.description}
                            </p>
                          </div>

                          {/* Animated Progress Bar */}
                          <div className="space-y-2 mt-auto">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-gray-400">Precisão</span>
                              <span className={`text-${item.color}-400 font-mono font-bold`}>
                                {item.progress}%
                              </span>
                            </div>
                            <Progress 
                              value={animatedCards[index] ? item.progress : 0} 
                              className="h-2"
                            />
                          </div>
                        </CardContent>

                        {/* Bottom glow line */}
                        <div className={`
                          absolute bottom-0 left-0 w-full h-1 
                          bg-gradient-to-r from-transparent via-${item.color}-500 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        `} />
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Examples */}
        <section className="py-16 bg-gray-900">
          <div className="container-wide">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dashboard
              </span>{" "}
              ilustrativo prático
            </h2>
            <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Veja como nosso dashboard apresenta análises detalhadas e sugestões específicas para cada conversa
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Conversation Analysis Cards */}
              <div className="lg:col-span-2">
                <Card 
                  className={`
                    relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-800/60 to-gray-900/90 
                    border border-gray-600/50 backdrop-blur-sm 
                    transition-all duration-700 ease-out
                    hover:scale-105 hover:shadow-2xl hover:border-gray-500/50
                    group
                    ${dashboardAnimated[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                >
                  <CardHeader className="relative z-10 pb-4">
                    <CardTitle className="text-white flex items-center text-lg mb-2">
                      <div className="h-8 w-8 rounded-lg flex items-center justify-center mr-3 border bg-blue-500/20 border-blue-400/40">
                        <MessageSquare className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-lg font-bold">Análise de Conversas</div>
                        <div className="text-xs text-blue-400 font-mono">Últimas 24 horas</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0 pb-6 max-h-96 overflow-y-auto">
                    <ConversationAnalysisCards />
                  </CardContent>
                </Card>
              </div>

              {/* Side Panels */}
              <div className="space-y-6">
                {/* Performance Metrics */}
                <Card 
                  className={`
                    relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-800/60 to-gray-900/90 
                    border border-gray-600/50 backdrop-blur-sm 
                    transition-all duration-700 ease-out
                    hover:scale-105 hover:shadow-2xl hover:border-gray-500/50
                    group
                    ${dashboardAnimated[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                  style={{ transitionDelay: '200ms' }}
                >
                  <CardHeader className="relative z-10 pb-2">
                    <CardTitle className="text-white flex items-center text-base mb-2">
                      <div className="h-6 w-6 rounded-lg flex items-center justify-center mr-2 border bg-green-500/20 border-green-400/40">
                        <BarChart3 className="h-3 w-3 text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Métricas de Performance</div>
                        <div className="text-xs text-green-400 font-mono">Visão Geral</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0 pb-4">
                    <PerformanceMetrics />
                  </CardContent>
                </Card>

                {/* Improvement Suggestions */}
                <Card 
                  className={`
                    relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-800/60 to-gray-900/90 
                    border border-gray-600/50 backdrop-blur-sm 
                    transition-all duration-700 ease-out
                    hover:scale-105 hover:shadow-2xl hover:border-gray-500/50
                    group
                    ${dashboardAnimated[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                  style={{ transitionDelay: '400ms' }}
                >
                  <CardHeader className="relative z-10 pb-2">
                    <CardTitle className="text-white flex items-center text-base mb-2">
                      <div className="h-6 w-6 rounded-lg flex items-center justify-center mr-2 border bg-orange-500/20 border-orange-400/40">
                        <TrendingUp className="h-3 w-3 text-orange-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold">Sugestões de Melhoria</div>
                        <div className="text-xs text-orange-400 font-mono">Prioridades</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0 pb-4 max-h-64 overflow-y-auto">
                    <ImprovementSuggestions />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Dashboard Preview Note */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full backdrop-blur-sm">
                <Terminal className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-blue-300 text-sm font-mono">
                  Dashboard responsivo disponível em desktop, tablet e mobile
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Results - Testimonial with Tech Elements */}
        <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-400/20 rounded-full backdrop-blur-sm mb-8">
                <CheckCircle2 className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-green-300 font-mono">Resultados Validados</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-8">
                Resultados concretos e validados
              </h2>
              
              <Card className="bg-gray-800/70 border-gray-600/50 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-20 w-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                      <CheckCircle2 className="h-10 w-10 text-green-400" />
                    </div>
                  </div>
                  <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-6 leading-relaxed">
                    "Agora acompanhamos exatamente como nossos vendedores abordam os clientes e quais erros estavam matando nossas vendas. 
                    Aumentamos nossa taxa de conversão em <span className="text-green-400 font-bold not-italic">35%</span> em menos de 90 dias."
                  </blockquote>
                  <cite className="text-white font-semibold">
                    – João Carlos, Diretor Comercial, Distribuidora Premium.
                  </cite>
                  
                  {/* Tech metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-600">
                    <div className="text-center">
                      <div className="text-3xl font-bold font-mono text-green-400">35%</div>
                      <div className="text-sm text-gray-400">aumento de conversões</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold font-mono text-blue-400">90</div>
                      <div className="text-sm text-gray-400">dias para ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold font-mono text-purple-400">24/7</div>
                      <div className="text-sm text-gray-400">monitoramento</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final - Futuristic */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated geometric background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full"
                   style={{
                     backgroundImage: `
                       conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(59, 130, 246, 0.3) 60deg, transparent 120deg),
                       conic-gradient(from 120deg at 50% 50%, transparent 0deg, rgba(147, 51, 234, 0.3) 60deg, transparent 120deg),
                       conic-gradient(from 240deg at 50% 50%, transparent 0deg, rgba(6, 182, 212, 0.3) 60deg, transparent 120deg)
                     `,
                     animation: 'float 15s ease-in-out infinite'
                   }}>
              </div>
            </div>
          </div>
          
          <div className="container-wide text-center relative z-10">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm mb-8">
              <AlertTriangle className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="text-white font-mono">Ação Urgente Necessária</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Pare agora de perder vendas!
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Saiba exatamente como melhorar cada conversa dos seus vendedores.
              </span>
            </h2>
            
            <Button 
              asChild
              className="bg-white text-gray-900 hover:bg-gray-100 text-xl font-bold py-8 px-12 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
            >
              <Link to="/contato" className="inline-flex items-center">
                <Terminal className="h-6 w-6 mr-3" />
                Solicitar Análise Gratuita das Conversas
                <Zap className="h-6 w-6 ml-3" />
              </Link>
            </Button>
            
            {/* Urgency indicator */}
            <p className="mt-6 text-white/80 font-mono text-sm">
              ⚡ Análise disponível por tempo limitado
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgenteAnaliseConversas;
