
import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useToast } from '../ui/use-toast';
import emailjs from '@emailjs/browser';
import { Textarea } from '../ui/textarea';

// Schema de validação
const formSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string()
    .email('Email inválido')
    .refine(email => {
      const corporateExtensions = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'];
      const domain = email.split('@')[1];
      return !corporateExtensions.includes(domain);
    }, 'Use um email corporativo'),
  whatsapp: z.string()
    .min(14, 'WhatsApp deve ter formato (11) 99999-9999')
    .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Formato inválido'),
  company: z.string().min(2, 'Nome da empresa é obrigatório'),
  role: z.string().min(2, 'Cargo é obrigatório'),
  teamSize: z.string().min(1, 'Selecione o tamanho da equipe'),
  challenge: z.string().min(10, 'Descreva brevemente seu principal desafio'),
});

type FormData = z.infer<typeof formSchema>;

const FinalCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsapp: '',
      company: '',
      role: '',
      teamSize: '',
      challenge: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Enviando formulário:', data);

    try {
      // Configuração do EmailJS
      const templateParams = {
        to_name: 'Equipe 5X Aceleradora',
        from_name: data.name,
        from_email: data.email,
        company: data.company,
        role: data.role,
        whatsapp: data.whatsapp,
        team_size: data.teamSize,
        challenge: data.challenge,
        product: 'IAgo Conversas',
        timestamp: new Date().toLocaleString('pt-BR'),
      };

      // Enviar email via EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Você precisará configurar isso
        'YOUR_TEMPLATE_ID', // Você precisará configurar isso
        templateParams,
        'YOUR_PUBLIC_KEY' // Você precisará configurar isso
      );

      setIsSuccess(true);
      toast({
        title: "Demonstração solicitada com sucesso!",
        description: "Entraremos em contato em até 30 minutos.",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        form.reset();
      }, 3000);

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar solicitação",
        description: "Tente novamente ou use o WhatsApp abaixo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 text-gray-900 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Demonstração solicitada com sucesso!
              </h3>
              <p className="text-gray-600 mb-6">
                Recebemos sua solicitação e entraremos em contato em até 30 minutos 
                para agendar sua demonstração personalizada.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  📧 Enviamos um email de confirmação para <strong>{form.getValues('email')}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solicitar demonstração gratuita agora
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Sem cartão de crédito. Resposta em até 30 min.
          </p>

          <div className="bg-white rounded-2xl p-8 text-gray-900 max-w-2xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail corporativo</FormLabel>
                        <FormControl>
                          <Input placeholder="seu.email@empresa.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(11) 99999-9999" 
                            {...field}
                            onChange={(e) => {
                              let value = e.target.value.replace(/\D/g, '');
                              if (value.length <= 11) {
                                value = value.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
                              }
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa</FormLabel>
                        <FormControl>
                          <Input placeholder="Nome da empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cargo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu cargo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tamanho da equipe</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Selecione...</option>
                            <option value="1-5">1-5 pessoas</option>
                            <option value="6-20">6-20 pessoas</option>
                            <option value="21-50">21-50 pessoas</option>
                            <option value="51-100">51-100 pessoas</option>
                            <option value="100+">Mais de 100 pessoas</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="challenge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Principal desafio atual</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva brevemente seu principal desafio com leads e vendas..."
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Solicitar Demonstração Gratuita
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Ou se preferir:</p>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                asChild
              >
                <a 
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de conhecer o IAgo Conversas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar pelo WhatsApp agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
