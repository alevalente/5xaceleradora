
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

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
      <div className="container-wide relative z-20" ref={heroRef}>
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Coluna principal - conteúdo */}
          <div className="lg:col-span-6 text-center lg:text-left pt-20 lg:pt-0">
            
            {/* Título de oportunidade */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-up delay-200 text-white leading-tight">
              Domine a IA antes<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 animate-pulse-soft">
                dos seus concorrentes
              </span>
            </h1>
            
            {/* Subtítulo de vantagem competitiva */}
            <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-2xl mx-auto lg:mx-0 animate-fade-up delay-300 font-light">
              Ganhe vantagem competitiva automatizando suas vendas e atendimento enquanto seus concorrentes ainda fazem tudo manual.
            </p>
            
            {/* CTAs focados em oportunidade */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-400 mb-4">
              <button 
                onClick={handleCTAClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
              >
                <Bot className="h-5 w-5 mr-2" />
                Quero automatizar minhas vendas
              </button>
              <a href="#solutions" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg">
                Descubra como a IA trabalha por você
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

          {/* Coluna lateral - cartões flutuantes visíveis a partir de lg breakpoint */}
          <div className="lg:col-span-4 relative hidden lg:block">
            
            {/* Área de contenção para os cartões flutuantes */}
            <div className="relative w-full h-[500px] lg:h-[600px] xl:h-[700px] overflow-visible">
              
              {/* Cards flutuantes com posicionamento corrigido e efeito hover */}
              
              {/* Card 1 - Automação (abaixado um pouco) */}
              <div className="absolute top-20 lg:top-32 right-8 lg:right-12 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 lg:p-4 animate-float animation-delay-300 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/15 cursor-pointer">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Settings className="h-6 w-6 lg:h-8 lg:w-8 text-yellow-300" />
                  <div>
                    <p className="text-white font-bold text-sm lg:text-lg">Automação</p>
                    <p className="text-blue-200 text-xs lg:text-sm">Inteligente</p>
                  </div>
                </div>
              </div>

              {/* Card 2 - WhatsApp (reposicionado para o lado direito do Reativação) */}
              <div className="absolute bottom-24 lg:bottom-32 right-4 lg:right-8 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 lg:p-4 animate-float animation-delay-500 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/15 cursor-pointer">
                <div className="flex items-center gap-2 lg:gap-3">
                  <MessageCircle className="h-6 w-6 lg:h-8 lg:w-8 text-purple-300" />
                  <div>
                    <p className="text-white font-bold text-sm lg:text-lg">WhatsApp</p>
                    <p className="text-blue-200 text-xs lg:text-sm">Automático</p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Zero Erros (posição original) */}
              <div className="absolute top-32 lg:top-48 left-0 lg:left-0 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 lg:p-4 animate-float animation-delay-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/15 cursor-pointer">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-green-300" />
                  <div>
                    <p className="text-white font-bold text-sm lg:text-lg">Zero Erros</p>
                    <p className="text-blue-200 text-xs lg:text-sm">Humanos</p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Follow-Up (abaixado um pouco) */}
              <div className="absolute top-64 lg:top-80 left-2 lg:left-4 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 lg:p-4 animate-float animation-delay-400 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/15 cursor-pointer">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Bell className="h-6 w-6 lg:h-8 lg:w-8 text-orange-300" />
                  <div>
                    <p className="text-white font-bold text-sm lg:text-lg">Follow-Up</p>
                    <p className="text-blue-200 text-xs lg:text-sm">Imediato</p>
                  </div>
                </div>
              </div>

              {/* Card 5 - CRM (movido para baixo para não sobrepor) */}
              <div className="absolute top-64 lg:top-80 right-2 lg:right-4 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 lg:p-4 animate-float animation-delay-1000 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/15 cursor-pointer">
                <div className="flex items-center gap-2 lg:gap-3">
                  <FileText className="h-6 w-6 lg:h-8 lg:w-8 text-blue-300" />
                  <div>
                    <p className="text-white font-bold text-sm lg:text-lg">CRM</p>
                    <p className="text-blue-200 text-xs lg:text-sm">Integrado</p>
                  </div>
                </div>
              </div>

              {/* Card 6 - Reativação (movido para a esquerda para ficar ao lado da Automação) */}
              <div className="absolute bottom-24 lg:bottom-32 left-8 lg:left-12 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 lg:p-4 animate-float animation-delay-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white/15 cursor-pointer">
                <div className="flex items-center gap-2 lg:gap-3">
                  <RotateCcw className="h-6 w-6 lg:h-8 lg:w-8 text-cyan-300" />
                  <div>
                    <p className="text-white font-bold text-sm lg:text-lg">Reativação</p>
                    <p className="text-blue-200 text-xs lg:text-sm">Automática</p>
                  </div>
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
