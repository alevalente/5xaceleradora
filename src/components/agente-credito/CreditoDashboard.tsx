
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const CreditoDashboard = () => {
  const approvalData = [
    { name: 'Jan', aprovadas: 45, rejeitadas: 8 },
    { name: 'Fev', aprovadas: 52, rejeitadas: 12 },
    { name: 'Mar', aprovadas: 38, rejeitadas: 6 },
    { name: 'Abr', aprovadas: 61, rejeitadas: 9 },
    { name: 'Mai', aprovadas: 58, rejeitadas: 7 },
    { name: 'Jun', aprovadas: 67, rejeitadas: 11 }
  ];

  const riskData = [
    { name: 'Baixo Risco', value: 65, color: '#10B981' },
    { name: 'Médio Risco', value: 25, color: '#F59E0B' },
    { name: 'Alto Risco', value: 10, color: '#EF4444' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dashboard de <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Análise de Crédito</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acompanhe em tempo real todas as análises de crédito, métricas de aprovação e indicadores de risco
          </p>
        </div>

        {/* Métricas principais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Tempo Médio</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">4 min</p>
            <p className="text-sm text-gray-600 mt-1">↓ 92% vs manual</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Taxa de Aprovação</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">86%</p>
            <p className="text-sm text-gray-600 mt-1">↑ 12% vs período anterior</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Análises Hoje</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">47</p>
            <p className="text-sm text-gray-600 mt-1">↑ 23% vs ontem</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Inadimplência</h3>
            <p className="text-3xl font-bold text-orange-600 mt-2">2.1%</p>
            <p className="text-sm text-gray-600 mt-1">↓ 67% vs histórico</p>
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Aprovações vs Rejeições</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={approvalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="aprovadas" fill="#10B981" name="Aprovadas" />
                <Bar dataKey="rejeitadas" fill="#EF4444" name="Rejeitadas" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição de Risco</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditoDashboard;
