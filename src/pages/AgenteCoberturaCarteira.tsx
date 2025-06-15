
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, BarChart3, AlertTriangle, CheckCircle2, Phone, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const AgenteCoberturaCarteira = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <div className="container-wide py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para página inicial
          </Link>
        </div>

        {/* 1. Título inicial provocativo */}
        <section className="py-12 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="container-wide text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Você tem certeza que seus vendedores falam regularmente com todos os seus clientes?
            </h1>
          </div>
        </section>

        {/* 2. Identificação visual clara da dor */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
                  Sem clareza sobre como seus vendedores cuidam dos clientes, você perde dinheiro todos os dias.
                </p>
                
                {/* Dashboard simulado */}
                <Card className="border-2 border-red-200 bg-red-50/50">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center">
                      <AlertTriangle className="h-6 w-6 mr-2" />
                      Situação Atual da Carteira
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-red-100 rounded-lg">
                        <span className="font-medium text-red-800">Clientes sem contato há mais de 30 dias</span>
                        <span className="font-bold text-red-900 text-xl">47%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-100 rounded-lg">
                        <span className="font-medium text-orange-800">Vendedores sem atividade recente</span>
                        <span className="font-bold text-orange-900 text-xl">23%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-100 rounded-lg">
                        <span className="font-medium text-yellow-800">Dados desatualizados</span>
                        <span className="font-bold text-yellow-900 text-xl">31%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/f6aab51a-8e0d-479c-a816-84642f9f736a.png" 
                  alt="Dashboard mostrando clientes negligenciados" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Introdução gradual e sequencial do agente */}
        <section className="py-16 bg-blue-50">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              
              {/* O que é */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  O que é o Agente de Cobertura de Carteira?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  É uma solução automatizada, baseada em Inteligência Artificial, que identifica automaticamente quais clientes estão sendo negligenciados pelos seus vendedores, garantindo visibilidade total e imediata da qualidade do atendimento da carteira.
                </p>
              </div>

              {/* Como funciona */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Como o Agente garante que nenhum cliente fique esquecido?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <p className="text-gray-700">
                        Analisa conversas comerciais pelo WhatsApp diariamente
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <p className="text-gray-700">
                        Identifica automaticamente clientes sem contato recente
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                      <p className="text-gray-700">
                        Aponta claramente quais vendedores estão cuidando adequadamente ou negligenciando clientes
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Personalização */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Personalização completa para sua empresa:
                </h3>
                <p className="text-lg text-gray-700">
                  Periodicidade adaptada ao ciclo médio de compra do seu cliente (semanal, quinzenal ou mensal).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Exemplificação visual prática e realista */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Dashboard ilustrativo prático:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <Users className="h-6 w-6 mr-2" />
                    Carteira de Clientes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Veja claramente quantos clientes cada vendedor possui e identifique rapidamente quais clientes estão sem vendedor atribuído ou inativos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <CardTitle className="text-blue-700 flex items-center">
                    <BarChart3 className="h-6 w-6 mr-2" />
                    Cobertura Real da Carteira
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Descubra exatamente o percentual de clientes cobertos pelos vendedores e veja imediatamente quem precisa de atenção urgente.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-200 bg-orange-50/50">
                <CardHeader>
                  <CardTitle className="text-orange-700 flex items-center">
                    <Phone className="h-6 w-6 mr-2" />
                    Dados Desatualizados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Tenha clareza imediata sobre números de telefone que não correspondem aos dados cadastrados no seu sistema ou planilhas, permitindo atualizações rápidas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-purple-50/50">
                <CardHeader>
                  <CardTitle className="text-purple-700 flex items-center">
                    <TrendingUp className="h-6 w-6 mr-2" />
                    Proatividade vs. Reatividade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Veja claramente se sua equipe está sendo ativa (procurando clientes) ou passiva (esperando contatos), podendo agir imediatamente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 5. Resultados concretos e validados */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Resultados concretos e validados
              </h2>
              
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-16 w-16 text-green-500" />
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                    "Agora conseguimos ver claramente quem precisa de ajuda ou ajustes imediatos. Reduzimos perdas de clientes ativos em mais de 40%, aumentando nosso faturamento recorrente já nos primeiros meses."
                  </blockquote>
                  <cite className="text-gray-900 font-semibold">
                    – Luiz Almeida, Diretor Comercial, Fera Atacado.
                  </cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 6. CTA claro e objetivo para ação imediata */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Não espere perder mais clientes! Saiba agora como sua equipe está cuidando dos seus clientes.
            </h2>
            
            <Button 
              asChild
              className="bg-white text-blue-600 hover:bg-gray-100 text-xl font-bold py-6 px-12 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/contato">
                Solicitar Análise Gratuita da Minha Carteira
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgenteCoberturaCarteira;
