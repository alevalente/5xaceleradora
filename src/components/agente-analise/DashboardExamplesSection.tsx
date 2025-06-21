
import React from 'react';
import { MessageSquare, BarChart3, TrendingUp, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import ConversationAnalysisCards from './ConversationAnalysisCards';
import PerformanceMetrics from './PerformanceMetrics';
import ImprovementSuggestions from './ImprovementSuggestions';

const DashboardExamplesSection = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container-wide">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Dashboard
          </span>{" "}
          ilustrativo prático
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Veja como nosso dashboard apresenta análises detalhadas e sugestões específicas para cada conversa
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Conversation Analysis Cards */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden bg-gray-100 border-2 border-gray-300 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:border-blue-400 group opacity-100 translate-y-0">
              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="text-gray-900 flex items-center text-lg mb-2">
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center mr-3 bg-blue-100 border-2 border-blue-300">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Análise de Conversas</div>
                    <div className="text-sm text-blue-600 font-semibold">Últimas 24 horas</div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0 pb-6">
                <ConversationAnalysisCards />
              </CardContent>
            </Card>
          </div>

          {/* Side Panels */}
          <div className="space-y-8">
            {/* Performance Metrics */}
            <Card className="relative overflow-hidden bg-gray-100 border-2 border-gray-300 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:border-blue-400 group opacity-100 translate-y-0">
              <CardHeader className="relative z-10 pb-2">
                <CardTitle className="text-gray-900 flex items-center text-base mb-2">
                  <div className="h-6 w-6 rounded-lg flex items-center justify-center mr-2 bg-green-100 border border-green-300">
                    <BarChart3 className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Métricas de Performance</div>
                    <div className="text-xs text-green-600 font-semibold">Visão Geral</div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0 pb-4">
                <PerformanceMetrics />
              </CardContent>
            </Card>

            {/* Improvement Suggestions */}
            <Card className="relative overflow-hidden bg-gray-100 border-2 border-gray-300 transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl hover:border-blue-400 group opacity-100 translate-y-0">
              <CardHeader className="relative z-10 pb-2">
                <CardTitle className="text-gray-900 flex items-center text-base mb-2">
                  <div className="h-6 w-6 rounded-lg flex items-center justify-center mr-2 bg-orange-100 border border-orange-300">
                    <TrendingUp className="h-3 w-3 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Sugestões de Melhoria</div>
                    <div className="text-xs text-orange-600 font-semibold">Prioridades</div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0 pb-4">
                <ImprovementSuggestions />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dashboard Preview Note */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full backdrop-blur-sm">
            <Terminal className="h-4 w-4 mr-2 text-blue-400" />
            <span className="text-blue-300 text-sm font-mono">
              Dashboard responsivo disponível em desktop, tablet e mobile
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardExamplesSection;
