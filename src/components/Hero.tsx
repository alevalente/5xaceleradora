
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { images } from '../assets/images';

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
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700">
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-blue-100/10 filter blur-3xl animate-float"></div>
        <div className="absolute top-[40%] right-[20%] w-80 h-80 rounded-full bg-blue-200/10 filter blur-3xl animate-float animation-delay-500"></div>
        <div className="absolute bottom-[15%] left-[30%] w-72 h-72 rounded-full bg-blue-50/10 filter blur-3xl animate-float animation-delay-1000"></div>
      </div>

      {/* Content container */}
      <div className="container-wide relative z-10" ref={heroRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left pt-20 lg:pt-0">
            <div className="inline-block bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 animate-fade-up">
              Impulsione seu negócio com IA
            </div>
            <h1 className="heading-xl mb-6 animate-fade-up delay-200 text-white">
              Aumente sua performance comercial em até <span className="text-blue-300">5x</span> com IA
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-300">
              Integre agentes inteligentes para automatizar processos comerciais, reduzir tarefas repetitivas e aumentar seu faturamento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-400">
              <a href="#solutions" className="button-primary bg-white text-blue-700 hover:bg-blue-50">
                Nossas Soluções
              </a>
              <a href="#contact" className="button-outline border-white text-white hover:bg-white/10">
                Fale com um Especialista
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-scale-in delay-500">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-2xl">
              <img 
                src={images.hero} 
                alt="Tecnologia de IA avançada com pessoas olhando para visualização de dados" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-blue-100 mb-2">Saiba mais</span>
        <ChevronDown className="h-6 w-6 text-blue-200" />
      </div>
    </section>
  );
};

export default Hero;
