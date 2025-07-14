
import { useState, FormEvent, useEffect } from 'react';
import { User, Mail, Building, Globe, Phone, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { Checkbox } from '@/components/ui/checkbox';
import ContactFormLayout from './contact/ContactFormLayout';
import ContactFormHeader from './contact/ContactFormHeader';
import ContactFormField from './contact/ContactFormField';
import ContactFormSubmitSection from './contact/ContactFormSubmitSection';
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

  const handleSubmit = (e: FormEvent) => {
    if (!formData.consent) {
      e.preventDefault();
      toast.error("Por favor, aceite os termos de consentimento para continuar.");
      return;
    }
    
    setIsSubmitting(true);
    // Form will be submitted naturally to Netlify after validation
  };

  return (
    <ContactFormLayout>
      <ContactFormHeader completedFields={completedFields} />

      {/* Form */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4 lg:p-5">
        <form 
          name="formulario-contato" 
          method="POST" 
          data-netlify="true" 
          netlify-honeypot="bot-field"
          action="/obrigado"
          onSubmit={handleSubmit} 
          className="space-y-3"
        >
          <input type="hidden" name="form-name" value="formulario-contato" />
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

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-2 p-2.5 bg-blue-50/50 rounded-lg border border-blue-100">
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
    </ContactFormLayout>
  );
};

export default ContactForm;
