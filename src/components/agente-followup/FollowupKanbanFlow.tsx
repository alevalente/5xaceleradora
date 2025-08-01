
import React from 'react';
import KanbanColumn from './KanbanColumn';
import KanbanArrows from './KanbanArrows';
import KanbanStats from './KanbanStats';
import { kanbanData } from './kanbanData';

const FollowupKanbanFlow = () => {
  return (
    <section className="py-20 bg-[#0F172A] relative">
      <div className="container max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como o nosso Agente resolve o problema de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">follow-ups esquecidos</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Através de um Kanban inteligente que monitora e organiza automaticamente cada oportunidade, desde a detecção até a recuperação, garantindo que nenhuma venda seja perdida por falta de follow-up
          </p>
        </div>

        {/* Kanban Board */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-6 lg:items-start gap-8 max-w-7xl mx-auto mb-12">
          <KanbanColumn 
            columnType="detectada" 
            opportunities={kanbanData.detectada} 
            delay={0} 
          />
          <KanbanColumn 
            columnType="execucao" 
            opportunities={kanbanData.execucao} 
            delay={100} 
          />
          <KanbanColumn 
            columnType="aguardando" 
            opportunities={kanbanData.aguardando} 
            delay={200} 
          />
          <KanbanColumn 
            columnType="recuperada" 
            opportunities={kanbanData.recuperada} 
            delay={300} 
          />
        </div>

        <KanbanArrows />
        <KanbanStats />
      </div>
    </section>
  );
};

export default FollowupKanbanFlow;
