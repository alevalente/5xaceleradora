import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  MessageCircle,
  Send,
  Instagram,
  Phone,
  Zap,
  Clock,
  Share2,
  BarChart,
  CheckCircle
} from 'lucide-react';
import plataformaImg from '../assets/plataforma.png';

// Página detalhando a plataforma multi atendimento Iago
const PlatformDetail = () => {
  const navigate = useNavigate();

  // Lista das funcionalidades principais exibidas em cards
  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: 'Centralização de Canais',
      description:
        'Gerencie WhatsApp, Telegram, Instagram e SMS em um único painel intuitivo.'
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Automação Inteligente',
      description:
        'Fluxos automáticos agilizam o atendimento e reduzem tarefas manuais.'
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: 'Histórico de Conversas',
      description:
        'Acompanhe todas as interações anteriores para um atendimento personalizado.'
    },
    {
      icon: <Share2 className="h-8 w-8 text-white" />,
      title: 'Distribuição Automática',
      description:
        'Direcione cada conversa para o atendente correto de forma automática.'
    },
    {
      icon: <BarChart className="h-8 w-8 text-white" />,
      title: 'Relatórios e Métricas',
      description:
        'Dashboards completos permitem decisões baseadas em dados em tempo real.'
    }
  ];

  // Vantagens gerais listadas em bullets
  const advantages = [
    'Aumento de produtividade do time de atendimento',
    'Experiência do cliente padronizada e ágil',
    'Visão completa de todas as interações em um só lugar',
    'Escalabilidade para novos canais e usuários',
    'Integração com os Agentes de IA da 5x Aceleradora'
  ];

  // Ícones para evidenciar os canais suportados
  const channels = [
    { icon: <MessageCircle className="h-6 w-6" />, name: 'WhatsApp' },
    { icon: <Send className="h-6 w-6" />, name: 'Telegram' },
    { icon: <Instagram className="h-6 w-6" />, name: 'Instagram' },
    { icon: <Phone className="h-6 w-6" />, name: 'SMS' }
  ];

  // Estado do formulário de contato
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Aqui faríamos o envio real dos dados para uma API ou serviço externo
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0a3a8a] to-[#3c70d9] text-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container-wide">
          {/* Botão para voltar à página inicial */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>

          {/* Cabeçalho com título, descrição e imagem */}
          <div className="glass-card p-8 mb-10 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
              Iago — Plataforma Multi-Atendimento
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Centralize todos os contatos da sua empresa e ofereça um atendimento
              unificado e eficiente em diversos canais.
            </p>
            <img
              src={plataformaImg}
              alt="Interface da plataforma Iago"
              className="mx-auto rounded-lg shadow-lg w-full max-w-3xl"
            />
          </div>

          {/* Seção de funcionalidades principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 flex flex-col items-center text-center"
              >
                <div className="bg-blue-900/30 p-4 rounded-full mb-6 border border-blue-800/30">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Canais suportados */}
          <div className="glass-card p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Canais de Atendimento</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {channels.map((channel, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-blue-900/30 p-4 rounded-full mb-2 border border-blue-800/30">
                    {channel.icon}
                  </div>
                  <span className="text-white/80">{channel.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lista de vantagens */}
          <div className="glass-card p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gradient text-center">Vantagens para sua Empresa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((adv, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80">{adv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold mb-6 text-gradient text-center">Fale com nossa equipe</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-[#3c70d9] focus:border-[#3c70d9]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-[#3c70d9] focus:border-[#3c70d9]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-[#3c70d9] focus:border-[#3c70d9]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-[#3c70d9] focus:border-[#3c70d9]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-[#3c70d9] focus:border-[#3c70d9]"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary inline-flex items-center justify-center"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlatformDetail;
