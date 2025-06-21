
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, MessageCircle, Mail, Target } from 'lucide-react';
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
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
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
          <div className="mb-6 text-center lg:text-left">
            <Link 
              to="/#solutions" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Soluções
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna da Esquerda - Conteúdo */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
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

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Sua maior oportunidade de faturar rápido está nos clientes que já 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"> confiaram em você</span>, mas hoje estão esquecidos.
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto lg:mx-0 leading-relaxed">
                A carteira de clientes inativos não está visível nos relatórios que você acompanha diariamente, mas representa uma das maiores oportunidades imediatas de aumentar receita, sem precisar prospectar novos clientes. Nosso agente usa Inteligência Artificial para encontrar automaticamente esses clientes esquecidos, disparar mensagens personalizadas via WhatsApp e e-mail, e trazê-los de volta para o seu negócio rapidamente.
              </p>
            </div>

            {/* Coluna da Direita - Elementos visuais */}
            <div className="relative animate-scale-in animation-delay-300">
              <div className="relative">
                {/* Elemento central */}
                <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                  <div className="text-center">
                    <div className="mb-4">
                      <RefreshCw className="h-16 w-16 mx-auto text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Automação Dupla</h3>
                    <p className="text-gray-300">WhatsApp + E-mail simultâneo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReativacaoHero;
