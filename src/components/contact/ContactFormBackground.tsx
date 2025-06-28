
import React from 'react';
import { cn } from '@/lib/utils';

const FloatingElement = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <div 
    className={cn("absolute rounded-full opacity-20 animate-float", className)}
    style={{ animationDelay: `${delay}ms` }}
  />
);

const ContactFormBackground = () => {
  return (
    <>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <FloatingElement className="w-20 h-20 bg-blue-400 top-10 left-10" delay={0} />
      <FloatingElement className="w-12 h-12 bg-purple-400 top-32 right-20" delay={1000} />
      <FloatingElement className="w-16 h-16 bg-pink-400 bottom-20 left-1/4" delay={2000} />
      <FloatingElement className="w-8 h-8 bg-yellow-400 bottom-40 right-10" delay={1500} />
    </>
  );
};

export default ContactFormBackground;
