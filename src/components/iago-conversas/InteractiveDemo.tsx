
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Clock, Target, ArrowRight, PlayCircle, BarChart3, Zap } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';

const InteractiveDemo = () => {
  const [activeLeads, setActiveLeads] = useState(47);
  const [responseTime, setResponseTime] = useState(3.24);
  const [conversionRate, setConversionRate] = useState(18);
  const [leadDistribution, setLeadDistribution] = useState(0);
  const [roiCalculation, setRoiCalculation] = useState({ time: 0, revenue: 0 });

  // Animate counters on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setLeadDistribution(100);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const simulateLeadDistribution = () => {
    setLeadDistribution(0);
    setTimeout(() => setLeadDistribution(100), 300);
  };

  const calculateROI = () => {
    setRoiCalculation({ time: 0, revenue: 0 });
    setTimeout(() => {
      setRoiCalculation({ time: 85, revenue: 240 });
    }, 500);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Demonstração interativa: veja IAgo funcionando agora
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Interaja com os painéis abaixo para entender como IAgo Conversas 
              transforma sua operação comercial em tempo real.
            </p>
          </div>

          {/* Real-time Metrics Panel */}
          <div className="mb-12">
            <Card className="p-8 border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-white">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <BarChart3 className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Métricas ao Vivo</h3>
                  <div className="ml-4 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm text-green-600 font-medium">Online</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{activeLeads}</div>
                    <div className="text-gray-600">Leads Ativos</div>
                    <div className="text-sm text-green-600 mt-1">↑ +12 hoje</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{responseTime}min</div>
                    <div className="text-gray-600">Tempo Médio Resposta</div>
                    <div className="text-sm text-green-600 mt-1">↓ -2.1min vs ontem</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-2">{conversionRate}%</div>
                    <div className="text-gray-600">Taxa de Conversão</div>
                    <div className="text-sm text-green-600 mt-1">↑ +3% vs semana passada</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Lead Distribution Simulator */}
            <Card className="p-8 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Target className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Simulador de Distribuição</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Novo lead: "Interessado em produto X"</span>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Processando regras...</span>
                      <span>{leadDistribution}%</span>
                    </div>
                    <Progress value={leadDistribution} className="h-2" />
                  </div>
                  
                  {leadDistribution === 100 && (
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded animate-fade-in">
                      <div className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-green-800 font-medium">Lead enviado para: João Silva (Especialista Produto X)</span>
                      </div>
                      <div className="text-sm text-green-600 mt-1">Tempo: 0.8 segundos</div>
                    </div>
                  )}
                </div>
                
                <Button onClick={simulateLeadDistribution} variant="outline" className="w-full">
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Simular Novo Lead
                </Button>
              </CardContent>
            </Card>

            {/* ROI Calculator */}
            <Card className="p-8 border-2 border-gray-100 hover:border-green-200 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Calculadora de Impacto</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">Cenário: 100 leads/mês</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium">Antes</div>
                        <div>Resposta: 15min</div>
                        <div>Conversão: 12%</div>
                      </div>
                      <div>
                        <div className="font-medium">Com IAgo</div>
                        <div>Resposta: 2min</div>
                        <div>Conversão: 18%</div>
                      </div>
                    </div>
                  </div>
                  
                  {roiCalculation.time > 0 && (
                    <div className="space-y-3 animate-fade-in">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-blue-900">Economia de Tempo</span>
                          <span className="text-2xl font-bold text-blue-600">{roiCalculation.time}%</span>
                        </div>
                        <div className="text-sm text-blue-600 mt-1">≈ 32 horas/mês</div>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-green-900">Aumento de Receita</span>
                          <span className="text-2xl font-bold text-green-600">+{roiCalculation.revenue}%</span>
                        </div>
                        <div className="text-sm text-green-600 mt-1">+6 vendas extras/mês</div>
                      </div>
                    </div>
                  )}
                </div>
                
                <Button onClick={calculateROI} className="w-full bg-green-600 hover:bg-green-700">
                  <Zap className="h-4 w-4 mr-2" />
                  Calcular Meu ROI
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quer ver seu cenário específico funcionando?
              </h3>
              <p className="text-gray-600 mb-6">
                Agende uma demonstração personalizada e veja como IAgo Conversas 
                se adapta ao seu negócio em apenas 15 minutos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Agendar Demonstração Personalizada
                </Button>
                <Button variant="outline" size="lg">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
