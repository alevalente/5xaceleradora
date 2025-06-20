import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Cpu, Zap, Terminal, CheckCircle2, AlertTriangle, BarChart3, MessageSquare, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import ConversationAnalysisCards from '../components/agente-analise/ConversationAnalysisCards';
import PerformanceMetrics from '../components/agente-analise/PerformanceMetrics';
import ImprovementSuggestions from '../components/agente-analise/ImprovementSuggestions';
import DetailedAnalysisSection from '../components/agente-analise/DetailedAnalysisSection';
import HowItWorksSection from '../components/agente-analise/HowItWorksSection';

const AgenteAnaliseConversas = () => {
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
              <DetailedAnalysisSection />

              {/* How it works - Enhanced Interactive Cards */}
              <HowItWorksSection />
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
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Conversation Analysis Cards */}
              <div className="lg:col-span-2">
                <Card className="relative overflow-hidden bg-gray-100 border-2 border-gray-300 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:border-blue-400 group opacity-100 translate-y-0">
                  <CardHeader className="relative z-10 pb-4">
                    <CardTitle className="text-gray-900 flex items-center text-lg mb-2">
                      <div className="h-8 w-8 rounded-lg flex items-center justify-center mr-3 bg-blue-100 border-2 border-blue-300">
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">Análise de Conversas</div>
                        <div className="text-sm text-blue-600 font-semibold">Últimas 24 horas</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0 pb-6">
                    <ConversationAnalysisCards />
                  </CardContent>
                </Card>
              </div>

              {/* Side Panels */}
              <div className="space-y-8">
                {/* Performance Metrics */}
                <Card className="relative overflow-hidden bg-gray-100 border-2 border-gray-300 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:border-blue-400 group opacity-100 translate-y-0">
                  <CardHeader className="relative z-10 pb-2">
                    <CardTitle className="text-gray-900 flex items-center text-base mb-2">
                      <div className="h-6 w-6 rounded-lg flex items-center justify-center mr-2 bg-green-100 border border-green-300">
                        <BarChart3 className="h-3 w-3 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">Métricas de Performance</div>
                        <div className="text-xs text-green-600 font-semibold">Visão Geral</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0 pb-4">
                    <PerformanceMetrics />
                  </CardContent>
                </Card>

                {/* Improvement Suggestions */}
                <Card className="relative overflow-hidden bg-gray-100 border-2 border-gray-300 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:border-blue-400 group opacity-100 translate-y-0">
                  <CardHeader className="relative z-10 pb-2">
                    <CardTitle className="text-gray-900 flex items-center text-base mb-2">
                      <div className="h-6 w-6 rounded-lg flex items-center justify-center mr-2 bg-orange-100 border border-orange-300">
                        <TrendingUp className="h-3 w-3 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">Sugestões de Melhoria</div>
                        <div className="text-xs text-orange-600 font-semibold">Prioridades</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0 pb-4">
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
