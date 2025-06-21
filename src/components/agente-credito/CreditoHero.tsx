
import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from '../ui/button';

const CreditoHero = () => {
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
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse-soft"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-pulse-soft animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-pulse-soft animation-delay-500"></div>
      </div>

      <div className="container-wide text-center relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          <span className="text-white drop-shadow-lg">
            Suas análises de crédito demoram
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            dias para aprovar
          </span>
          <span className="text-white drop-shadow-lg">
            ?
          </span>
          <br />
          <span className="text-white drop-shadow-lg">
            Que tal aprovar em minutos?
          </span>
        </h1>
        
        {/* Tech Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-400/30 rounded-full backdrop-blur-sm mb-8 ring-1 ring-white/20">
          <Shield className="h-5 w-5 mr-2 text-green-100" />
          <span className="text-green-100 font-mono text-base">AI-Powered Credit Analysis</span>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Automatize até 80% da análise de crédito com Inteligência Artificial.
          <br />
          Aprove clientes em minutos, não em dias, com precisão e segurança.
        </p>

        <Button 
          onClick={handleScrollToContact}
          size="lg" 
          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-6 text-xl font-bold shadow-2xl border-2 border-green-500/30 ring-2 ring-green-400/20 hover:ring-green-400/40 transition-all duration-300 transform hover:scale-105"
        >
          <Shield className="h-6 w-6 mr-3" />
          Quero agilizar minhas aprovações
        </Button>

        <p className="mt-6 text-gray-400 text-sm">
          ⚡ Aprovação em até 5 minutos • 🛡️ Redução de 70% no risco • 📊 Análise 24/7
        </p>
      </div>
    </section>
  );
};

export default CreditoHero;
