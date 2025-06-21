
import React from 'react';
import { CheckCircle2, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const FollowupTestimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[8%] w-80 h-80 rounded-full bg-green-500/20 filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-[25%] right-[12%] w-96 h-96 rounded-full bg-blue-500/20 filter blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-400/30 rounded-full backdrop-blur-sm mb-8">
            <CheckCircle2 className="h-5 w-5 mr-2 text-green-400" />
            <span className="text-green-300 font-mono text-sm">Caso de Sucesso Validado</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Resultado <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">comprovado</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 border-2 border-green-500/60 shadow-2xl shadow-green-500/30 backdrop-blur-sm ring-1 ring-white/10">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-400/30 ring-2 ring-green-400/20">
                  <CheckCircle2 className="h-12 w-12 text-green-400" />
                </div>
                
                <blockquote className="text-2xl md:text-3xl text-gray-300 italic mb-8 leading-relaxed">
                  "Implementamos o Agente de Follow-up e foi <span className="text-green-400 font-bold not-italic">impressionante</span>. 
                  Em 60 dias, recuperamos <span className="text-blue-400 font-bold not-italic">R$ 380.000</span> em vendas que 
                  certamente perderíamos. Nossos vendedores agora focam no que sabem fazer de melhor: vender. 
                  O follow-up ficou <span className="text-purple-400 font-bold not-italic">100% automatizado</span>."
                </blockquote>
                
                <div className="space-y-2">
                  <cite className="text-xl font-bold text-white">Ricardo Mendes</cite>
                  <div className="text-green-400 font-semibold">Diretor Comercial</div>
                  <div className="text-gray-400">Grupo Distribuidor Premium - 45 vendedores</div>
                </div>
              </div>

              {/* Resultados específicos */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-600">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                      <DollarSign className="h-6 w-6 text-green-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">R$ 380k</div>
                  <div className="text-gray-400 text-sm">recuperados em 60 dias</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                      <TrendingUp className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">+54%</div>
                  <div className="text-gray-400 text-sm">aumento conversão</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-400/30">
                      <Clock className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">-73%</div>
                  <div className="text-gray-400 text-sm">tempo perdido manual</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-400/30">
                      <CheckCircle2 className="h-6 w-6 text-orange-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">425%</div>
                  <div className="text-gray-400 text-sm">ROI em 90 dias</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <div className="inline-flex items-center bg-gray-700/50 text-gray-300 px-6 py-3 rounded-full text-sm border border-gray-600">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                  Empresa com 45 vendedores • 850+ clientes ativos • Segmento B2B
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FollowupTestimonial;
