
import React from 'react';
import { PlayCircle } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const DemoFeatures = () => {
  const demoFeatures = [
    {
      title: "Interface Unificada em Ação",
      description: "Veja como todas as conversas aparecem em um só painel, com contexto completo do cliente.",
      mockup: "💬 WhatsApp + 📱 Instagram + 💻 Site = 🎯 Uma única tela"
    },
    {
      title: "Distribuição Automática de Leads",
      description: "Observe um lead chegando e sendo direcionado automaticamente para o vendedor especializado.",
      mockup: "🆕 Lead → ⚙️ Regras → 👨‍💼 Vendedor Certo → ⚡ 2 min"
    },
    {
      title: "Dashboard de Performance ao Vivo",
      description: "Métricas em tempo real que mostram exatamente o que está acontecendo no seu atendimento.",
      mockup: "📊 TMA: 3:24min | 🎯 Taxa Conversão: 18% | 🔥 Leads Ativos: 47"
    },
    {
      title: "Agentes IA Trabalhando 24/7",
      description: "Veja agentes inteligentes fazendo follow-up, qualificando leads e registrando informações automaticamente.",
      mockup: "🤖 Cobertura de Carteira → ✅ 340 clientes contactados esta semana"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Veja IAgo Conversas em ação
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Demonstrações práticas que mostram exatamente como a plataforma funciona 
              no dia a dia da sua operação comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {demoFeatures.map((demo, index) => (
              <Card key={index} className="p-8 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300" hoverEffect={true}>
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <PlayCircle className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{demo.title}</h3>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-6 mb-6">
                    <div className="text-green-400 font-mono text-lg text-center">
                      {demo.mockup}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{demo.description}</p>
                  
                  <Button variant="outline" className="w-full">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Ver Demonstração
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quer ver tudo funcionando na prática?
              </h3>
              <p className="text-gray-600 mb-6">
                Agende uma demonstração ao vivo e veja como IAgo Conversas pode transformar 
                seu processo comercial em apenas 15 minutos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Agendar Demonstração Ao Vivo
                </Button>
                <Button variant="outline" size="lg">
                  Download do Caso de Uso
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DemoFeatures;
