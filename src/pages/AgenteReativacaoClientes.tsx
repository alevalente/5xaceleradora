
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReativacaoHero from '../components/agente-reativacao/ReativacaoHero';
import ReativacaoExplanation from '../components/agente-reativacao/ReativacaoExplanation';
import ReativacaoFeatures from '../components/agente-reativacao/ReativacaoFeatures';
import ReativacaoExamples from '../components/agente-reativacao/ReativacaoExamples';
import ReativacaoDashboard from '../components/agente-reativacao/ReativacaoDashboard';
import ReativacaoKanban from '../components/agente-reativacao/ReativacaoKanban';
import ReativacaoTestimonial from '../components/agente-reativacao/ReativacaoTestimonial';
import ReativacaoCTA from '../components/agente-reativacao/ReativacaoCTA';

const AgenteReativacaoClientes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ReativacaoHero />
        <ReativacaoExplanation />
        <ReativacaoFeatures />
        <ReativacaoExamples />
        <ReativacaoDashboard />
        <ReativacaoKanban />
        <ReativacaoTestimonial />
        <ReativacaoCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AgenteReativacaoClientes;
