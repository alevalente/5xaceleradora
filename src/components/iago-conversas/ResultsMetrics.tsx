
import React, { useState, useEffect } from 'react';
import { Clock, TrendingUp, CheckCircle, Calculator, Shield } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const ResultsMetrics = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [attendants, setAttendants] = useState('');
  const [estimatedSavings, setEstimatedSavings] = useState(0);

  // Cálculo ROI simples
  useEffect(() => {
    if (monthlyRevenue && attendants) {
      const revenue = parseFloat(monthlyRevenue.replace(/\D/g, ''));
      const attendantCount = parseInt(attendants);
      
      if (revenue > 0 && attendantCount > 0) {
        // Fórmula simplificada: economia baseada em eficiência de atendimento
        const monthlySavings = (revenue * 0.08) + (attendantCount * 2000);
        const annualSavings = monthlySavings * 12;
        setEstimatedSavings(annualSavings);
      }
    }
  }, [monthlyRevenue, attendants]);

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

  const partners = [
    { name: "OpenAI", logo: "🤖" },
    { name: "WhatsApp Business", logo: "💬" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Zapier", logo: "⚡" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">

          {/* Bloco Indicadores de Impacto */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resultados que você pode esperar
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

          {/* Bloco ROI Simples */}
          <div className="bg-white rounded-2xl p-8 mb-16 border border-gray-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Descubra em 10 segundos quanto IAgo Conversas pode adicionar ao seu faturamento
                </h3>
                <p className="text-gray-600">
                  Cálculo baseado em eficiência de atendimento e conversão de leads
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="revenue" className="text-sm font-medium text-gray-700 mb-2 block">
                    Faturamento mensal aproximado (R$)
                  </Label>
                  <Input
                    id="revenue"
                    type="text"
                    placeholder="Ex: 500.000"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div>
                  <Label htmlFor="attendants" className="text-sm font-medium text-gray-700 mb-2 block">
                    Número de atendentes
                  </Label>
                  <Input
                    id="attendants"
                    type="number"
                    placeholder="Ex: 5"
                    value={attendants}
                    onChange={(e) => setAttendants(e.target.value)}
                    className="text-lg"
                  />
                </div>
              </div>

              {estimatedSavings > 0 && (
                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    Economia estimada de R$ {estimatedSavings.toLocaleString('pt-BR')} / ano
                  </div>
                  <p className="text-green-700">
                    Baseado na otimização do tempo de atendimento e aumento na conversão de leads
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bloco Reconhecimento & Confiabilidade */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Tecnologia confiável, resultados garantidos
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <span className="text-2xl">{partner.logo}</span>
                  <span className="font-medium">{partner.name}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-4 mb-6">
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

            <p className="text-sm text-gray-500 mt-4">
              * Média consolidada em 12 projetos-piloto de 2025; resultados podem variar conforme estrutura interna.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsMetrics;
