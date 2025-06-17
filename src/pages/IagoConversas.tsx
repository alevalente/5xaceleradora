
import React, { useEffect } from 'react';
import { Button } from '../components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IagoConversasHero from '../components/iago-conversas/IagoConversasHero';
import LeadLossTimeline from '../components/iago-conversas/LeadLossTimeline';
import SalesRepScenarios from '../components/iago-conversas/SalesRepScenarios';
import OtherScenarios from '../components/iago-conversas/OtherScenarios';
import FeaturesShowcase from '../components/iago-conversas/FeaturesShowcase';
import DemoFeatures from '../components/iago-conversas/DemoFeatures';
import ResultsMetrics from '../components/iago-conversas/ResultsMetrics';
import FinalCTA from '../components/iago-conversas/FinalCTA';
import { createObserver } from '../utils/animations';

const IagoConversas = () => {
  useEffect(() => {
    const observer = createObserver('animate-on-scroll', 0.1);
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Breadcrumb */}
        <IagoConversasHero />

        {/* Seção 2 - Cenários Reais do Dia a Dia */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-6xl mx-auto">
              
              {/* Texto-âncora direto */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  "Nossa, isso acontece comigo todos os dias!"
                </h2>
                
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Reconhece alguma dessas situações? Você não está sozinho.
                </p>
              </div>

              {/* Timeline Principal - Lead Perdido */}
              <LeadLossTimeline />

              {/* Card Especial - Vendedor Sai da Empresa */}
              <SalesRepScenarios />

              {/* Outros Cenários */}
              <OtherScenarios />

              {/* Call to Action de Transição */}
              <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  E se você pudesse resolver tudo isso hoje?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  IAgo Conversas elimina cada uma dessas situações com uma solução simples e integrada.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Quero Acabar Com Esses Problemas
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* Seção 3 - Funcionalidades & Benefícios */}
        <FeaturesShowcase />

        {/* Seção 4 - Exemplificação Visual Prática */}
        <DemoFeatures />

        {/* Seção 5 - Resultados Concretos */}
        <ResultsMetrics />

        {/* Seção 6 - CTA Final */}
        <FinalCTA />

      </main>
      
      <Footer />
    </div>
  );
};

export default IagoConversas;
