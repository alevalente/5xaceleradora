
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src={images.logo} alt="5x Aceleradora" className="h-10 mr-3" />
              <span className="text-xl font-display font-bold">5x Aceleradora</span>
            </div>
            <p className="text-gray-400 mb-6">
              Aumentando a performance comercial de empresas com soluções inteligentes de IA e automação.
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
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-blue-500" />
                <span className="text-gray-400">contato@5xaceleradora.com.br</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-blue-500" />
                <span className="text-gray-400">(11) 99999-9999</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-500" />
                <span className="text-gray-400">
                  São Paulo, SP <br /> 
                  Av. Paulista, 1000 - Bela Vista
                </span>
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
