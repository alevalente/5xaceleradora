
import React from 'react';
import { cn } from '@/lib/utils';

const FloatingElement = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <div 
    className={cn("absolute rounded-full opacity-10 animate-float", className)}
    style={{ animationDelay: `${delay}ms` }}
  />
);

const ContactFormBackground = () => {
  return (
    <>
      {/* Floating Elements - elementos flutuantes sutis apenas */}
      <FloatingElement className="w-20 h-20 bg-blue-200 top-10 left-10" delay={0} />
      <FloatingElement className="w-12 h-12 bg-purple-200 top-32 right-20" delay={1000} />
      <FloatingElement className="w-16 h-16 bg-pink-200 bottom-20 left-1/4" delay={2000} />
      <FloatingElement className="w-8 h-8 bg-yellow-200 bottom-40 right-10" delay={1500} />
    </>
  );
};

export default ContactFormBackground;
