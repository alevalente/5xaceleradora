
import React from 'react';

const PainIdentificationSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6 font-bold leading-tight">
            <span className="text-red-400">Sem acompanhar o que seus vendedores realmente falam nas conversas,</span>
            <br />
            <span className="text-gray-300">você deixa dinheiro escapar todos os dias sem perceber.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
            Cada conversa mal conduzida é uma oportunidade desperdiçada. Nosso <span className="text-blue-400 font-bold">Agente de Análise de Conversas</span> usa Inteligência Artificial para monitorar automaticamente cada interação comercial, identificando exatamente onde estão os erros que fazem você perder vendas.
            <br /><br />
            <span className="text-cyan-400 font-bold">Assim, você recebe insights imediatos e práticos para corrigir rapidamente o desempenho dos seus vendedores e parar de perder oportunidades.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainIdentificationSection;
