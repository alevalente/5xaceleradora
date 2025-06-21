
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';

const SalesRepScenarios = () => {
  const handleCTAClick = () => {
    console.log('SalesRepScenarios CTA clicked - navigating to:', '/agente-analise-conversas-followup');
  };

  return (
    <div className="mb-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 p-1">
      {/* Efeito de brilho animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] animate-shimmer"></div>
      
      <div className="relative bg-white rounded-3xl p-8 md:p-12">
        {/* Header dramático */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse">
            <AlertTriangle className="h-5 w-5 mr-2" />
            ALERTA CRÍTICO: Acontece em 89% das empresas
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O pesadelo de toda empresa
          </h3>
          <p className="text-xl text-gray-600">
            "Perdi 2 anos de relacionamento com clientes em 1 dia"
          </p>
        </div>

        {/* Timeline Visual Central */}
        <div className="relative mb-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold">
              ⚡ Independente de usar WhatsApp pessoal ou celular da empresa
            </div>
          </div>

          {/* Linha de fundo representando o "antes" */}
          <div className="absolute top-24 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-30"></div>
          
          {/* Momento da ruptura */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-4xl">⚡</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Antes */}
            <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
              <div className="text-6xl mb-4">👨‍💼</div>
              <h4 className="text-lg font-bold text-green-800 mb-2">ANTES</h4>
              <div className="space-y-2 text-sm text-green-700">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>347 contatos de clientes</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>2 anos de histórico</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Vendas organizadas</span>
                </div>
              </div>
            </div>

            {/* O momento */}
            <div className="text-center p-6 bg-red-50 rounded-2xl border-2 border-red-300 relative">
              <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                HOJE
              </div>
              <div className="text-6xl mb-4">🚪💥</div>
              <h4 className="text-lg font-bold text-red-800 mb-2">O MOMENTO</h4>
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold mb-2">
                "Recebi uma proposta melhor"
              </div>
              <div className="text-xs text-red-600 font-medium space-y-1">
                <div>☠️ Leva o WhatsApp pessoal</div>
                <div>☠️ Ou "apaga sem querer"</div>
              </div>
            </div>

            {/* Depois */}
            <div className="text-center p-6 bg-gray-100 rounded-2xl border border-gray-300">
              <div className="text-6xl mb-4 opacity-50">💔</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">DEPOIS</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span className="line-through">347 contatos perdidos</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span className="line-through">Histórico zerado</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span className="line-through">Recomeçar do zero</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estatísticas Chocantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
            <div className="text-2xl font-bold text-orange-600">89%</div>
            <div className="text-sm text-orange-700">das empresas passam por isso</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
            <div className="text-2xl font-bold text-red-600">6 meses</div>
            <div className="text-sm text-red-700">para reconstruir a carteira</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
            <div className="text-2xl font-bold text-purple-600">0%</div>
            <div className="text-sm text-purple-700">de controle sobre o que sai</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            <strong>Isso não precisa acontecer com você.</strong>
          </p>
          <Button 
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold"
          >
            <Link 
              to="/agente-analise-conversas-followup" 
              onClick={handleCTAClick}
            >
              Proteger Minha Empresa Agora
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SalesRepScenarios;
