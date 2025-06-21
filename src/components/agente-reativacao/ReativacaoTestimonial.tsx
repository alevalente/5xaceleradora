
import React from 'react';
import { Star, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const ReativacaoTestimonial = () => {
  return (
    <section className="py-20 bg-gray-800 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Resultados Reais Validados
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Veja como empresas reais transformaram sua carteira de clientes inativos em faturamento recuperado.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-blue-500/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm">
            <CardContent className="p-12">
              {/* Rating */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic">
                  "Nossa carteira de clientes inativos era <strong className="text-white">duas vezes maior</strong> que nossos ativos. 
                  Com esse agente, recuperamos mais de <strong className="text-white">25% dos clientes</strong> que estavam parados, 
                  aumentando em <strong className="text-white">R$ 200 mil nosso faturamento mensal</strong>."
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="font-bold text-white text-lg">Daniel Maia</div>
                    <div className="text-gray-400">Diretor Comercial</div>
                    <div className="text-blue-400 font-medium">Distribuidora Central</div>
                  </div>
                </div>
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700/50">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-4 border border-green-500/30">
                    <Users className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">25%</div>
                  <div className="text-gray-400">Clientes reativados</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4 border border-blue-500/30">
                    <TrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">R$ 200k</div>
                  <div className="text-gray-400">Faturamento mensal recuperado</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-4 border border-purple-500/30">
                    <Star className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">2x</div>
                  <div className="text-gray-400">Proporção inativos/ativos</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoTestimonial;
