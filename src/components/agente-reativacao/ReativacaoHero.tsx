
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, MessageCircle, Mail } from 'lucide-react';
import { Button } from '../ui/button';

const ReativacaoHero = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Agente Reativação de Clientes</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 overflow-hidden relative">
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full bg-blue-400/20 filter blur-3xl animate-pulse-soft"></div>
          <div className="absolute top-[60%] right-[15%] w-80 h-80 rounded-full bg-indigo-400/20 filter blur-3xl animate-float animation-delay-500"></div>
          <div className="absolute bottom-[20%] left-[40%] w-72 h-72 rounded-full bg-purple-400/20 filter blur-3xl animate-float animation-delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="mb-6 text-center lg:text-left">
            <Link 
              to="/#solutions" 
              className="inline-flex items-center text-blue-300 hover:text-blue-200 text-sm font-medium mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Soluções
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna da Esquerda - Conteúdo */}
            <div className="text-center lg:text-left animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Quer novos clientes? Então pare primeiro de 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300"> perder os antigos</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
                Reative automaticamente seus clientes inativos por WhatsApp e e-mail, sem depender da disciplina manual dos seus vendedores.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Solicitar Diagnóstico Gratuito
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Ver Como Funciona
                </Button>
              </div>
            </div>

            {/* Coluna da Direita - Elementos visuais */}
            <div className="relative animate-scale-in animation-delay-300">
              <div className="relative">
                {/* Cards flutuantes representando reativação */}
                <div className="absolute top-10 right-8 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 animate-float animation-delay-300 shadow-lg">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-8 w-8 text-green-300" />
                    <div>
                      <p className="text-white font-bold text-lg">WhatsApp</p>
                      <p className="text-blue-200 text-sm">87% de resposta</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-24 left-8 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 animate-float animation-delay-500 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="h-8 w-8 text-purple-300" />
                    <div>
                      <p className="text-white font-bold text-lg">E-mail</p>
                      <p className="text-blue-200 text-sm">63% de abertura</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-32 left-0 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 animate-float animation-delay-700 shadow-lg">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-8 w-8 text-yellow-300" />
                    <div>
                      <p className="text-white font-bold text-lg">Reativação</p>
                      <p className="text-blue-200 text-sm">25% dos inativos</p>
                    </div>
                  </div>
                </div>

                {/* Elemento central */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
                  <div className="text-center">
                    <div className="mb-4">
                      <RefreshCw className="h-16 w-16 mx-auto text-blue-300 animate-spin" style={{ animationDuration: '3s' }} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Automação Dupla</h3>
                    <p className="text-blue-200">WhatsApp + E-mail simultâneo</p>
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
