
import React from 'react';
import KanbanColumn from './KanbanColumn';
import KanbanArrows from './KanbanArrows';
import KanbanStats from './KanbanStats';
import { kanbanData } from './kanbanData';

const CreditoKanbanFlow = () => {
  return (
    <section className="py-20 bg-[#0F172A] relative">
      <div className="container max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como nosso Agente <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">automatiza análises de crédito</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Através de um sistema inteligente que processa automaticamente cada solicitação, desde o recebimento até a liberação, garantindo aprovações rápidas e seguras
          </p>
        </div>

        {/* Kanban Board */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-6 lg:items-start gap-8 max-w-7xl mx-auto mb-12">
          <KanbanColumn 
            columnType="solicitacao" 
            opportunities={kanbanData.solicitacao} 
            delay={0} 
          />
          <KanbanColumn 
            columnType="analise" 
            opportunities={kanbanData.analise} 
            delay={100} 
          />
          <KanbanColumn 
            columnType="aprovacao" 
            opportunities={kanbanData.aprovacao} 
            delay={200} 
          />
          <KanbanColumn 
            columnType="liberacao" 
            opportunities={kanbanData.liberacao} 
            delay={300} 
          />
        </div>

        <KanbanArrows />
        <KanbanStats />
      </div>
    </section>
  );
};

export default CreditoKanbanFlow;
