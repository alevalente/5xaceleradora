
import React from 'react';
import { Clock, TrendingUp, CheckCircle, Shield } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const ResultsMetrics = () => {
  const impactMetrics = [
    {
      percentage: "58%",
      description: "de redução no Tempo Médio de Atendimento (TMA) após 30 dias de uso",
      icon: <Clock className="h-12 w-12" />
    },
    {
      percentage: "2,4×",
      description: "mais oportunidades registradas no CRM quando o cadastro é automático",
      icon: <TrendingUp className="h-12 w-12" />
    },
    {
      percentage: "+34%",
      description: "de taxa de conversão em leads respondidos em < 2 min",
      icon: <CheckCircle className="h-12 w-12" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">

          {/* Bloco Indicadores de Impacto */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de sucesso de nossos clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dados consolidados de projetos implementados em 2024-2025 mostram o impacto real 
              do IAgo Conversas no desempenho comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center p-8 bg-white border-2 border-blue-100 hover:border-blue-300 transition-all duration-300" hoverEffect={true}>
                <CardContent className="p-0">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                    {metric.percentage}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bloco Reconhecimento & Confiabilidade */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Tecnologia confiável, resultados garantidos
            </h3>

            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="flex items-center gap-2 text-green-600">
                <Shield className="h-5 w-5" />
                <span className="font-medium">LGPD Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">ISO 27001</span>
              </div>
            </div>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Por trás do IAgo Conversas há a expertise de <strong>5X Aceleradora</strong>, 
              reconhecida por acelerar +50 empresas com IA em 2024-2025.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsMetrics;
