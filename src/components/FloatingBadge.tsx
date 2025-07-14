
import { TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingBadge = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight; // Aproximadamente a altura da seção Hero
      
      // Esconde o badge quando sair da primeira seção
      setIsVisible(scrollY < heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 md:top-28 left-4 md:left-8 z-[60] animate-fade-up">
      <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-400/30 text-green-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm">
        <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
        <span className="hidden sm:inline">Venda mais, venda melhor com IA</span>
        <span className="sm:hidden">Venda mais com IA</span>
      </div>
    </div>
  );
};

export default FloatingBadge;
