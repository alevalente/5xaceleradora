
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FloatingBadge from '../components/FloatingBadge';
import Statistics from '../components/Statistics';
import IntelligentSolutions from '../components/IntelligentSolutions';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { seoData, schemaData } from '../data/seoData';
import { getCanonicalUrl } from '../utils/seo';

const Index: React.FC = () => {
  // Add smooth scroll functionality for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title={seoData.home.title}
        description={seoData.home.description}
        canonical={getCanonicalUrl('/')}
        keywords={seoData.home.keywords}
        schema={schemaData.organization}
      />
      <Navbar />
      <FloatingBadge />
      <main className="flex-grow">
        <Hero />
        <Statistics />
        <IntelligentSolutions />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
