
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-400/20 rounded-full backdrop-blur-sm mb-8">
            <CheckCircle2 className="h-5 w-5 mr-2 text-green-400" />
            <span className="text-green-300 font-mono">Resultados Validados</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-8">
            Resultados concretos e validados
          </h2>
          
          <Card className="bg-gray-800/70 border-gray-600/50 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="h-20 w-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-400/30">
                  <CheckCircle2 className="h-10 w-10 text-green-400" />
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-300 italic mb-6 leading-relaxed">
                "Agora acompanhamos exatamente como nossos vendedores abordam os clientes e quais erros estavam matando nossas vendas. 
                Aumentamos nossa taxa de conversão em <span className="text-green-400 font-bold not-italic">35%</span> em menos de 90 dias."
              </blockquote>
              <cite className="text-white font-semibold">
                – João Carlos, Diretor Comercial, Distribuidora Premium.
              </cite>
              
              {/* Tech metrics */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-600">
                <div className="text-center">
                  <div className="text-3xl font-bold font-mono text-green-400">35%</div>
                  <div className="text-sm text-gray-400">aumento de conversões</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-mono text-blue-400">90</div>
                  <div className="text-sm text-gray-400">dias para ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold font-mono text-purple-400">24/7</div>
                  <div className="text-sm text-gray-400">monitoramento</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
