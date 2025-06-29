
import React from 'react';
import ContactFormBackground from './ContactFormBackground';
import ContactFormBenefits from './ContactFormBenefits';

interface ContactFormLayoutProps {
  children: React.ReactNode;
}

const ContactFormLayout: React.FC<ContactFormLayoutProps> = ({ children }) => {
  return (
    <section id="contact" className="py-6 lg:py-8 relative overflow-hidden">
      <ContactFormBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 items-start">
          {/* Left Side - Form Content (3/5 proportion) */}
          <div className="order-2 lg:order-1 lg:col-span-3 space-y-3">
            {children}
          </div>
          
          {/* Right Side - Benefits (2/5 proportion) */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <ContactFormBenefits />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormLayout;
