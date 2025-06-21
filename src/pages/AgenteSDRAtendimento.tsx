
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SDRHero from '../components/agente-sdr/SDRHero';
import SDRExplanation from '../components/agente-sdr/SDRExplanation';
import SDRKanbanFlow from '../components/agente-sdr/SDRKanbanFlow';
import SDRDashboard from '../components/agente-sdr/SDRDashboard';
import SDRTestimonial from '../components/agente-sdr/SDRTestimonial';
import SDRCTA from '../components/agente-sdr/SDRCTA';

const AgenteSDRAtendimento = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
