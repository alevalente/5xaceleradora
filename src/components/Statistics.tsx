
import { useEffect } from 'react';
import { Target, Clock, TrendingUp, Users } from 'lucide-react';
import { createObserver } from '../utils/animations';

const Statistics = () => {
  useEffect(() => {
    const observer = createObserver('animate-slide-in', 0.1);
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { 
      id: 1, 
      icon: <TrendingUp className="h-10 w-10 text-blue-500" />, 
      value: '67%', 
      label: 'Crescimento anual do mercado de IA no Brasil',
      animation: 'animate-slide-left',
      highlight: true,
      badge: 'CRESCIMENTO'
    },
    { 
      id: 2, 
      icon: <Users className="h-10 w-10 text-green-500" />, 
      value: '85%', 
      label: 'Das empresas brasileiras planejam investir em IA nos próximos 2 anos',
      animation: 'animate-slide-left delay-200',
      highlight: false,
      badge: 'MERCADO'
    },
    { 
      id: 3, 
      icon: <Target className="h-10 w-10 text-purple-500" />, 
      value: '40%', 
      label: 'Aumento médio de produtividade com automação de IA',
      animation: 'animate-slide-right delay-300',
      highlight: true,
      badge: 'PRODUTIVIDADE'
    },
    { 
      id: 4, 
      icon: <TrendingUp className="h-10 w-10 text-orange-500" />, 
      value: '300%', 
      label: 'ROI médio em projetos de IA comercial no primeiro ano',
      animation: 'animate-slide-right delay-400',
      highlight: true,
      badge: 'ROI'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="container-improved relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
            📊 Dados do Mercado
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-gray-900">
            O Mercado de IA Comercial em Números
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Veja como a inteligência artificial está transformando o cenário comercial brasileiro e mundial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 mb-16">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`group relative overflow-hidden ${stat.animation} 
                bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-white/20 
                hover:bg-white/90 hover:shadow-2xl hover:shadow-blue-500/10
                transition-all duration-500 hover:-translate-y-2
                ${stat.highlight ? 'ring-2 ring-blue-500/20' : ''}
              `}
            >
              {/* Highlight badge */}
              {stat.highlight && (
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2 py-1 text-xs font-bold text-blue-700 bg-blue-100 rounded-full">
                    {stat.badge}
                  </span>
                </div>
              )}

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:scale-110 transition-transform duration-300 animate-pulse-soft">
                  {stat.icon}
                </div>
                
                <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                
                <p className="text-gray-700 font-medium leading-relaxed">
                  {stat.label}
                </p>

                {/* Subtle bottom border animation */}
                <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-600 mb-8">
            Quer fazer parte dessa transformação digital?
          </p>
          <button 
            onClick={handleCTAClick}
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Fale com um Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
