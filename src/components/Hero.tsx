
import { useEffect, useRef } from 'react';
import { TrendingUp, Zap, Target, Clock, DollarSign, Bot, Shield, Settings, FileText, MessageCircle, Bell, RotateCcw } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 600);
      
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
        heroRef.current.style.opacity = `${opacity}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full bg-blue-400/20 filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-[60%] right-[15%] w-80 h-80 rounded-full bg-indigo-400/20 filter blur-3xl animate-float animation-delay-500"></div>
        <div className="absolute bottom-[20%] left-[40%] w-72 h-72 rounded-full bg-purple-400/20 filter blur-3xl animate-float animation-delay-1000"></div>
        
        {/* Partículas flutuantes */}
        <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-blue-300 rounded-full animate-float animation-delay-300"></div>
        <div className="absolute top-[50%] right-[30%] w-3 h-3 bg-indigo-300 rounded-full animate-float animation-delay-700"></div>
        <div className="absolute bottom-[40%] left-[60%] w-2 h-2 bg-purple-300 rounded-full animate-float animation-delay-200"></div>
      </div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Main content */}
      <div className="container-wide relative z-10" ref={heroRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          
          {/* Coluna principal - conteúdo */}
          <div className="lg:col-span-7 text-center lg:text-left pt-20 lg:pt-0">
            
            {/* Título de oportunidade */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-up delay-200 text-white leading-tight">
              Domine a IA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 animate-pulse-soft">
                antes dos concorrentes
              </span>
            </h1>
            
            {/* Subtítulo de vantagem competitiva */}
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto lg:mx-0 animate-fade-up delay-300 font-light">
              Ganhe vantagem competitiva automatizando suas vendas e atendimento enquanto seus concorrentes ainda fazem tudo manual.
            </p>
            
            {/* CTAs focados em oportunidade */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-400 mb-8">
              <a href="#solutions" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg">
                <Bot className="h-5 w-5 mr-2" />
                Quero Essa Vantagem Agora
              </a>
              <a href="#solutions" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg">
                Ver Como Funciona
              </a>
            </div>

            {/* Posicionamento de especialistas integrado */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-200 animate-fade-up delay-500">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <span className="text-sm">Somos especialistas em automatizar processos comerciais com inteligência artificial</span>
              </div>
            </div>
          </div>

          {/* Coluna lateral - cards com benefícios concretos */}
          <div className="lg:col-span-5 relative hidden lg:block">
            
            {/* Card principal - benefícios tangíveis */}
            <div className="relative">
              <div className="glass-card p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Resultados Concretos</h3>
                    <p className="text-blue-200">Para sua empresa</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Redução imediata de custos operacionais</span>
                    <span className="text-green-300 font-bold text-xl">60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Atendimento instantâneo de leads</span>
                    <span className="text-blue-300 font-bold text-xl">24/7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Leads qualificados automaticamente</span>
                    <span className="text-yellow-300 font-bold text-xl">100%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards secundários com benefícios específicos - reorganizados */}
            {/* Card 1 - Topo Esquerdo */}
            <div className="absolute -top-12 -left-12 glass-card p-4 animate-float animation-delay-300">
              <div className="flex items-center gap-3">
                <Settings className="h-8 w-8 text-yellow-300" />
                <div>
                  <p className="text-white font-bold text-lg">Automação</p>
                  <p className="text-blue-200 text-sm">Inteligente</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Topo Direito */}
            <div className="absolute -top-8 -right-8 glass-card p-4 animate-float animation-delay-500">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-8 w-8 text-purple-300" />
                <div>
                  <p className="text-white font-bold text-lg">Clientes Sempre</p>
                  <p className="text-blue-200 text-sm">Ativos</p>
                </div>
              </div>
            </div>

            {/* Card 3 - Meio Esquerdo */}
            <div className="absolute top-[35%] -left-16 glass-card p-4 animate-float animation-delay-700">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-green-300" />
                <div>
                  <p className="text-white font-bold text-lg">Zero Erros</p>
                  <p className="text-blue-200 text-sm">Humanos</p>
                </div>
              </div>
            </div>

            {/* Card 4 - Meio Direito */}
            <div className="absolute top-[25%] -right-16 glass-card p-4 animate-float animation-delay-400">
              <div className="flex items-center gap-3">
                <Bell className="h-8 w-8 text-orange-300" />
                <div>
                  <p className="text-white font-bold text-lg">Follow-Up</p>
                  <p className="text-blue-200 text-sm">Imediato</p>
                </div>
              </div>
            </div>

            {/* Card 5 - Meio Centro */}
            <div className="absolute top-[55%] -right-12 glass-card p-4 animate-float animation-delay-1000">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-blue-300" />
                <div>
                  <p className="text-white font-bold text-lg">CRM</p>
                  <p className="text-blue-200 text-sm">Automático</p>
                </div>
              </div>
            </div>

            {/* Card 6 - Fundo Esquerdo */}
            <div className="absolute bottom-[20%] -left-10 glass-card p-4 animate-float animation-delay-800">
              <div className="flex items-center gap-3">
                <RotateCcw className="h-8 w-8 text-cyan-300" />
                <div>
                  <p className="text-white font-bold text-lg">Reativação</p>
                  <p className="text-blue-200 text-sm">Automática</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Efeito de luz de fundo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
