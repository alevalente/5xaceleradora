
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { images } from '../assets/images';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState('');
  const location = useLocation();

  // Always use white logo since we're making the navbar blue
  const logoSrc = images.logoWhite;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdown = (id: string) => {
    if (dropdownOpen === id) {
      setDropdownOpen('');
    } else {
      setDropdownOpen(id);
    }
  };

  const navItems = [
    { id: 'home', label: 'Início', href: '/' },
    { 
      id: 'solutions', 
      label: 'Soluções', 
      href: '#solutions',
      dropdown: [
        { label: 'IAgo Conversas', href: '/iago-conversas' },
        { label: 'Agentes de IA', href: '#agents' },
        { label: 'Treinamento em IA', href: '/consulting' },
      ] 
    },
    { id: 'contact', label: 'Contato', href: '#contact' },
  ];

  // Always use white text for the navbar items
  const textColor = "text-white hover:text-white/80";

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        isScrolled 
          ? 'bg-blue-950/95 backdrop-blur-lg shadow-subtle'
          : 'bg-transparent'
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoSrc} alt="5x Aceleradora" className="h-12 w-auto object-contain" loading="lazy" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                {item.dropdown ? (
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleDropdown(item.id)}
                      className={cn("flex items-center px-2 py-2 rounded-md transition-colors", textColor)}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div 
                      className={cn(
                        "absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg transition-all duration-300 transform origin-top-left",
                        dropdownOpen === item.id ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                      )}
                    >
                      <div className="py-2">
                        {item.dropdown.map((subItem, idx) => (
                          <a
                            key={idx}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors font-medium"
                            onClick={() => {
                              setDropdownOpen('');
                              setIsOpen(false);
                            }}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={cn("block px-2 py-2 rounded-md transition-colors", textColor)}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a 
            href="#contact" 
            className="border-white text-white hover:bg-white hover:text-blue-950 button-primary"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-blue-950 z-40 transform transition-transform duration-300 ease-in-out pt-20",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container-wide py-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdown(item.id)}
                      className="flex items-center w-full text-left py-2 text-white hover:text-white/80"
                    >
                      {item.label}
                      <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", dropdownOpen === item.id ? "rotate-180" : "rotate-0")} />
                    </button>
                    <div
                      className={cn(
                        "pl-4 mt-2 space-y-2 transition-all duration-300",
                        dropdownOpen === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                      )}
                    >
                      {item.dropdown.map((subItem, idx) => (
                        <a
                          key={idx}
                          href={subItem.href}
                          className="block py-2 text-white/80 hover:text-white"
                          onClick={() => {
                            setIsOpen(false);
                            setDropdownOpen('');
                          }}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block py-2 text-white hover:text-white/80"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-4">
              <a 
                href="#contact" 
                className="border-white text-white hover:bg-white hover:text-blue-950 button-primary w-full flex justify-center"
                onClick={() => setIsOpen(false)}
              >
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
