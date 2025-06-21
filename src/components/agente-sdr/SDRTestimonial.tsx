
import React from 'react';
import { Star, User } from 'lucide-react';

const SDRTestimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Extraordinários</span>
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-100 to-red-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
          
          <div className="relative z-10">
            {/* Stars */}
            <div className="flex justify-center mb-6 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              "Nosso tempo de resposta caiu para <strong className="text-orange-600">2 segundos</strong> e a taxa de conversão 
              triplicou. Agora atendemos leads 24/7 e nossa equipe foca apenas em oportunidades reais. 
              O resultado foi <strong className="text-orange-600">300% mais vendas</strong> em 4 meses."
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-lg">Marina Oliveira</p>
                <p className="text-gray-600">Diretora Comercial</p>
                <p className="text-orange-600 font-medium">TechSolutions B2B</p>
              </div>
            </div>

            {/* Results highlight */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="text-2xl font-bold text-orange-600">300%</p>
                <p className="text-sm text-gray-600">Mais vendas</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="text-2xl font-bold text-orange-600">2s</p>
                <p className="text-sm text-gray-600">Tempo de resposta</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="text-2xl font-bold text-orange-600">24/7</p>
                <p className="text-sm text-gray-600">Atendimento ativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDRTestimonial;
