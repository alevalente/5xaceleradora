
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, MessageCircle, Mail, Shield, Target } from 'lucide-react';
import { Button } from '../ui/button';
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
                Quer novos clientes? Então pare primeiro de 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"> perder os antigos</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Reative automaticamente seus clientes inativos por WhatsApp e e-mail, sem depender da disciplina manual dos seus vendedores.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg border border-blue-500/20">
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Solicitar Diagnóstico Gratuito
                </Button>
                <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg">
                  Ver Como Funciona
                </Button>
              </div>
            </div>

            {/* Coluna da Direita - Elementos visuais */}
            <div className="relative animate-scale-in animation-delay-300">
              <div className="relative">
                {/* Cards flutuantes representando reativação */}
                <div className="absolute top-10 right-8 z-30 backdrop-blur-md bg-gray-800/60 border border-gray-700/50 rounded-xl p-4 animate-float animation-delay-300 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-8 w-8 text-green-400" />
                    <div>
                      <p className="text-white font-bold text-lg">WhatsApp</p>
                      <p className="text-green-400 text-sm">87% de resposta</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-24 left-8 z-30 backdrop-blur-md bg-gray-800/60 border border-gray-700/50 rounded-xl p-4 animate-float animation-delay-500 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Mail className="h-8 w-8 text-purple-400" />
                    <div>
                      <p className="text-white font-bold text-lg">E-mail</p>
                      <p className="text-purple-400 text-sm">63% de abertura</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-32 left-0 z-30 backdrop-blur-md bg-gray-800/60 border border-gray-700/50 rounded-xl p-4 animate-float animation-delay-700 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-8 w-8 text-cyan-400" />
                    <div>
                      <p className="text-white font-bold text-lg">Reativação</p>
                      <p className="text-cyan-400 text-sm">25% dos inativos</p>
                    </div>
                  </div>
                </div>

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
