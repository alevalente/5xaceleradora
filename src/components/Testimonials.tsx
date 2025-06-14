import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { images } from '../assets/images';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Rafael Cânovas',
      company: 'Cânovas Bebedouros',
      image: images.testimonial1,
      quote: "Antes, éramos reféns de vendas sazonais. Hoje, além de crescer quase 35%, conquistamos um faturamento linear."
    },
    {
      id: 2,
      name: 'Gilmar Mendes',
      company: 'Dinâmica Alimentos',
      image: images.testimonial2,
      quote: "Nossa empresa cresceu cerca de 60% em relação ao ano passado, o que demonstra o poder do investimento no IEV."
    },
    {
      id: 3,
      name: 'Fernanda Sartori',
      company: 'MSTECH',
      image: images.testimonial3,
      quote: "Eu tinha uma expectativa alta, porque conheço o IEV. Mas posso dizer que ela foi superada."
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
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">O que nossos clientes dizem</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Veja como as soluções da 5x Aceleradora transformaram os resultados de nossos clientes.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Botões de navegação posicionados nas laterais */}
          <button 
            onClick={prev}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-gray-200 shadow-subtle hover:shadow-hover transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          
          <button 
            onClick={next}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-gray-200 shadow-subtle hover:shadow-hover transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>

          <div className="relative overflow-hidden rounded-2xl bg-white shadow-glass py-12 px-8 md:px-12">
            <Quote className="absolute top-6 left-6 h-16 w-16 text-blue-100 opacity-60" />
            
            <div className="relative">
              {testimonials.map((testimonial, index) => (
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
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="mb-8 md:mb-0 md:mr-10 relative">
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-xl md:text-2xl text-gray-800 italic mb-6 relative z-10">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls mantidos na parte inferior */}
          <div className="flex justify-center mt-10 space-x-4">
            <div className="flex space-x-2 items-center">
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
                    index === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
