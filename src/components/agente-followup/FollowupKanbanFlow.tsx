
import React from 'react';
import { MessageSquare, Bot, Hourglass, CheckCircle2, User, DollarSign, ArrowRight, Calendar } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const FollowupKanbanFlow = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fluxo Inteligente de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Follow-up em 4 Etapas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Veja como cada oportunidade é monitorada e recuperada através de 4 etapas automatizadas
          </p>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          
          {/* Coluna 1: Oportunidade Detectada */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm border border-blue-200 mb-4">
                <MessageSquare className="h-4 w-4 mr-2" />
                Oportunidade Detectada
              </div>
            </div>
            
            <Card className="bg-white border-2 border-blue-200 shadow-md lg:hover:shadow-lg lg:hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-900 font-semibold text-sm">Maria Santos</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span className="text-green-700 font-medium text-sm">R$ 12.800</span>
                </div>
                
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <p className="text-gray-700 text-xs">
                    "Preciso avaliar com a diretoria, mas gostei muito da proposta apresentada..."
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-orange-600">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-xs font-medium">Última interação</span>
                  </div>
                  <div className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                    3 d sem resposta
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna 2: Follow-up em Execução */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-flex items-center bg-orange-50 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm border border-orange-200 mb-4">
                <Bot className="h-4 w-4 mr-2" />
                Follow-up em Execução
              </div>
            </div>
            
            <Card className="bg-white border-2 border-orange-200 shadow-md lg:hover:shadow-lg lg:hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">IA</span>
                  </div>
                  <span className="text-gray-900 font-semibold text-sm">Agente Automático</span>
                </div>
                
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <p className="text-gray-700 text-xs">
                    "Maria, nossa proposta está alinhada com suas necessidades. Posso esclarecer alguma dúvida?"
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-orange-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs font-medium">Agendado para hoje</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-xs font-medium">Via WhatsApp</span>
                  </div>
                  <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium">
                    Executando agora
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna 3: Aguardando Cliente */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-flex items-center bg-purple-50 text-purple-700 px-4 py-2 rounded-full font-semibold text-sm border border-purple-200 mb-4" style={{backgroundColor: '#775cff20', borderColor: '#775cff40', color: '#775cff'}}>
                <Hourglass className="h-4 w-4 mr-2" />
                Aguardando Cliente
              </div>
            </div>
            
            <Card className="bg-white border-2 shadow-md lg:hover:shadow-lg lg:hover:-translate-y-1 transition-all duration-300" style={{borderColor: '#775cff40'}}>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" style={{color: '#775cff'}} />
                  <span className="text-gray-900 font-semibold text-sm">Maria Santos</span>
                </div>
                
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <p className="text-gray-700 text-xs">
                    Follow-up personalizado enviado às 14:30h
                  </p>
                </div>
                
                <div className="flex items-center space-x-2" style={{color: '#775cff'}}>
                  <Hourglass className="h-4 w-4" />
                  <span className="text-xs font-medium">Aguardando retorno</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-xs font-medium">WhatsApp enviado</span>
                  </div>
                  <div className="px-2 py-1 rounded text-xs font-medium" style={{backgroundColor: '#775cff20', color: '#775cff'}}>
                    2 h aguardando
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna 4: Oportunidade Recuperada */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full font-semibold text-sm border border-green-200 mb-4">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Oportunidade Recuperada
              </div>
            </div>
            
            <Card className="bg-white border-2 border-green-200 shadow-md lg:hover:shadow-lg lg:hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-green-600" />
                  <span className="text-gray-900 font-semibold text-sm">Maria Santos</span>
                </div>
                
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <p className="text-gray-700 text-xs">
                    "Obrigada pelo follow-up! Vamos prosseguir com a proposta."
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-xs font-medium">Respondeu em 45 min</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-green-100 rounded-md p-2 flex-1">
                    <p className="text-green-700 text-xs font-medium">
                      ✓ Encaminhado para vendedor
                    </p>
                  </div>
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium ml-2">
                    Recuperada
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Desktop arrows - apenas na base das colunas */}
        <div className="hidden lg:flex justify-center items-center space-x-12 mb-12">
          <ArrowRight className="h-6 w-6 text-gray-400" />
          <ArrowRight className="h-6 w-6 text-gray-400" />
          <ArrowRight className="h-6 w-6 text-gray-400" />
        </div>

        {/* Final badge - discreto */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gray-50 text-gray-700 px-6 py-3 rounded-full font-medium text-sm border border-gray-200 shadow-sm">
            <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
            47% das oportunidades são recuperadas com sucesso
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowupKanbanFlow;
