
import React from 'react';
import { Bot, Zap, MessageCircle, Mail } from 'lucide-react';

const ReativacaoExplanation = () => {
  return (
    <section className="py-20 bg-gray-900 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 border border-blue-500/30">
              <Bot className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              O que é o Agente de Reativação?
            </h2>
          </div>
          
          <div className="text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              O <strong className="text-white">Agente de Reativação de Clientes Inativos</strong> automatiza integralmente o processo estratégico de recuperação dos clientes que deixaram de comprar, garantindo contatos constantes e personalizados simultaneamente por WhatsApp e e-mail, até obter respostas positivas.
            </p>
            <p>
              Você define quantos contatos e follow-ups deseja realizar, e nosso agente trabalha automaticamente nesses dois canais até que o cliente responda, garantindo que nenhum cliente inativo fique para trás.
            </p>
          </div>

          {/* Indicadores visuais dos canais */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4 border border-green-500/30">
                <MessageCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-gray-400">Contato direto e pessoal</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4 border border-blue-500/30">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Automação</h3>
              <p className="text-gray-400">Trabalha 24/7 sem parar</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
                <Mail className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">E-mail</h3>
              <p className="text-gray-400">Alcance profissional amplo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoExplanation;
