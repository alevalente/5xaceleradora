import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Bot, MessageCircle, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Obrigado pelo Contato - 5X Aceleradora"
        description="Recebemos suas informações! Em breve, um dos nossos especialistas entrará em contato com você."
        canonical="/obrigado"
      />
      <Navbar />
      
      <main className="flex-grow">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900">
          {/* Background animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full bg-blue-400/20 filter blur-3xl animate-pulse-soft"></div>
            <div className="absolute top-[60%] right-[15%] w-80 h-80 rounded-full bg-indigo-400/20 filter blur-3xl animate-float animation-delay-500"></div>
            <div className="absolute bottom-[20%] left-[40%] w-72 h-72 rounded-full bg-purple-400/20 filter blur-3xl animate-float animation-delay-1000"></div>
            
            {/* Partículas flutuantes */}
            <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-blue-300 rounded-full animate-float animation-delay-300"></div>
            <div className="absolute top-[50%] right-[30%] w-3 h-3 bg-indigo-300 rounded-full animate-float animation-delay-700"></div>
            <div className="absolute bottom-[40%] left-[60%] w-2 h-2 bg-purple-300 rounded-full animate-float animation-delay-200"></div>
          </div>

          {/* Grid pattern sutil */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>

          {/* Main content */}
          <div className="container-wide relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16 items-center min-h-[80vh]">
              
              {/* Coluna principal - conteúdo */}
              <div className="lg:col-span-6 text-center lg:text-left pt-20 lg:pt-0">
                
                {/* Ícone de sucesso */}
                <div className="flex justify-center lg:justify-start mb-6 animate-scale-in">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400/30">
                    <CheckCircle className="h-10 w-10 text-green-400" />
                  </div>
                </div>
                
                {/* Título principal */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-up delay-200 text-white leading-tight">
                  Recebemos suas<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 animate-pulse-soft">
                    informações!
                  </span>
                </h1>
                
                {/* Mensagem complementar */}
                <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-up delay-300 font-light">
                  Em breve, um dos nossos especialistas entrará em contato com você. Obrigado pela confiança!
                </p>
                
                {/* Botão CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-400 mb-6">
                  <Link 
                    to="/" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
                  >
                    Voltar para página inicial
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>

                {/* Informação adicional */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-blue-200 animate-fade-up delay-500">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    <span className="text-sm">Entraremos em contato em até 24 horas úteis</span>
                  </div>
                </div>
              </div>

              {/* Coluna lateral - cartões flutuantes visíveis a partir de lg breakpoint */}
              <div className="lg:col-span-4 relative hidden lg:block">
                
                {/* Área de contenção para os cartões flutuantes */}
                <div className="relative w-full h-[500px] lg:h-[600px] xl:h-[700px] overflow-visible">
                  
                  {/* Cards flutuantes com posicionamento corrigido */}
                  
                  {/* Card 1 - Sucesso */}
                  <div className="absolute top-20 lg:top-32 right-8 lg:right-12 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 lg:p-4 animate-float animation-delay-300 shadow-lg">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <CheckCircle className="h-6 w-6 lg:h-8 lg:w-8 text-green-300" />
                      <div>
                        <p className="text-white font-bold text-sm lg:text-lg">Recebido</p>
                        <p className="text-blue-200 text-xs lg:text-sm">Com Sucesso</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Contato */}
                  <div className="absolute bottom-24 lg:bottom-32 right-4 lg:right-8 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 lg:p-4 animate-float animation-delay-500 shadow-lg">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <MessageCircle className="h-6 w-6 lg:h-8 lg:w-8 text-purple-300" />
                      <div>
                        <p className="text-white font-bold text-sm lg:text-lg">Contato</p>
                        <p className="text-blue-200 text-xs lg:text-sm">Em Breve</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 - Especialistas */}
                  <div className="absolute top-32 lg:top-48 left-0 lg:left-0 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 lg:p-4 animate-float animation-delay-700 shadow-lg">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-blue-300" />
                      <div>
                        <p className="text-white font-bold text-sm lg:text-lg">Especialistas</p>
                        <p className="text-blue-200 text-xs lg:text-sm">Qualificados</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 - IA */}
                  <div className="absolute bottom-24 lg:bottom-32 left-8 lg:left-12 z-30 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 lg:p-4 animate-float animation-delay-800 shadow-lg">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <Bot className="h-6 w-6 lg:h-8 lg:w-8 text-cyan-300" />
                      <div>
                        <p className="text-white font-bold text-sm lg:text-lg">Soluções IA</p>
                        <p className="text-blue-200 text-xs lg:text-sm">Personalizadas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Efeito de luz de fundo */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;