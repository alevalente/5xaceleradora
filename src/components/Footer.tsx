
import { Mail, Phone, Linkedin, Instagram, Facebook, MapPin, Building2, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';
import { schemaData } from '../data/seoData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoSrc = images.logoWhite;

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData.localBusiness)}
      </script>
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src={logoSrc} alt="5x Aceleradora" className="h-14" loading="lazy" width="120" height="56" />
            </div>
            <p className="text-gray-400 mb-6">
              Especialistas em automatizar processos comerciais com IA personalizada para empresas que buscam vantagem competitiva.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-900/30 rounded-full hover:bg-blue-800/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-900/30 rounded-full hover:bg-blue-800/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-blue-900/30 rounded-full hover:bg-blue-800/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Soluções</h4>
            <ul className="space-y-4">
              <li>
                <a href="#platform" className="text-gray-400 hover:text-white transition-colors">
                  Plataforma de Atendimento
                </a>
              </li>
              <li>
                <a href="#agents" className="text-gray-400 hover:text-white transition-colors">
                  Agentes de IA
                </a>
              </li>
              <li>
                <a href="#consulting" className="text-gray-400 hover:text-white transition-colors">
                  Consultoria e Treinamentos
                </a>
              </li>
              <li>
                <a href="#implementation" className="text-gray-400 hover:text-white transition-colors">
                  Implementação de IA em Vendas
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Links úteis</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                  Termos de uso
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="text-gray-400 space-y-2">
              <div className="font-medium text-white">5X Aceleradora</div>
              <div>Rua Augusto Emílio Zaluar, 59</div>
              <div>Jardim Chapadão</div>
              <div>13070-140 - Campinas/SP</div>
              <div>(19) 9 9443-5313</div>
              <div className="break-words">alexandre.valente@5xaceleradora.com.br</div>
            </div>
          </div>
        </div>
        
        {/* Segunda linha para informações da empresa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12 pt-8 border-t border-gray-800">
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6">Informações da Empresa</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Building2 className="h-5 w-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
                <div className="text-gray-400">
                  <div className="text-sm font-medium text-white mb-1">Razão Social</div>
                  <div>RENATA SIMONE LIMA DE SOUZA VALENTE</div>
                </div>
              </li>
              <li className="flex items-start">
                <FileText className="h-5 w-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
                <div className="text-gray-400">
                  <div className="text-sm font-medium text-white mb-1">CNPJ</div>
                  <div>28.598.755/0001-59</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} 5x Aceleradora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
