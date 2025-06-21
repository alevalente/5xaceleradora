
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const SDRDashboard = () => {
  const conversionData = [
    { name: 'Jan', leads: 120, qualificados: 48, convertidos: 16 },
    { name: 'Fev', leads: 145, qualificados: 58, convertidos: 22 },
    { name: 'Mar', leads: 98, qualificados: 42, convertidos: 18 },
    { name: 'Abr', leads: 167, qualificados: 67, convertidos: 28 },
    { name: 'Mai', leads: 189, qualificados: 78, convertidos: 34 },
    { name: 'Jun', leads: 203, qualificados: 89, convertidos: 41 }
  ];

  const responseTimeData = [
    { name: 'Seg', tempo: 2.1 },
    { name: 'Ter', tempo: 1.8 },
    { name: 'Qua', tempo: 2.3 },
    { name: 'Qui', tempo: 1.9 },
    { name: 'Sex', tempo: 2.0 },
    { name: 'Sab', tempo: 1.7 },
    { name: 'Dom', tempo: 1.5 }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dashboard de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Atendimento SDR</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe em tempo real o desempenho do atendimento, qualificação de leads e taxa de conversão
          </p>
        </div>

        {/* Métricas principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Tempo de Resposta</h3>
            <p className="text-3xl font-bold text-orange-600 mt-2">1.8s</p>
            <p className="text-sm text-gray-600 mt-1">↓ 95% vs manual</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Taxa de Qualificação</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">44%</p>
            <p className="text-sm text-gray-600 mt-1">↑ 28% vs período anterior</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Leads Atendidos Hoje</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">73</p>
            <p className="text-sm text-gray-600 mt-1">↑ 156% vs ontem</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Taxa de Conversão</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">34%</p>
            <p className="text-sm text-gray-600 mt-1">↑ 89% vs histórico</p>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Funil de Conversão</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="leads" fill="#3B82F6" name="Leads Recebidos" />
                <Bar dataKey="qualificados" fill="#F59E0B" name="Qualificados" />
                <Bar dataKey="convertidos" fill="#10B981" name="Convertidos" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tempo de Resposta (segundos)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="tempo" stroke="#F97316" strokeWidth={3} dot={{ fill: '#F97316', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDRDashboard;
