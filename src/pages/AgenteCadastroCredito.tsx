
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CreditoHero from '../components/agente-credito/CreditoHero';
import CreditoExplanation from '../components/agente-credito/CreditoExplanation';
import CreditoKanbanFlow from '../components/agente-credito/CreditoKanbanFlow';
import CreditoDashboard from '../components/agente-credito/CreditoDashboard';
import CreditoTestimonial from '../components/agente-credito/CreditoTestimonial';
import CreditoCTA from '../components/agente-credito/CreditoCTA';

const AgenteCadastroCredito = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CreditoHero />
        <CreditoExplanation />
        <CreditoKanbanFlow />
        <CreditoDashboard />
        <CreditoTestimonial />
        <CreditoCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AgenteCadastroCredito;
