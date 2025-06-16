import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, BarChart3, AlertTriangle, CheckCircle2, Phone, TrendingUp, Cpu, Zap, Terminal, Brain, PieChart, Activity, Clock, Filter, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';

const AgenteCoberturaCarteira = () => {
  const [animatedCards, setAnimatedCards] = useState<boolean[]>([false, false, false]);
  const [dashboardAnimated, setDashboardAnimated] = useState<boolean[]>([false, false, false, false]);

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

    return () => {
      timeouts.forEach(clearTimeout);
      dashboardTimeouts.forEach(clearTimeout);
    };
  }, []);

  // SVG Chart Components
  const ClientDistributionChart = () => {
    const salespeople = [
      { name: 'João', clients: 620, color: '#ef4444', angle: 0 },
      { name: 'Maria', clients: 430, color: '#f97316', angle: 161 },
      { name: 'Carlos', clients: 125, color: '#22c55e', angle: 260 },
      { name: 'Ana', clients: 110, color: '#3b82f6', angle: 293 },
      { name: 'Pedro', clients: 100, color: '#6366f1', angle: 320 }
    ];
    
    const total = 1385;
    let currentAngle = 0;
    
    return (
      <div className="flex flex-col items-center">
        <svg className="w-20 h-20 mb-2" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" fill="transparent" stroke="#374151" strokeWidth="2" opacity="0.3" />
          {salespeople.map((person, index) => {
            const percentage = (person.clients / total) * 100;
            const strokeDasharray = `${percentage * 2.51} 251`;
            const rotation = currentAngle;
            currentAngle += percentage * 3.6;
            
            return (
              <circle
                key={index}
                cx="50"
                cy="50"
                r="35"
                fill="transparent"
                stroke={person.color}
                strokeWidth="7"
                strokeDasharray={dashboardAnimated[0] ? strokeDasharray : "0 251"}
                strokeDashoffset="0"
                transform={`rotate(${rotation} 50 50)`}
                className="transition-all duration-1000 ease-out"
                style={{ 
                  strokeLinecap: 'round',
                  transitionDelay: `${index * 200}ms`
                }}
              />
            );
          })}
          <text x="50" y="46" textAnchor="middle" className="text-xs font-bold fill-white">
            Total
          </text>
          <text x="50" y="58" textAnchor="middle" className="text-xs font-bold fill-white">
            1.385
          </text>
        </svg>
        
        {/* Legend */}
        <div className="space-y-1 text-xs w-full">
          {salespeople.map((person, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div 
                  className="w-2 h-2 rounded-full mr-2"
                  style={{ backgroundColor: person.color }}
                />
                <span className="text-gray-300 font-medium text-xs">{person.name}</span>
              </div>
              <span className="text-white font-bold text-xs">{person.clients}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // New Coverage Donut Chart
  const CoverageDonutChart = () => {
    const coveredPercentage = 63;
    const uncoveredPercentage = 37;
    const coveredStroke = coveredPercentage * 2.51; // 251 is the circumference
    const uncoveredStroke = uncoveredPercentage * 2.51;
    
    return (
      <div className="flex flex-col items-center">
        <svg className="w-24 h-24 mb-3" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#374151" strokeWidth="2" opacity="0.2" />
          
          {/* Covered clients (green) */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#22c55e"
            strokeWidth="8"
            strokeDasharray={dashboardAnimated[1] ? `${coveredStroke} 251` : "0 251"}
            strokeDashoffset="0"
            transform="rotate(-90 50 50)"
            className="transition-all duration-1000 ease-out"
            style={{ strokeLinecap: 'round' }}
          />
          
          {/* Uncovered clients (orange/red) */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#f97316"
            strokeWidth="8"
            strokeDasharray={dashboardAnimated[1] ? `${uncoveredStroke} 251` : "0 251"}
            strokeDashoffset={dashboardAnimated[1] ? `-${coveredStroke}` : "0"}
            transform="rotate(-90 50 50)"
            className="transition-all duration-1000 ease-out"
            style={{ 
              strokeLinecap: 'round',
              transitionDelay: '300ms'
            }}
          />
          
          {/* Center text */}
          <text x="50" y="46" textAnchor="middle" className="text-xs font-bold fill-white">
            Total:
          </text>
          <text x="50" y="58" textAnchor="middle" className="text-xs font-bold fill-white">
            1.385
          </text>
        </svg>
        
        {/* Legend */}
        <div className="space-y-2 text-xs w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-2 bg-green-500" />
              <span className="text-gray-300 font-medium">Clientes Cobertos</span>
            </div>
            <span className="text-green-400 font-bold">63%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-2 bg-orange-500" />
              <span className="text-gray-300 font-medium">Clientes Negligenciados</span>
            </div>
            <span className="text-orange-400 font-bold">37%</span>
          </div>
        </div>
      </div>
    );
  };

  const BarChart = ({ data, color }: { data: number[]; color: string }) => (
    <div className="flex items-end justify-center space-x-1 h-10 w-14">
      {data.map((value, index) => (
        <div
          key={index}
          className="w-1 rounded-t transition-all duration-700 ease-out"
          style={{
            height: dashboardAnimated[1] ? `${value}%` : '0%',
            backgroundColor: color,
            transitionDelay: `${index * 100}ms`
          }}
        />
      ))}
    </div>
  );

  const LineChart = ({ color }: { color: string }) => (
    <svg className="w-14 h-8" viewBox="0 0 80 48">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path
        d="M5,35 Q20,25 35,30 T75,15"
        stroke={color}
        strokeWidth="2"
        fill="none"
        className="transition-all duration-1000 ease-out"
        strokeDasharray={dashboardAnimated[3] ? "none" : "100"}
        strokeDashoffset={dashboardAnimated[3] ? "0" : "100"}
      />
      <circle cx="35" cy="30" r="2" fill={color} className={`transition-all duration-500 ${dashboardAnimated[3] ? 'opacity-100' : 'opacity-0'}`} />
      <circle cx="75" cy="15" r="2" fill={color} className={`transition-all duration-500 delay-300 ${dashboardAnimated[3] ? 'opacity-100' : 'opacity-0'}`} />
    </svg>
  );

  const StatusIndicators = ({ color }: { color: string }) => (
    <div className="flex flex-col space-y-1">
      {[85, 65, 40].map((width, index) => (
        <div key={index} className="flex items-center space-x-2">
          <div 
            className="h-1 rounded-full transition-all duration-700 ease-out"
            style={{
              width: dashboardAnimated[2] ? `${width}%` : '0%',
              backgroundColor: color,
              transitionDelay: `${index * 200}ms`
            }}
          />
          <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
        </div>
      ))}
    </div>
  );

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
                Você tem certeza que seus vendedores
              </span>
              <br />
              <span className="text-white drop-shadow-lg">
                falam regularmente com todos os seus clientes?
              </span>
            </h1>
            
            {/* Tech Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm mb-8">
              <Brain className="h-4 w-4 mr-2 text-blue-400" />
              <span className="text-blue-300 font-mono text-sm">AI-Powered Intelligence</span>
            </div>
          </div>
        </section>

        {/* Pain Identification - Dark Dashboard */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white mb-6 font-bold leading-tight">
                <span className="text-red-400">Seus vendedores estão deixando dinheiro na mesa</span>
                <br />
                <span className="text-gray-300">e você só descobre quando já perdeu o cliente.</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
                <span className="text-blue-400 font-bold">Enquanto você não sabe quais clientes estão sendo negligenciados,</span>
                <br />
                <span className="text-cyan-400 font-bold">nosso agente de IA já identificou todos eles.</span>
              </p>
            </div>
          </div>
        </section>

        {/* AI Agent Introduction - Glassmorphism Cards */}
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
                  O que é o Agente de Cobertura de Carteira?
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  É uma solução automatizada baseada em <span className="text-blue-400 font-semibold">Inteligência Artificial</span>, 
                  que capta automaticamente todas as conversas realizadas pelos seus vendedores através da plataforma multi-atendimento Iago Conversas.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-4">
                  Com todos os números de WhatsApp dos seus vendedores conectados em nossa plataforma, nosso agente passa a monitorar cada interação comercial diariamente. 
                  De posse da relação detalhada dos seus vendedores, clientes e respectivos contatos, o Agente de Cobertura identifica com precisão quais clientes estão sendo negligenciados ou esquecidos, 
                  garantindo uma visão clara, detalhada e imediata sobre a qualidade do atendimento e a real cobertura da carteira da sua empresa.
                </p>
              </div>

              {/* How it works - Enhanced Interactive Cards */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  Como o Agente garante que nenhum cliente fique esquecido?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: BarChart3,
                      title: "Análise em Tempo Real",
                      description: "Nosso agente captura e analisa automaticamente todas as conversas realizadas pelos seus vendedores via WhatsApp diariamente, garantindo acompanhamento constante.",
                      color: "blue",
                      progress: 95,
                      badge: "24/7",
                      particles: ["bg-blue-400", "bg-cyan-300", "bg-blue-500"]
                    },
                    {
                      icon: Users,
                      title: "Detecção Inteligente",
                      description: "Identifica automaticamente e com precisão quais clientes da sua carteira não tiveram contato recente com seus vendedores, evitando negligências e prevenindo perdas financeiras.",
                      color: "purple",
                      progress: 98,
                      badge: "IA Avançada",
                      particles: ["bg-purple-400", "bg-pink-300", "bg-purple-500"]
                    },
                    {
                      icon: Shield,
                      title: "Monitoramento Ativo",
                      description: "Você saberá exatamente quais vendedores estão cuidando bem da carteira e quem precisa de ajustes imediatos, permitindo decisões rápidas e precisas.",
                      color: "green",
                      progress: 92,
                      badge: "Automático",
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
                              <span className="text-gray-400">Eficiência</span>
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

              {/* Customization */}
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 rounded-xl border border-gray-600/50 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Zap className="h-6 w-6 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">
                    Personalização completa para sua empresa
                  </h3>
                </div>
                <p className="text-lg text-gray-300">
                  Adapte totalmente a frequência de análise e cobertura ao ciclo médio de compra dos seus clientes 
                  <span className="text-blue-400 font-mono"> (ex. semanal, quinzenal ou mensal)</span>, 
                  garantindo que todos recebam a atenção ideal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Examples - Enhanced with Visual Charts */}
        <section className="py-16 bg-gray-900">
          <div className="container-wide">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dashboard
              </span>{" "}
              ilustrativo prático
            </h2>
            <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Veja como nosso dashboard transforma dados complexos em insights visuais claros e actionáveis
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: PieChart,
                  title: "Distribuição de Clientes por Vendedor",
                  description: "Identifique rapidamente quantos clientes cada vendedor possui e quais carteiras precisam ser reorganizadas para equilibrar melhor os atendimentos e evitar perdas.",
                  color: "#10b981",
                  metric: "1.385",
                  metricLabel: "clientes total",
                  status: "Desbalanceado",
                  chart: <ClientDistributionChart />,
                  features: ["Visualização clara do desequilíbrio", "Dados em tempo real", "Alerta de sobrecarga"]
                },
                {
                  icon: BarChart3,
                  title: "Cobertura da Carteira de Clientes",
                  description: "Visualize rapidamente qual percentual da sua carteira de clientes está recebendo contato frequente dos vendedores e identifique imediatamente o risco de perda por negligência.",
                  color: "#22c55e",
                  metric: "63%",
                  metricLabel: "cobertura atual",
                  status: "Risco médio",
                  chart: <CoverageDonutChart />,
                  features: ["Filtrar por Vendedor", "Filtrar por Data"],
                  isNewCoverage: true
                },
                {
                  icon: Clock,
                  title: "Status dos Contatos",
                  description: "Monitore a qualidade dos dados em tempo real. Visualize quais contatos precisam de atualização com indicadores visuais intuitivos.",
                  color: "#f59e0b",
                  metric: "156",
                  metricLabel: "p/ atualizar",
                  status: "8% dos contatos",
                  chart: <StatusIndicators color="#f59e0b" />,
                  features: ["Validação automática", "Priorização inteligente", "Sugestões de correção"]
                },
                {
                  icon: Activity,
                  title: "Índice de Proatividade",
                  description: "Acompanhe a evolução da proatividade da equipe com gráficos de tendência. Transforme vendedores reativos em proativos.",
                  color: "#8b5cf6",
                  metric: "3.2x",
                  metricLabel: "mais proativo",
                  status: "Tendência crescente",
                  chart: <LineChart color="#8b5cf6" />,
                  features: ["Análise de tendências", "Comparativo semanal", "Alertas de queda"]
                }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className={`
                    relative overflow-hidden bg-gradient-to-br from-gray-800/90 via-gray-800/60 to-gray-900/90 
                    border border-gray-600/50 backdrop-blur-sm 
                    transition-all duration-700 ease-out
                    hover:scale-105 hover:shadow-2xl hover:border-gray-500/50
                    group
                    ${dashboardAnimated[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  {/* Background Glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"
                    style={{ backgroundColor: item.color }}
                  />
                  
                  {/* Real-time indicator */}
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400 font-mono">AO VIVO</span>
                    </div>
                  </div>

                  <CardHeader className="relative z-10 pb-2">
                    <CardTitle className="text-white flex items-center justify-between text-base mb-2">
                      <div className="flex items-center">
                        <div 
                          className="h-8 w-8 rounded-lg flex items-center justify-center mr-3 border"
                          style={{ 
                            backgroundColor: `${item.color}20`,
                            borderColor: `${item.color}40`
                          }}
                        >
                          <item.icon className="h-4 w-4" style={{ color: item.color }} />
                        </div>
                        <div>
                          <div className="text-sm font-bold">{item.title}</div>
                          <div 
                            className="text-xs font-mono font-bold"
                            style={{ color: item.color }}
                          >
                            {item.status}
                          </div>
                        </div>
                      </div>
                      
                      {/* Chart Component */}
                      <div className="flex flex-col items-center">
                        {item.chart}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0 pb-4">
                    {/* Main Metric */}
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <div 
                          className="text-xl font-bold font-mono"
                          style={{ color: item.color }}
                        >
                          {item.metric}
                        </div>
                        <div className="text-xs text-gray-400 font-mono">
                          {item.metricLabel}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-3 text-sm">
                      {item.description}
                    </p>

                    {/* Features List or Filter Buttons */}
                    <div className="space-y-1.5">
                      {item.isNewCoverage ? (
                        // Filter buttons for the new coverage card
                        <div className="flex flex-wrap gap-2">
                          {item.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex} 
                              className="inline-flex items-center px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-md text-xs text-gray-300 hover:bg-gray-600/50 transition-colors cursor-pointer"
                            >
                              {featureIndex === 0 ? <Users className="h-3 w-3 mr-1" /> : <Calendar className="h-3 w-3 mr-1" />}
                              {feature}
                            </div>
                          ))}
                        </div>
                      ) : (
                        // Regular features list for other cards
                        item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                            <div 
                              className="w-1 h-1 rounded-full mr-2"
                              style={{ backgroundColor: item.color }}
                            />
                            {feature}
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>

                  {/* Bottom accent line */}
                  <div 
                    className="absolute bottom-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: item.color }}
                  />
                </Card>
              ))}
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
                    "Agora conseguimos ver claramente quem precisa de ajuda ou ajustes imediatos. 
                    Reduzimos perdas de clientes ativos em <span className="text-green-400 font-bold not-italic">mais de 40%</span>, 
                    aumentando nosso faturamento recorrente já nos primeiros meses."
                  </blockquote>
                  <cite className="text-white font-semibold">
                    – Luiz Almeida, Diretor Comercial, Maxima Distribuidora.
                  </cite>
                  
                  {/* Tech metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-600">
                    <div className="text-center">
                      <div className="text-3xl font-bold font-mono text-green-400">40%</div>
                      <div className="text-sm text-gray-400">redução de perdas</div>
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
              Não espere perder mais clientes!
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Saiba agora como sua equipe está cuidando dos seus clientes.
              </span>
            </h2>
            
            <Button 
              asChild
              className="bg-white text-gray-900 hover:bg-gray-100 text-xl font-bold py-8 px-12 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
            >
              <Link to="/contato" className="inline-flex items-center">
                <Terminal className="h-6 w-6 mr-3" />
                Solicitar Análise Gratuita da Minha Carteira
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

export default AgenteCoberturaCarteira;
