
import React from 'react';
import { MessageSquare, Bot, CheckCircle2, Clock, User, DollarSign, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const FollowupExamples = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Veja Como o Agente <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Recupera suas Vendas Perdidas</span> na Prática
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exemplos visuais reais de oportunidades que foram identificadas e recuperadas automaticamente.
          </p>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          
          {/* Coluna 1: Oportunidade Detectada */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full font-semibold text-sm border border-blue-500/40 mb-4">
                <MessageSquare className="h-4 w-4 mr-2" />
                Oportunidade Detectada
              </div>
            </div>
            
            <Card className="bg-blue-500/10 border-2 border-blue-500/60 shadow-blue-500/30 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm ring-1 ring-blue-400/20">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-blue-400" />
                  <span className="text-white font-semibold text-sm">Maria Santos</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-400" />
                  <span className="text-green-300 font-medium text-sm">R$ 8.500</span>
                </div>
                
                <div className="bg-gray-800/50 rounded-md p-3 border border-gray-600/30">
                  <p className="text-gray-300 text-xs italic">
                    "Gostei da proposta, preciso avaliar com minha equipe..."
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-orange-400">
                  <Clock className="h-4 w-4" />
                  <span className="text-xs font-medium">Sem resposta há 3 dias</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Arrow between columns (hidden on mobile) */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="h-8 w-8 text-gray-400" />
          </div>

          {/* Coluna 2: Follow-up Automático */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-flex items-center bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full font-semibold text-sm border border-orange-500/40 mb-4">
                <Bot className="h-4 w-4 mr-2" />
                Follow-up Automático
              </div>
            </div>
            
            <Card className="bg-orange-500/10 border-2 border-orange-500/60 shadow-orange-500/30 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm ring-1 ring-orange-400/20">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-xs">IA</span>
                  </div>
                  <span className="text-white font-semibold text-sm">Ação Automática</span>
                </div>
                
                <div className="bg-gray-800/50 rounded-md p-3 border border-gray-600/30">
                  <p className="text-gray-300 text-xs">
                    "Maria, nossa proposta está alinhada com o que você precisa? Se precisar de apoio, estou à disposição."
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-orange-400">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs font-medium">Hoje, 10:20h</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-green-400" />
                  <span className="text-green-300 text-xs">Enviado via WhatsApp</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Arrow between columns (hidden on mobile) */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="h-8 w-8 text-gray-400" />
          </div>

          {/* Coluna 3: Oportunidade Recuperada */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-flex items-center bg-green-500/20 text-green-300 px-4 py-2 rounded-full font-semibold text-sm border border-green-500/40 mb-4">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Oportunidade Recuperada
              </div>
            </div>
            
            <Card className="bg-green-500/10 border-2 border-green-500/60 shadow-green-500/30 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm ring-1 ring-green-400/20">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-green-400" />
                  <span className="text-white font-semibold text-sm">Maria Santos</span>
                </div>
                
                <div className="bg-gray-800/50 rounded-md p-3 border border-gray-600/30">
                  <p className="text-gray-300 text-xs italic">
                    "Obrigada pelo lembrete! Vamos fechar a proposta."
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-xs font-medium">Respondeu em 2 horas</span>
                </div>
                
                <div className="bg-green-500/20 rounded-md p-2 border border-green-500/40">
                  <p className="text-green-300 text-xs font-medium">
                    Próximo Passo: Encaminhado para Junior Silva
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="lg:hidden flex justify-center space-x-8 mb-8">
          <div className="flex flex-col items-center space-y-2">
            <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
            <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
          </div>
        </div>

        {/* Final statistic */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white px-8 py-4 rounded-full font-medium text-lg border-2 border-green-500/60 shadow-green-500/30 shadow-lg ring-1 ring-green-400/20 backdrop-blur-sm">
            <CheckCircle2 className="h-6 w-6 mr-3 text-green-400" />
            Média de 47% das oportunidades perdidas são recuperadas com sucesso
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowupExamples;
