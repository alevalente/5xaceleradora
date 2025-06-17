
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const FinalCTA = () => {
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                    Nome completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                    E-mail corporativo
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu.email@empresa.com"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700 mb-2 block">
                  WhatsApp
                </Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
              >
                Solicitar Demonstração Gratuita
              </Button>
            </form>

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
