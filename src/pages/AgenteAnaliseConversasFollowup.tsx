
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FollowupHero from '../components/agente-followup/FollowupHero';
import FollowupExplanation from '../components/agente-followup/FollowupExplanation';
import FollowupFeatures from '../components/agente-followup/FollowupFeatures';
import FollowupExamples from '../components/agente-followup/FollowupExamples';
import FollowupDashboard from '../components/agente-followup/FollowupDashboard';
import FollowupHowItWorks from '../components/agente-followup/FollowupHowItWorks';
import FollowupTestimonial from '../components/agente-followup/FollowupTestimonial';
import FollowupCTA from '../components/agente-followup/FollowupCTA';

const AgenteAnaliseConversasFollowup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FollowupHero />
        <FollowupExplanation />
        <FollowupFeatures />
        <FollowupExamples />
        <FollowupDashboard />
        <FollowupHowItWorks />
        <FollowupTestimonial />
        <FollowupCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AgenteAnaliseConversasFollowup;
