import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const TestimonialsBeforeAfter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'José Augusto',
      title: 'Proprietário',
      image: '/lovable-uploads/95795439-a827-4e8f-a89b-d46d144416af.png',
      quote: 'Perdíamos vendas diariamente sem saber onde estava o problema, pois não conseguíamos monitorar o tempo de resposta ou a satisfação dos clientes. Agora, com tudo centralizado, temos controle total.'
    },
    {
      id: 2,
      name: 'Fernanda Soares',
      title: 'Gerente de Vendas',
      image: '/lovable-uploads/9e958dd2-2833-4c7a-9aba-5b297553a69c.png',
      quote: 'Com tantos canais diferentes, os clientes ficavam frustrados com a demora ou desencontro de informações. Desde que centralizamos tudo, nossa reputação melhorou significativamente.'
    },
    {
      id: 3,
      name: 'Carlos Menezes',
      title: 'Diretor de Vendas',
      image: '/lovable-uploads/b71df23b-0034-42e3-8793-96ce555c36dd.png',
      quote: 'Já aconteceu mais de uma vez, o vendedor sair da empresa e levar ou apagar os contatos. Recuperar esses clientes foi demorado e caro. Hoje temos controle total sobre as conversas e históricos.'
    }
  ];

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const extractBeforeAfter = (quote: string) => {
    // Identifica onde começa a solução baseado em palavras-chave
    const solutionKeywords = ['agora', 'hoje', 'desde que', 'com', 'após'];
    let splitIndex = -1;
    
    for (const keyword of solutionKeywords) {
      const index = quote.toLowerCase().indexOf(keyword);
      if (index !== -1) {
        // Encontra o início da frase que contém a palavra-chave
        let sentenceStart = quote.lastIndexOf('.', index);
        if (sentenceStart === -1) sentenceStart = quote.lastIndexOf(',', index);
        if (sentenceStart === -1) sentenceStart = 0;
        else sentenceStart += 1;
        
        splitIndex = sentenceStart;
        break;
      }
    }
    
    if (splitIndex === -1) {
      // Se não encontrar palavras-chave, divide no meio
      splitIndex = Math.floor(quote.length / 2);
      // Ajusta para o final da frase mais próxima
      const nearestEnd = quote.indexOf('.', splitIndex);
      if (nearestEnd !== -1 && nearestEnd < quote.length - 20) {
        splitIndex = nearestEnd + 1;
      }
    }
    
    const before = quote.substring(0, splitIndex).trim();
    const after = quote.substring(splitIndex).trim();
    
    return { before, after };
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              "Nossa, isso acontece comigo todos os dias!"
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Veja como nossos clientes superaram os mesmos desafios que você enfrenta hoje.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Container principal do depoimento */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 border border-blue-100 shadow-xl">
              <Quote className="absolute top-6 right-6 h-16 w-16 text-blue-200 opacity-60" />
              
              <div className="relative">
                {testimonials.map((testimonial, index) => {
                  const { before, after } = extractBeforeAfter(testimonial.quote);
                  
                  return (
                    <div
                      key={testimonial.id}
                      className={cn(
                        "transition-all duration-500 absolute top-0 left-0 w-full",
                        index === activeIndex 
                          ? "opacity-100 translate-x-0" 
                          : index < activeIndex 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      )}
                      style={{ position: index === activeIndex ? 'relative' : 'absolute' }}
                    >
                      <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Foto e dados pessoais */}
                        <div className="flex-shrink-0 text-center lg:text-left">
                          <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                            />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                          <p className="text-blue-600 font-medium">{testimonial.title}</p>
                        </div>
                        
                        {/* Depoimento dividido em ANTES/DEPOIS */}
                        <div className="flex-1 space-y-6">
                          {/* ANTES */}
                          <div className="p-6 bg-red-50 rounded-2xl border-l-4 border-red-400">
                            <div className="flex items-center mb-3">
                              <div className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                                ANTES
                              </div>
                            </div>
                            <p className="text-gray-800 leading-relaxed">
                              "{before}"
                            </p>
                          </div>
                          
                          {/* DEPOIS */}
                          <div className="p-6 bg-green-50 rounded-2xl border-l-4 border-green-400">
                            <div className="flex items-center mb-3">
                              <div className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                                DEPOIS
                              </div>
                            </div>
                            <p className="text-gray-800 leading-relaxed">
                              "{after}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Controles de navegação */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-md"
                disabled={isAnimating}
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>

              {/* Indicadores */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (isAnimating || index === activeIndex) return;
                      setIsAnimating(true);
                      setActiveIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === activeIndex ? "bg-blue-600 w-8" : "bg-gray-300"
                    )}
                    disabled={isAnimating}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-md"
                disabled={isAnimating}
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Você não precisa passar por isso
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Elimine esses problemas hoje mesmo com IAgo Conversas
            </p>
            <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Quero Resolver Esses Problemas Agora
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsBeforeAfter;
