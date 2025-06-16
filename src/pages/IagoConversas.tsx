
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, BarChart3, AlertTriangle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { createObserver, getDelayClass } from '../utils/animations';
import { cn } from '@/lib/utils';

const IagoConversas = () => {
  useEffect(() => {
    const observer = createObserver('animate-on-scroll', 0.1);
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const painPoints = [
    {
      title: "Atrasos de minutos viram milhares de reais perdidos.",
      description: "Cada segundo conta quando um lead está quente. Perder tempo alternando entre apps significa perder vendas para a concorrência.",
      icon: <Clock className="h-8 w-8" />,
      visual: "Relógio contando para zero ao lado de carrinho abandonado"
    },
    {
      title: "Cada canal conta só parte da história; decidir fica no escuro.",
      description: "Sem visão unificada do cliente, sua equipe toma decisões baseadas em informações incompletas.",
      icon: <Users className="h-8 w-8" />,
      visual: "Silhueta de cliente fragmentada em 4 janelas sobrepostas"
    },
    {
      title: "5 apps abertos ≠ produtividade; é caos disfarçado de trabalho.",
      description: "Sua equipe gasta mais tempo navegando entre ferramentas do que realmente vendendo.",
      icon: <BarChart3 className="h-8 w-8" />,
      visual: "Operador cercado por telas sobrepostas"
    },
    {
      title: "Sem métricas, você gerencia pelo sentimento – e erra.",
      description: "Decisões comerciais baseadas em intuição, não em dados reais, levam a oportunidades perdidas.",
      icon: <AlertTriangle className="h-8 w-8" />,
      visual: "Gráfico vazio / indicador cinza apagado"
    }
  ];

  const titleOptions = [
    {
      id: 'a',
      title: "Pare de perder vendas por falta de resposta: centralize tudo no IAgo Conversas.",
      subtitle: "Enfatiza dor (perda) + solução direta"
    },
    {
      id: 'b', 
      title: "Atenda WhatsApp, e-mail e redes em um só lugar – sem trocar de tela.",
      subtitle: "Benefício prático de centralização"
    },
    {
      id: 'c',
      title: "Seu time responde em segundos, vende mais em horas – IAgo Conversas faz o resto.",
      subtitle: "Liga rapidez operacional ao resultado de vendas"
    }
  ];

  // Usando a opção A como principal
  const selectedTitle = titleOptions[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container-wide">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <span className="text-gray-900">IAgo Conversas</span>
            </div>
          </div>
        </div>

        {/* Seção 1 - Título Inicial Provocativo */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <Link 
                  to="/#solutions" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium mb-8"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar para Soluções
                </Link>
              </div>
              
              <h1 className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight",
                "animate-on-scroll opacity-0",
                getDelayClass(0, 200)
              )}>
                {selectedTitle.title}
              </h1>
              
              <p className={cn(
                "text-xl text-gray-600 mb-8 max-w-3xl mx-auto",
                "animate-on-scroll opacity-0",
                getDelayClass(1, 200)
              )}>
                Centralize WhatsApp, Instagram, Facebook, e-mail e chat do site em uma única plataforma. 
                Sua equipe atende mais rápido, você vende mais.
              </p>

              <div className={cn(
                "flex flex-col sm:flex-row gap-4 justify-center",
                "animate-on-scroll opacity-0",
                getDelayClass(2, 200)
              )}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  Solicitar Demonstração
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Ver Funcionalidades
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 2 - Identificação Clara e Visual da Dor/Desafio */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="max-w-5xl mx-auto">
              
              {/* Texto-âncora */}
              <div className="text-center mb-16">
                <h2 className={cn(
                  "text-3xl md:text-4xl font-bold text-gray-900 mb-6",
                  "animate-on-scroll opacity-0",
                  getDelayClass(0, 200)
                )}>
                  Gerenciar múltiplos canais de atendimento não deveria ser tão confuso.
                </h2>
                
                <div className={cn(
                  "text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed",
                  "animate-on-scroll opacity-0",
                  getDelayClass(1, 200)
                )}>
                  <p className="mb-4">
                    Hoje, gestores comerciais gastam horas saltando entre WhatsApp Web, Instagram, 
                    chat do site, e-mails e planilhas só para descobrir que um lead esfriou ou uma 
                    venda escapou para o concorrente.
                  </p>
                  <p>
                    A sobrecarga de abas, falta de histórico unificado e ausência de métricas em 
                    tempo real transformam o simples ato de responder clientes em um labirinto sem fim.
                  </p>
                </div>
              </div>

              {/* Grid de Dores Específicas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {painPoints.map((pain, index) => (
                  <Card 
                    key={index}
                    className={cn(
                      "p-8 border-2 border-gray-100 hover:border-blue-200 transition-all duration-300",
                      "animate-on-scroll opacity-0",
                      getDelayClass(index + 2, 200)
                    )}
                    hoverEffect={true}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start mb-4">
                        <div className="p-3 bg-red-50 text-red-600 rounded-lg mr-4 flex-shrink-0">
                          {pain.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                            {pain.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {pain.description}
                          </p>
                          <div className="text-sm text-gray-500 italic border-l-2 border-gray-200 pl-4">
                            Indicação visual: {pain.visual}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to Action de Transição */}
              <div className={cn(
                "text-center mt-16 p-8 bg-blue-50 rounded-2xl",
                "animate-on-scroll opacity-0",
                getDelayClass(6, 200)
              )}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  E se existisse uma forma simples de resolver tudo isso?
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  O IAgo Conversas elimina cada uma dessas dores com uma solução integrada e intuitiva.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Descobrir Como Funciona
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* Placeholder para Seções Futuras */}
        <section className="py-12 bg-gray-50">
          <div className="container-wide text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Próximas Seções em Desenvolvimento
              </h3>
              <p className="text-gray-600 mb-6">
                As seções 3 e 4 (Funcionalidades & Benefícios + Exemplificação Visual) 
                serão implementadas na próxima etapa, seguindo a estrutura de descoberta guiada.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                <div className="p-4 bg-white rounded-lg border">
                  <strong>Seção 3:</strong> Funcionalidades & Benefícios (9 passos)
                </div>
                <div className="p-4 bg-white rounded-lg border">
                  <strong>Seção 4:</strong> Exemplificação Visual Prática
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default IagoConversas;
