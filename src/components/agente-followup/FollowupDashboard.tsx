
import React from 'react';
import { TrendingUp, Users, DollarSign, Clock, MessageCircle, Target, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const FollowupDashboard = () => {
  const kpis = [
    {
      title: "Oportunidades Recuperadas",
      value: "124 vendas",
      subtitle: "Este mês",
      icon: <CheckCircle2 className="h-6 w-6" />,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/60",
      shadowColor: "shadow-green-500/20",
      trend: "+47% vs sem follow-up"
    },
    {
      title: "Faturamento Adicional",
      value: "R$ 485.600",
      subtitle: "Recuperado",
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/60",
      shadowColor: "shadow-blue-500/20",
      trend: "300% ROI em 90 dias"
    },
    {
      title: "Tempo de Resposta Médio",
      value: "2.3 horas",
      subtitle: "Follow-up automático",
      icon: <Clock className="h-6 w-6" />,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/60",
      shadowColor: "shadow-purple-500/20",
      trend: "24x mais rápido que manual"
    },
    {
      title: "Taxa de Conversão",
      value: "68%",
      subtitle: "Follow-ups efetivos",
      icon: <Target className="h-6 w-6" />,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/60",
      shadowColor: "shadow-orange-500/20",
      trend: "2.8x maior que média"
    }
  ];

  const alerts = [
    {
      type: "urgent",
      title: "3 oportunidades críticas",
      description: "Clientes interessados há mais de 48h sem follow-up",
      icon: <AlertTriangle className="h-5 w-5 text-red-400" />,
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/60"
    },
    {
      type: "hot",
      title: "7 leads quentes identificados",
      description: "Prontos para follow-up personalizado imediato",
      icon: <TrendingUp className="h-5 w-5 text-orange-400" />,
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/60"
    },
    {
      type: "success",
      title: "12 conversões hoje",
      description: "Follow-ups automáticos geraram vendas",
      icon: <CheckCircle2 className="h-5 w-5 text-green-400" />,
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/60"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dashboard de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Performance em Tempo Real</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Acompanhe o impacto direto dos follow-ups automáticos no seu faturamento e na taxa de conversão.
          </p>
        </div>

        {/* KPIs principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, index) => (
            <Card key={index} className={`hover:shadow-2xl transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-2 ${kpi.borderColor} ${kpi.shadowColor} hover:shadow-xl hover:-translate-y-1 ring-1 ring-white/10`}>
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

        {/* Alertas e Notificações */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {alerts.map((alert, index) => (
            <Card key={index} className={`${alert.bgColor} border-2 ${alert.borderColor} hover:shadow-xl transition-all duration-300 backdrop-blur-sm ring-1 ring-white/10`}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {alert.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-2">{alert.title}</h3>
                    <p className="text-gray-300 text-xs">{alert.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Chart Simulation */}
        <Card className="bg-gray-800/50 border-2 border-blue-500/60 shadow-blue-500/30 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm ring-1 ring-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-blue-400" />
              Evolução de Conversões - Últimos 30 dias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">23%</div>
                <div className="text-gray-400 text-sm">Conversão manual</div>
                <div className="text-xs text-gray-500 mt-1">Sem follow-up</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">45%</div>
                <div className="text-gray-400 text-sm">Com follow-up básico</div>
                <div className="text-xs text-gray-500 mt-1">Manual esporádico</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">68%</div>
                <div className="text-gray-400 text-sm">Com IA Follow-up</div>
                <div className="text-xs text-gray-500 mt-1">Automático inteligente</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">+195%</div>
                <div className="text-gray-400 text-sm">Melhoria total</div>
                <div className="text-xs text-gray-500 mt-1">vs manual</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-blue-500/20 text-white px-8 py-4 rounded-full font-medium text-lg border-2 border-green-500/60 shadow-green-500/30 shadow-lg ring-1 ring-green-400/20 backdrop-blur-sm">
            <MessageCircle className="h-6 w-6 mr-3 text-green-400" />
            Integração completa com WhatsApp, E-mail e outros canais
          </div>
        </div>
      </div>
    </section>
  );
};

export default FollowupDashboard;
