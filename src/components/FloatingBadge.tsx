
import { TrendingUp } from 'lucide-react';

const FloatingBadge = () => {
  return (
    <div className="fixed top-20 right-4 md:right-8 z-[60] animate-fade-up">
      <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-400/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
        <TrendingUp className="h-4 w-4" />
        Venda mais, venda melhor com IA
      </div>
    </div>
  );
};

export default FloatingBadge;
