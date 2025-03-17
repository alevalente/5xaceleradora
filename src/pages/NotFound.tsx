
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 animate-float">
          <div className="text-9xl font-display font-bold text-blue-600">404</div>
        </div>
        <h1 className="heading-lg mb-4 animate-fade-up">Página não encontrada</h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-up delay-200">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/" className="button-primary inline-flex items-center animate-fade-up delay-300">
          <ArrowLeft className="mr-2 h-5 w-5" /> Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
