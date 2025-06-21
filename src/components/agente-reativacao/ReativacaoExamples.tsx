
import React from 'react';
import { MessageCircle, Mail, Clock, Sparkles } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const ReativacaoExamples = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Exemplos de Mensagens Automatizadas Humanizadas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja como nosso agente personaliza automaticamente as mensagens usando o histórico real de compras do cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* WhatsApp Example */}
          <Card className="border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mr-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">WhatsApp</h3>
                  <p className="text-sm text-gray-600">Mensagem automática personalizada</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-400">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    5X
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 leading-relaxed">
                      <strong>Oi, Carlos!</strong> 👋<br/>
                      <br/>
                      Sua última compra foi há 4 meses. Temos uma oferta especial esta semana. <br/>
                      <br/>
                      Posso enviar detalhes? 🔥
                    </p>
                    <div className="flex items-center mt-3 text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      Enviado automaticamente
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  Taxa de resposta: 87%
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Email Example */}
          <Card className="border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">E-mail</h3>
                  <p className="text-sm text-gray-600">Mensagem automática profissional</p>
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-400">
                <div className="space-y-4">
                  <div className="border-b border-purple-200 pb-3">
                    <div className="text-sm text-gray-600 mb-1">Para: carlos@empresa.com</div>
                    <div className="text-lg font-bold text-gray-900">Carlos, sentimos sua falta!</div>
                  </div>
                  
                  <div className="text-gray-800 leading-relaxed">
                    <p className="mb-3">Olá Carlos,</p>
                    <p className="mb-3">
                      Notamos que sua última compra foi há mais de 4 meses. Preparamos uma condição especial para você voltar a comprar conosco.
                    </p>
                    <div className="bg-purple-600 text-white text-center py-3 px-6 rounded-lg font-semibold">
                      Clique aqui e veja os detalhes
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    Enviado automaticamente via integração ERP
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  Taxa de abertura: 63%
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-blue-50 text-blue-800 px-6 py-3 rounded-full font-medium">
            <Sparkles className="h-5 w-5 mr-2" />
            Todas as mensagens são personalizadas automaticamente com dados reais do cliente
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoExamples;
