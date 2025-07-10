
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import FollowupHero from '../components/agente-followup/FollowupHero';
import FollowupExplanation from '../components/agente-followup/FollowupExplanation';
import FollowupKanbanFlow from '../components/agente-followup/FollowupKanbanFlow';
import FollowupDashboard from '../components/agente-followup/FollowupDashboard';
import FollowupTestimonial from '../components/agente-followup/FollowupTestimonial';
import FollowupCTA from '../components/agente-followup/FollowupCTA';
import { seoData } from '../data/seoData';
import { getCanonicalUrl } from '../utils/seo';

const AgenteAnaliseConversasFollowup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title={seoData.agenteFollowup.title}
        description={seoData.agenteFollowup.description}
        canonical={getCanonicalUrl('/agente-analise-conversas-followup')}
        keywords={seoData.agenteFollowup.keywords}
      />
      <Navbar />
      <main className="flex-grow">
        <FollowupHero />
        <FollowupExplanation />
        <FollowupKanbanFlow />
        <FollowupDashboard />
        <FollowupTestimonial />
        <FollowupCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AgenteAnaliseConversasFollowup;
