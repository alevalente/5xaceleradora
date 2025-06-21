
import React from 'react';
import { Headphones } from 'lucide-react';
import { Button } from '../ui/button';

const SDRHero = () => {
  const handleScrollToContact = () => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gray-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-pulse-soft"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-400 rounded-full animate-pulse-soft animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse-soft animation-delay-500"></div>
      </div>

      <div className="container-wide text-center relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          <span className="text-white drop-shadow-lg">
            Seus leads ficam esperando
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
            horas para serem atendidos
          </span>
          <span className="text-white drop-shadow-lg">
            ?
          </span>
          <br />
          <span className="text-white drop-shadow-lg">
            Que tal atender em segundos e qualificar automaticamente?
          </span>
        </h1>
        
        {/* Tech Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-orange-500/20 border border-orange-400/30 rounded-full backdrop-blur-sm mb-8 ring-1 ring-white/20">
          <Headphones className="h-5 w-5 mr-2 text-orange-100" />
          <span className="text-orange-100 font-mono text-base">AI-Powered SDR Assistant</span>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Transforme cada lead em oportunidade qualificada com atendimento imediato e inteligente.
          <br />
          Nunca mais perca vendas por demora no primeiro contato.
        </p>

        <Button 
          onClick={handleScrollToContact}
          size="lg" 
          className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-6 text-xl font-bold shadow-2xl border-2 border-orange-500/30 ring-2 ring-orange-400/20 hover:ring-orange-400/40 transition-all duration-300 transform hover:scale-105"
        >
          <Headphones className="h-6 w-6 mr-3" />
          Quero atender instantaneamente
        </Button>

        <p className="mt-6 text-gray-400 text-sm">
          ⚡ Atendimento em segundos • 🎯 Qualificação automática • 📈 Conversão 3x maior
        </p>
      </div>
    </section>
  );
};

export default SDRHero;
