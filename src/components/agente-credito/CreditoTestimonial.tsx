
import React from 'react';
import { Star, User } from 'lucide-react';

const CreditoTestimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Comprovados</span>
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
          
          <div className="relative z-10">
            {/* Stars */}
            <div className="flex justify-center mb-6 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
              "Nosso tempo de aprovação caiu de 3 dias para <strong className="text-green-600">4 minutos</strong>. 
              A inadimplência reduziu 67% e nossos clientes ficaram muito mais satisfeitos com a agilidade. 
              O investimento se pagou em 2 meses."
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 text-lg">Carlos Mendes</p>
                <p className="text-gray-600">Diretor Financeiro</p>
                <p className="text-green-600 font-medium">Distribuidora Regional SP</p>
              </div>
            </div>

            {/* Results highlight */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">92%</p>
                <p className="text-sm text-gray-600">Redução no tempo</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">67%</p>
                <p className="text-sm text-gray-600">Menos inadimplência</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="text-2xl font-bold text-green-600">2 meses</p>
                <p className="text-sm text-gray-600">ROI alcançado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditoTestimonial;
