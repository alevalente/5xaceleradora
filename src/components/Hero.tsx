
import { useEffect, useRef } from 'react';
import { TrendingUp, Users, Zap, Target, Clock, DollarSign, ArrowRight, Brain, BarChart3 } from 'lucide-react';

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
            
            {/* Badge provocativo */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-400/30 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              Seus concorrentes já estão usando IA
            </div>
            
            {/* Título impactante */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-up delay-200 text-white leading-tight">
              Enquanto você hesita,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 animate-pulse-soft">
                eles faturam 5x mais
              </span>
            </h1>
            
            {/* Subtítulo direto */}
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto lg:mx-0 animate-fade-up delay-300 font-light">
              Pare de perder vendas para quem já automatizou processos comerciais com agentes de IA inteligentes.
            </p>
            
            {/* CTAs com destaque */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-400 mb-8">
              <a href="#solutions" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg">
                <TrendingUp className="h-5 w-5 mr-2" />
                Quero Recuperar Vendas Perdidas
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg">
                Ver Demonstração Gratuita
              </a>
            </div>

            {/* Prova social rápida */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-blue-200 animate-fade-up delay-500">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="text-sm">+200 empresas</span>
              </div>
              <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                <span className="text-sm">Resultados em 30 dias</span>
              </div>
            </div>
          </div>

          {/* Coluna lateral - cards flutuantes */}
          <div className="lg:col-span-5 relative hidden lg:block">
            
            {/* Card principal - glassmorphism */}
            <div className="relative">
              <div className="glass-card p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Performance Real</h3>
                    <p className="text-blue-200">Cliente do mês passado</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Conversão de Leads</span>
                    <span className="text-green-300 font-bold text-xl">+347%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Tempo de Resposta</span>
                    <span className="text-blue-300 font-bold text-xl">2 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">ROI em 30 dias</span>
                    <span className="text-yellow-300 font-bold text-xl">R$ 89k</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards secundários flutuantes */}
            <div className="absolute -top-8 -right-4 glass-card p-4 animate-float animation-delay-300">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-blue-300" />
                <div>
                  <p className="text-white font-bold text-lg">24/7</p>
                  <p className="text-blue-200 text-sm">Atendimento</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-8 glass-card p-4 animate-float animation-delay-700">
              <div className="flex items-center gap-3">
                <DollarSign className="h-8 w-8 text-green-300" />
                <div>
                  <p className="text-white font-bold text-lg">5x</p>
                  <p className="text-blue-200 text-sm">Mais vendas</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-12 glass-card p-4 animate-float animation-delay-1000">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-yellow-300" />
                <div>
                  <p className="text-white font-bold text-lg">Instantâneo</p>
                  <p className="text-blue-200 text-sm">Setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator melhorado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-blue-200 mb-2 font-medium">Descubra o Impacto</span>
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Efeito de luz de fundo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
