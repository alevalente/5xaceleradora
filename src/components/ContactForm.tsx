
import { useState, FormEvent } from 'react';
import { Send, Clock, TrendingUp, Headset } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Por favor, aceite os termos de consentimento para continuar.");
      return;
    }
    
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
      website: '',
      phone: '',
      message: '',
      consent: false
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
                Solicite agora sua análise gratuita com nosso especialista.
              </p>
              
              <form 
                name="formulario-contato" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="formulario-contato" />
                
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
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                      Site da Empresa
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="www.suaempresa.com.br"
                    />
                  </div>
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
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Descreva rapidamente sua maior dificuldade ou objetivo comercial.
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

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={handleConsentChange}
                    required
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                    Autorizo que a 5X Aceleradora entre em contato comigo por telefone, incluindo chamadas automatizadas, gravadas ou utilizando vozes artificiais. Sei que este consentimento não é condição obrigatória para compra.
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className={cn(
                      "w-full button-primary flex items-center justify-center",
                      (isSubmitting || !formData.consent) && "opacity-70 cursor-not-allowed"
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
            <h2 className="heading-lg mb-6">Vamos começar sua automação comercial?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Converse com nossos especialistas e descubra como nossos agentes inteligentes podem acelerar e automatizar sua operação comercial em poucos dias.
            </p>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="text-xl font-bold">Implementação rápida</h4>
                </div>
                <p className="text-gray-600">
                  Seu agente inteligente funcionando em até 15 dias, com resultados imediatos na operação.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="text-xl font-bold">Resultados mensuráveis</h4>
                </div>
                <p className="text-gray-600">
                  Em média, nossos clientes aumentam suas vendas em 35% após ativar nossos agentes de IA.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <Headset className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="text-xl font-bold">Suporte contínuo</h4>
                </div>
                <p className="text-gray-600">
                  Você terá suporte dedicado e contínuo para garantir o máximo desempenho dos seus agentes.
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
