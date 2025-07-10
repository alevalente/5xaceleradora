
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import CreditoHero from '../components/agente-credito/CreditoHero';
import CreditoExplanation from '../components/agente-credito/CreditoExplanation';
import CreditoKanbanFlow from '../components/agente-credito/CreditoKanbanFlow';
import CreditoDashboard from '../components/agente-credito/CreditoDashboard';
import CreditoTestimonial from '../components/agente-credito/CreditoTestimonial';
import CreditoCTA from '../components/agente-credito/CreditoCTA';
import { seoData } from '../data/seoData';
import { getCanonicalUrl } from '../utils/seo';

const AgenteCadastroCredito = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title={seoData.agenteCadastroCredito.title}
        description={seoData.agenteCadastroCredito.description}
        canonical={getCanonicalUrl('/agente-cadastro-credito')}
        keywords={seoData.agenteCadastroCredito.keywords}
      />
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
