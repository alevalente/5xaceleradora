
import React from 'react';
import { TrendingUp, Users, DollarSign, Clock, MessageCircle, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const ReativacaoDashboard = () => {
  const kpis = [
    {
      title: "Clientes Reativados",
      value: "87 clientes",
      subtitle: "25% dos inativos",
      icon: <Users className="h-6 w-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      trend: "+15% vs mês anterior"
    },
    {
      title: "Faturamento Recuperado",
      value: "R$ 237.500",
      subtitle: "Este mês",
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      trend: "+32% vs mês anterior"
    },
    {
      title: "Tempo Médio até Reativação",
      value: "22 dias",
      subtitle: "Tempo médio",
      icon: <Clock className="h-6 w-6" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      trend: "-8 dias vs manual"
    },
    {
      title: "Taxa de Resposta Automática",
      value: "58%",
      subtitle: "Média geral",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      trend: "3x maior que e-mail tradicional"
    }
  ];

  const channelStats = [
    {
      channel: "WhatsApp",
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      responseRate: "87%",
      reactivated: "52 clientes",
      avgTime: "18 dias",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      channel: "E-mail",
      icon: <Mail className="h-8 w-8 text-purple-600" />,
      responseRate: "63%",
      reactivated: "35 clientes",
      avgTime: "26 dias",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Dashboard Visual - KPIs Específicos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Acompanhe em tempo real o desempenho da reativação automática e o impacto direto no seu faturamento.
          </p>
        </div>

        {/* KPIs principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${kpi.bgColor}`}>
                    <div className={kpi.color}>
                      {kpi.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
                    <div className="text-sm text-gray-600">{kpi.subtitle}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{kpi.title}</h3>
                  <div className="text-xs text-green-600 font-medium">{kpi.trend}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparação de canais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {channelStats.map((channel, index) => (
            <Card key={index} className={`${channel.borderColor} border-2 shadow-xl hover:shadow-2xl transition-all duration-300`}>
              <CardHeader className={`${channel.bgColor} rounded-t-lg`}>
                <CardTitle className="flex items-center gap-3">
                  {channel.icon}
                  <span className="text-xl font-bold text-gray-900">{channel.channel}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{channel.responseRate}</div>
                    <div className="text-sm text-gray-600">Taxa de resposta</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{channel.reactivated}</div>
                    <div className="text-sm text-gray-600">Reativados</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{channel.avgTime}</div>
                    <div className="text-sm text-gray-600">Tempo médio</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-blue-50 text-blue-800 px-8 py-4 rounded-full font-medium text-lg">
            <TrendingUp className="h-6 w-6 mr-3" />
            Combinação WhatsApp + E-mail aumenta em 40% a taxa de reativação
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoDashboard;
