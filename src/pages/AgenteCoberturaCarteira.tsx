
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, BarChart3, AlertTriangle, CheckCircle2, Phone, TrendingUp, Cpu, Zap, Terminal, Brain } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';

const AgenteCoberturaCarteira = () => {
  const [animatedCards, setAnimatedCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    // Staggered animation for cards
    const timeouts = [
      setTimeout(() => setAnimatedCards(prev => [true, prev[1], prev[2]]), 200),
      setTimeout(() => setAnimatedCards(prev => [prev[0], true, prev[2]]), 400),
      setTimeout(() => setAnimatedCards(prev => [prev[0], prev[1], true]), 600),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

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
                      `}>
                        {/* Glow effect on hover */}
                        <div className={`
                          absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                          bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 blur-xl
                        `} />
                        
                        <CardContent className="pt-8 text-center relative z-10">
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
                          <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                            {item.description}
                          </p>

                          {/* Animated Progress Bar */}
                          <div className="space-y-2">
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

        {/* Dashboard Examples - Tech Grid */}
        <section className="py-16 bg-gray-900">
          <div className="container-wide">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dashboard
              </span>{" "}
              ilustrativo prático
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Users,
                  title: "Carteira de Clientes",
                  description: "Veja claramente quantos clientes cada vendedor possui e identifique rapidamente quais clientes estão sem vendedor atribuído ou inativos.",
                  color: "green",
                  metric: "1,247",
                  metricLabel: "clientes ativos"
                },
                {
                  icon: BarChart3,
                  title: "Cobertura Real da Carteira",
                  description: "Descubra exatamente o percentual de clientes cobertos pelos vendedores e veja imediatamente quem precisa de atenção urgente.",
                  color: "blue",
                  metric: "87%",
                  metricLabel: "cobertura atual"
                },
                {
                  icon: Phone,
                  title: "Dados Desatualizados",
                  description: "Tenha clareza imediata sobre números de telefone que não correspondem aos dados cadastrados no seu sistema ou planilhas.",
                  color: "orange",
                  metric: "156",
                  metricLabel: "contatos p/ atualizar"
                },
                {
                  icon: TrendingUp,
                  title: "Proatividade vs. Reatividade",
                  description: "Veja claramente se sua equipe está sendo ativa (procurando clientes) ou passiva (esperando contatos).",
                  color: "purple",
                  metric: "3.2x",
                  metricLabel: "mais proativo"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-gray-800/70 border-gray-600/50 backdrop-blur-sm hover:bg-gray-700/70 transition-all duration-300 hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className={`text-${item.color}-400 flex items-center text-xl`}>
                        <item.icon className="h-6 w-6 mr-3" />
                        {item.title}
                      </CardTitle>
                      <div className="text-right">
                        <div className={`text-2xl font-bold font-mono text-${item.color}-400`}>
                          {item.metric}
                        </div>
                        <div className="text-xs text-gray-400 font-mono">
                          {item.metricLabel}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                    <div className={`mt-4 h-1 bg-${item.color}-500/30 rounded-full`}>
                      <div className={`h-1 bg-${item.color}-500 rounded-full transition-all duration-1000 group-hover:w-full`} style={{width: '60%'}}></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                    – Luiz Almeida, Diretor Comercial, Fera Atacado.
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
