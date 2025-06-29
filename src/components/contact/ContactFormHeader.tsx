
import React from 'react';
import { Sparkles } from 'lucide-react';

interface ContactFormHeaderProps {
  completedFields: number;
}

const ContactFormHeader: React.FC<ContactFormHeaderProps> = ({ completedFields }) => {
  return (
    <div className="text-center lg:text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-2">
        <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-pulse" />
        <span className="text-xs font-medium text-blue-700">
          {completedFields}/6 campos preenchidos
        </span>
      </div>
      
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Vamos começar sua automação comercial?
      </h2>
      <p className="text-sm text-gray-600 mb-2">
        Converse com nossos especialistas e descubra como nossos agentes inteligentes podem acelerar sua operação.
      </p>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(completedFields / 6) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ContactFormHeader;
