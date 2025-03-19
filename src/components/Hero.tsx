
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 500);
      
      // Parallax effect
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
        heroRef.current.style.opacity = `${opacity}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-blue-100/40 filter blur-3xl animate-float"></div>
        <div className="absolute top-[40%] right-[20%] w-80 h-80 rounded-full bg-blue-200/30 filter blur-3xl animate-float animation-delay-500"></div>
        <div className="absolute bottom-[15%] left-[30%] w-72 h-72 rounded-full bg-blue-50/40 filter blur-3xl animate-float animation-delay-1000"></div>
      </div>

      {/* Content container */}
      <div className="container-wide relative z-10" ref={heroRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left pt-20 lg:pt-0">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-6 animate-fade-up">
              Impulsione seu negócio com IA
            </div>
            <h1 className="heading-xl mb-6 animate-fade-up delay-200">
              Aumente sua performance comercial em até <span className="text-blue-700">5x</span> com IA
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-300">
              Integre agentes inteligentes para automatizar processos comerciais, reduzir tarefas repetitivas e aumentar seu faturamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-400">
              <a href="#solutions" className="button-primary">
                Nossas Soluções
              </a>
              <a href="#contact" className="button-outline">
                Fale com um Especialista
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-scale-in delay-500">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-blue rounded-3xl transform rotate-6 opacity-10"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-glass-strong overflow-hidden">
                {/* This is a placeholder for a dashboard or product visualization */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
                  <div className="text-center animate-pulse-soft">
                    <div className="w-24 h-24 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="w-40 h-6 bg-blue-100 rounded-full mx-auto mb-4"></div>
                    <div className="w-64 h-4 bg-blue-50 rounded-full mx-auto mb-2"></div>
                    <div className="w-48 h-4 bg-blue-50 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 mb-2">Saiba mais</span>
        <ChevronDown className="h-6 w-6 text-blue-500" />
      </div>
    </section>
  );
};

export default Hero;
