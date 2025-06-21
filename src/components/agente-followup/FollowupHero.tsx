
import React from 'react';
import { Brain } from 'lucide-react';
import { Button } from '../ui/button';

const FollowupHero = () => {
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
          <span className="text-white drop-shadow-lg">
            Você sabe que seus vendedores esquecem de fazer
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            follow-up
          </span>
          <span className="text-white drop-shadow-lg">
            .
          </span>
          <br />
          <span className="text-white drop-shadow-lg">
            Mas você consegue controlar isso hoje?
          </span>
        </h1>
        
        {/* Tech Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm mb-8">
          <Brain className="h-4 w-4 mr-2 text-blue-400" />
          <span className="text-blue-300 font-mono text-sm">AI-Powered Follow-up</span>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          É humanamente impossível acompanhar cada conversa da sua equipe.
          <br />
          O nosso Agente de Follow-up identifica e recupera automaticamente as oportunidades que você não consegue ver.
        </p>

        <Button 
          onClick={handleScrollToContact}
          size="lg" 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-bold shadow-2xl border-2 border-blue-500/30 ring-2 ring-blue-400/20 hover:ring-blue-400/40 transition-all duration-300 transform hover:scale-105"
        >
          <Brain className="h-6 w-6 mr-3" />
          Quero conhecer a solução
        </Button>

        <p className="mt-6 text-gray-400 text-sm">
          ⚡ Implementação média em 21 dias • 🎯 Resultados comprovados por clientes reais
        </p>
      </div>
    </section>
  );
};

export default FollowupHero;
