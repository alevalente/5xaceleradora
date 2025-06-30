
import React from 'react';
import SolutionCategories from './solutions/SolutionCategories';
import AgentSolutions from './solutions/AgentSolutions';
import CustomAgentsByPersona from './solutions/CustomAgentsByPersona';

const IntelligentSolutions = () => {
  const [api, setApi] = React.useState<any>();

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container-improved">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="heading-lg mb-6">Automações Inteligentes para Alavancar suas Vendas</h2>
          <p className="subtitle-section text-gray-600">
            Conheça soluções práticas e inteligentes que aumentam a eficiência da sua equipe comercial, reduzem tarefas repetitivas e aceleram o crescimento das suas vendas.
          </p>
        </div>

        <div className="space-y-16">
          <SolutionCategories />
          <AgentSolutions setApi={setApi} />
          <CustomAgentsByPersona />
        </div>
      </div>
    </section>
  );
};

export default IntelligentSolutions;
