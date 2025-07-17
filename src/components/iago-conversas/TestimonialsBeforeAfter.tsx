
import React from 'react';
import { Quote, ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../ui/button';

const TestimonialsBeforeAfter = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-iago');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const testimonials = [
    {
      name: "Carlos Mendes",
      company: "Distribuidora Alpha",
      role: "Diretor Comercial",
      before: {
        problem: "Perdia 30% das oportunidades por falta de acompanhamento das conversas",
        icon: XCircle,
        color: "text-red-500"
      },
      after: {
        result: "Aumentou 45% nas vendas com follow-ups automáticos personalizados",
        icon: CheckCircle,
        color: "text-green-500"
      }
    },
    {
      name: "Ana Silva",
      company: "TechSoft Solutions",
      role: "Gerente de Vendas",
      before: {
        problem: "Gastava 4 horas por dia analisando conversas da equipe manualmente",
        icon: XCircle,
        color: "text-red-500"
      },
      after: {
        result: "Economiza 90% do tempo com análises automáticas e dashboards inteligentes",
        icon: CheckCircle,
        color: "text-green-500"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Resultados Reais de Quem Já Usa o IAgo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como empresas transformaram completamente sua gestão comercial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Quote className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                </div>
              </div>

              {/* Antes */}
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <testimonial.before.icon className={`h-5 w-5 ${testimonial.before.color} mr-3 mt-0.5 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Antes do IAgo:</h4>
                    <p className="text-gray-600">{testimonial.before.problem}</p>
                  </div>
                </div>
              </div>

              {/* Depois */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-start">
                  <testimonial.after.icon className={`h-5 w-5 ${testimonial.after.color} mr-3 mt-0.5 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Depois do IAgo:</h4>
                    <p className="text-gray-600 font-medium">{testimonial.after.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Central */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pare de perder oportunidades por falta de acompanhamento
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Descubra como o IAgo pode transformar sua gestão comercial hoje mesmo
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold inline-flex items-center"
            >
              Quero Resolver Esses Problemas Agora
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBeforeAfter;
