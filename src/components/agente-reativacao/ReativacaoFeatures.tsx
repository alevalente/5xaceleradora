
import React from 'react';
import { Search, RefreshCw, Sparkles, Users, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const ReativacaoFeatures = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Identificação Automática dos Inativos",
      description: "Identifica automaticamente clientes que deixaram de comprar, diretamente do seu ERP ou CRM.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Follow-up Automático e Constante (WhatsApp e E-mail)",
      description: "Envia automaticamente mensagens personalizadas via WhatsApp e e-mail até obter resposta, garantindo constância perfeita.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Mensagens 100% Personalizadas via Histórico de Compras",
      description: "Integração via API com seu ERP para personalizar automaticamente as mensagens enviadas em ambos canais usando últimas compras e histórico real do cliente.",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Transferência Automática para Equipe Comercial",
      description: "Assim que o cliente responde positivamente (WhatsApp ou e-mail), o agente encaminha imediatamente para seu vendedor dar continuidade.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Dashboard e Kanban para Gestão Visual Simples",
      description: "Controle visual imediato dos clientes reativados, canais mais eficazes e o faturamento recuperado.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Como funciona a Reativação Automática
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada funcionalidade foi desenvolvida para maximizar a taxa de reativação 
            e garantir que nenhum cliente seja esquecido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReativacaoFeatures;
