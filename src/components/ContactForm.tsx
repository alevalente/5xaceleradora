
import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-subtle border border-gray-100 p-8 lg:p-10 animate-fade-up">
              <h3 className="heading-md mb-6">Fale com um especialista</h3>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato para entender seu negócio e apresentar a melhor solução.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="seu.email@empresa.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Conte-nos mais sobre seu desafio comercial..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full button-primary flex items-center justify-center",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensagem <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="heading-lg mb-6">Pronto para transformar sua área comercial?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Fale com um de nossos especialistas e descubra como podemos aumentar sua performance comercial em até 5x com nossas soluções de IA personalizadas.
            </p>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-3">Implementação rápida</h4>
                <p className="text-gray-600">
                  Nossas soluções podem ser implementadas em apenas 15 dias úteis, permitindo que você comece a ver resultados rapidamente.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-3">Resultados mensuráveis</h4>
                <p className="text-gray-600">
                  Nossos clientes relatam um aumento médio de 35% em suas vendas após implementar nossas soluções de IA.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-3">Suporte contínuo</h4>
                <p className="text-gray-600">
                  Oferecemos suporte e acompanhamento contínuo para garantir que você obtenha o máximo valor de nossas soluções.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
