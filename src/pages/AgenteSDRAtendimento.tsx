
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import SDRHero from '../components/agente-sdr/SDRHero';
import SDRExplanation from '../components/agente-sdr/SDRExplanation';
import SDRKanbanFlow from '../components/agente-sdr/SDRKanbanFlow';
import SDRDashboard from '../components/agente-sdr/SDRDashboard';
import SDRTestimonial from '../components/agente-sdr/SDRTestimonial';
import SDRCTA from '../components/agente-sdr/SDRCTA';
import { seoData } from '../data/seoData';
import { getCanonicalUrl } from '../utils/seo';

const AgenteSDRAtendimento = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title={seoData.agenteSDRAtendimento.title}
        description={seoData.agenteSDRAtendimento.description}
        canonical={getCanonicalUrl('/agente-sdr-atendimento')}
        keywords={seoData.agenteSDRAtendimento.keywords}
      />
      <Navbar />
      <main className="flex-grow">
        <SDRHero />
        <SDRExplanation />
        <SDRKanbanFlow />
        <SDRDashboard />
        <SDRTestimonial />
        <SDRCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AgenteSDRAtendimento;
