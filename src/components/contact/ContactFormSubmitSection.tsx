
import React from 'react';
import { Send, Sparkles, ArrowRight } from 'lucide-react';

interface ContactFormSubmitSectionProps {
  isSubmitting: boolean;
  consentGiven: boolean;
}

const ContactFormSubmitSection: React.FC<ContactFormSubmitSectionProps> = ({ 
  isSubmitting, 
  consentGiven 
}) => {
  return (
    <div className="space-y-2">
      <button
        type="submit"
        disabled={isSubmitting || !consentGiven}
        className={`w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2.5 px-5 rounded-xl transition-all duration-300 flex items-center justify-center group ${
          (isSubmitting || !consentGiven) 
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
            Solicitar Consultoria Personalizada
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

    </div>
  );
};

export default ContactFormSubmitSection;
