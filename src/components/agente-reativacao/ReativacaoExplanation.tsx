
import React from 'react';
import { Bot, Brain, Magnet, Target } from 'lucide-react';

const ReativacaoExplanation = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background effects com partículas flutuantes */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-green-400/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse-soft" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glass Morphism Container para título e subtítulo */}
          <div className="mb-16 animate-fade-in">
            <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-glass-strong">
              {/* Gradient overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl"></div>
              
              {/* Conteúdo do título */}
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  O que é o Agente de Reativação?
                </h2>
                
                <div className="text-lg text-gray-300 leading-relaxed space-y-6">
                  <p>
                    O <strong className="text-white">Agente de Reativação de Clientes Inativos</strong> automatiza integralmente o processo estratégico de recuperação dos clientes que deixaram de comprar, garantindo contatos constantes e personalizados simultaneamente por WhatsApp e e-mail, até obter respostas positivas.
                  </p>
                  <p>
                    Você define quantos contatos e follow-ups deseja realizar, e nosso agente trabalha automaticamente nesses dois canais até que o cliente responda, garantindo que nenhum cliente inativo fique para trás.
                  </p>
                </div>
              </div>
              
              {/* Efeito de brilho nas bordas */}
              <div className="absolute inset-0 rounded-3xl opacity-50">
                <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Seção de ícones completamente redesenhada */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Inteligência Artificial */}
            <div className="group text-center animate-scale" style={{animationDelay: '0.2s'}}>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 group-hover:scale-110"></div>
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/40 backdrop-blur-md shadow-glass-strong group-hover:shadow-hover group-hover:scale-110 group-hover:border-purple-400/60 transition-all duration-500">
                  <Brain className="h-9 w-9 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-purple-500/10 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              </div>
              <h3 className="font-bold text-xl text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                Inteligência Artificial
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                Identifica automaticamente o melhor momento para reconquistar cada cliente.
              </p>
            </div>

            {/* Força Magnética */}
            <div className="group text-center animate-scale" style={{animationDelay: '0.4s'}}>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 group-hover:scale-110"></div>
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full border border-red-500/40 backdrop-blur-md shadow-glass-strong group-hover:shadow-hover group-hover:scale-110 group-hover:border-red-400/60 transition-all duration-500">
                  <Magnet className="h-9 w-9 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-red-500/10 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              </div>
              <h3 className="font-bold text-xl text-white mb-3 group-hover:text-red-300 transition-colors duration-300">
                Força Magnética
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                Recupera clientes automaticamente com mensagens personalizadas e envolventes.
              </p>
            </div>

            {/* Precisão Cirúrgica */}
            <div className="group text-center animate-scale" style={{animationDelay: '0.6s'}}>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 group-hover:scale-110"></div>
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/40 backdrop-blur-md shadow-glass-strong group-hover:shadow-hover group-hover:scale-110 group-hover:border-green-400/60 transition-all duration-500">
                  <Target className="h-9 w-9 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-green-500/10 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              </div>
              <h3 className="font-bold text-xl text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                Precisão Cirúrgica
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                Garante follow-ups altamente estratégicos, aumentando a conversão dos contatos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoExplanation;
