
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Configurações do EmailJS - você precisará substituir pelos seus valores
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx', // Substitua pelo seu Service ID
  TEMPLATE_ID: 'template_xxxxxxx', // Substitua pelo seu Template ID
  PUBLIC_KEY: 'xxxxxxxxxxxxxxx', // Substitua pela sua Public Key
};

export const useEmailJS = () => {
  useEffect(() => {
    // Inicializar EmailJS
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const sendEmail = async (templateParams: Record<string, any>) => {
    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      return response;
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      throw error;
    }
  };

  return { sendEmail };
};
