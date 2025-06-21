
import React from 'react';
import { Brain } from 'lucide-react';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
