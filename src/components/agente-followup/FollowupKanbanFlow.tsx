
import React from 'react';
import { MessageSquare, Bot, Hourglass, CheckCircle2, User, DollarSign } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const FollowupKanbanFlow = () => {
  return (
    <section className="py-20 bg-[#0F172A] relative">
      <div className="container max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-4xl font-bold text-white mb-6">
            Fluxo Inteligente de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Follow-up em 4 Etapas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Veja como cada oportunidade é monitorada e recuperada através de 4 etapas automatizadas
          </p>
        </div>

        {/* Kanban Board */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 lg:gap-6 lg:items-start gap-6 max-w-7xl mx-auto mb-12">
          
          {/* Coluna 1: Oportunidade Detectada */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="0">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm border border-blue-200 mb-4">
                <MessageSquare className="h-4 w-4 mr-2" aria-label="Mensagem" />
                Oportunidade Detectada
              </div>
            </div>
            
            <Card className="bg-white/5 border border-blue-500/30 shadow-md dark:shadow-none hover:shadow-lg transition-all duration-300 w-full">
              <CardContent className="p-4 py-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-blue-400" aria-label="Usuário" />
                  <span className="text-white font-semibold text-sm">Maria Santos</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-400" aria-label="Valor" />
                  <span className="text-green-400 font-medium text-sm">R$ 12.800</span>
                </div>
                
                <div className="bg-gray-800/50 rounded-md p-3 border border-gray-700">
                  <p className="text-gray-300 text-xs break-words">
                    "Preciso avaliar com a diretoria, mas gostei muito da proposta apresentada..."
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-orange-400">
                    <MessageSquare className="h-4 w-4" aria-label="Última interação" />
                    <span className="text-xs font-medium">Última interação</span>
                  </div>
                  <div className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-medium border border-red-500/30">
                    3 d sem resposta
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <span className="text-xs text-gray-400">⚡</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna 2: Follow-up em Execução */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center">
              <div className="inline-flex items-center bg-orange-50 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm border border-orange-200 mb-4">
                <Bot className="h-4 w-4 mr-2" aria-label="Bot" />
                Follow-up em Execução
              </div>
            </div>
            
            <Card className="bg-white/5 border border-orange-500/30 shadow-md dark:shadow-none hover:shadow-lg transition-all duration-300 w-full">
              <CardContent className="p-4 py-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-orange-400" aria-label="Usuário" />
                  <span className="text-white font-semibold text-sm">Maria Santos</span>
                </div>
                
                <div className="bg-gray-800/50 rounded-md p-3 border border-gray-700">
                  <p className="text-gray-300 text-xs break-words">
                    "Maria, nossa proposta está alinhada com suas necessidades. Posso esclarecer alguma dúvida?"
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-orange-400">
                  <Bot className="h-4 w-4" aria-label="Agendado" />
                  <span className="text-xs font-medium">Agendado para hoje</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle2 className="h-4 w-4" aria-label="WhatsApp" />
                    <span className="text-xs font-medium">Via WhatsApp</span>
                  </div>
                  <div className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs font-medium border border-orange-500/30">
                    Executando agora
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <span className="text-xs text-gray-400">⏳</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna 3: Aguardando Cliente */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full font-semibold text-sm mb-4" style={{backgroundColor: '#5B4BFF20', borderColor: '#5B4BFF40', color: '#5B4BFF', border: '1px solid'}}>
                <Hourglass className="h-4 w-4 mr-2" aria-label="Aguardando" />
                Aguardando Cliente
              </div>
            </div>
            
            <Card className="bg-white/5 shadow-md dark:shadow-none hover:shadow-lg transition-all duration-300 w-full" style={{borderColor: '#5B4BFF40', border: '1px solid'}}>
              <CardContent className="p-4 py-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" style={{color: '#5B4BFF'}} aria-label="Usuário" />
                  <span className="text-white font-semibold text-sm">Maria Santos</span>
                </div>
                
                <div className="bg-gray-800/50 rounded-md p-3 border border-gray-700">
                  <p className="text-gray-300 text-xs break-words">
                    Follow-up personalizado enviado às 14:30h
                  </p>
                </div>
                
                <div className="flex items-center space-x-2" style={{color: '#5B4BFF'}}>
                  <Hourglass className="h-4 w-4" aria-label="Aguardando retorno" />
                  <span className="text-xs font-medium">Aguardando retorno</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <MessageSquare className="h-4 w-4" aria-label="WhatsApp enviado" />
                    <span className="text-xs font-medium">WhatsApp enviado</span>
                  </div>
                  <div className="px-2 py-1 rounded text-xs font-medium border" style={{backgroundColor: '#5B4BFF20', color: '#5B4BFF', borderColor: '#5B4BFF40'}}>
                    2 h aguardando
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <span className="text-xs text-gray-400">⏳</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna 4: Oportunidade Recuperada */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center">
              <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-semibold text-sm border border-green-500/40 mb-4">
                <CheckCircle2 className="h-4 w-4 mr-2" aria-label="Sucesso" />
                Oportunidade Recuperada
              </div>
            </div>
            
            <Card className="bg-white/5 border border-green-500/30 shadow-md dark:shadow-none hover:shadow-lg transition-all duration-300 w-full">
              <CardContent className="p-4 py-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-green-400" aria-label="Usuário" />
                  <span className="text-white font-semibold text-sm">Maria Santos</span>
                </div>
                
                <div className="bg-gray-800/50 rounded-md p-3 border border-gray-700">
                  <p className="text-gray-300 text-xs break-words">
                    "Obrigada pelo follow-up! Vamos prosseguir com a proposta."
                  </p>
                </div>
                
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle2 className="h-4 w-4" aria-label="Respondeu" />
                  <span className="text-xs font-medium">Respondeu em 45 min</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="bg-green-500/20 rounded-md p-2 flex-1 border border-green-500/30">
                    <p className="text-green-400 text-xs font-medium">
                      ✓ Encaminhado para vendedor
                    </p>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium ml-2 border border-green-500/30">
                    Recuperada
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <span className="text-xs text-gray-400">✅</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Desktop arrows - SVG único e centralizado */}
        <div className="hidden lg:flex justify-center items-center mb-8 opacity-70 hover:opacity-100 transition-opacity">
          <svg width="800" height="40" viewBox="0 0 800 40" className="text-gray-400">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
              </marker>
            </defs>
            {/* Seta 1 → 2 */}
            <line x1="150" y1="20" x2="250" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
            {/* Seta 2 → 3 */}
            <line x1="350" y1="20" x2="450" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
            {/* Seta 3 → 4 */}
            <line x1="550" y1="20" x2="650" y2="20" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
          </svg>
        </div>

        {/* Badge final harmonizado */}
        <div className="text-center">
          <div className="inline-flex items-center text-base font-semibold px-6 py-2 rounded-full border border-green-500/50 bg-green-500/10 text-green-400">
            <CheckCircle2 className="h-5 w-5 mr-2" aria-label="Sucesso" />
            47% das oportunidades são recuperadas com sucesso
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowupKanbanFlow;
