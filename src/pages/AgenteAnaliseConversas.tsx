
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/agente-analise/HeroSection';
import PainIdentificationSection from '../components/agente-analise/PainIdentificationSection';
import AIAgentIntroSection from '../components/agente-analise/AIAgentIntroSection';
import DashboardExamplesSection from '../components/agente-analise/DashboardExamplesSection';
import TestimonialSection from '../components/agente-analise/TestimonialSection';
import FinalCTASection from '../components/agente-analise/FinalCTASection';
import { seoData } from '../data/seoData';
import { getCanonicalUrl } from '../utils/seo';

const AgenteAnaliseConversas = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <SEOHead 
        title={seoData.agenteAnaliseConversas.title}
        description={seoData.agenteAnaliseConversas.description}
        canonical={getCanonicalUrl('/agente-analise-conversas')}
        keywords={seoData.agenteAnaliseConversas.keywords}
      />
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
