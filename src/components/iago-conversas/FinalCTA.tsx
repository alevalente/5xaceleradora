import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import ContactFormLayout from '../contact/ContactFormLayout';
import ContactFormHeader from '../contact/ContactFormHeader';
import ContactFormField from '../contact/ContactFormField';
import ContactFormSubmitSection from '../contact/ContactFormSubmitSection';
import { type FormData } from '../contact/ContactFormTypes';
import { useState, FormEvent, useEffect } from 'react';
import { User, Mail, Building, Globe, Phone, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { Checkbox } from '@/components/ui/checkbox';

const FinalCTA = () => {
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
    
    try {
      const formElement = e.target as HTMLFormElement;
      const formDataToSend = new FormData(formElement);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as any).toString()
      });
      
      if (response.ok) {
        window.location.href = '/obrigado';
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast.error("Erro ao enviar formulário. Tente novamente.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-iago" className="py-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-5xl mx-auto text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Entre em contato conosco
          </h2>
          <p className="text-lg mb-4 text-blue-100">
            Resposta em até 30 minutos
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            {/* Left Side - Form Content */}
            <div className="lg:col-span-8">
              {/* Header compacto */}
              <div className="text-center lg:text-left mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full border border-white/30 mb-2">
                  <MessageSquare className="h-4 w-4 text-white animate-pulse" />
                  <span className="text-xs font-medium text-white">
                    {completedFields}/6 campos preenchidos
                  </span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  Descubra como o IAgo pode revolucionar suas conversas comerciais
                </h3>
                <p className="text-sm text-blue-100 mb-2">
                  Converse com nossos especialistas e veja como analisar e melhorar cada interação da sua equipe.
                </p>
                
                {/* Progress Bar compacto */}
                <div className="w-full bg-white/20 rounded-full h-1.5 mb-3">
                  <div 
                    className="bg-white h-1.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${(completedFields / 6) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4">
                <form 
                  name="formulario-iago-conversas" 
                  method="POST" 
                  data-netlify="true" 
                  netlify-honeypot="bot-field"
                  action="/iago-conversas"
                  onSubmit={handleSubmit} 
                   className="space-y-3"
                >
                  <input type="hidden" name="form-name" value="formulario-iago-conversas" />
                  <input type="text" name="bot-field" hidden />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    label="Conte-nos sobre seu desafio com análise de conversas"
                    name="message"
                    placeholder="Ex: Tenho dificuldade em acompanhar a qualidade das conversas da minha equipe comercial..."
                    isTextarea
                    formData={formData}
                    focusedField={focusedField}
                    onChange={handleChange}
                    onFocus={setFocusedField}
                    onBlur={() => setFocusedField(null)}
                  />

                  {/* Consent Checkbox */}
                  <div className="flex items-start space-x-2 p-3 bg-blue-50/80 rounded-lg border border-blue-200">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={handleConsentChange}
                      required
                      className="mt-0.5"
                    />
                    <label htmlFor="consent" className="text-xs text-gray-700 leading-relaxed">
                      Autorizo que a 5X Aceleradora entre em contato comigo por telefone, incluindo chamadas automatizadas, gravadas ou utilizando vozes artificiais. Sei que este consentimento não é condição obrigatória para compra.
                    </label>
                  </div>
                  
                  <ContactFormSubmitSection 
                    isSubmitting={isSubmitting} 
                    consentGiven={formData.consent} 
                  />
                </form>
              </div>
            </div>
            
            {/* Right Side - Benefits compactos específicos do IAgo */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 h-fit">
                <h4 className="text-base font-semibold text-white mb-2">
                  O que você vai descobrir:
                </h4>
                <ul className="space-y-1.5 text-blue-100">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span className="text-xs">Como identificar automaticamente oportunidades perdidas nas conversas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span className="text-xs">Análise detalhada do desempenho de cada vendedor</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span className="text-xs">Follow-ups automáticos personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span className="text-xs">Dashboard estratégico para gestão comercial</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
