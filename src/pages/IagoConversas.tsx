
import React, { useEffect } from 'react';
import { Button } from '../components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IagoConversasHero from '../components/iago-conversas/IagoConversasHero';
import TestimonialsBeforeAfter from '../components/iago-conversas/TestimonialsBeforeAfter';
import FeaturesShowcase from '../components/iago-conversas/FeaturesShowcase';
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

        {/* Seção 2 - Depoimentos "Antes e Depois" */}
        <TestimonialsBeforeAfter />

        {/* Seção 3 - Funcionalidades & Benefícios */}
        <FeaturesShowcase />

        {/* Seção 4 - Resultados Concretos */}
        <ResultsMetrics />

        {/* Seção 5 - CTA Final */}
        <FinalCTA />

      </main>
      
      <Footer />
    </div>
  );
};

export default IagoConversas;
