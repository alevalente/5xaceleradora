
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, MessageCircle, Mail } from 'lucide-react';
import { Badge } from '../ui/badge';

const ReativacaoHero = () => {
  return (
    <>
      {/* Background Grid */}
      <div className="fixed inset-0 bg-gray-900 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-800/50 backdrop-blur-sm py-4 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-blue-400 transition-colors">Início</Link>
            <span>/</span>
            <span className="text-gray-200">Agente Reativação de Clientes</span>
            <Badge variant="outline" className="ml-4 border-green-500/30 text-green-400">
              WhatsApp + E-mail
            </Badge>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gray-900 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="mb-6 text-center">
            <Link 
              to="/#solutions" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Soluções
            </Link>
          </div>

          {/* Conteúdo centralizado sem limitação de largura para o título */}
          <div className="text-center animate-fade-in">
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <Badge variant="outline" className="border-purple-500/30 text-purple-400 bg-purple-500/10">
                <Target className="h-3 w-3 mr-1" />
                Reativação Automática
              </Badge>
              <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10">
                <MessageCircle className="h-3 w-3 mr-1" />
                WhatsApp
              </Badge>
              <Badge variant="outline" className="border-blue-500/30 text-blue-400 bg-blue-500/10">
                <Mail className="h-3 w-3 mr-1" />
                E-mail
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight px-4">
              Sua maior oportunidade de faturar rápido<br />
              está nos clientes que já{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">confiaram em você</span>,<br />
              mas hoje estão esquecidos.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-5xl mx-auto">
              A carteira de clientes inativos não está visível nos relatórios que você acompanha diariamente, mas representa uma das maiores oportunidades imediatas de aumentar receita, sem precisar prospectar novos clientes. Nosso agente usa Inteligência Artificial para encontrar automaticamente esses clientes esquecidos, disparar mensagens personalizadas via WhatsApp e e-mail, e trazê-los de volta para o seu negócio rapidamente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReativacaoHero;
