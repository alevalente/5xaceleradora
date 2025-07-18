import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import ContactFormLayout from '../contact/ContactFormLayout';
import ContactFormHeader from '../contact/ContactFormHeader';
import ContactFormField from '../contact/ContactFormField';
import ContactFormSubmitSection from '../contact/ContactFormSubmitSection';
import { type FormData } from '../contact/ContactFormTypes';
import { useState, FormEvent, useEffect } from 'react';
import { User, Mail, Building, Globe, Phone, MessageSquare, TrendingDown, AlertTriangle, Eye, Crown, Sparkles, ArrowRight } from 'lucide-react';
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const handleSubmit = (e: FormEvent) => {
    if (!formData.consent) {
      e.preventDefault();
      toast.error("Por favor, aceite os termos de consentimento para continuar.");
      return;
    }
    
    setIsSubmitting(true);
    // Permitir que o Netlify processe o formulário nativamente
  };

  return (
    <section id="contact-iago" className="py-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-5xl mx-auto">
          {/* Header compacto - fora do grid */}
          <div className="text-center mb-8">
            <h3 className="text-lg md:text-xl font-bold text-white mb-3">
              Descubra como o IAgo pode melhorar a satisfação de seus clientes
            </h3>
            <p className="text-sm text-blue-100 mb-4">
              Converse com nossos especialistas e veja como analisar e melhorar cada interação da sua equipe.
            </p>
          </div>

          {/* Grid com os dois cards alinhados */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Side - Form Content */}
            <div className="lg:col-span-8">

              {/* Form */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4">
                <form 
                  name="formulario-iago-conversas" 
                  method="POST" 
                  data-netlify="true" 
                  netlify-honeypot="bot-field"
                  action="/obrigado"
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
                  
                  <div className="space-y-2">
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.consent}
                      className={`w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2.5 px-5 rounded-xl transition-all duration-300 flex items-center justify-center group ${
                        (isSubmitting || !formData.consent) 
                          ? "opacity-70 cursor-not-allowed" 
                          : "hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Quero monitorar meu time comercial
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Right Side - Benefits card alinhado perfeitamente */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full flex flex-col justify-center">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Você realmente sabe o que acontece nas suas conversas comerciais?
                </h4>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-start">
                    <TrendingDown className="h-5 w-5 text-white mt-0.5 mr-3 flex-shrink-0 animate-bounce" />
                    <span className="text-sm leading-relaxed">Descubra onde seus vendedores realmente perdem vendas – todos os dias.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-white mt-0.5 mr-3 flex-shrink-0 animate-pulse" />
                    <span className="text-sm leading-relaxed">Pare de se enganar: ninguém preenche CRM do jeito que deveria.</span>
                  </li>
                  <li className="flex items-start">
                    <Eye className="h-5 w-5 text-white mt-0.5 mr-3 flex-shrink-0 animate-pulse" />
                    <span className="text-sm leading-relaxed">Deixe a IA te mostrar o que o seu ouvido nunca captou.</span>
                  </li>
                  <li className="flex items-start">
                    <Crown className="h-5 w-5 text-white mt-0.5 mr-3 flex-shrink-0 animate-bounce" />
                    <span className="text-sm leading-relaxed">Saia do achismo e assuma o controle total das conversas com clientes.</span>
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
