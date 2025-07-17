
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, TrendingUp, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { images } from '../../assets/images';

const IagoConversasHero = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 relative z-[80]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Início</Link>
            <span>/</span>
            <span className="text-gray-900">IAgo Conversas</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-6 text-center lg:text-left">
            <Link 
              to="/#solutions" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Soluções
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna da Esquerda - Conteúdo */}
            <div className="text-center lg:text-left animate-fade-up">
              {/* Logo do IAgo Conversas */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <img 
                  src={images.logo} 
                  alt="IAgo Conversas" 
                  className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Centralize todos os atendimentos da sua empresa e nunca mais perca controle das conversas de sua equipe
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                IAgo Conversas organiza automaticamente WhatsApp, Instagram, e-mail e chat, garantindo histórico completo, segurança total e eficiência imediata da sua equipe.
              </p>

              <div className="flex justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact-iago');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Solicitar Demonstração Gratuita
                </Button>
              </div>
            </div>

            {/* Coluna da Direita - Imagem com Efeitos */}
            <div className="relative animate-scale-in animation-delay-300">
              <div className="relative group">
                {/* Efeito de Background Blur */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Container da Imagem */}
                <div className="relative bg-white rounded-2xl shadow-2xl p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={images.iagoConversasScreenshot}
                    alt="Interface do IAgo Conversas - Plataforma unificada de atendimento"
                    className="w-full h-auto rounded-xl shadow-lg"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  
                  {/* Overlay com informações */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    Online
                  </div>
                </div>
                
                {/* Elementos decorativos flutuantes */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full opacity-20 animate-float animation-delay-500"></div>
              </div>

              {/* Benefícios práticos em tempo real */}
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-sm font-bold text-blue-600 mb-1">Histórico protegido</div>
                  <div className="text-xs text-gray-600">Nenhuma conversa é perdida</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-sm font-bold text-green-600 mb-1">Mais produtividade</div>
                  <div className="text-xs text-gray-600">Atenda mais em menos tempo</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                  <div className="flex items-center justify-center mb-2">
                    <Eye className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="text-sm font-bold text-purple-600 mb-1">Gestão em tempo real</div>
                  <div className="text-xs text-gray-600">Acompanhe conversas da equipe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IagoConversasHero;
