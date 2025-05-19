import React from 'react';
import styles from './plataforma-multi-atendimento.module.css';
import plataformaImg from '../assets/plataforma.png';

// Icons as SVG components for each channel
const WhatsappIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.05 2 11.13c0 1.92.56 3.79 1.63 5.43L2 22l5.59-1.51A10.5 10.5 0 0012 20.26c5.52 0 10-4.47 10-10S17.52 2 12 2z" fill="#25D366"/>
    <path d="M17.47 14.37c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.3-.73.93-.9 1.12-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.42-.86-.76-1.44-1.7-1.61-1.99-.17-.3-.02-.46.13-.61.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.77.36-.26.3-1.02 1-1.02 2.43s1.05 2.82 1.2 3.02c.15.19 2.06 3.15 5 4.42.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34z" fill="#fff"/>
  </svg>
);

const TelegramIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.04 12.96l-.39 5.46c.56 0 .8-.24 1.1-.52l2.64-2.49 5.5 4.02c1 .55 1.75.27 2-.92L22 4.51c.37-1.49-.56-2.07-1.5-1.72L3.6 9.92c-1.45.56-1.44 1.36-.26 1.71l4.95 1.55 11.46-7.2c.54-.32 1.04-.15.63.2L9.04 12.96z" fill="#0088cc"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill="#fff"/>
  </svg>
);

const SmsIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4a2 2 0 00-2 2v14l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" fill="#3c70d9"/>
  </svg>
);

// Main page component
const PlataformaMultiAtendimento: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Title */}
      <h1 className={styles.title}>Iago - Plataforma Multi-Atendimento</h1>

      {/* Description */}
      <p className={styles.description}>
        A plataforma Iago centraliza e automatiza atendimentos em m\u00faltiplos canais, 
        melhorando a efic\u00eancia e a experi\u00eancia do cliente.
      </p>

      {/* Icons representing the supported channels */}
      <div className={styles.channels}>
        <WhatsappIcon />
        <TelegramIcon />
        <InstagramIcon />
        <SmsIcon />
      </div>

      {/* Illustration image - replace the file in src/assets/plataforma.png if needed */}
      <img src={plataformaImg} alt="Plataforma Iago" className={styles.image} />

      {/* Sections for benefits and functionalities */}
      <div className={styles.sections}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Benef\u00edcios</h2>
          <div className={styles.sectionItem}>Automatiza processos e reduz custos</div>
          <div className={styles.sectionItem}>Atendimento r\u00e1pido em diversos canais</div>
          <div className={styles.sectionItem}>Hist\u00f3rico centralizado de conversas</div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Funcionalidades</h2>
          <div className={styles.sectionItem}>Integra\u00e7\u00e3o com WhatsApp, Telegram e mais</div>
          <div className={styles.sectionItem}>Distribui\u00e7\u00e3o autom\u00e1tica de mensagens</div>
          <div className={styles.sectionItem}>Relat\u00f3rios em tempo real</div>
        </div>
      </div>

      {/* Simple contact form - purely visual */}
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" placeholder="Nome" className={styles.input} />
        <input type="email" name="email" placeholder="E-mail" className={styles.input} />
        <input type="text" name="company" placeholder="Empresa" className={styles.input} />
        <input type="tel" name="phone" placeholder="Telefone" className={styles.input} />
        <textarea name="message" placeholder="Mensagem" rows={4} className={`${styles.input} ${styles.textarea}`}></textarea>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

export default PlataformaMultiAtendimento;
