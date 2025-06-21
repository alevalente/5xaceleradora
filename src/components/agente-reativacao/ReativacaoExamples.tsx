
import React from 'react';
import { MessageCircle, Mail, Clock, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const ReativacaoExamples = () => {
  return (
    <section className="py-16 bg-gray-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Exemplos de Mensagens Automatizadas Humanizadas
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Veja como nosso agente usa o histórico real do cliente para gerar mensagens que realmente engajam e vendem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          {/* WhatsApp Example */}
          <Card className="border-2 border-green-500/30 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mr-4 border border-green-500/30">
                  <MessageCircle className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">WhatsApp</h3>
                  <p className="text-sm text-gray-400">Mensagem automática personalizada</p>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-2xl p-5 border-l-4 border-green-400">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    5X
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 leading-relaxed text-sm">
                      <strong>Olá, Carlos! Tudo bem?</strong> 😊<br/>
                      <br/>
                      Aqui é a Amanda, da empresa 5X. Vi aqui que já faz uns 4 meses que você não passa por aqui, e resolvi te mandar uma mensagem rápida porque tenho uma novidade bem legal que acho que você vai gostar bastante.<br/>
                      <br/>
                      Quer que eu já te mande mais detalhes por aqui mesmo?
                    </p>
                    <div className="flex items-center mt-3 text-xs text-gray-400">
                      <Clock className="h-3 w-3 mr-1" />
                      Enviado automaticamente
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <span className="text-sm font-medium text-green-400 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">
                  Taxa de resposta: 87%
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Email Example */}
          <Card className="border-2 border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mr-4 border border-purple-500/30">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">E-mail</h3>
                  <p className="text-sm text-gray-400">Mensagem automática profissional</p>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-2xl p-5 border-l-4 border-purple-400">
                <div className="space-y-3">
                  <div className="border-b border-gray-600 pb-3">
                    <div className="text-sm text-gray-400 mb-1">Para: carlos@empresa.com</div>
                    <div className="text-lg font-bold text-white">Carlos, preparamos algo especial pra você voltar!</div>
                  </div>
                  
                  <div className="text-gray-200 leading-relaxed text-sm">
                    <p className="mb-3">Olá, Carlos! Tudo bem?</p>
                    <p className="mb-3">
                      Aqui é a Amanda, da equipe da 5X.
                    </p>
                    <p className="mb-3">
                      Reparei que você não compra com a gente há um tempo (mais de 4 meses!) e, sinceramente, sentimos sua falta por aqui. Pensando nisso, preparamos uma condição realmente especial para você voltar a comprar conosco.
                    </p>
                    <p className="mb-4">
                      Clica no botão abaixo pra conferir os detalhes agora mesmo!
                    </p>
                    <div className="bg-purple-600 text-white text-center py-2 px-4 rounded-lg font-semibold text-sm">
                      Clique aqui e veja os detalhes
                    </div>
                    <div className="mt-4 text-xs text-gray-400">
                      <p>Um grande abraço,</p>
                      <p><strong>Amanda Souza</strong></p>
                      <p>Equipe Comercial – 5X Aceleradora</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs text-gray-400 pt-2 border-t border-gray-600">
                    <Clock className="h-3 w-3 mr-1" />
                    Enviado automaticamente via integração ERP
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <span className="text-sm font-medium text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                  Taxa de abertura: 63%
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-blue-500/20 text-blue-400 px-6 py-3 rounded-full font-medium border border-blue-500/30">
            <Sparkles className="h-5 w-5 mr-2" />
            Todas as mensagens são personalizadas automaticamente com dados reais do cliente
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoExamples;
