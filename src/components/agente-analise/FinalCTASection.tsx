
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Terminal, Zap } from 'lucide-react';
import { Button } from '../ui/button';

const FinalCTASection = () => {
  const handleCTAClick = () => {
    console.log('CTA button clicked - navigating to:', '/agente-analise-conversas-followup');
  };

  return (
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
          <Link 
            to="/agente-analise-conversas-followup" 
            className="inline-flex items-center"
            onClick={handleCTAClick}
          >
            <Terminal className="h-6 w-6 mr-3" />
            Conhecer o Agente de Follow-up
            <Zap className="h-6 w-6 ml-3" />
          </Link>
        </Button>
        
        {/* Urgency indicator */}
        <p className="mt-6 text-white/80 font-mono text-sm">
          ⚡ Análise disponível por tempo limitado
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
