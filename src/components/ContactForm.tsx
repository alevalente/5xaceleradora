import { useState, FormEvent, useEffect } from 'react';
import { Send, Sparkles, ArrowRight, User, Mail, Building, Globe, Phone, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { Checkbox } from '@/components/ui/checkbox';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import ContactFormBackground from './contact/ContactFormBackground';
import ContactFormField from './contact/ContactFormField';
import ContactFormBenefits from './contact/ContactFormBenefits';
import { FormData } from './contact/ContactFormTypes';

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedFields, setCompletedFields] = useState(0);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Calculate progress
  useEffect(() => {
    const fields = ['name', 'email', 'company', 'website', 'phone', 'message'];
    const completed = fields.filter(field => formData[field as keyof FormData]).length;
    setCompletedFields(completed);
  }, [formData]);

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
    <section id="contact" className="py-16 relative overflow-hidden">
      <ContactFormBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Side - Form Content (3/5 proportion) */}
          <div className="order-2 lg:order-1 lg:col-span-3 space-y-6">
            {/* Progress Header */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-4">
                <Sparkles className="h-4 w-4 text-blue-600 animate-pulse" />
                <span className="text-sm font-medium text-blue-700">
                  {completedFields}/6 campos preenchidos
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vamos começar sua automação comercial?
              </h2>
              <p className="text-base text-gray-600 mb-4">
                Converse com nossos especialistas e descubra como nossos agentes inteligentes podem acelerar sua operação.
              </p>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(completedFields / 6) * 100}%` }}
                />
              </div>
            </div>

            {/* Enhanced Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-6 lg:p-8">
              <form 
                name="formulario-contato" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="formulario-contato" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <ContactFormField
                    icon={User}
                    label="Nome completo"
                    name="name"
                    placeholder="Seu nome"
                    required
                    formData={formData}
                    focusedField={focusedField}
                    onChange={handleChange}
                    onFocus={setFocusedField}
                    onBlur={() => setFocusedField(null)}
                  />
                  <ContactFormField
                    icon={Mail}
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="seu.email@empresa.com"
                    required
                    formData={formData}
                    focusedField={focusedField}
                    onChange={handleChange}
                    onFocus={setFocusedField}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <ContactFormField
                    icon={Building}
                    label="Empresa"
                    name="company"
                    placeholder="Nome da empresa"
                    required
                    formData={formData}
                    focusedField={focusedField}
                    onChange={handleChange}
                    onFocus={setFocusedField}
                    onBlur={() => setFocusedField(null)}
                  />
                  <ContactFormField
                    icon={Globe}
                    label="Site da Empresa"
                    name="website"
                    type="url"
                    placeholder="www.suaempresa.com.br"
                    required
                    formData={formData}
                    focusedField={focusedField}
                    onChange={handleChange}
                    onFocus={setFocusedField}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                
                <ContactFormField
                  icon={Phone}
                  label="Telefone"
                  name="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  required
                  formData={formData}
                  focusedField={focusedField}
                  onChange={handleChange}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField(null)}
                />
                
                <ContactFormField
                  icon={MessageSquare}
                  label="Descreva rapidamente sua maior dificuldade ou objetivo comercial"
                  name="message"
                  placeholder="Conte-nos mais sobre seu desafio comercial..."
                  isTextarea
                  formData={formData}
                  focusedField={focusedField}
                  onChange={handleChange}
                  onFocus={setFocusedField}
                  onBlur={() => setFocusedField(null)}
                />

                {/* Enhanced Consent Checkbox */}
                <div className="flex items-start space-x-3 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
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
                
                {/* Enhanced Submit Button */}
                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className={`w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center group ${
                      (isSubmitting || !formData.consent) 
                        ? "opacity-70 cursor-not-allowed" 
                        : "hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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
                        <Sparkles className="mr-2 h-5 w-5" />
                        Solicitar Análise Gratuita
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {/* WhatsApp Alternative */}
                  <div className="text-center">
                    <p className="text-gray-500 text-sm mb-3">Ou se preferir:</p>
                    <a 
                      href="https://wa.me/5519994435314?text=Olá! Gostaria de conversar sobre os agentes inteligentes da 5X" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      <WhatsAppIcon className="mr-2 h-5 w-5" />
                      Falar pelo WhatsApp agora
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Right Side - Benefits (2/5 proportion) - Now properly aligned */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <ContactFormBenefits />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
