
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/agente-analise/HeroSection';
import PainIdentificationSection from '../components/agente-analise/PainIdentificationSection';
import AIAgentIntroSection from '../components/agente-analise/AIAgentIntroSection';
import DashboardExamplesSection from '../components/agente-analise/DashboardExamplesSection';
import TestimonialSection from '../components/agente-analise/TestimonialSection';
import FinalCTASection from '../components/agente-analise/FinalCTASection';

const AgenteAnaliseConversas = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <div className="container-wide py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para página inicial
          </Link>
        </div>

        <HeroSection />
        <PainIdentificationSection />
        <AIAgentIntroSection />
        <DashboardExamplesSection />
        <TestimonialSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default AgenteAnaliseConversas;
