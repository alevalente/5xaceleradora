
import { useState, FormEvent, useEffect } from 'react';
import { Send, Clock, TrendingUp, Headset, User, Mail, Building, Globe, Phone, MessageSquare, Sparkles, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

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
  const [completedFields, setCompletedFields] = useState(0);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Calculate progress
  useEffect(() => {
    const fields = ['name', 'email', 'company', 'website', 'phone', 'message'];
    const completed = fields.filter(field => formData[field as keyof typeof formData]).length;
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

  const InputField = ({ 
    icon: Icon, 
    label, 
    name, 
    type = "text", 
    placeholder, 
    required = false,
    isTextarea = false 
  }: {
    icon: any;
    label: string;
    name: string;
    type?: string;
    placeholder: string;
    required?: boolean;
    isTextarea?: boolean;
  }) => {
    const isFocused = focusedField === name;
    const hasValue = formData[name as keyof typeof formData];
    
    return (
      <div className="relative group">
        <label className={cn(
          "flex items-center text-sm font-medium mb-2 transition-colors duration-200",
          isFocused ? "text-blue-600" : "text-gray-700"
        )}>
          <Icon className={cn(
            "h-4 w-4 mr-2 transition-colors duration-200",
            isFocused ? "text-blue-600" : hasValue ? "text-green-500" : "text-gray-400"
          )} />
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative">
          {isTextarea ? (
            <textarea
              name={name}
              value={formData[name as keyof typeof formData] as string}
              onChange={handleChange}
              onFocus={() => setFocusedField(name)}
              onBlur={() => setFocusedField(null)}
              required={required}
              rows={4}
              className={cn(
                "w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none",
                isFocused 
                  ? "border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-100/50 transform scale-[1.02]" 
                  : hasValue 
                    ? "border-green-300 bg-green-50/30" 
                    : "border-gray-200 hover:border-gray-300 bg-white"
              )}
              placeholder={placeholder}
            />
          ) : (
            <input
              type={type}
              name={name}
              value={formData[name as keyof typeof formData] as string}
              onChange={handleChange}
              onFocus={() => setFocusedField(name)}
              onBlur={() => setFocusedField(null)}
              required={required}
              className={cn(
                "w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none",
                isFocused 
                  ? "border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-100/50 transform scale-[1.02]" 
                  : hasValue 
                    ? "border-green-300 bg-green-50/30" 
                    : "border-gray-200 hover:border-gray-300 bg-white"
              )}
              placeholder={placeholder}
            />
          )}
          {hasValue && (
            <CheckCircle className="absolute right-3 top-3 h-5 w-5 text-green-500 animate-scale-in" />
          )}
        </div>
      </div>
    );
  };

  const FloatingElement = ({ className, delay = 0 }: { className: string; delay?: number }) => (
    <div 
      className={cn("absolute rounded-full opacity-20 animate-float", className)}
      style={{ animationDelay: `${delay}ms` }}
    />
  );

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <FloatingElement className="w-20 h-20 bg-blue-400 top-10 left-10" delay={0} />
      <FloatingElement className="w-12 h-12 bg-purple-400 top-32 right-20" delay={1000} />
      <FloatingElement className="w-16 h-16 bg-pink-400 bottom-20 left-1/4" delay={2000} />
      <FloatingElement className="w-8 h-8 bg-yellow-400 bottom-40 right-10" delay={1500} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Side - Form Content (3/5 proportion) */}
          <div className="order-2 lg:order-1 lg:col-span-3 space-y-5">
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
              <div className="w-full bg-gray-200 rounded-full h-2 mb-5">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(completedFields / 6) * 100}%` }}
                />
              </div>
            </div>

            {/* Enhanced Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-6 lg:p-7">
              <form 
                name="formulario-contato" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="formulario-contato" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    icon={User}
                    label="Nome completo"
                    name="name"
                    placeholder="Seu nome"
                    required
                  />
                  <InputField
                    icon={Mail}
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="seu.email@empresa.com"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    icon={Building}
                    label="Empresa"
                    name="company"
                    placeholder="Nome da empresa"
                    required
                  />
                  <InputField
                    icon={Globe}
                    label="Site da Empresa"
                    name="website"
                    type="url"
                    placeholder="www.suaempresa.com.br"
                    required
                  />
                </div>
                
                <InputField
                  icon={Phone}
                  label="Telefone"
                  name="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  required
                />
                
                <InputField
                  icon={MessageSquare}
                  label="Descreva rapidamente sua maior dificuldade ou objetivo comercial"
                  name="message"
                  placeholder="Conte-nos mais sobre seu desafio comercial..."
                  isTextarea
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
                    className={cn(
                      "w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center group",
                      (isSubmitting || !formData.consent) 
                        ? "opacity-70 cursor-not-allowed" 
                        : "hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
                    )}
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
          
          {/* Right Side - Benefits (2/5 proportion) */}
          <div className="order-1 lg:order-2 lg:col-span-2 space-y-5">
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Por que escolher nossos agentes?
              </h3>
              <p className="text-base text-gray-600 mb-5">
                Resultados comprovados e implementação rápida.
              </p>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: Clock,
                  title: "21 dias",
                  description: "Implementação rápida com resultados imediatos",
                  color: "blue"
                },
                {
                  icon: TrendingUp,
                  title: "+35%",
                  description: "Aumento médio nas vendas dos nossos clientes",
                  color: "green"
                },
                {
                  icon: Headset,
                  title: "Suporte contínuo",
                  description: "Acompanhamento dedicado para máximo desempenho",
                  color: "purple"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-white/30 hover:bg-white/90 transition-all duration-300 hover:shadow-lg"
                >
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
                    benefit.color === 'blue' && "bg-blue-100 text-blue-600",
                    benefit.color === 'green' && "bg-green-100 text-green-600",
                    benefit.color === 'purple' && "bg-purple-100 text-purple-600"
                  )}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-gray-900 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-5 text-white">
              <div className="flex items-center justify-between text-center">
                <div className="flex-1">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-sm font-medium">4.9/5 estrelas</p>
                  <p className="text-xs text-blue-200">50+ clientes</p>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-center mb-2">
                    <Zap className="h-4 w-4 text-yellow-400" />
                  </div>
                  <p className="text-sm font-medium">Resposta rápida</p>
                  <p className="text-xs text-blue-200">Em até 30 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
