
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, BarChart3, AlertTriangle, CheckCircle2, Phone, TrendingUp, Cpu, Zap, Terminal, Brain } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const AgenteCoberturaCarteira = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    neglectedClients: 0,
    inactiveVendors: 0,
    outdatedData: 0
  });

  // Animate numbers on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedNumbers({
        neglectedClients: 47,
        inactiveVendors: 23,
        outdatedData: 31
      });
    }, 500);

    return () => clearTimeout(timer);
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-medium">
                  Sem clareza sobre como seus vendedores cuidam dos clientes, 
                  <span className="text-red-400 font-bold"> você perde dinheiro todos os dias.</span>
                </p>
                
                {/* Dark Dashboard Mockup */}
                <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-red-400 font-bold flex items-center">
                      <Terminal className="h-5 w-5 mr-2" />
                      Sistema de Monitoramento
                    </h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-red-300 font-mono text-sm">Clientes sem contato há +30 dias</span>
                        <span className="text-red-400 font-bold text-2xl font-mono">
                          {animatedNumbers.neglectedClients}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full transition-all duration-2000 ease-out"
                          style={{ width: `${animatedNumbers.neglectedClients}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-900/30 border border-orange-500/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-orange-300 font-mono text-sm">Vendedores inativos</span>
                        <span className="text-orange-400 font-bold text-2xl font-mono">
                          {animatedNumbers.inactiveVendors}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full transition-all duration-2000 ease-out animation-delay-300"
                          style={{ width: `${animatedNumbers.inactiveVendors}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-yellow-300 font-mono text-sm">Dados desatualizados</span>
                        <span className="text-yellow-400 font-bold text-2xl font-mono">
                          {animatedNumbers.outdatedData}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-yellow-500 h-2 rounded-full transition-all duration-2000 ease-out animation-delay-500"
                          style={{ width: `${animatedNumbers.outdatedData}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
                <img 
                  src="/lovable-uploads/f6aab51a-8e0d-479c-a816-84642f9f736a.png" 
                  alt="Dashboard mostrando clientes negligenciados" 
                  className="relative w-full rounded-lg shadow-2xl border border-gray-600"
                />
              </div>
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
                  É uma solução automatizada, baseada em <span className="text-blue-400 font-semibold">Inteligência Artificial</span>, 
                  que identifica automaticamente quais clientes estão sendo negligenciados pelos seus vendedores, 
                  garantindo visibilidade total e imediata da qualidade do atendimento da carteira.
                </p>
              </div>

              {/* How it works */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  Como o Agente garante que nenhum cliente fique esquecido?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: BarChart3,
                      title: "Análise em Tempo Real",
                      description: "Analisa conversas comerciais pelo WhatsApp diariamente",
                      color: "blue"
                    },
                    {
                      icon: Users,
                      title: "Detecção Inteligente",
                      description: "Identifica automaticamente clientes sem contato recente",
                      color: "purple"
                    },
                    {
                      icon: Shield,
                      title: "Monitoramento Ativo",
                      description: "Aponta claramente quais vendedores estão cuidando adequadamente ou negligenciando clientes",
                      color: "green"
                    }
                  ].map((item, index) => (
                    <Card key={index} className="bg-gray-800/50 border-gray-600/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <CardContent className="pt-8 text-center">
                        <div className={`h-16 w-16 mx-auto mb-4 rounded-full bg-${item.color}-500/20 flex items-center justify-center border border-${item.color}-400/30`}>
                          <item.icon className={`h-8 w-8 text-${item.color}-400`} />
                        </div>
                        <h4 className="text-white font-bold mb-3">{item.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
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
                  Periodicidade adaptada ao ciclo médio de compra do seu cliente 
                  <span className="text-blue-400 font-mono"> (semanal, quinzenal ou mensal)</span>.
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
