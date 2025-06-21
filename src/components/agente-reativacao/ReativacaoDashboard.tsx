
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
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/60",
      shadowColor: "shadow-blue-500/20",
      glowColor: "hover:shadow-blue-500/40",
      trend: "+15% vs mês anterior"
    },
    {
      title: "Faturamento Recuperado",
      value: "R$ 237.500",
      subtitle: "Este mês",
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/60",
      shadowColor: "shadow-green-500/20",
      glowColor: "hover:shadow-green-500/40",
      trend: "+32% vs mês anterior"
    },
    {
      title: "Tempo Médio até Reativação",
      value: "22 dias",
      subtitle: "Tempo médio",
      icon: <Clock className="h-6 w-6" />,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/60",
      shadowColor: "shadow-orange-500/20",
      glowColor: "hover:shadow-orange-500/40",
      trend: "-8 dias vs manual"
    },
    {
      title: "Taxa de Resposta Automática",
      value: "58%",
      subtitle: "Média geral",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/60",
      shadowColor: "shadow-purple-500/20",
      glowColor: "hover:shadow-purple-500/40",
      trend: "3x maior que e-mail tradicional"
    }
  ];

  const channelStats = [
    {
      channel: "WhatsApp",
      icon: <MessageCircle className="h-8 w-8 text-green-400" />,
      responseRate: "87%",
      reactivated: "52 clientes",
      avgTime: "18 dias",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/60",
      shadowColor: "shadow-green-500/30",
      glowColor: "hover:shadow-green-500/50"
    },
    {
      channel: "E-mail",
      icon: <Mail className="h-8 w-8 text-purple-400" />,
      responseRate: "63%",
      reactivated: "35 clientes",
      avgTime: "26 dias",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/60",
      shadowColor: "shadow-purple-500/30",
      glowColor: "hover:shadow-purple-500/50"
    }
  ];

  return (
    <section className="py-20 bg-gray-800 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Dashboard Visual - KPIs Específicos
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Acompanhe em tempo real o desempenho da reativação automática e o impacto direto no seu faturamento.
          </p>
        </div>

        {/* KPIs principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, index) => (
            <Card key={index} className={`hover:shadow-2xl transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-2 ${kpi.borderColor} ${kpi.shadowColor} hover:shadow-xl ${kpi.glowColor} hover:-translate-y-1 ring-1 ring-white/10`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${kpi.bgColor} border-2 ${kpi.borderColor} ring-1 ring-white/20`}>
                    <div className={kpi.color}>
                      {kpi.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{kpi.value}</div>
                    <div className="text-sm text-gray-400">{kpi.subtitle}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-sm">{kpi.title}</h3>
                  <div className="text-xs text-green-400 font-medium">{kpi.trend}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparação de canais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {channelStats.map((channel, index) => (
            <Card key={index} className={`border-3 ${channel.borderColor} ${channel.shadowColor} hover:shadow-2xl ${channel.glowColor} transition-all duration-300 bg-gray-800/50 backdrop-blur-sm hover:-translate-y-2 ring-2 ring-white/10`}>
              <CardHeader className={`${channel.bgColor} rounded-t-lg border-b-2 ${channel.borderColor}`}>
                <CardTitle className="flex items-center gap-3">
                  {channel.icon}
                  <span className="text-xl font-bold text-white">{channel.channel}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{channel.responseRate}</div>
                    <div className="text-sm text-gray-400">Taxa de resposta</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{channel.reactivated}</div>
                    <div className="text-sm text-gray-400">Reativados</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">{channel.avgTime}</div>
                    <div className="text-sm text-gray-400">Tempo médio</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-blue-500/20 text-blue-400 px-8 py-4 rounded-full font-medium text-lg border-2 border-blue-500/60 shadow-blue-500/30 shadow-lg ring-1 ring-blue-400/20">
            <TrendingUp className="h-6 w-6 mr-3" />
            Combinação WhatsApp + E-mail aumenta em 40% a taxa de reativação
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReativacaoDashboard;
